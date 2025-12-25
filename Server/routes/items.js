const express = require('express');
const router = express.Router();
const Item = require('../models/Item');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const nodemailer = require('nodemailer');

const upload = multer({ dest: 'uploads/' });

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

// Routes
router.get('/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/items/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).json({ error: 'Item not found' });
        res.json(item);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/items', upload.single('image'), async (req, res) => {
    try {
        let imageUrl = '';
        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path, {
                transformation: [
                    { width: 1000, height: 1000, crop: 'limit' },
                    { quality: 'auto', format: 'auto' }
                ]
            });
            imageUrl = result.secure_url;
        }
        const newItem = new Item({ ...req.body, image: imageUrl });
        await newItem.save();

        // Send response immediately
        res.json(newItem);

        // Handle emails asynchronously
        setImmediate(async () => {
            try {
                console.log('Starting email send process for:', newItem.email);
                
                // Send confirmation email
                const subject = newItem.status === 'lost' ? 'Lost Item Report Received' : 'Found Item Report Received';
                const html = newItem.status === 'lost'
                    ? `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
                        <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                            <h2 style="color: #10b981; margin-bottom: 10px;">Recovery Hub</h2>
                            <p style="color: #374151; line-height: 1.6;">We have received your lost item report for <strong style="color: #059669;">${newItem.title}</strong>. You will be contacted immediately if it is found.</p>
                            <p style="color: #374151; margin-top: 20px;">Thank you for using Recovery Hub!</p>
                        </div>
                       </div>`
                    : `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
                        <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                            <h2 style="color: #10b981; margin-bottom: 10px;">Recovery Hub</h2>
                            <p style="color: #374151; line-height: 1.6;">We have received your found item report for <strong style="color: #059669;">${newItem.title}</strong>. If it matches a lost item, the owner will be contacted.</p>
                            <p style="color: #374151; margin-top: 20px;">Thank you for using Recovery Hub!</p>
                        </div>
                       </div>`;
                
                console.log('Sending email to:', newItem.email);
                const mailResult = await transporter.sendMail({
                    from: 'Recovery Hub <noreply@recoveryhub.com>',
                    to: newItem.email,
                    subject,
                    html
                });
                console.log('Email sent successfully:', mailResult.messageId);

                // Check for match if found
                if (newItem.status === 'found') {
                    console.log('Checking for matches for found item:', newItem.title);
                    const matches = await Item.find({ status: 'lost', title: newItem.title });
                    console.log('Found', matches.length, 'potential matches');
                    
                    for (const match of matches) {
                        console.log('Sending match notification to:', match.email);
                        await transporter.sendMail({
                            from: 'Recovery Hub <noreply@recoveryhub.com>',
                            to: match.email,
                            subject: 'Possible Match for Your Lost Item',
                            html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
                                <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                                    <h2 style="color: #10b981; margin-bottom: 10px;">Recovery Hub</h2>
                                    <p style="color: #374151; line-height: 1.6;">A found item matching your lost <strong style="color: #059669;">${match.title}</strong> has been reported. Details: ${newItem.description}, Location: ${newItem.location}. Please contact us for more information.</p>
                                    <p style="color: #374151; margin-top: 20px;">Thank you for using Recovery Hub!</p>
                                </div>
                               </div>`
                        });
                        console.log('Match notification sent to:', match.email);
                    }
                }
            } catch (emailError) {
                console.error('Email sending failed:', emailError);
            }
        });

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.put('/items/:id', async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/items/:id', async (req, res) => {
    try {
        await Item.findByIdAndDelete(req.params.id);
        res.json({ message: 'Item deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
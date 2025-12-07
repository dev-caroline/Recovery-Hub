import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Report_Item from './pages/Report_Item'
import Dashboard from './pages/Dashboard'
import FoundPage from './pages/FoundPage'
import ItemDetails from './pages/ItemDetails'
import Layout from './layouts/Layout'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
      <Route index element = {<Dashboard/>} />
      <Route path='/found' element = {<FoundPage/>} />
      <Route path='/report_item' element = {<Report_Item/>} />
      <Route path='/item/:id' element = {<ItemDetails/>} />
      </Route>
    </Routes>
  )
}

export default App

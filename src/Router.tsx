import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

//Components =>
import Skeleton from '../src/components/views/Skeleton'
//Image Background =>
import imageSky from './components/util/sky.jpg'
//Pages =>
import PageSpain from './components/pages/PageSpain'
import PageUSA from './components/pages/PageUSA'
import PageForm from './components/pages/PageForm'
import PageVisualData from './components/pages/PageVisualData'
import { Paper } from '@mui/material'


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/page_spain"/>}/>
                <Route path='/page_spain' element={<Skeleton content={<PageSpain/>}/>}></Route>
                <Route path='/page_usa' element={<Skeleton content={<PageUSA/>}/>}></Route>
                <Route path='page_form' element={<Skeleton content={<PageForm/>}/>}></Route>
                <Route path='page_visual' element={<Skeleton content={<PageVisualData/>}/>}></Route>
                <Route path='*' element={<h1>Page not found</h1>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router
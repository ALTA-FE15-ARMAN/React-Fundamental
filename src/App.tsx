import  { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Card from './component/Card'

import Cardmovie from './component/Cardmovie'
import data from "../src/dummy/fashion.json"
import data1 from "../src/dummy/fashion2.json"
import Cardmovie2 from './component/Cardmovie2'
import News from './pages/News'
import Product from './pages/Product'


class App extends Component {
  render() {
    return (
      


      <section className=''>
      <nav>
      <div className=''>
      <Card/> 
      </div> 
      </nav>
  
      <p className='font-bold text-2xl text-center'>Now Playing Movies </p>
      <BrowserRouter>
        <Routes>
          <Route element={<News />} path='/' />
          <Route element={<Product />} path='/Products' />
        </Routes>
      </BrowserRouter>
      <p className=' text-2xl text-center'>LIST FAVORITE MOVIES </p>
      <div className='flex flex-wrap '>
            {
              data1.map((item, index) => {
                return (
                  <div className='mx-auto' >
                    <Cardmovie2
                      key={index}
                      id="fashion"
                      image={item.image}
                      title={item.title}
                    />
                  </div>
                )
              })
            }
          </div>
  
      <p className=' text-2xl text-center'>LIST MOVIES</p>
      <div className='flex flex-wrap '>
            {
              data.map((item, index) => {
                return (
                  <div className='mx-auto' >
                    <Cardmovie
                      key={index}
                      id="fashion"
                      image={item.image}
                      title={item.title}
                      detail={item.detail}
  
                    />
                  </div>
                )
              })
            }
          </div>

  
    </section>
  
  
    
      )
    }
  }


export default App







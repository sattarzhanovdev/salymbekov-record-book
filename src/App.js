import React from 'react'
import MainRoutes from './routes/index';
import './App.scss'
import { Components } from './components';

function App() {
  return (
    <div>
      <header> 
        <Components.Navbar />
      </header>

      <main>
        <div className='logo'>
          <img 
            src='/img/logo without text.png'
            alt='logo'
          />
        </div>
        <MainRoutes />
      </main>
    </div>
  )
}

export default App
import React from 'react'
import c from './main.module.scss'
import { BiSearch } from 'react-icons/bi'

const Main = () => {
  return (
    <div className={c.container}>
      <div className={c.banner}>
        <div className={c.left}>
          <h1>
            Книга рекордов колледжа учебного года <span>2023-2024</span>
          </h1>
          <div className={c.search}>
            <input 
              type="text"
              placeholder='Поиск рекордсмена'
            />
            <button>
              <BiSearch />
            </button>
          </div>
        </div>
        <div className={c.right}>
          <img 
            src="/img/memoji.png" 
            alt="memoji"
          />
        </div>
      </div>
    </div>
  )
}

export default Main
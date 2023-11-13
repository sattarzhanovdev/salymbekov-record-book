import React from 'react'
import c from './recordsmen.module.scss'
import { Components } from '../../components'

const Recordsmen = () => {
  return (
    <div className={c.container}>
      <div className={c.recordsmen}>
        <div className={c.news}>
          <h1>НОВЫЕ РЕКОРДСМЕНЫ</h1>
          <div className={c.recordsmen_cards}>
            <Components.RecordsmenCard />
            <Components.RecordsmenCard />
            <Components.RecordsmenCard />
            <Components.RecordsmenCard />
            <Components.RecordsmenCard />
          </div>
        </div>
        <div className={c.all}>
          <div className={c.title}>
            <h1>РЕКОРДСМЕНЫ</h1> 
            <p>Категория: <span>Все</span></p>
          </div>
          <div className={c.recordsmen_cards}>
            <Components.RecordsmenCard />
            <Components.RecordsmenCard />
            <Components.RecordsmenCard />
            <Components.RecordsmenCard />
            <Components.RecordsmenCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recordsmen
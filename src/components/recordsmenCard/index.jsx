import React from 'react'
import c from './card.module.scss'

const RecordsmenCard = () => {
  return (
    <div className={c.card}>
      <div className={c.image}>
        <img 
          src="https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340" 
          alt="photo"
        />
      </div>
      <div className={c.description}>
        <h2>Саттаржанов Даниел</h2>
        <h3>Категория: <span>Активный</span></h3>
        <button>Подробнее</button>
      </div>
    </div>
  )
}

export default RecordsmenCard
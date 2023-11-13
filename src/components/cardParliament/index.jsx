import React from 'react'
import c from './card.module.scss'

const CardParliament = () => {
  return (
    <div className={c.card}>
      <div className={c.image}>
        <img 
          src="https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340" 
          alt="member"
        />
      </div>
      <div className={c.description}>
        <p>Должность: <span>Вице-Президент</span></p>
        <h3>Саттаржанов Даниел</h3>
      </div>
    </div>
  )
}

export default CardParliament
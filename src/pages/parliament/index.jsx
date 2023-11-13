import React from 'react'
import c from './parliament.module.scss'
import { Components } from '../../components'

const Parliament = () => {
  return (
    <div className={c.container}>
      <div className={c.parliament}>
        <h1>
          ПАРЛАМЕНТ
        </h1>
        <div className={c.members}>
          <Components.CardParliament />
          <Components.CardParliament />
          <Components.CardParliament />
        </div>
      </div>
    </div>
  )
}

export default Parliament
import React from 'react'
import '../assert/home.css'
import Item from '../components/Item'
import Setup from '../components/Setup'

function Home() {
  return (
    <div className="home">
      <Setup />
      <div className="row">
        <div className="col-md-4">
          <Item itemName='Todo'
              itemColor='label label-warning'
              itemMax='settingTodo'
          />
        </div>
        <div className="col-md-4">
          <Item itemName='Doing'
              itemColor='label label-success'
              itemMax='settingDoing'
          />
        </div>
        <div className="col-md-4">
          <Item itemName='Done'
              itemColor='label label-danger'
              itemMax='settingDone'
          />
        </div>
      </div>
    </div>
  )
}

export default Home

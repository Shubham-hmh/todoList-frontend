import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widget/Widget'
import Table from '../../components/table/Table'

import './home.scss'
import { useState } from 'react'
const Home = () => {
 
  const [count,setCount]=useState(0);
  function parentAlert (data){
    console.log(data);
    setCount(data)
  }



  console.log(count);
  return (
    <div className='home'>
      <Sidebar />
      <div className="homecontainer">
        <Navbar />
        {/* <div className="widgets">
          <Widget type="user" />

          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />

        </div> */}

        <div className="charts">
          <Featured name={count} />

          <Chart  />
        </div>

        <div className="listContainer">
          <div className="listTitle">Last Transactions....</div>
          <Table alert={parentAlert} />
          
        </div>

      </div>
    </div>
  )
}

export default Home
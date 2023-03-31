import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Table from '../../components/table/Table'

import './home.scss'
import { useState } from 'react'
const Home = () => {

  const [count, setCount] = useState(0);
  function parentAlert(data) {
    setCount(data)
  }



  console.log(count);
  return (
    <div className='home'>
      <Sidebar />
      <div className="homecontainer">
        <Navbar />

        <div className="charts">
          <Featured name={count} />
          <Chart name={count}  />
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
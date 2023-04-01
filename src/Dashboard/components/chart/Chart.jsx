import "./chart.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer ,BarChart ,Legend, Bar } from 'recharts';
import { useState, useEffect } from "react";
import moment from "moment";


const Chart = () => {


  const [chartData, setChartData] = useState([]);

  const getData = async () => {
    const res = await fetch("https://todolist-api-6olz.onrender.com/api/todo", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      console.log("error ");
    } else {
      setChartData(data);
    }
  }

  useEffect(() => {
    getData();
  }, [])

  const myArr = [];
  const dayCounts = chartData.reduce(function (result, order) {
    var day = moment(order.createdAt).format("YYYY-MM-DD");

    if (!result[day]) {
      result[day] = 0;
    }

    result[day]++;
    return result;
  }, {});

  for (const key in dayCounts) {
    myArr.push({ date: key, count: dayCounts[key] });
  }



  return (

    <>

      <div className="chart d-flex flex-wrap">
        <div className="title">Total todo's per day ...........</div>
        <div>
          <ResponsiveContainer width="100%" aspect={2 / 1}>
            <AreaChart width={730} height={250} data={myArr}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <YAxis />


              <XAxis dataKey="date" stroke="gray" />
              <CartesianGrid strokeDasharray="3 3" className="charGrid" />
              <Tooltip />
              <Area type="monotone" dataKey="count" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div>
     
        </div>




      </div>
    </>
  )
}

export default Chart
import "./widget.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import moment from 'moment';
import { useEffect, useState } from "react";
const Widget = ({ type }) => {
    let data;

    const [chartData, setChartData] = useState([]);
//     const getData = async () => {
//         const res = await fetch("http://localhost:5000/", {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });
//         const data = await res.json();
//         console.log(data);
//         if (res.status === 400 || !data) {
//             console.log("error ");
//         } else {
//             setChartData(data);

//         }
//     }

//     useEffect(() => {
//         getData();
//     }, []);

//     //
//    const dayCounts = chartData.reduce(function (result, order) {
//         var day = moment(order.createdAt).format("YYYY-MM-DD");
//         if (!result[day]) {
//             result[day] = 0;
//         }
//         result[day]++;
//         return result;
//     },{});
    
//     let keys=Object.keys(dayCounts)
//     console.log(keys,"hi");

    let amount = chartData.length;
    let percentage = chartData.length;
    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: (
                    <PersonOutlineOutlinedIcon className="icon" style={{ color: "purple", backgroundColor: "rgba(255,0,0,0.2" }} />
                )
            };
            break;

        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: (
                    <PersonOutlineOutlinedIcon className="icon" style={{ color: "crimson", backgroundColor: "rgba(255,0,0,0.2" }} />
                )
            };
            break;

        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: (
                    <MonetizationOnOutlinedIcon className="icon" style={{ color: "golden", backgroundColor: "rgba(255,0,0,0.2" }} />
                )
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See Details",
                icon: (
                    <AccountBalanceOutlinedIcon className="icon" style={{ color: "green", backgroundColor: "rgba(255,0,0,0.2" }} />
                )
            };
            break;
        default:
            break;


    }
    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"}{amount}</span>
                <span className="link">{data.link}</span>

            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {percentage}%

                </div>
                {/* <PersonOutlineOutlinedIcon className="icon" /> */}
                {data.icon}

            </div>
        </div>
    )
}

export default Widget
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
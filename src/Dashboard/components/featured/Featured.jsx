import "./featured.scss"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import "react-circular-progressbar/dist/styles.css";
const Featured = (props) => {
    console.log(props);
    return (
        <div className="featured">

            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertOutlinedIcon fontSize="small" />
            </div>

            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
                </div>
                <p className="title">Total Todo's in table..... </p>
                <p className="amount">{props.name}</p>
                <p className="desc">Previous Transactions processings.{props.value}</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult negative">
                        <KeyboardArrowDownIcon fontSize="small"/>
                            <div className="resultAmount">$13.4k</div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult positive">
                        <KeyboardArrowDownIcon fontSize="small"/>
                            <div className="resultAmount">$13.4k</div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult positive">
                        <KeyboardArrowDownIcon fontSize="small"/>
                            <div className="resultAmount">$13.4k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
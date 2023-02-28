
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top"><span className="logo">Dashboard...</span></div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className='icon' />
                        <span>Dashboard</span></li>

                    <p className="title">LISTS</p>

                    <li>
                        <PeopleOutlinedIcon className='icon' />
                        <span>Users</span></li>
                    <li>
                        <LocalShippingOutlinedIcon className='icon' />
                        <span>Delivery</span></li>
                    <li>
                        <ProductionQuantityLimitsOutlinedIcon className='icon' />
                        <span>Products</span></li>
                    <li>
                        <LocalMallOutlinedIcon className='icon' />
                        <span>Orders</span></li>

                    <p className="title">USEFUL</p>
                    <li>
                        <NotificationsActiveOutlinedIcon className='icon' />

                        <span>Notifications</span></li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className='icon' />
                        
                        <span>Profile</span></li>

                    <li>
                        <LogoutOutlinedIcon className='icon' />
                        <span>Logout</span></li>

                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}
export default Sidebar;
import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search.....' />
          <SearchOutlinedIcon/>
        </div>
        <div className="items">
          <div className="item">
          <LanguageIcon/>
          English
            
          </div>
          <div className="item">
          <NotificationsActiveIcon/>
          Notification
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
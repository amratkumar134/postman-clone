import './Header.css'
import postman_logo from './assets/postman-logo.png'


const Header = () => {
  return (
    <div className='logo' >
      <img className='postman-logo' src={postman_logo} alt='' />
      <h2>Postman</h2>
    </div>
  )
}

export default Header
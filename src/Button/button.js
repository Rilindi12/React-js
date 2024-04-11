import {Link} from 'react-router-dom'
import './button.css'

export default function Button () {
  return (
    <Link to="/products"><button className='button-container'>More Products</button></Link>
    
  )
}
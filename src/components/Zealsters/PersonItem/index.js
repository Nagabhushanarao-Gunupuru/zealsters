import {Link} from 'react-router-dom'
import './index.css'

const PersonItem = (props)=>{
    const {personsDetails} = props
    const {id,name,imageUrl} = personsDetails


    return(
        <li className='listItemContainer'>
            <Link to = {`/person/${id}`}>
            <img src={imageUrl} alt={name} className='image'/>
            </Link>
        </li>
    )
}

export default PersonItem
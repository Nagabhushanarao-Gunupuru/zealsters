import {useParams,useNavigate } from 'react-router-dom'

import './index.css'

const personsData = [
    {
      id: "1",
      name: "Nagabhushan Gunupuru",
      BirthdayDate: "14-June-1998",
    },

    {
        id: "2",
        name: "Upendra Gunupuru",
        BirthdayDate: "08-october-1999",
      },
  
    
  ];  
const PersonItemDetails = ()=>{

    const navigate = useNavigate()

    const handleNavigate = ()=>{
            navigate('/')
    }
    
    const {id} = useParams()
      const personDetails = personsData.find((person) => person.id === id);
    
      
      if (!personDetails) {
        return <div className="personDetailsContainer">Person not found.</div>;
      }
    
      const { name, BirthdayDate } = personDetails;
    
      return (
        <div className="personDetailsContainer">
          
          <h1 className='personHeading'>Name: <span className='person'>{name}</span></h1>
          <h1 className='personHeading'>BirthDay: <span className='person'>{BirthdayDate}</span></h1>
          <button onClick={handleNavigate} className='button'>Back</button>
        </div>
      );
}

export default PersonItemDetails
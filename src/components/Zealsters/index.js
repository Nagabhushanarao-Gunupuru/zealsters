
import { Component } from "react";

import PersonItem from './PersonItem'

import './index.css'

const personsData = [{
    id:"1",
    
    imageUrl:"https://res.cloudinary.com/dsnbihsqy/image/upload/v1687437166/IMG_20220615_071550_717_li7kbx.png"
},
{
    id:"2",
    name:"Upendra Gunupuru",
   
    imageUrl:"https://res.cloudinary.com/dsnbihsqy/image/upload/v1687437166/IMG_20220615_071550_717_li7kbx.png"
},
{
    id:"1",
    
    imageUrl:"https://res.cloudinary.com/dsnbihsqy/image/upload/v1687437166/IMG_20220615_071550_717_li7kbx.png"
},
{
    id:"1",
    
    imageUrl:"https://res.cloudinary.com/dsnbihsqy/image/upload/v1687437166/IMG_20220615_071550_717_li7kbx.png"
}]

class Zealsters extends Component{

    render(){
        return(
            <div className="zealstersContainer">
                <h1 className="heading">🆉🅴🅰🅻🆂🆃🅴🆁🆂</h1>
                <ul className="listContainer">
                    {personsData.map(each=>(
                        <PersonItem key={each.id} personsDetails = {each}/>
                    ))} 
                </ul>
            </div>
        )
    }
}

export default Zealsters
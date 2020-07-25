import React from 'react'
import logo from "../images/exercise.png"

class Card extends React.Component {
    render(){
        return (
            <div>
                <div>
                    <img src={logo}/>
                </div>
                <div>
                    <h1>Technique Guides</h1>
                    <p>Lorem</p>
                </div>
                
            </div>
            
        )
    }
}

export default Card
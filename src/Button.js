import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) =>{
    const { className, linkTo, name } = props
    return(
        <div className={`${ className }`}>
            <Link to={`${ linkTo }`}><button>{name}</button></Link>
        </div> 
    )
}

export default Button
import React from 'react'
import {connect} from "react-redux"
import {Setusername} from "../actions/username"
const SetUserName=(props)=> {
    return (
        <div>
            <h3>username</h3>
            <input onChange={e=>props.Setusername(e.target.value)}/>
        </div>
    )
}

export default connect(null,{Setusername})(SetUserName)
import React from 'react'

function Alert(props) {
    const toLower = (word) => {
        return word.toLowerCase();
    }
  return (
    <div style={{'height':"50px"}}>
        {props.alert && <div className={`alert alert-${toLower(props.alert.type)} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.type} : </strong> {props.alert.msg}
        </div>}
    </div>
  )
}

export default Alert
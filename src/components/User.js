
import React from 'react'
const User = (props) => {
  return(
  <div>
    <li className="collection-item avatar">
      <img src={require('./test.png')} alt="" className="circle" />
      <span className="title">{props.user.name}</span>
      <p>{props.user.email}</p>
      <p>{props.user.phone}</p>
      <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
    </li>
  </div>

)
}
export default User

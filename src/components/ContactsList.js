import React from 'react'

const ContactsList = () => (
  <div>
    <ul className="collection">
      <li className="collection-item avatar">
        <img src={require('./test.png')} alt="" className="circle" />
        <span className="title">Title</span>
        <p>First Line</p>
        <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
     </li>
   </ul>
  </div>
)
export default ContactsList

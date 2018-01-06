import React from 'react'
import Header from './Header.js'
import ContactsList from './ContactsList'
const Index = () => (
  <div style={styles.container}>
    <Header />
    <ContactsList />
  </div>
)
export default Index

const styles = {

container : {
    width: '70%',
    marginLeft:'auto',
    marginRight:'auto',
    padding:'1em',

}

}

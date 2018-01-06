import React from 'react'

const Header = () => (
  <div style={styles.container}>
    <div>
      <span> contact manager </span>
    </div>
    <div>
      <button>
        add new contact
      </button>
    </div>
  </div>
)
export default Header

const styles = {
  container: {
    display:'flex',
    justifyContent: 'space-between',
  }
}

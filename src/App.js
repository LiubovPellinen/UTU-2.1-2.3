import React from 'react'
import Phonebook from './components/Phonebook'
const App = ({phonebook}) => {
  
    return (
      <div id="phonebook">
         <Phonebook phonebook={phonebook} />
      </div>
    )
  }
  export default App
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import './index.css'

const phonebook = {
  name: 'Superadvanced phonebook app',
  contacts: [
    {
      name: 'John Doe',
      phonenumber: '358401234567',
      id: 1
    },
    {
      name: 'Jane Doe',
      phonenumber: '44551234567',
      id: 2
    },
    {
      name: 'Lara Croft',
      phonenumber: '123456789',
      id: 3
    },
    {
      name: 'James Bond',
      phonenumber: '007',
      id: 4
    }
  ]
}



ReactDOM.render(
  <App phonebook={phonebook} />,
  document.getElementById('root')
)

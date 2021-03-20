import React from 'react'

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}
const Contacts = ({ contacts }) => {
    return (
        <div>
            <table>
                <tbody>
                    {contacts.map(contact => <Entry key={contact.id} contact={contact} />)}
                </tbody>
            </table>
            <h3> Total number of entries:{contacts.reduce((amount) => amount + 1, 0)}</h3>
        </div>
    )
}
const Entry = ({ contact }) => {
    return (
        <tr>
            <td>
                Name: {contact.name}
            </td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>
                Number: {contact.phonenumber}
            </td>
        </tr>
    )
}


const Phonebook = ({ phonebook }) => {
    return (
        <div>
            <Header title={phonebook.name} />
            <Contacts contacts={phonebook.contacts} />

        </div>
    )
}
export default Phonebook
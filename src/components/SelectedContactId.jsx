import { useState, useEffect } from 'react'

function SelectedContact({ selectedContactId, setSelectedContactId }) { 

    const [contacts, setContacts] = useState({})


    useEffect(()=>{
        async function fetchContacts() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const result = await response.json();
                setContacts(result);
                console.log(result);
            } catch (error) {
                console.error(error);
            }
          }
          fetchContacts()
    },[selectedContactId]);

    const button = () => {
        setSelectedContactId(null);
    };

    console.log("look", contacts)

    return ( 
        <div>
            <table>
                <thead>
                    <tr>
                        <th colSpan="3">Contact Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                    </tr>
                    <tr>
                        <td>{contacts.name}</td>
                        <td>{contacts.email}</td>
                        <td>{contacts.phone}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => setSelectedContactId(null)}>Go Back</button>
        </div>
    ); 
}

export default SelectedContact; 
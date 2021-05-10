import React from 'react'

export default function Contact({contact, handleDelete }) {

    return (
        <div>
            <span>{contact.nom}</span>
            <span>{contact.prenom}</span>

            <button onClick={ handleDelete.bind(this,contact.id)}>X</button>
           
        </div>
    );
}

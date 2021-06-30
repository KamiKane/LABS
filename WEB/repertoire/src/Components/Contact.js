import React from 'react'


export default function Contact({contact,handleDelete, handleEditToggle , handleMore}){

    return (
     
      <tr>
        <td>{contact.nom}</td>
        <td>{contact.prenom}</td>
        <td>{contact.tel} </td>

        <td>
        <button type='button' className="btn btn-inline btn-info" 
          // eslint-disable-next-line react/jsx-no-duplicate-props
          type="submit"
          onClick={handleMore.bind(this,contact)}>+</button>
        </td>
        
        <td>
          <button type='button' className="btn btn-inline btn-danger" 
          // eslint-disable-next-line react/jsx-no-duplicate-props
          type="submit"
          onClick={ handleDelete.bind(this,contact.id)}>Delete</button>
        </td>
        <td >
          <button type='button' className="btn btn-inline btn-info" 
          // eslint-disable-next-line react/jsx-no-duplicate-props
          type="submit"
          onClick={handleEditToggle.bind(this, contact.id, contact)}
          >Edit</button>
        </td>
        
          
      </tr>
          
    );
}


import Modal from 'react-bootstrap/Modal'

import Button from 'react-bootstrap/Button'

import React from 'react'

export default function InfoPanel({contact, show, handleInfoClose}) {
    return (

        <div>
             <Modal show={show}>
                <Modal.Header>
                <Modal.Title>{contact.nom} {contact.prenom}</Modal.Title>
                </Modal.Header>
                <Modal.Body> <table>
                    <tr>
                        <td>Tel : {contact.tel}</td>
                    </tr>
                    <tr>
                        <td>Email : {contact.mail}</td>
                    </tr>
                </table>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleInfoClose.bind()}>
                    Close
                </Button>
                
                </Modal.Footer>
            </Modal>
        </div>
    )
}





import React from 'react'

export default function Student({learner, handleDelete}) {
    return (
        <li>
            {learner.nom}
            <button onClick={ handleDelete.bind(this,learner.id)}>X</button>
        </li>
    )
} 
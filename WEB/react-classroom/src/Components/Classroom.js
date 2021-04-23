import React, { Component } from 'react'
import Student from './Student'


export default class Classroom extends Component {
    constructor(props){
        super();
        this.state = {
            students : [
                {id:1, nom:"Fatou Dia"},
                {id:2, nom:"Salioou Diouf"},
                {id:3, nom:"Alain Gomis"}
            ]
        }
    }
    handleDelete(id){
        this.setState(prevState => ({student : prevState.students.filter(student =>student.id !== id)}))
    }
    render() {
        const learners = this.state.students;
        /**
         * Methode 1
         * if (!learners.length){
            return (
                <div>
                    <h1>Liste des Etudiants de {this.props.nom}</h1>
                    <p>Aucun etudiant.</p>
                </div>
            )
        }*/
        return (
            <div>
                 <h1>Liste des étudiants de {this.props.nom}</h1>
                
                <ul>
                {/**
                 * Methode 2*/}

                  {(!learners.length)? <p>Liste des Etudiants vide</p> : learners.map( learner => <Student 
                    key={learner.id} nom={learner.nom} /> 
                  ) }

                {/**Methode 3 
                {(!learners.length) && learners.map( learner => <Student 
                    key={learner.id} nom={learner.nom} /> 
                ) }
                */}
                
                
                    
                </ul>
            </div>
        )
    }
}


import React, { Component } from 'react'
import AddStudent from './AddStudent';
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
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDeleteAll = this.handleDeleteAll.bind(this);
    }

    handleDelete(id){
        this.setState(prevState => (
            {students : prevState.students.filter(
                student =>student.id !== id)
            }
            )
            )
    }
    handleDeleteAll(){
        this.setState({
            students : []
        })
    }

    handleAdd = nom =>{
        const newStudent = {id:Date.now(), nom:nom};
        this.setState({students :[...this.state.students, newStudent]});
    }

    render() {
        const learners = this.state.students;
        if (!learners.length){
            return (
                
                <div>
                    <h1>Liste des Etudiants de {this.props.nom}</h1>
                    <p>Aucun etudiant.</p>
                    <h2>Ajouter un étudiant.</h2>
                    <AddStudent handleAdd={this.handleAdd}/>
                </div>
            )
        }
        else{
            return (
                <div>
                    <h2>Ajouter un étudiant.</h2>
                    <AddStudent handleAdd={this.handleAdd}/>
                    <h1>Liste des Étudiants</h1>
                    <ul>
                        {
                            learners.map(learner => <Student key={learner.id}
                                  learner={learner} 
                                  handleDelete={this.handleDelete} />) 
                        }<i class="fas fa-lira-sign    "></i>
                    </ul>
                    <button onClick={this.handleDeleteAll.bind(this)}>Delete All</button>
                    
                </div>  
            )
        }
    }
}


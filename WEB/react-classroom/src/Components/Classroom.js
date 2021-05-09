import React, { Component } from 'react'
import AddStudent from './AddStudent';
import Student from './Student'
import axios from 'axios';

export default class Classroom extends Component {
    constructor(props){
        super();

        this.state = {
            isLoading : true,
            students : [], 
            error: null
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDeleteAll = this.handleDeleteAll.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:3333/learners').then(res => 
            {
                const students = res.data; 
                this.setState({students, isLoading:false});
            }
        ).catch(error=>this.setState({error, isLoading:false}))
    }

    handleDelete(id){
        axios.delete('http://localhost:3333/learners/'+id).then(
            res => this.setState(prevState => (
                {students : prevState.students.filter(
                    student =>student.id !== id)
                }
            ))
            ).catch( error => this.setState({error:error, isLoading:false}))
    }


    handleDeleteAll(){
       
    }

    handleAdd = nom =>{
        axios.post('http://localhost:3333/learners', {nom}).then(res => {
            this.setState(
                { students :[...this.state.students,res.data] }
                );
        })
    }

    render() {
        const learners = this.state.students;
        const isLoading = this.state.isLoading;

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
                            (isLoading)? <li><p>Loading...</p></li>:
                            learners.map(learner => <Student key={learner.id}
                                  learner={learner} 
                                  handleDelete={this.handleDelete} />) 
                        }
                    </ul>
                    <button onClick={this.handleDeleteAll.bind(this)}>Delete All</button>
                    
                </div>  
            )
        }
    }
}


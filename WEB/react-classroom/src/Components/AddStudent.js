import React, { Component } from 'react'

export default class AddStudent extends Component {
    constructor(){
        super();
        this.state = {nom:'', placeholder:" Nom de l'etudiant"}
    }
    handleChange = event=>this.setState({nom:event.target.value})

    render() {
        return (
            <div>
                <form onSubmit={this.handleAdd}>
                    <input 
                        name="nom"
                        placeholder ={this.state.placeholder}
                        value = {this.state.nom}
                        onChange = {this.handleChange}
                    />

                    <input type='submit' value="Ajouter"/>
                </form>
                
            </div>
        )
    }
    handleAdd = e=>{
        e.preventDefault();
        this.props.handleAdd(this.state.nom);
        this.setState({nom:''});
        }

}

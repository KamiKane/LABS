import React, { Component } from 'react'

export default class AddContact extends Component {
    constructor(props){
        super();
        this.state = {nom:'', prenom:'', email:'', tel:''}

    }


    handleNomChange=event=>this.setState({nom:event.target.value})
    handlePrenomChange=event=>this.setState({prenom:event.target.value})
    handleEmailChange=event=>this.setState({email:event.target.value})
    handleTelChange=event=>this.setState({tel:event.target.value})

    handleAdd= e=>{
        e.preventDefault();
        this.props.handleAdd(this.state);
        this.setState({nom:'', prenom:'', email:'', tel:''})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAdd}>
                    <label>Nom</label>
                    <input 
                        name="nom"
                        placeholder="Nom"
                        value={this.state.nom}
                        onChange={this.handleNomChange}
                    />
                    <label>Prenom</label>
                    <input 
                        name="prenom"
                        placeholder="prenom"
                        value={this.state.prenom}
                        onChange={this.handlePrenomChange}
                    />
                    <label>Tel</label>
                    <input 
                        name="tel"
                        placeholder="tel"
                        value={this.state.tel}
                        onChange={this.handleTelChange}
                    />
                    <label>Email</label>
                    <input 
                        name="email"
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                    />
                    <input type='submit' value="Ajouter"/>
                </form>
                
            </div>
        )
    }
}

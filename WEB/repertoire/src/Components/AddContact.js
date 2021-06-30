import React, { Component } from 'react'
import axios from 'axios'

export default class AddContact extends Component {
    constructor(props){
        super();
        this.state = {nom:'', prenom:'', email:'', tel:''}

    }


    handleNomChange=event=>this.setState({nom:event.target.value})
    handlePrenomChange=event=>this.setState({prenom:event.target.value})
    handleEmailChange=event=>this.setState({email:event.target.value})
    handleTelChange=event=>this.setState({tel:event.target.value})

    handleSubmit= e=>{
        e.preventDefault();
        this.handleAdd(this.state);
        this.setState({nom:'', prenom:'', email:'', tel:''})
    }
    handleAdd(info){
        axios.post('http://localhost:3333/repertoire', info).then(
            res => {
                this.setState(
                { isLoading: false, 
                repertoire : [...this.state.repertoire,res.data] });
                /* console.log(this.state.repertoire); */
                }, this.setState({isLoading:false})
        ).catch( error => this.setState({error:error, isLoading:false}))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAdd}>

                    <div class='form-group'>
                    <div class='col-sm-10'>
                        <label  class='control-label col-sm-2' >Nom</label>
                        
                            <input 
                                name="nom"
                                placeholder="Nom"
                                value={this.state.nom}
                                onChange={this.handleNomChange}
                            />      
                        </div>           
                    </div>
                    <div class='form-group'>
                    <div class='col-sm-10'>
                        <label  class='control-label col-sm-2' >Prenom</label>
                        <input 
                            name="prenom"
                            placeholder="prenom"
                            value={this.state.prenom}
                            onChange={this.handlePrenomChange}
                        />
                        </div>
                    </div>

                    <div class='form-group'>
                    <div class='col-sm-10'>
                    <label class='control-label col-sm-2' >Telephone</label>   
                        <input 
                            name="tel"
                            placeholder="tel"
                            value={this.state.tel}
                            onChange={this.handleTelChange}
                        />
                        </div>
                    </div>
                    <div class='col-sm-10'>
                    <div class='form-group'>
                        <label class='control-label col-sm-2'>Email</label>
                        
                            <input 
                                type="email"
                                name="email"
                                placeholder="email"
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                            />
                        </div>
                    </div>
                    
                
                    <input type='submit' class='btn btn-primary' onClick={this.handleSubmit} value="Ajouter"/>
                </form>
                
            </div>
        )
    }
}
    
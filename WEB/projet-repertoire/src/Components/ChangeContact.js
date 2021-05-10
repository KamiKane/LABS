import React, { Component } from 'react'
import axios from 'axios'

export default class ChangeContact extends Component {
    constructor(cid){
        super();
       
        this.state = {
            id : cid,
            contact : {},
            isLoading:true,
            error : null
        }
        
        
    }

    componentDidMount(){
        axios.get('http://localhost:3333/repertoire'+ this.state.id).then(
            res => {
                const contact = res.data;
                this.setState({contact, isLoading:false});
            }
        ).catch(error=>this.setState({error, isLoading:false}))
        console.log(this.state)
    }

    handleNomChange=event=>this.setState({nom:event.target.value});

    handlePrenomChange=event=>this.setState({prenom:event.target.value});

    handleEmailChange=event=>this.setState({email:event.target.value});

    handleTelChange=event=>this.setState({tel:event.target.value});

    handleChange = e=>{
        e.preventDefault();
        this.props.handleChange(this.state);
        
    }
    render() {
        return (
            <div>
                 <div>
                <form onSubmit={this.handleChange}>
                    <label>Nom</label>
                    <input 
                        name="nom"
                        placeholder={this.state.contact.nom}
                        value={this.state.contact.nom}
                        onChange={this.handleNomChange}
                    />
                    <label>Prenom</label>
                    <input 
                        name="prenom"
                        placeholder={this.state.contact.prenom}
                        value={this.state.contact.prenom}
                        onChange={this.handlePrenomChange}
                    />
                    <label>Tel</label>
                    <input 
                        name="tel"
                        placeholder={this.state.contact.tel}
                        value={this.state.contact.tel}
                        onChange={this.handleTelChange}
                    />
                    <label>Email</label>
                    <input 
                        name="email"
                        placeholder={this.state.contact.email}
                        value={this.state.contact.email}
                        onChange={this.handleEmailChange}
                    />
                    <input type='submit' value="Modifier"/>
                </form>
                
            </div>
            </div>
        )
    }
}

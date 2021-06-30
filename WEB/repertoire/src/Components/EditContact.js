import React, { Component } from 'react'


export default class EditContact extends Component {
    constructor(props){
        super();
        this.state = {
            
        id: props.contact.id, 
        nom:props.contact.nom,
        prenom: props.contact.prenom, 
        mail : props.contact.mail,
        tel : props.contact.tel
            
           
        }
      
    }


    handleNomChange=event=>this.setState({nom : event.target.value})
    handlePrenomChange=event=>this.setState({prenom:event.target.value})
    handleMailChange=event=>this.setState({mail:event.target.value})
    handleTelChange=event=>this.setState({tel:event.target.value})

    handleSubmit= e=>{
        e.preventDefault();
        
        this.props.handleEdit(this.state.id, this.state);

    }


    render() {
        return (
            <div className="center">
                <form onSubmit={this.handleEdit}>

                    <div className='form-group'>
                    <div className='col-sm-10'>
                        <label  className='control-label col-sm-2' >Nom</label>
                        
                            <input 
                                name="nom"
                               defaultValue={this.state.nom}
                                onChange={this.handleNomChange}
                            />      
                        </div>           
                    </div>
                    <div className='form-group'>
                    <div className='col-sm-10'>
                        <label  className='control-label col-sm-2' >Prenom</label>
                        <input 
                            name="prenom"
                            defaultValue={this.state.prenom}
                            
                            onChange={this.handlePrenomChange}
                        />
                        </div>
                    </div>

                    <div className='form-group'>
                    <div className='col-sm-10'>
                    <label className='control-label col-sm-2' >Telephone</label>   
                        <input 
                            name="tel"
                            defaultValue={this.state.tel}
                            
                            onChange={this.handleTelChange}
                        />
                        </div>
                    </div>
                    <div className='col-sm-10'>
                    <div className='form-group'>
                        <label className='control-label col-sm-2'>Email</label>
                        
                            <input 
                                type="email"
                                name="mail"
                                defaultValue={this.state.mail}
                                
                                onChange={this.handleMailChange}
                            />
                        </div>
                    </div>
                    
                
                    <input type='submit' className='btn btn-primary' onClick={this.handleSubmit} value="Edit"/>
                </form>
                
            </div>
        )
    }
}

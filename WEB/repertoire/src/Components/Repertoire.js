import React, { Component } from 'react'
import Contact from './Contact'
import axios from 'axios'
import EditContact from './EditContact'
import InfoPanel from './InfoPanel'


export default class Repertoire extends Component {
    constructor(props){
        super();
        this.state={
            isLoading : true, 
            repertoire :[],
            error : null, 
            toggleEdit:false,
            contactToEdit:null,
            displayInfo:false,
            conMore:null
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEditToggle= this.handleEditToggle.bind(this);
        this.handleEdit=this.handleEdit.bind(this);
        this.handleMore = this.handleMore.bind(this);
        this.handleInfoClose= this.handleInfoClose.bind(this);
    }

     componentDidMount(){
        axios.get('http://localhost:3333/repertoire').then(
            res => {
                const repertoire = res.data
                this.setState({repertoire, isLoading:false});
            }
        ).catch(error=>this.setState({error, isLoading:false}))
    }
    


    handleDelete(id){
        axios.delete('http://localhost:3333/repertoire/'+id).then(
            res => this.setState(prevState => (
                {repertoire : prevState.repertoire.filter(
                    contact => contact.id !== id)
                }
                
            )),this.setState({isLoading:false}),
            /* console.log(this.state.repertoire) */
            ).catch( error => this.setState({error:error, isLoading:false}))
    }
    
    handleEditToggle(id, contact){
        this.setState({toggleEdit:true, contactToEdit:contact})
    }

    handleEdit(id, info){
        axios.put('http://localhost:3333/repertoire/'+id, info).then(
            res => {
                console.log(res.data);
                this.setState(
                    { 
                        isLoading: false, 
                        repertoire : this.state.repertoire.map(contact => { return contact.id === id ? res.data : contact})
                    }
                );
                
                }, this.setState({isLoading:false})
        ).catch( error => this.setState({error:error, isLoading:false}))
        
        this.setState({toggleEdit:false, contactToEdit:null}); 
        
    }

    handleMore(contact){
        this.setState({displayInfo:true, conMore:contact})
    }
    handleInfoClose(){
        this.setState({displayInfo:false})
    }
    render() {

        const repertoire = this.state.repertoire;
        const isLoading = this.state.isLoading;
        const toggle = this.state.toggleEdit;
        const con = this.state.contactToEdit;
        const conInfo=this.state.conMore;
        const isInfo= this.state.displayInfo;
        console.log(isInfo)
        
        if (!repertoire.length){
            return (
                <div>
                    <h1>Votre Répertoire:</h1>
                    <p>Votre Répertoire est vide</p>
                </div>
            )
        }
        if (isLoading){
            return (
                <div>
                    <h1>Votre Répertoire: </h1>
                    <p>Loading...</p>:
                </div>
            )
        }
        else{
            if (!toggle && isInfo){
                return (
                <div className="container">
                    <table className="table col-md-9 center">
                        <tbody>
                            {
                            repertoire.map( contact => 
                            <Contact 
                            key = {contact.id}
                            contact={contact}
                            handleDelete={this.handleDelete}
                            handleEditToggle = {this.handleEditToggle}
                            handleMore={this.handleMore}
                            />)
                            }
                        </tbody>
                    
                    </table>
                 

                    <InfoPanel contact={conInfo} show ={isInfo} handleInfoClose={this.handleInfoClose}/>
                </div>
            )}
            else if (!toggle && !isInfo){
                return(
                <div className="container">
                    <table className="table col-md-9 center">
                        <tbody>
                            {
                            repertoire.map( contact => 
                            <Contact 
                            key = {contact.id}
                            contact={contact}
                            handleDelete={this.handleDelete}
                            handleEditToggle = {this.handleEditToggle}
                            handleMore={this.handleMore}
                            />)
                            }
                        </tbody>                  
                    </table>
                </div>
                )
            }
            
            else {
                return (<EditContact key={con.id} contact={con} handleEdit={this.handleEdit}/>)
            }
            
            
        }
        
    }
}

import React, { Component } from 'react'
import Contact from './Contact'
import axios from 'axios'
import AddContact from './AddContact'



export default class Repertoire extends Component {
    constructor(props){
        super();
        this.state={
            isLoading : true, 
            repertoire :[],
            error : null
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);


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
    
    
    componentDidMount(){
        axios.get('http://localhost:3333/repertoire').then(
            res => {
                const repertoire = res.data;
                this.setState({repertoire, isLoading:false});
            }
        ).catch(error=>this.setState({error, isLoading:false}))
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

        const repertoire = this.state.repertoire;
        const isLoading = this.state.isLoading;
       
        
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
            return (
                <div>
                    <h1>Votre Répertoire:</h1>
                    {
                        repertoire.map( contact => 
                        <Contact 
                        key = {contact.id}
                        contact={contact}
                        handleDelete={this.handleDelete}
                        />)
                    }
                    
                    <AddContact handleAdd={this.handleAdd}/>
                    
                </div>
            )

        }
        
    }
}

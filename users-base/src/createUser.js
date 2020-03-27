import React from "react"
import Main from "./Main"

class createUser extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:""
        }
        this.handleChange=this.handleChange.bind(this);
        this.submit=this.submit(this);
    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    submit(){
        // envio de datos de usuario para su creacion.
        // si sale bien, se pide el total de usuarios en la base, se los pasa
        // a main para mostrar, como array
        Main(arrayUser);
    }
    
    render(){
        return(<ul  id="createUser">
            <li><p>Nombre:</p><input type="text" placeholder="nombre" name="name" value={this.state.name} onChange={this.handleChange}></input></li>
            <li><p>Email:</p><input type="text" placeholder="email" name="email" value={this.state.email} onChange={this.handleChange}></input></li>
            <li><input type="submit" onClick={this.submit}>Crear usuario</input></li>
        </ul>);
    }

}

export default createUser;
import React from "react"
import Main from "./Main"

class searchUser extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
            email:""
        }
        this.handleChange=this.handleChange.bind(this);
        this.submit=this.submit(this);
    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    submit(){
        // envio de datos de usuario para su busqueda.
        // si sale bien, envio de datos del usuario a Main para mostrar, como array
        Main(user);
    }
    
    render(){
        return(<ul  id="createUser">
            <li><p>Email:</p><input type="text" placeholder="email" name="email" value={this.state.email} onChange={this.handleChange}></input></li>
            <li><input type="submit" onClick={this.submit}>Buscar usuario</input></li>
        </ul>);
    }

}

export default searchUser;
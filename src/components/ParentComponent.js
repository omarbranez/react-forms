import React, { Component } from 'react'
import Form from "./Form";
import DisplayData from "./DisplayData"

// ParentComponent stores STATE
// sends form values and event callbacks as PROPS to FORM CHILD COMPONENT
// Form uses Controlled Form using PROPS
// Form's event callbacks change the STATE of ParentComponent
// DisplayData reads from the same STATE that is being changed by FORM

export default class ParentComponent extends Component {

    state = {
        firstName: "",
        lastName: ""
    }

    // handleFirstNameChange = (event) => {
    //     this.setState({
    //         firstName: event.target.value
    //     })
    // }
    
    // handleLastNameChange = (event) => {
    //     this.setState({
    //         lastName: event.target.value
    //     })
    // }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value // name attribute matches a KEY from STATE
        })
    }

    render(){
        return(
            <div>
            <Form
                formData={this.state}
                // handleFirstNameChange={this.handleFirstNameChange} // prop
                // handleLastNameChange={this.handleLastNameChange} // prop
                handleChange={this.handleChange}
            />
            <DisplayData formData={this.state}/>
            </div>
        )
    }
}
import React from 'react';

class Form extends React.Component {
  // state = {
  //   firstName: "John", 
  //   lastName: "Henry",
  //   submittedData: []
  // }

  // handleFirstNameChange = event => {
  //   this.setState({
  //     firstName: event.target.value
  //   })
  // }

  // handleLastNameChange = event => {
  //   this.setState({
  //     lastName: event.target.value
  //   })
  // }
  
  // handleSubmit = event => {
  //   event.preventDefault()
  //   let formData = {
  //     firstName: this.state.firstName,
  //     lastName: this.state.lastName
  //   }
  //   let dataArray = this.state.submittedData.concat(formData) // combine the submittedData state with the form data
  //   this.setState({
  //     submittedData: dataArray
  //   })
  // }

  // listOfSubmissions = () => { // each submission typed out
  //   return this.state.submittedData.map((data, idx) => {
  //     return (
  //       <div key={idx}>
  //         <span>{data.firstName}</span> <span>{data.lastName}</span>
  //       </div>
  //     )
  //   })
  // }

  // the above is now handled by Parent Component. Form is now rendered as a child

  render() {
    return (
      <div>
      {/* <form onSubmit={event => this.handleSubmit(event)}> */}
        <form>
        {/* <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} /> */}
        {/* <input type="text" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} /> allows us to CHANGE THE STATE */}
        {/* <input type="text" onChange={(event) => this.props.handleFirstNameChange(event)} value={this.props.formData.firstName} /> */}
        <input type="text" name="firstName" onChange={(event) => this.props.handleChange(event)} value={this.props.formData.firstName}/> {/*} allows us to access name attribute using event.target.name /*}
        {/* <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} /> */}
        {/* <input type="text" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} /> */}
        {/* <input type="text" onChange={(event) => this.props.handleLastNameChange(event)} value={this.props.formData.lastName} /> */}
        <input type="text" name="lastName" onChange={(event) => this.props.handleChange(event)} value={this.props.formData.lastName}/>
        {/* <input type="submit"/> */}
      </form>
      {/* {this.listOfSubmissions()} */}
      </div>
    )
  }
}

export default Form;
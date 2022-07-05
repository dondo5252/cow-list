import React from 'react';

class AddCows extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      name: '',
      description: ''
    }
    this.onNameChange = this.onNameChange.bind(this)
    this.onDescChange = this.onDescChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onNameChange(event) {
    event.preventDefault();
    this.setState({name: event.target.value});
  }

  onDescChange(event) {
    event.preventDefault();
    this.setState({description: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.post({
      name: this.state.name,
      description: this.state.description
    })
  }

  render () {
    return (
      <form>
        <label>
          Name:
          <input type="text" placeholder="Enter cows name..." value={this.state.name} onChange={this.onNameChange} /></label>
        <label>
          Description:
          <input type="text"placeholder="Enter cows description..." value={this.state.description} onChange={this.onDescChange} /></label>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}
export default AddCows;
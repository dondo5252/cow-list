import React from 'react';

class CowShow extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
    }
    this.handleCowClick = this.handleCowClick.bind(this);
  }

  handleCowClick (event) {
    event.preventDefault()
    console.log('you clicked ',this.props.value.name)
    this.props.displayCow(this.props.value.name)
  }

  render () {
    return (
      <ul onClick={this.handleCowClick}>
      Cow Name: {this.props.value.name}
      </ul>
    )
  }
}
export default CowsListEntry;
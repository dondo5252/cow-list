import React from 'react';
import ReactDOM from 'react-dom';
import CowsList from './CowsList.jsx'
import CowsListEntry from './CowsListEntry.jsx'
import AddCows from './AddCows.jsx'
const axios = require('axios')

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      cows: [],
      displayedCow: [],
      clickedCow: '',
      clickedDesc: ''
    }
    this.getAllTheCows = this.getAllTheCows.bind(this)
    this.postAllTheCows = this.postAllTheCows.bind(this)
    this.displayCow = this.displayCow.bind(this)
    this.updateCows = this.updateCows.bind(this)
  }

  componentDidMount () {
    this.getAllTheCows()
  }


  getAllTheCows () {
    axios.get('api/cows')
    .then((response) => {
      this.setState({cows: response.data})
    console.log('got all the cows axio.get!')
    })
    .catch((error) => {
      console.log(error, 'error in axios.get getallthecows')
    })
  }

  postAllTheCows (cowObj) {
    axios.post('/api/cows', {
      name: cowObj.name,
      description: cowObj.description
    })
    .then((response) => {
      console.log(response)
      this.getAllTheCows()
    })
    .catch((error) => {
      console.log(error)
    })
  }
  updateCows (newCow) {
    this.setState((displayedCow) => {
      return {displayedCow: newCow }
    })
  }


  displayCow(cowName) {
    var copyCows = this.state.cows.slice()
    for (let i = 0;i < copyCows.length;i++) {
      let currCowName = copyCows[i].name;
      if (currCowName === cowName) {
        this.setState({clickedCow: cowName, clickedDesc: copyCows[i].description})
        // setTimeout(() => {
        //   console.log(this.state.displayedCow.name);
        // }, 5000);
      }
    }
  }



  render () {
    return (
      <div>
      <div>COW LIST</div>
      <h3>Name:{this.state.clickedCow} Description:{this.state.clickedDesc}</h3>
      <AddCows post={this.postAllTheCows}/>
      <CowsList cows={this.state.cows} displayCow={this.displayCow} />
      </div>

    )
  }
}
export default App;
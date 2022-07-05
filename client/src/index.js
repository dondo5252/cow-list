import React from 'react';
import ReactDOM from 'react-dom';
import CowsList from './components/CowsList.jsx'
import CowsListEntry from './components/CowsListEntry.jsx'
import App from './components/App.jsx'
const axios = require('axios')

// class App extends React.Component {
//   constructor (props) {
//     super (props);
//     this.state = {
//       cows: []
//     }
//     this.getAllTheCows = this.getAllTheCows.bind(this)
//     // this.updateCows = this.updateCows.bind(this)
//   }


//   getAllTheCows () {
//     axios.get('api/cows')
//     .then((response) => {
//       this.setState({cows: [response.data]})
//     console.log('got all the cows axio.get!')
//     })
//     .catch((error) => {
//       console.log(error, 'error in axios.get getallthecows')
//     })
//   }

//   componentDidMount () {
//     this.getAllTheCows()
//   }

//   render () {
//     return (
//       <div>
//       <div>COW LIST</div>
//       <CowsList cows={this.state.cows}/>
//       </div>

//     )
//   }
// }

ReactDOM.render(<App/>, document.getElementById('app'));
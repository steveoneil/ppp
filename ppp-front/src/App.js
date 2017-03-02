import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();



  }


  render() {
    const medianIncome = this.props.medianIncome;
    console.log(medianIncome);
    return (
      <div className="App">
        <div className="App-header">
          <img className="map" src="/Canada_blank_map.svg" />
            <div>
              <Marker />
            </div>
        </div>
      </div>
    );
  }
}

class Marker extends Component {
  render () {
    let cityLocation = {x: 30, y: 70};
    let cityLeft = `${cityLocation.x}%`;
    let cityTop = `${cityLocation.y}%`;
    return (
      <div>
        <div className="city" style={{'top': cityTop, 'left': cityLeft}}>
          First City
        </div>
      </div>
    )
  }
}

export default App;

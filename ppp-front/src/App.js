import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

  }


  render() {
    const medianIncome = this.props.medianIncome;

    return (
      <div className="App">
        <div className="App-header">
          <img className="map" src="/Canada_blank_map.svg" />
            <div>
              <Marker medianIncome={this.props.medianIncome} />
            </div>
              <InfoBox medianIncome={this.props.medianIncome}/>
        </div>
      </div>
    );
  }
}



class Marker extends Component {
  render () {
    const medianIncome = this.props.medianIncome;
    
    const marker = medianIncome.map((element, i) => {
    let cityLeft = `${element.location.x}%`;
    let cityTop = `${element.location.y}%`;

      return <button className="city" style={{'top': cityTop, 'left': cityLeft}}>{element.city}</button>
    })
    console.log(marker);

    console.log(medianIncome)
    
    return (
      <div>
      {marker}
      </div>
    )
  }
}


class InfoBox extends Component {
  render() {
    const medianIncome = this.props.medianIncome;
  
    return(
      <div>
        <div className={"something"? true: false}>
          <h1>City : {medianIncome[0].cities}</h1>
          <h2>Median Income : {medianIncome[0].income}$</h2>

        </div>
      </div>
    )
  
  }
}


export default App;

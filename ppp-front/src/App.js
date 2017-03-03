import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
      this.state = {
        id: 0
      }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.setState({
      id: id
    })
  }

  componentDidUpdate() {
    console.log(this.state.id)
  }

  render() {
    const medianIncome = this.props.medianIncome;

    return (
      <div className="App">
      <h1 className="headertitle">Median Income in Canadian Metropolitan Cities</h1>
        <div className="App-header">
          <img className="map" src="/Canada_blank_map.svg" />
          <div>
          
          </div>
            <div>
              <Marker medianIncome={this.props.medianIncome} handleClick={this.handleClick}/>
            </div>
              <InfoBox medianIncome={this.props.medianIncome} id={this.state.id}/>
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
      return <button key={i} className="place button" style={{'top': cityTop, 'left': cityLeft}}
      onClick={() => {this.props.handleClick(element.id)}} id={element.id}>{element.city}</button>
    })
    return (
      <div>
      {marker}
      </div>
    )
  }
}


class InfoBox extends Component {
  
  render() {
    let formatter = new Intl.NumberFormat('en-US', {
     style: 'currency',
     currency: 'USD',
     minimumFractionDigits: 0,
   });

  
    const medianIncome = this.props.medianIncome;
    let index = 0;
    for (let i = 0; i < medianIncome.length; i++) {
      if (medianIncome[i].id === this.props.id) {
        index = i;
      }
    }
     let trimmedIncome = formatter.format(medianIncome[index].income);
    let cityLeft = `${medianIncome[index].location.x}%`;
    let cityTop = `${medianIncome[index].location.y}%`;
    console.log(cityLeft, cityTop);
    return(
      <div className="place box" style={{'top': cityTop, 'left': cityLeft}}
      id={medianIncome[index].id}>{medianIncome[index].city}<br/>{trimmedIncome}</div>
    )
  }
}


export default App;

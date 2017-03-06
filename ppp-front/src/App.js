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

  render() {
    const medianIncomes = this.props.medianIncomes;
    const cities = this.props.cities;
    for (let i = 0; i < medianIncomes.length; i++) {
      for (let j = 0; j < cities.length; j++) {
        if (medianIncomes[i].cityId === cities[j].id) {
          medianIncomes[i].cityName = cities[j].name;
          medianIncomes[i].cityLocation = cities[j].location;
          j = cities.length;
        }
      }
    }


    return (
      <div className="App">
      <h1 className="headertitle">Median Income in Canadian Metropolitan Cities</h1>
      <div className="App-header">
        <img className="map" src="/Canada.png" />
          <div>
            <Marker medianIncomes={this.props.medianIncomes} handleClick={this.handleClick}/>
            <InfoBox medianIncomes={this.props.medianIncomes} id={this.state.id}/>
          </div>
      </div>
      </div>
    );
  }
}



class Marker extends Component {
  render () {
    const medianIncomes = this.props.medianIncomes;
    const marker = medianIncomes.map((element, i) => {
      if (element.display) {
        let cityLeft = `${element.cityLocation.x}%`;
        let cityTop = `${element.cityLocation.y}%`;
          return <button key={i} className="place button" style={{'top': cityTop, 'left': cityLeft}}
          onClick={() => {this.props.handleClick(element.cityId)}} id={element.cityId}>{element.cityName}</button>
      }
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

  
    const medianIncomes = this.props.medianIncomes;
    let index = 0;
    for (let i = 0; i < medianIncomes.length; i++) {
      if (medianIncomes[i].cityId === this.props.id) {
        index = i;
      }
    }
    let trimmedIncome = formatter.format(medianIncomes[index].income['2014']);
    let cityLeft = `${medianIncomes[index].cityLocation.x}%`;
    let cityTop = `${medianIncomes[index].cityLocation.y}%`;
    return(
      <div className="place box" style={{'top': cityTop, 'left': cityLeft}}
      id={medianIncomes[index].cityId}>{medianIncomes[index].cityName}<br/>{trimmedIncome}</div>
    )
  }
}


export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

function MedianIncome (cityId, income2010, income2011, income2012, income2013, income2014) {
  this.cityId = cityId;
  this.cityName = "";
  this.cityLocation = {
    x: 0,
    y: 0
  };
  this.income = {
    2010: income2010,
    2011: income2011,
    2012: income2012,
    2013: income2013,
    2014: income2014
  };
}
function HomePrices (cityId, price2010, price2011, price2012, price2013, price2014, price2015, price2016) {
  this.cityId = cityId;
  this.cityLocation = {
    x: 0,
    y: 0
  };
  this.price = {
    2010: price2010,
    2011: price2011,
    2012: price2012,
    2013: price2013,
    2014: price2014,
    2015: price2015,
    2016: price2015
  };
}

function City (name, id, x, y) {
  this.name = name,
  this.id = id,
  this.location = {
    x: x,
    y: y
  }
}

const medianIncomes = [
new MedianIncome(0, 69860, 72240, 74540, 76550, 78870),
new MedianIncome(1, 78210, 83020, 87150, 91100, 94060),
new MedianIncome(2, 76500, 78690, 80490, 82510, 84560),
new MedianIncome(4, 69100, 70610, 72450, 73600, 76450),
new MedianIncome(5, 69340, 71980, 74220, 75360, 76310),
new MedianIncome(6, 76450, 79140, 81900, 84160, 86110),
new MedianIncome(7, 63360, 65680, 68700, 70710, 72070),
new MedianIncome(8, 63510, 65250, 67170, 68430, 70010),
new MedianIncome(9, 67010, 69150, 71390, 73250, 75010),
new MedianIncome(10, 81040, 84410, 84500, 86100, 87060),
new MedianIncome(11, 94700, 97010, 98110, 101070, 102020),
new MedianIncome(12, 77140, 79140, 80800, 82950, 84750),
new MedianIncome(13, 82270, 84070, 86160, 87400, 89430),
new MedianIncome(14, 68110, 69740, 71210, 72830, 75270),
new MedianIncome(15, 76730, 78520, 80400, 82290, 84980),
new MedianIncome(16, 65900, 67230, 68410, 69500, 71830),
new MedianIncome(17, 77040, 79020, 80570, 82160, 84380),
new MedianIncome(18, 71840, 73500, 74760, 75980, 78050),
new MedianIncome(19, 69480, 70560, 72220, 73440, 76260),
new MedianIncome(20, 76710, 82220, 85440, 86080, 87450),
new MedianIncome(21, 75640, 78610, 80680, 82690, 84350),
new MedianIncome(22, 72050, 74040, 75880, 77770, 79850),
new MedianIncome(23, 84890, 88750, 91200, 93670, 96080),
new MedianIncome(24, 80570, 84730, 87410, 90840, 93400),
new MedianIncome(25, 89490, 93410, 98300, 101260, 104530),
new MedianIncome(26, 87930, 91860, 96030, 98480, 101470),
new MedianIncome(27, 62320, 64250, 66550, 68310, 70590),
new MedianIncome(28, 67090, 68970, 71140, 73390, 76040),
new MedianIncome(29, 77820, 79350, 81580, 84500, 86430)
];

const cities = [
  new City('Canada', 0, 15, 84),
  new City('St. Johns', 1, 90, 65),
  new City('Halifax', 2, 0, 100),
  new City('Moncton', 3, 4, 97),
  new City('Saint John', 4, 8, 94),
  new City('Saguenay', 5, 12, 91),
  new City('Québec', 6, 16, 88),
  new City('Sherbrooke', 7, 20, 85),
  new City('Trois-Rivières', 8, 24, 82),
  new City('Montréal', 9, 28, 79),
  new City('Gatineau', 10, 65, 77),
  new City('Ottawa', 11, 36, 73),
  new City('Kingston', 12, 40, 70),
  new City('Oshawa', 13, 44, 67),
  new City('Toronto', 14, 60, 87),
  new City('Hamilton', 15, 52, 61),
  new City('St. Catharines', 16, 56, 58),
  new City('Kitchener-Waterloo', 17, 60, 55),
  new City('London', 18, 64, 52),
  new City('Windsor', 19, 68, 49),
  new City('Sudbury', 20, 72, 46),
  new City('Thunder Bay', 21, 76, 43),
  new City('Winnipeg', 22, 80, 40),
  new City('Regina', 23, 84, 37),
  new City('Saskatoon', 24, 88, 34),
  new City('Calgary', 25, 20, 60),
  new City('Edmonton', 26, 96, 28),
  new City('Abbotsford', 27, 100, 25),
  new City('Vancouver', 28, 7, 62),
  new City('Victoria', 29, 92, 19),
];

ReactDOM.render(
  <App medianIncomes={medianIncomes} cities={cities}/>,
  document.getElementById('root')
);

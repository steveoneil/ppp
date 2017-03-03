import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

function MedianIncome (city, id, x, y, income, year) {
  this.city = city;
  this.id = id;
  this.location = {
    x: x,
    y: y
  }
  this.income = income;
  this.year = year;
}

const screenWidth = 1268;
const screenHeight = 800;

const medianIncome = [
new MedianIncome("Canada", 0, 100, 0, 78870, 2014),
new MedianIncome("St. John's", 12, 87, 89, 94060, 2014),
new MedianIncome("Gatineau", 25, 64, 104, 87060, 2014),
new MedianIncome("Toronto", 3, 60, 110, 75270,	2014),
new MedianIncome("Calgary", 7, 18, 88, 104530, 2014),
new MedianIncome("Vancouver", 5, 3, 90, 76040,	2014)
];

ReactDOM.render(
  <App medianIncome={medianIncome}/>,
  document.getElementById('root')
);

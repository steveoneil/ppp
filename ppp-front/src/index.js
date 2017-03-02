import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

function MedianIncome (cities, id, x, y, income, year) {
  this.cities = cities;
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
new MedianIncome("Canada", 0, 0, 0, 78870, 2014),
new MedianIncome("St. John's", 1, 90, 70, 94060, 2014),
new MedianIncome("Gatineau", 2, 60, 80, 87060, 2014),
new MedianIncome("Toronto", 3, 50, 90, 75270,	2014),
new MedianIncome("Calgary", 4, 30, 70, 104530, 2014),
new MedianIncome("Vancouver", 5, 10, 80, 76040,	2014)
];

ReactDOM.render(
  <App medianIncome={medianIncome}/>,
  document.getElementById('root')
);
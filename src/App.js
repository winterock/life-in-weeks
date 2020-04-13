import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/react-life-timeline.css';
import ReactLifeTimeline from './ReactLifeTimeline.js';

const POLAR = [
  "#2E3440",
  "#3B4252",
  "#434C5E",
  "#4C566A",
];
const SNOW = [
  "#D8DEE9",
  "#E5E9F0",
  "#ECEFF4",
];
const FROST = [
  "#8FBCBB",
  "#88C0D0",
  "#81A1C1",
  "#5E81AC",
];
const AURORA = [
  "#BF616A",
  "#D08770",
  "#EBCB8B",
  "#A3BE8C",
  "#B48EAD",
];
const events = [
  {
    date_start: new Date('2006-09-01'),
    date_end: new Date('2010-06-01'),
    title: 'SYSU',
    color: AURORA[1],
  },
  {
    date_start: new Date('2010-07-01'),
    date_end: new Date('2011-12-07'),
    title: 'Shenzhen',
  },
  {
    date_start: new Date('2011-12-07'),
    date_end: new Date('2013-12-01'),
    title: 'Beijing',
    color: FROST[1],
  },
  {
    date_start: new Date('2013-12-01'),
    date_start: new Date('2014-10-01'),
    title: 'Mianyang',
  },
  {
    date_start: new Date('2014-10-01'),
    date_end: '2017-10-01',
    title: 'Beijing again',
    color: FROST[1],
  },
  {
    date_start: new Date('2017-10-01'),
    date_end: new Date(),
    title: 'Amsterdam',
    color: AURORA[0],
  },
];

class App extends React.Component {
  generate_events(cb){
    cb(events);
  }
  render(){
    return (
      <div className="App">
        <h1>Life by Weeks</h1>
        <ReactLifeTimeline
          subject_name="Wentao"
          birthday={new Date('1987-12-07')}
          birthday_color={SNOW[0]}
          get_events={this.generate_events.bind(this)}
        ></ReactLifeTimeline>
      </div>
    );
  }
}

export default App;

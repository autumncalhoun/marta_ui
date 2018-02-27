import React, { Component } from 'react';
import Api from '../marta/api';
import { Link } from 'react-router-dom';

class StationView extends Component {
  constructor(props) {
    super(props);
    var name = this.props.match.params.station.replace(/-/g, " ");
    this.state = {
      stationName: name,
      upperStationName: name.toUpperCase(),
      arrivals: []
    };
  }

  componentDidMount() {
    // TODO: need more than just next two arrivals
    this.subscribeCallback = (arrivals) => {
      var matching = []
      for(var i = 0; i < arrivals.length; i++) {
        var arrival = arrivals[i];
        if(arrival.STATION === this.state.upperStationName) {
          matching.push(arrival);
        }
      }
      this.setState({ arrivals: matching });
    };
    Api.subscribe(this.subscribeCallback);
  }

  componentWillUnmount() {
    Api.unsubscribe(this.subscribeCallback);
  }

  render() {
    return <div className="StationView">
             <h1>{this.state.stationName}</h1>
             <ul>{this.arrivals()}</ul>
           </div>;
  }

  arrivals() {
    var res = [];
    for(var i = 0; i < this.state.arrivals.length; i++) {
      var arrival = this.state.arrivals[i];
      res.push(
        <li className={arrival.LINE} key={arrival.TRAIN_ID}>
          <Link to={"/train/" + arrival.TRAIN_ID}>
            {arrival.DIRECTION} {arrival.WAITING_TIME}
          </Link>
        </li>
      );
    }
    return res;
  }
}

export default StationView;

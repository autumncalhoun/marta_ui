import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import StarredStations from '../StarredStations/StarredStations';
import NearbyStations from '../NearbyStations/NearbyStations';
import AllStations from '../AllStations/AllStations';

class StationList extends Component {
  render() {
    var list = [];

    list.push(<StarredStations key="starredStations" />);
    list.push(<NearbyStations key="nearbyStations" />);
    list.push(<AllStations key="allStations" />);

    return (
      <div className="StationList">
        <AppBar position="static" style={{backgroundColor: '#607D8B'}} elevation={0}>
          <Toolbar>
            <Typography variant="title" color="inherit">
              Stations
            </Typography>
          </Toolbar>
        </AppBar>
        <List className="StationListHolder">{list}</List>
        <Paper elevation={0} style={{justifyContent: 'space-around', display: 'flex', backgroundColor: '#CFD8DC', padding: '16px'}}>
          <Button variant="fab" mini={true} onClick={() => window.location = "https://twitter.com/jakswa"}>
            <Avatar src="https://s.gravatar.com/avatar/721d6b5c0b5345637b76ea17318a447c?s=80&r=g" />
          </Button>
          <Button style={{marginLeft: '16px'}} mini={true} variant="fab" color="secondary" onClick={() => window.location = "https://github.com/jakswa/marta_ui"}>
            <Icon>code</Icon>
          </Button>
          <Button style={{marginLeft: '16px'}} mini={true} variant="fab" onClick={() => window.location = "https://gitter.im/marta_ui/Lobby"}>
            <Icon>message</Icon>
          </Button>
        </Paper>
      </div>
    );
  }
}

export default StationList;

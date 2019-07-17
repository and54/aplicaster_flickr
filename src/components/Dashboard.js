import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import FlickrImage from './FlickrImage';
import './Dashboard.css';

export default class Dashboard extends Component {

  time = 5; // value in seconds
  search = 'animals'; // key word to do the search

  render = () => (
    <div className="root">
      <Grid 
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        className="grid"
      >
        <FlickrImage time={ this.time } search={ this.search } />
      </Grid>
    </div>
  );
}

import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import FlickrImage from './FlickrImage';
import './Dashboard.css';

const time = 5; // value in seconds
const search = 'animals'; // key word to do the search

export default class Dashboard extends Component {
  
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
        <FlickrImage time={ time } search={ search } />
      </Grid>
    </div>
  );
}

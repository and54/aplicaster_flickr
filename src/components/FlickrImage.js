import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Fade from '@material-ui/core/Fade';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './FlickrImage.css';

export default class FlickrImage extends Component {


  constructor(props) {
    super(props);
    this.state = { 
      selImage: '', 
      title: 'Loading Images...', 
      photos:[], 
      search: props.search, 
      time: props.time * 1000, 
      fadeIn: false 
    };
  }

  async componentDidMount() {
    const resp = await fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+process.env.REACT_APP_FLICKR_KEY+'&tags='+this.state.search+'&per_page=100&page=1&format=json&nojsoncallback=1');
    const data = await resp.json();
    const photos = this.addPhotos(data.photos.photo);
    this.setState({ photos });
    setInterval(this.changeImage.bind(this), this.state.time);
    this.changeImage();
  };

  addPhotos(pics) {
    let photos = [];
    pics.map(pic => 
      photos.push({
        title: pic.title,
        image: 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg'
      })
    );
    return photos;
  }

  changeImage() {
    const index = Math.floor(Math.random() * this.state.photos.length);
    const selected =  this.state.photos[index];
    this.setState({ fadeIn: false });
    setTimeout(() => {
      this.setState({ selImage:selected.image, title:selected.title, fadeIn: true });
    }, 500);
  }

  render() {
    let content = <div />;
    if (this.state.selImage) {
      content = (<CardMedia
        component="img"
        alt="Contemplative Reptile"
        image={ this.state.selImage }
        title="Contemplative Reptile"
        className="image"
      />);
    }
    return (
      <Card className="card">
        <CardActionArea>
          <Fade in={ this.state.fadeIn }>
            { content }
          </ Fade>
          <CardContent>
            <Typography gutterBottom variant="body2" component="h2">
              { this.state.title }
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }
}

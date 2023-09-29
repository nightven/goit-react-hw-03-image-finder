import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

import { ImageGallery } from './ImageGallery/ImageGallery';
import { Container } from './app.styled';


export class App extends Component {
  state = {
    value: '',
  };
  onSubmit = (value) => {
    this.setState({ value: value });
  };
  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery value={this.state.value} />
      </Container>
    );
  }
}

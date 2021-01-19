import React from 'react';
import '../App.css';


 export default class slideshow extends React.Component {
  state = {
    images: [
      "https://cdn-prd-02.pnp.co.za/sys-master/images/h53/hb7/9566170906654/red-wine.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Red_and_white_wine_12-2015.jpg/1200px-Red_and_white_wine_12-2015.jpg",
      "https://images.all-free-download.com/images/graphicthumb/fine_red_wine_picture_2_167120.jpg",
      "https://previews.123rf.com/images/kayros/kayros1109/kayros110900032/10617508-still-life-with-wine-bottles-glasses-grapes-and-cheese.jpg"
    ],
    idx: 0
  };

  handleNext = () => {
    this.setState({
      idx: this.state.idx + 1
    });
  };

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              idx: this.state.idx - 1
            });
          }}
        >
          previous
        </button>
        <img
          style={{
            width: 400,
            height: 400,
          }}
          src={this.state.images[this.state.idx]}
        />
        <button onClick={this.handleNext}>next</button>
      </div>
    );
  }
}


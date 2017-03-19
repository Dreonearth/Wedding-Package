import React, { Component } from 'react';

export class BoxPackage extends Component {
  render() {
    let {imgPack , namePack} = this.props;
    return (
      <div className="container">
        <img src={imgPack}/>
        <h3>{namePack}</h3>
      </div>
    );
  }
}


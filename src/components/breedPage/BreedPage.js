// here will be page of specific breed with descrition and photo

import React, { Component } from 'react';

class BreedPage extends Component {
  render() {

    console.log(this.props)
    console.log(this.props.match.params.id)
    return (

        <div className="BreedPage">
          123123213
        </div>

    );
  }
}

export default BreedPage;

// here will be page of specific breed with descrition and photo

import React, { Component } from 'react';

import BreedPageHeader from './breedPageComponents/BreedPageHeader';
import BreedPageBody from './breedPageComponents/BreedPageBody';
import BreedPageFooter from './breedPageComponents/BreedPageFooter';


class BreedPage extends Component {
  render() {

    console.log(this.props)
    console.log(this.props.match.params.id)
    return (

      <div className="BreedPage">
        <BreedPageHeader />
        <BreedPageBody name={this.props.match.params.id}/>
        <BreedPageFooter />
      </div>

    );
  }
}

export default BreedPage;

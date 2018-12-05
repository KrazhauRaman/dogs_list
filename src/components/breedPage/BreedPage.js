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
        <BreedPageHeader name={this.props.match.params.id}/>
        <BreedPageBody name={this.props.match.params.id} picUrl={"https://images.dog.ceo/breeds/frise-bichon/stevebaxter_bichon_frise.jpg"}/>
        <BreedPageFooter name={this.props.match.params.id} picUrl={"https://images.dog.ceo/breeds/frise-bichon/stevebaxter_bichon_frise.jpg"}/>
      </div>

    );
  }
}

export default BreedPage;

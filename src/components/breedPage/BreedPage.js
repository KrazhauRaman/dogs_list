// here will be page of specific breed with descrition and photo

import React, { Component } from 'react';

import BreedPageHeader from './breedPageComponents/BreedPageHeader';
import BreedPageBody from './breedPageComponents/BreedPageBody';
import BreedPageFooter from './breedPageComponents/BreedPageFooter';

import { connect } from 'react-redux';


class BreedPage extends Component {


  shouldComponentUpdate(props) {
    return props.isPagesCreationCompleted;
  }

  composeBreedPageData() {
    const id = this.props.match.params.id,
      breedPages = this.props.breedPages;

    let breedPage;

    for (let i = 0; i < breedPages.length; i++) {
      if (breedPages[i].id === id) {
        breedPage = breedPages[i];

        (i > 0)
          ?
          breedPage.prevId = breedPages[i - 1].id
          :
          breedPage.prevId = null;

        (i < breedPages.length - 1)
          ?
          breedPage.nextId = breedPages[i + 1].id
          :
          breedPage.nextId = null;
      }
    }

    return <React.Fragment>
      <BreedPageHeader prevId={breedPage.prevId} nextId={breedPage.nextId} />
      <BreedPageBody name={breedPage.name} picUrl={breedPage.breedPics[0]} />
      <BreedPageFooter name={breedPage.name} picUrls={breedPage.breedPics} />
    </React.Fragment>


  }

  render() {



    return (

      (this.props.isPagesCreationCompleted)
        ?
        <div className="BreedPage">
          {this.composeBreedPageData()}
        </div>
        :
        <div className="BreedPage">
          Loading
      </div>

    );
  }
}

const getDataFromStore = store => ({
  breedPages: store.breedPage.breedPages,
  isPagesCreationCompleted: store.breedPage.isPagesCreationCompleted,
})


export default connect(getDataFromStore)(BreedPage);

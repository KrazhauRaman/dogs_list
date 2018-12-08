import React, { Component } from 'react';
import BreedPageHeader from './breedPageComponents/BreedPageHeader';
import BreedPageBody from './breedPageComponents/BreedPageBody';
import BreedPageFooter from './breedPageComponents/BreedPageFooter';
import { connect } from 'react-redux';


const breedPageStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const loadingStyle = {
  textAlign: 'center',
  paddingTop: '50px',
};


class BreedPage extends Component {

  shouldComponentUpdate(props) {
    return props.isPagesCreationCompleted;
  }

  componentDidMount() { //to fix problem when scroll position passed from main page
    window.scrollTo(0, 0);
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

        break; // we need only to find a page, when it found there no need to countinue "for" loop
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
      (this.props.isPagesCreationCompleted) //if user decides to load page directly
        ?
        <div style={breedPageStyle}>
          {this.composeBreedPageData()}
        </div>
        :
        <div style={loadingStyle}>
          <h1>
            Loading
          </h1>
        </div>
    );
  }
}

const getDataFromStore = store => ({
  breedPages: store.breedPage.breedPages,
  isPagesCreationCompleted: store.breedPage.isPagesCreationCompleted,
})


export default connect(getDataFromStore)(BreedPage);

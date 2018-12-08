import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BreedPageHeader from './breedPageComponents/BreedPageHeader';
import BreedPageBody from './breedPageComponents/BreedPageBody';
import BreedPageFooter from './breedPageComponents/BreedPageFooter';


const breedPageStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const loadingStyle = {
  textAlign: 'center',
  paddingTop: '50px',
};


class BreedPage extends Component {
  componentDidMount() { // to fix problem when scroll position passed from main page
    // eslint-disable-next-line no-undef
    window.scrollTo(0, 0);
  }

  shouldComponentUpdate(props) {
    return props.isPagesCreationCompleted;
  }

  composeBreedPageData() {
    const { match: { params: { id } }, breedPages } = this.props;

    let breedPage;

    for (let i = 0; i < breedPages.length; i += 1) {
      if (breedPages[i].id === id) {
        breedPage = breedPages[i];

        // eslint-disable-next-line no-unused-expressions
        (i > 0)
          ? breedPage.prevId = breedPages[i - 1].id
          : breedPage.prevId = null;
        // eslint-disable-next-line no-unused-expressions
        (i < breedPages.length - 1)
          ? breedPage.nextId = breedPages[i + 1].id
          : breedPage.nextId = null;

        break; // we need only to find a page, when it found there no need to countinue "for" loop
      }
    }

    return (
      <React.Fragment>
        <BreedPageHeader prevId={breedPage.prevId} nextId={breedPage.nextId} />
        <BreedPageBody name={breedPage.name} picUrl={breedPage.breedPics[0]} />
        <BreedPageFooter name={breedPage.name} picUrls={breedPage.breedPics} />
      </React.Fragment>
    );
  }


  render() {
    const { isPagesCreationCompleted } = this.props;
    return (
      // if user decides to load page directly
      (isPagesCreationCompleted)
        ? (
          <div style={breedPageStyle}>
            {this.composeBreedPageData()}
          </div>
        )
        : (
          <div style={loadingStyle}>
            <h1>
              Loading
            </h1>
          </div>
        )
    );
  }
}

const getDataFromStore = store => ({
  breedPages: store.breedPage.breedPages,
  isPagesCreationCompleted: store.breedPage.isPagesCreationCompleted,
});

export default connect(getDataFromStore)(BreedPage);


BreedPage.propTypes = {
  breedPages: PropTypes.arrayOf(PropTypes.object),
  isPagesCreationCompleted: PropTypes.bool,
  match: {
    params: {
      id: PropTypes.string,
    },
  },
};

BreedPage.defaultProps = {
  breedPages: [{}],
  isPagesCreationCompleted: false,
  match: {
    params: {
      id: 'ADDID',
    },
  },
};

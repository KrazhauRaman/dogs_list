import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BreedCard from './breedCard/BreedCard';


const listOfBreedsStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

const listOfBreedsWindowStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};


class ListOfBreeds extends Component {
  getListOfBreedCards() {
    const listOfBreedCards = [];

    const { breedPages } = this.props;

    for (let i = 0; i < breedPages.length; i += 1) {
      listOfBreedCards.push(
        <BreedCard
          key={i}
          id={breedPages[i].id}
          name={breedPages[i].name}
          picUrl={breedPages[i].breedPics[0]}
        />,
      );
    }
    return listOfBreedCards;
  }

  render() {
    return (
      <div style={listOfBreedsWindowStyle}>
        <h1>List of Breeds</h1>
        <div style={listOfBreedsStyle}>
          {this.getListOfBreedCards()}
        </div>
      </div>
    );
  }
}

const getDataFromStore = store => ({
  breedPages: store.breedPage.breedPages,
  isPagesCreationCompleted: store.breedPage.isPagesCreationCompleted,
});

export default connect(getDataFromStore)(ListOfBreeds);


ListOfBreeds.propTypes = {
  breedPages: PropTypes.arrayOf(PropTypes.object),
};

ListOfBreeds.defaultProps = {
  breedPages: [{}],
};

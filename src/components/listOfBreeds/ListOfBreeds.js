// here will list of all breeds
import React, { Component } from 'react';
import BreedCard from './breedCard/BreedCard';
import { connect } from 'react-redux';

import { getAllBreeds, getImagesOfDogs } from '../../serverRequests/getData';

class ListOfBreeds extends Component {


    getListOfBreedCards() {
        const listOfBreedCards = [],
            { breedPages } = this.props;

        for (let i = 0; i < breedPages.length; i++) {
            listOfBreedCards.push(<BreedCard key={i} name={breedPages[i].name} picUrl={breedPages[i].breedPics[0]} />);
        }
        return listOfBreedCards;
    }

    render() {
        console.log(this.props.breedPages)
        return (
            <div className="ListOfBreeds">
                <header>List of Breeds</header>

                {this.getListOfBreedCards()}
            </div>
        );
    }
}


const getDataFromStore = store => ({
    // viewport: store.viewport,
    breedPages: store.breedPage.breedPages,
    isPagesCreationCompleted: store.breedPage.isPagesCreationCompleted,
})

const setDataToStore = dispatch => ({
    // changeViewport: (changedViewport) => dispatch(changeViewport(changedViewport)),
    // fetchWeatherData: () => dispatch(fetchWeatherData())
})


export default connect(getDataFromStore, setDataToStore)(ListOfBreeds);


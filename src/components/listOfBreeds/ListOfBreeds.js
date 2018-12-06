// here will list of all breeds
import React, { Component } from 'react';
import BreedCard from './breedCard/BreedCard';
import { connect } from 'react-redux';


class ListOfBreeds extends Component {


    getListOfBreedCards() {
        const listOfBreedCards = [],
            { breedPages } = this.props;

        for (let i = 0; i < breedPages.length; i++) {
            listOfBreedCards.push(<BreedCard key={i} id={breedPages[i].id} name={breedPages[i].name} picUrl={breedPages[i].breedPics[0]} />);
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
    breedPages: store.breedPage.breedPages,
    isPagesCreationCompleted: store.breedPage.isPagesCreationCompleted,
})

export default connect(getDataFromStore)(ListOfBreeds);


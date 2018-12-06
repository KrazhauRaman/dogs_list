// here will list of all breeds
import React, { Component } from 'react';
import BreedCard from './breedCard/BreedCard';

import { getAllBreeds, getImagesOfDogs } from '../../serverRequests/getData';

class ListOfBreeds extends Component {


    getListOfBreedCards() {
        const listOfBreedCards = [];
        for (let i = 0; i < 10; i++) {
            listOfBreedCards.push(<BreedCard key={i} name={i} picUrl={"https://images.dog.ceo/breeds/frise-bichon/stevebaxter_bichon_frise.jpg"} />);
        }
        return listOfBreedCards;
    }


    getData() {
        getAllBreeds().then(result => console.log(result.message))
       console.log( );
    }

    getDataPhoto() {
        getImagesOfDogs("hound", 4, "afghan" ).then(result => console.log(result.message))
       console.log( );
    }



    render() {
        return (
            <div className="ListOfBreeds">
                <header>List of Breeds</header>
                <button onClick={this.getData}>get breeds</button>
                <button onClick={this.getDataPhoto}>get photose</button>
                {this.getListOfBreedCards()}
            </div>
        );
    }
}

export default ListOfBreeds;

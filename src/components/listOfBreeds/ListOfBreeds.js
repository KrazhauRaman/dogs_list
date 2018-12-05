// here will list of all breeds
import React, { Component } from 'react';
import BreedCard from './breedCard/BreedCard';



class ListOfBreeds extends Component {


    getListOfBreedCards() {
        const listOfBreedCards = [];
        for (let i = 0; i < 10; i++) {
            listOfBreedCards.push(<BreedCard key={i} name={i} picUrl={"https://images.dog.ceo/breeds/frise-bichon/stevebaxter_bichon_frise.jpg"}/>);
        }
        console.log(listOfBreedCards);
        return listOfBreedCards;
    }


    render() {
        return (
            <div className="ListOfBreeds">
                <header>List of Breeds</header>
                {this.getListOfBreedCards()}
            </div>
        );
    }
}

export default ListOfBreeds;

import { combineReducers } from 'redux';
import breedPage from './breedPage';
import listOfBreeds from './listOfBreeds';


export default combineReducers({
    breedPage,
    listOfBreeds,
});
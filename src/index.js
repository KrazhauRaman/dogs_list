import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Route, Switch, HashRouter } from "react-router-dom";
import ListOfBreeds from './components/listOfBreeds/ListOfBreeds';
import BreedPage from './components/breedPage/BreedPage';


ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path="/" exact component={ListOfBreeds} />
                <Route path="/breed-page/:id" component={BreedPage} />
            </Switch>
        </HashRouter>
    </Provider>
    , document.getElementById('root'));

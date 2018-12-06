import * as Actions from '../actions/actionConstants';

const initialState = {
    listOfBreeds: {},
};

export default function handle(state = initialState, action) {
    switch (action.type) {

        case Actions.SET_ALL_BREEDS:
            {
                return {
                    ...state,
                    listOfBreeds: action.listOfBreeds,
                };
            }

        default:
            return state;
    }
}
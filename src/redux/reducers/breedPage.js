import * as Actions from '../actions/actionConstants';

const initialState = {
    breedPages: [],
};

export default function handle(state = initialState, action) {
    switch (action.type) {

        case Actions.ADD_BREED_PAGE:
            {
              
                const newBreedPages = [...state.breedPages];
                newBreedPages.push(action.breedPage);

                console.log(newBreedPages)

                return {
                    ...state,
                    breedPages: newBreedPages,
                };
            }

        default:
            return state;
    }
}
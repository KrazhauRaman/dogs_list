import * as Actions from '../actions/actionConstants';


const initialState = {
  breedPages: [],
  isPagesCreationCompleted: false,
};

export default function handle(state = initialState, action) {
  switch (action.type) {
    case Actions.ADD_BREED_PAGE:
    {
      const newBreedPages = [...state.breedPages];
      newBreedPages.push(action.breedPage);

      return {
        ...state,
        breedPages: newBreedPages,
      };
    }

    case Actions.SET_FETCHING_COMPLETE:
    {
      return {
        ...state,
        isPagesCreationCompleted: true,
      };
    }

    default:
      return state;
  }
}

import * as Actions from '../actions/actionConstants';

const initialState = {
    
};

export default function handle(state = initialState, action) {
    switch (action.type) {

        case Actions.SWITCH_SORTING:
            {
                let newSortByTime, newDirectionUp,
                    { sortByTime, directionUp } = state.sorting;

                if (action.sortByTime === sortByTime) {
                    newSortByTime = sortByTime;
                    newDirectionUp = !directionUp;
                }
                else {
                    newSortByTime = !sortByTime;
                    newDirectionUp = directionUp;
                };

                return {
                    ...state,
                    sorting: {
                        sortByTime: newSortByTime,
                        directionUp: newDirectionUp,
                    },
                };
            }

        default:
            return state;
    }
}
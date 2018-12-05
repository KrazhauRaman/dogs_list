import * as Actions from './actionConstants';

export function switchNewTaskVisibility() {
    return {
        type: Actions.SWITCH_NEW_TASK_VISIBILITY,
    };
}

export function setSortingByTime(sortByTime) {
    return {
        type: Actions.SWITCH_SORTING,
        sortByTime: sortByTime,
    };
}
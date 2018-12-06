import { call, put, select } from 'redux-saga/effects';
import { getAllBreeds, getImagesOfDogs } from '../../serverRequests/getData';
import * as Actions from '../actions/actionConstants';



export function* getListOfBreeds() {
    yield call(fetchAndSaveListOfBreeds);
    yield call(createBreedPagesAndFetchPhotoUrls);
};

function* fetchAndSaveListOfBreeds() {
    try {

        const breedData = yield call(getAllBreeds);

        yield put({ type: Actions.SET_ALL_BREEDS, listOfBreeds: breedData.message });



    } catch (error) {

        yield console.log("Error on fetching dogs breeds data", error);
    }
}


function* createBreedPagesAndFetchPhotoUrls() {
    try {

        const breedData = yield select(state => state.listOfBreeds.listOfBreeds);

        let i = 0;

        // getting photoes for all breeds and  subbreeds
        for (let breed in breedData) {


            if (breedData[breed].length > 0) {
                for (let subBreed in breedData[breed]) {
                    const name = breed + " " + breedData[breed][subBreed];
                    const id = breed + "-" + breedData[breed][subBreed];

                    const breedPics = yield call(() => {
                        return getImagesOfDogs(breed, 5, breedData[breed][subBreed]);
                    });

                    yield put({ type: Actions.ADD_BREED_PAGE, breedPage: { id: id, name: name, breedPics: breedPics.message } });
                }
                i++;
            }
            else {
                let breedPics = yield call(() => {
                    return getImagesOfDogs(breed, 5);
                });

                yield put({ type: Actions.ADD_BREED_PAGE, breedPage: { id: breed, name: breed, breedPics: breedPics.message } });

            }
            if (i === 2) {
                break;
            }
        }


        yield put({ type: Actions.SET_FETCHING_COMPLETE });



    } catch (error) {

        yield console.log("Error on  fetching photoes", error);
    }
}
import { call, put, takeLatest, select } from 'redux-saga/effects';
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
        yield console.log(breedData)

        // getting photoes for all breeds and  subbreeds
        for (let breed in breedData) {


            if (breedData[breed].length > 0) {

                yield console.log(breedData[breed])

                for (let subBreed in breedData[breed]) {
                    yield console.log(breed + " " + breedData[breed][subBreed])

                    let name = breed + " " + breedData[breed][subBreed];

                    let breedPics = yield call(() => {
                        console.log(breed)
                        return getImagesOfDogs(breed, 5, breedData[breed][subBreed])
                    });

                    yield console.log(breedPics.message)

                    yield put({ type: Actions.ADD_BREED_PAGE, breedPage: { name: name, breedPics: breedPics.message } });
                }
            }
            else {
                yield console.log(breed)
                let breedPics = yield call(() => {
                    console.log(breed)
                    return getImagesOfDogs(breed, 5)
                });
                yield console.log(breedPics.message)

                yield put({ type: Actions.ADD_BREED_PAGE, breedPage: { name: breed, breedPics: breedPics.message } });
            }
        }

        // yield put({ type: Actions.SET_ALL_BREEDS, listOfBreeds: breedData.message });

        yield put({ type: Actions.ADD_BREED_PAGE, breedPage: 22 });



    } catch (error) {

        yield console.log("Error on  fetching photoes", error);
    }
}
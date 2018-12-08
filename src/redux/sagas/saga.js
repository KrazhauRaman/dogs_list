import { call, put, select } from 'redux-saga/effects';
import { getAllBreeds, getImagesOfDogs } from '../../serverRequests/getData';
import * as Actions from '../actions/actionConstants';


function* fetchAndSaveListOfBreeds() {
  try {
    const breedData = yield call(getAllBreeds);
    yield put({ type: Actions.SET_ALL_BREEDS, listOfBreeds: breedData.message });
  } catch (error) {
    yield console.log('Error on fetching dogs breeds data', error);
  }
}


function* createBreedPagesAndFetchPhotoUrls() {
  try {
    const breedData = yield select(state => state.listOfBreeds.listOfBreeds);

    // here can be changed count of images for dogs pages (1st for main pic)
    const countOfImages = 11;

    // getting photoes for all breeds and  subbreeds
    // if dog have subbreeds their names will convert to breed+subbreed

    const breedKeys = Object.keys(breedData);
    const breedValues = Object.values(breedData);

    for (let i = 0; i < breedKeys.length; i += 1) {
      if (breedValues[i].length > 0) {
        for (let j = 0; j < breedValues[i].length; j += 1) {
          const name = `${breedKeys[i]} ${breedValues[i][j]}`;
          const id = `${breedKeys[i]}-${breedValues[i][j]}`;

          const breedPics = yield call(
            () => getImagesOfDogs(breedKeys[i], countOfImages, breedValues[i][j]),
          );

          yield put(
            {
              type: Actions.ADD_BREED_PAGE,
              breedPage: { id, name, breedPics: breedPics.message },
            },
          );
        }
      } else {
        const breedPics = yield call(() => getImagesOfDogs(breedKeys[i], countOfImages));

        yield put(
          {
            type: Actions.ADD_BREED_PAGE,
            breedPage: { id: breedKeys[i], name: breedKeys[i], breedPics: breedPics.message },
          },
        );
      }
    }

    // letting app know that all fetching are finished
    yield put({ type: Actions.SET_FETCHING_COMPLETE });
  } catch (error) {
    yield console.log('Error on  fetching photoes', error);
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* getListOfBreeds() {
  yield call(fetchAndSaveListOfBreeds);
  yield call(createBreedPagesAndFetchPhotoUrls);
}

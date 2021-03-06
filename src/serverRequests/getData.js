export function getAllBreeds() {
  // eslint-disable-next-line no-undef
  return fetch(
    'https://dog.ceo/api/breeds/list/all',
    {
      method: 'GET',
      mode: 'cors',
    },
  )
    .then(result => result.json());
}


export function getImagesOfDogs(breed, quantity = 1, subBreed = null) {
  let url = `https://dog.ceo/api/breed/${breed}`;

  if (subBreed) {
    url += `/${subBreed}`;
  }

  url += `/images/random/${quantity}`;
  // eslint-disable-next-line no-undef
  return fetch(
    url,
    {
      method: 'GET',
      mode: 'cors',
    },
  )
    .then(result => result.json());
}

export function getAllBreeds() {
    return fetch(
        `https://dog.ceo/api/breeds/list/all`
        ,
        {
            method: "GET",
            mode: "cors",
        })
        .then(result => result.json());
};


export function getImagesOfDogs(breed, quantity = 1, subBreed = null) {

    let url = `https://dog.ceo/api/breed/${breed}`;

    if (subBreed) {
        url += `/${subBreed}`;
    }

    url += `/images/random/${quantity}`;

    return fetch(
        url
        ,
        {
            method: "GET",
            mode: "cors",
        })
        .then(result => result.json());
};
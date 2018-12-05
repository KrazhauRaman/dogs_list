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
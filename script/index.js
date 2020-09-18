'use strict';
import startProgram from './start.js';

const loaderPopup = document.querySelector('.loader__popup');

const getData = url => fetch(url);

setTimeout(() => {
    getData('./db_cities.json')
    .then(response => {
        if (response.status !== 200) {
            throw new Error(`Status ${response.status}`);
        }

        return (response.json());
    })
    .then(data => {
        startProgram(data);
        loaderPopup.style.display = 'none';
    })
    .catch(error => console.error(error));
}, 5000);


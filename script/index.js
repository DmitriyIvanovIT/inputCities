'use strict';
import startProgram from './start.js';

const loaderPopup = document.querySelector('.loader__popup');

const getData = url => fetch(url);

let localLang,
dataSave = JSON.parse(localStorage.getItem('savesCitiesDB'));

const createLocalLang = () => {
    let item = prompt('Введите локализацию("RU", "EN", "DE")');
    localStorage.removeItem('savesCitiesDB');
    dataSave = JSON.parse(localStorage.getItem('savesCitiesDB'));

    if (item !== null) {
        item = item.toUpperCase().trim();
        if(item !== 'RU' &&
        item !== 'EN' &&
        item !== 'DE') {
            createLocalLang();
        } else {
            setCookie('lang', item, 2030, 12, 31);
            saveLang(document.cookie.split('; '));

        }
    } else {
        createLocalLang();
    }
}, setCookie = (key, value, year, month, day, path, domain, secure) => {
    let cookieStr = `${key}=${value}`;

    if (year) {
        const expires = new Date(year, month, day);
        cookieStr += `; expires=${expires.toGMTString()}`;
    }

    cookieStr += path ? `; path=${path}` : '';
    cookieStr += domain ? `; domain=${domain}` : '';
    cookieStr += secure ? `; secure` : '';

    document.cookie = cookieStr;
}, saveLang = arr => {
    let strCookie = arr.filter(item => item.startsWith('lang=')).join('');
        localLang = strCookie.split('=')[1];
        
        if (!dataSave) {
            getData('./db_cities.json')
            .then(response => {
                if (response.status !== 200) {
                    throw new Error(`Status ${response.status}`);
                }
        
                return (response.json());
            })
            .then(data => {
                dataSave = data[localLang];
                sortArr(dataSave);
                startProgram(dataSave);
                loaderPopup.style.display = 'none';
                saveLocalStorage();
            })
            .catch(error => console.error(error));
        } else {
            loaderPopup.style.display = 'none';
            sortArr(dataSave);
            startProgram(dataSave);
            
        }
}, 
checkLang = () => {
    let arr = document.cookie.split('; ');
    if (arr.some(item => item.startsWith('lang='))) {
        saveLang(arr);
    } else {
        createLocalLang();
    }
}, saveLocalStorage = () => {
    localStorage.setItem('savesCitiesDB', JSON.stringify(dataSave));
}, sortArr = arr => {
    if (localLang === 'RU') {
        let index = dataSave.findIndex(item => item.country === 'Россия');
        dataSave.unshift(...dataSave.splice(index, 1));
    } else if (localLang === 'EN') {
        let index = dataSave.findIndex(item => item.country === 'United Kingdom');
        dataSave.unshift(...dataSave.splice(index, 1));
    } else if (localLang === 'DE') {
        let index = dataSave.findIndex(item => item.country === 'Deutschland');
        dataSave.unshift(...dataSave.splice(index, 1));
    }
};

checkLang();

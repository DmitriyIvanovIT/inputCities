'use strict';
// Переменные
const button = document.querySelector('.button'),
    selectCities = document.getElementById('select-cities'),
    listDefault = document.querySelector('.dropdown-lists__list--default'),
    listSelect = document.querySelector('.dropdown-lists__list--select'),
    listAutocomplete = document.querySelector('.dropdown-lists__list--autocomplete'),
    label = document.querySelector('label'),
    closeButton = document.querySelector('.close-button');

// Объект с данными
const data = {
    "RU": [{
            "country": "Россия",
            "count": "144500000",
            "cities": [{
                    "name": "Рязань",
                    "count": "538962",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
                },
                {
                    "name": "Москва",
                    "count": "12615882",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
                },
                {
                    "name": "Санкт-Петербург",
                    "count": "5383968",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Краснодар",
                    "count": "918145",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
                },
                {
                    "name": "Екатеринбург",
                    "count": "1484456",
                    "link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Ростов-на-Дону",
                    "count": "1130305",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
                },
                {
                    "name": "Воронеж",
                    "count": "1054537",
                    "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
                }
            ]

        },
        {
            "country": "Германия",
            "count": 82175684,
            "cities": [{
                    "name": "Берлин",
                    "count": "3613495",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
                },
                {
                    "name": "Мюнхен",
                    "count": "1456039",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
                },
                {
                    "name": "Франкфурт-на-Майне",
                    "count": "736414",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
                },
                {
                    "name": "Кёльн",
                    "count": "1080394",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
                }
            ]
        },
        {
            "country": "Англия",
            "count": 53012456,
            "cities": [{
                    "name": "Лондон",
                    "count": " 8869898",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
                },
                {
                    "name": "Манчестер",
                    "count": "545500",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
                },
                {
                    "name": "Эдинбург",
                    "count": "488100",
                    "link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Бристоль",
                    "count": "567111",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
                }
            ]

        }
    ],
    "EN": [{
            "country": "Russia",
            "count": "144500000",
            "cities": [{
                    "name": "Ryazan",
                    "count": "538962",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
                },
                {
                    "name": "Moscow",
                    "count": "12615882",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
                },
                {
                    "name": "St Petersburg",
                    "count": "5383968",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Krasnodar",
                    "count": "918145",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
                },
                {
                    "name": "Yekaterinburg",
                    "count": "1484456",
                    "link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Rostov-on-Don",
                    "count": "1130305",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
                },
                {
                    "name": "Voronezh",
                    "count": "1054537",
                    "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
                }
            ]

        },
        {
            "country": "Germany",
            "count": 82175684,
            "cities": [{
                    "name": "Berlin",
                    "count": "3613495",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
                },
                {
                    "name": "Munich",
                    "count": "1456039",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
                },
                {
                    "name": "frankfurt",
                    "count": "736414",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
                },
                {
                    "name": "Cologne",
                    "count": "1080394",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
                }
            ]
        },
        {
            "country": "United Kingdom",
            "count": 53012456,
            "cities": [{
                    "name": "London",
                    "count": " 8869898",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
                },
                {
                    "name": "Manchester",
                    "count": "545500",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
                },
                {
                    "name": "Edinburgh",
                    "count": "488100",
                    "link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Bristol",
                    "count": "567111",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
                }
            ]

        }
    ],
    "DE": [{
            "country": "Russland",
            "count": "144500000",
            "cities": [{
                    "name": "Ryazan",
                    "count": "538962",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
                },
                {
                    "name": "Moskau",
                    "count": "12615882",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
                },
                {
                    "name": "Saint Petersburg",
                    "count": "5383968",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Krasnodar",
                    "count": "918145",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
                },
                {
                    "name": "Jekaterinburg",
                    "count": "1484456",
                    "link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Rostow",
                    "count": "1130305",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
                },
                {
                    "name": "Woronesch",
                    "count": "1054537",
                    "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
                }
            ]

        },
        {
            "country": "Deutschland",
            "count": 82175684,
            "cities": [{
                    "name": "Berlin",
                    "count": "3613495",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
                },
                {
                    "name": "München",
                    "count": "1456039",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
                },
                {
                    "name": "Frankfurt",
                    "count": "736414",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
                },
                {
                    "name": "Köln",
                    "count": "1080394",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
                }
            ]
        },
        {
            "country": "England",
            "count": 53012456,
            "cities": [{
                    "name": "London",
                    "count": " 8869898",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
                },
                {
                    "name": "Manchester",
                    "count": "545500",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
                },
                {
                    "name": "Edinburgh",
                    "count": "488100",
                    "link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Bristol",
                    "count": "567111",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
                }
            ]

        }
    ]
};

button.style.pointerEvents = 'none';

listDefault.style.display = 'none';

// Функции
const renderListDefault = () => {
        const block = clearBlock(listDefault);

        data['RU'].forEach(item => {
            const countryBlock = createCounrtyBlock();
            item.cities.sort((a, b) => {
                return b.count - a.count;
            });
            countryBlock.insertAdjacentHTML('beforeend', `
            <div class="dropdown-lists__total-line">
                <div class="dropdown-lists__country">${item.country}</div>
                <div class="dropdown-lists__count">${item.count}</div>
            </div>
        `);

            item.cities.forEach((city, i) => {
                if (i < 3) {
                    countryBlock.insertAdjacentHTML('beforeend', `
                        <div class="dropdown-lists__line" data-link="${city.link}">
                            <div class="dropdown-lists__city${i === 0 ? ' dropdown-lists__city--ip' : ''}">
                                ${city.name}
                            </div>
                            <div class="dropdown-lists__count">${city.count}</div>
                        </div>
                    `);
                }
            });

            block.append(countryBlock);
        });

    },
    renderListSelect = country => {
        const block = clearBlock(listSelect);

        data['RU'].forEach(item => {
            if (item.country === country) {
                const countryBlock = createCounrtyBlock();

                countryBlock.insertAdjacentHTML('beforeend', `
                <div class="dropdown-lists__total-line">
                    <div class="dropdown-lists__country">${item.country}</div>
                    <div class="dropdown-lists__count">${item.count}</div>
                </div>
            `);

                item.cities.forEach((city, i) => {
                    countryBlock.insertAdjacentHTML('beforeend', `
                    <div class="dropdown-lists__line" data-link="${city.link}">
                        <div class="dropdown-lists__city${i === 0 ? ' dropdown-lists__city--ip' : ''}">
                            ${city.name}
                        </div>
                        <div class="dropdown-lists__count">${city.count}</div>
                    </div>
                `);
                });

                block.append(countryBlock);

            }
        });
    },
    showCity = value => {
        const block = clearBlock(listAutocomplete);
        const countryBlock = createCounrtyBlock();
        block.append(countryBlock);
        data['RU'].forEach(item => {
            item.cities.forEach(city => {
                const fixItem = city.name.toLowerCase();

                block.append(countryBlock);
                if (fixItem.startsWith(value.toLowerCase())) {

                    countryBlock.insertAdjacentHTML('beforeend', `
                        <div class="dropdown-lists__line" data-link="${city.link}">
                            <div class="dropdown-lists__city" >${city.name}</div>
                            <div class="dropdown-lists__count">${item.country}</div>
                        </div>
                    `);

                }
            });
        });

        if (countryBlock.innerHTML === '') {
            countryBlock.innerHTML = `
                <div class="dropdown-lists__line">
                    <div class="dropdown-lists__city">Ничего не найдено</div>
                </div>
            `;
        }
    },
    clearBlock = select => {
        const block = select.querySelector('.dropdown-lists__col');
        block.textContent = '';
        return block;
    },
    createCounrtyBlock = () => {
        const countryBlock = document.createElement('div');
        countryBlock.classList.add('dropdown-lists__countryBlock');

        return countryBlock;
    },
    changeLabel = () => {
        label.style.top = '-25px';
        label.style.left = '0';
        label.style.color = '#00416A';
    },
    resetSelect = () => {
        closeSelect();
        label.style.top = '';
        label.style.left = '';
        label.style.color = '';
        closeButton.style.display = '';
        button.style.pointerEvents = 'none';
        selectCities.value = '';
    },
    closeSelect = () => {
        listDefault.style.display = 'none';
        listAutocomplete.style.display = '';
        listSelect.style.display = '';
    };

// Обработчики событий
selectCities.addEventListener('click', () => {
    listDefault.style.display = '';
    listSelect.style.display = '';
    listAutocomplete.style.display = '';
    renderListDefault();
});

listDefault.addEventListener('click', event => {
    let target = event.target;
    if (target.closest('.dropdown-lists__total-line')) {
        let country = target.closest('.dropdown-lists__total-line').querySelector('.dropdown-lists__country').textContent;
        selectCities.value = country;
        listDefault.style.display = 'none';
        renderListSelect(country);
        listSelect.style.display = 'flex';
        listAutocomplete.style.display = '';
    }
});

listSelect.addEventListener('click', event => {
    let target = event.target;
    if (target.closest('.dropdown-lists__total-line')) {
        listDefault.style.display = '';
        listSelect.style.display = '';
    }
});

selectCities.addEventListener('input', () => {
    if (selectCities.value.trim() !== '') {
        listDefault.style.display = 'none';
        listSelect.style.display = '';
        showCity(selectCities.value);
        listAutocomplete.style.display = 'flex';
        closeButton.style.display = 'block';
        changeLabel();
    } else {
        resetSelect();
        listDefault.style.display = '';
    }

});

document.body.addEventListener('click', event => {
    const target = event.target;
    if (target.closest('.dropdown-lists__total-line')) {
        const parent = target.closest('.dropdown-lists__total-line'),
            country = parent.querySelector('.dropdown-lists__country').textContent.trim();
        selectCities.value = country;
        changeLabel();
        closeButton.style.display = 'block';
        button.style.pointerEvents = 'none';
    }

    if (target.closest('.dropdown-lists__line')) {
        const parent = target.closest('.dropdown-lists__line'),
            city = parent.querySelector('.dropdown-lists__city').textContent.trim();

        if (city !== 'Ничего не найдено') {
            selectCities.value = city;
            changeLabel();
            button.href = parent.dataset.link;
            button.style.pointerEvents = '';
            closeButton.style.display = 'block';
        }
    }

    if (!target.closest('.dropdown-lists__total-line') && target !== selectCities) {
        closeSelect();
    }
});

closeButton.addEventListener('click', resetSelect);
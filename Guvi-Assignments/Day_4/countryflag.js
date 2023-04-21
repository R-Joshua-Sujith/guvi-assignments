// Display all the country flags in the console

const getCountryFlag = function () {
    fetch(`https://restcountries.com/v3.1/all`).then(function (response) {

        return response.json();
    }).then(function (data) {
        for (let i = 0; i < data.length; i++)
            console.log(`Country Flag: ${data[i].flag}`);
    })
}

getCountryFlag();
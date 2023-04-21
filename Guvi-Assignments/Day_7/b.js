const getCountryData = function () {
    fetch(`https://restcountries.com/v3.1/all`).then(function (response) {

        return response.json();
    }).then(function (data) {
        data.filter(function (data) {
            if (data.population <= 200000) {
                console.log(data.name.official);
            }
        })
    })
}

getCountryData();
//Display all country names,region,subregion,population

const getCountryData = function () {
    fetch(`https://restcountries.com/v3.1/all`).then(function (response) {

        return response.json();
    }).then(function (data) {
        for (let i = 0; i < data.length; i++) {
            console.log(`Country :${data[i].name.official} \nRegion: ${data[i].region}\nSubRegion: ${data[i].subregion} \nPopulation:${data[i].population}`);
            console.log('\n');
        }
    })

}

getCountryData();
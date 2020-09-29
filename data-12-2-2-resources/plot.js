console.log(cityGrowths);

var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 

var topFiveCities = sortedCities.slice(0,5);

var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
};
var data = [trace];

var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population Growth, 2016-2017"}
};
Plotly.newPlot("bar-plot", data, layout);

// NEED TO BE EDIT BEFORE RUN
var sortedCities2 = cityGrowths.sort((a,b) =>
a.population - b.population).reverse();

var topFiveCities2 = soredCities2.slice(0,5);

var topFiveCityPopulation = topFiveCities2.map(population => parseInt(population.Population));

var trace2 = {
    x: topFiveCityNames,
    y: topFiveCityPopulation,
    type: "bar"
};
var data2 = [trace2];

var layout2 = {
    title: "Largest Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population"}
};
Plotly.newPlot("bar-plot", data2, layout2);
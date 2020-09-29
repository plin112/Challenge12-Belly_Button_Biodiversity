Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

var trace = [{
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
}];

var layout = {
    title: "Luncheon Survey"
};

Plotly.newPlot("plotArea", [trace], layout);

var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};
Plotly.newPlot("plotArea", trace, layout);

var trace = [{
    x: ["nonalcoholic beer", "nonalcoholic wine", 
        "nonalcoholic martini", "nonalcoholic margarita", 
        "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", 
        "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
}];

var layout = {
    xaxis: {title: "Drinks"},
    yaxis: {title: "Percent of Drinks Ordered"}
}

Plotly.newPlot("plotArea", trace, layout);

var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
};
var data = [trace];
var layout = {
    title: "'Bar' Chart",
};
Plotly.newPlot("plotArea", data, layout);

var numbers = [0,2,4,6,8];
var plusFive = numbers.map(function(num){
    return num + 5;
});
console.log(plusFive);

var familyAge = [2,3,39,37,9];
var olderThanFive = familyAge.filter(function(age){
    return age > 5;
});
console.log(olderThanFive)

var familyAge = [3,2,39,37,9];
sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
anotherElement);
console.log(sortedAge);

var familyAge = [3,2,39,37,9];
sortedAge = familyAge.sort((a,b) => b - a);
console.log(sortedAge);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
slice = words.slice(0,4);
console.log(slice);
const button2019 = document.querySelector('#button2019');
const button2021 = document.querySelector("#button2021");
const buttonBoth = document.querySelector("#buttonBoth");
const barChart = document.querySelector("#barChart");
function image(location) {
    barChart.innerHTML = `<img src="${location}" alt="stats" width="500" height="300"></img>`;
}
button2019.onclick = function() {
    image("pets2019.png");
};

button2021.onclick = function() {
    image("pets2021.png");
};

buttonBoth.onclick = function() {
    image("both.png");
};

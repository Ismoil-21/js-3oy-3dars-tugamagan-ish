
let ism = document.getElementById("inp");
let btn = document.getElementById("btn");
let ul = document.getElementById("ul");


btn.addEventListener("click",() => {
    fetch(`https://api.nationalize.io/?name=${ism.value}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data) 
        getFlags(data.country);
    });
})


function getFlags(country) {
    country.forEach((value) => {
        fetch(`https://flagcdn.com/16x12/${value.country_id.toLowerCase()}.png`)
            .then((response) => {
                console.log(response);
                

                let li = document.createElement("li");

                li.innerHTML = `
                <img src=${response.url}> ${value.country_id}
                ${value.probability * 100}%
                `
            
                ul.appendChild(li);
        })
    });
}
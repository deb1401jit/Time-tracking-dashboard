const daily = document.querySelector("nav ul li:nth-child(1)");
const weekly = document.querySelector("nav ul li:nth-child(2)");
const monthly = document.querySelector("nav ul li:nth-child(3)");


//fetch function
async function fetchJSON(url, type) {
    try {
        const response = await fetch(url);
        const data = await response.json();

        const card = document.querySelectorAll(".card");
        // console.log(data[0].timeframes.weekly);
        for (let i = 0; i < data.length; i++) {
            card[i].children[0].children[0].childNodes[3].textContent = data[i].timeframes[type].current + "hrs";
            card[i].children[0].children[1].childNodes[3].textContent = "Last Week - " + data[i].timeframes[type].previous + "hrs";
        }

    }
    catch (error) {
        console.log(error);
    }
}


function interval(id) {
    if (id === "daily") {
        fetchJSON('data.json', "daily");
        daily.classList.add("active");
        weekly.classList.remove("active");
        monthly.classList.remove("active");
    }
    else if (id === "weekly"){
        fetchJSON('data.json', "weekly");
        daily.classList.remove("active");
        weekly.classList.add("active");
        monthly.classList.remove("active");
    }
    else {
        fetchJSON('data.json', "monthly");
        daily.classList.remove("active");
        weekly.classList.remove("active");
        monthly.classList.add("active");
    }
}

const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");
const searchForm = document.querySelector(".form-container");
const loadingScreen = document.querySelector(".loading-container");
const grantAceessContainer = document.querySelector(".grant-location-container");
const userInfoContainer = document.querySelector(".user-info-container");


let currentTab = userTab;
let API_KEY = "e14e34933e4b2687bb0ecf3fec244c36";
currentTab.classList.add("current-tab");

function switchTab(clickedTab){
    if(clickedTab !== currentTab){
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");
    } 

}

userTab.addEventListener("click", () =>{
    switchTab(userTab);
})

searchTab.addEventListener("click", () =>{
    switchTab(searchTab);
})
function weatherData(data){
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
    document.body.appendChild(newPara);
}

async function weatherAPI(){
    try{
        let city = "pune";
    const outout = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e14e34933e4b2687bb0ecf3fec244c36&units=metric`);
    const data = await outout.json();
    console.log(data)
    weatherData(data)
    }
    catch(error){
        console.log("Error Receive :", error);
    }
}


async function weatherLatLon(){
   try{
    let lat = 27.383730;
    let lon = 79.572330;
    let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e14e34933e4b2687bb0ecf3fec244c36&units=metric`);
    let data = await result.json();
    console.log(data);
   }
   catch(error){
    console.log('Error Found', error);
   }
}


function switchTab (clickedTab) {
    apiErrorContainer.classList.remove("active");
    if(checkedTab !== currentTab){
        currentTab.classList.remove("current-Tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");
    }

    if(!searchFrom.classList.contains("active")){
        userInfoContainer.classList.remove("active");
        grantAccessContainer.classList.remove("active");
        searchFrom.classList.add("active");
    }
    else{
        searchFrom.classList.remove("active");
        userInfoContainer.classList.remove("active");
    }
}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(myLocation);
    }
    else{
        alert("Location Not found");
    }
    function myLocation(position){
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        console.log('Your Latitude:', latitude,'Your Longitude: ', longitude);
    }
}
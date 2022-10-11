//Top Navigation
function topNavFun() {
    var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
    }
}

//Fetching data from api
async function lanyardRequest() {
    fetch("https://api.lanyard.rest/v1/users/728730075352137829")
        .then(response => {
            return response.json();
            //console.log(response);
        })
        .then(data => {
            //console.log(data);
            //return data();
            //console.log(data.data.discord_status);

            //Change color of profile pic border
            if (data.data.discord_status == "offline") {
                var bordCol = document.getElementById("bdcolor")
                bordCol.style.borderColor = "#747f8d";;
            } else if (data.data.discord_status == "dnd") {
                var bordCol = document.getElementById("bdcolor")
                bordCol.style.borderColor = "#ed4245";;
            } else if (data.data.discord_status == "online") {
                var bordCol = document.getElementById("bdcolor")
                bordCol.style.borderColor = "#3ba55d";;
            } else if (data.data.discord_status == "idle") {
                var bordCol = document.getElementById("bdcolor")
                bordCol.style.borderColor = "#faa81a";;
            }
        })
        .catch(error => {
            console.log(error); 
        })
}
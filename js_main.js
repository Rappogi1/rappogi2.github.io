var bus = true, jeep = true, train = true, firstDrive = false;

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    
    if (cityName === "Paris") {
        if (firstDrive) {
            document.getElementById('travel_time_2').style.display = "block";
        }
    }

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    if(cityName=="commute"){
        
        commute = true;
        console.log("Commute: "+commute);
    }else{
        commute = false;
        console.log("Commute: "+commute);
    }
    
    
}

function openRoute(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent1");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tab1");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    
    
}

function filterTransport(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    
    if(cityName==="bus"){
        if(bus){
            bus = false;
            // Get all elements with class="tabcontent" and hide them
            tabcontent = document.getElementsByClassName(cityName);
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            evt.currentTarget.className = "tabf inactive";
        } else {
            bus = true;
            tabcontent = document.getElementsByClassName(cityName);
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "block";
            }
            evt.currentTarget.className = "tabf active";
        }
    }else if(cityName==="jeep"){
        if(jeep){
            jeep = false;
            // Get all elements with class="tabcontent" and hide them
            tabcontent = document.getElementsByClassName(cityName);
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            evt.currentTarget.className = "tabf inactive";
        } else {
            jeep = true;
            tabcontent = document.getElementsByClassName(cityName);
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "block";
            }
            evt.currentTarget.className = "tabf active";
        }
    }else if(cityName==="train"){
        if(train){
            train = false;
            // Get all elements with class="tabcontent" and hide them
            tabcontent = document.getElementsByClassName(cityName);
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            evt.currentTarget.className = "tabf inactive";
        } else {
            train = true;
            tabcontent = document.getElementsByClassName(cityName);
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "block";
            }
            evt.currentTarget.className = "tabf active";
        }
    }else{}
        
    if(!bus){
        tabcontent = document.getElementsByClassName('bus');
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
    }
    if(!jeep){
        tabcontent = document.getElementsByClassName('jeep');
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
    }
    if(!train){
        tabcontent = document.getElementsByClassName('train');
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
    }

    
}

function displayContent(idOfElement){
    document.getElementById("idOfElement")
}
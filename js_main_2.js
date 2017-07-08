var toll = true;

function openRoute_2(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent1_2");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tab1_2");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    
    
}

function toll_2(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    
    if(toll){
        evt.currentTarget.className = "tabt_2 inactive";
        document.getElementById('toll_checkbox').checked = false;
        toll=false;
    }else{
        evt.currentTarget.className = "tabt_2 active";
        document.getElementById('toll_checkbox').checked = true;
        toll=true;
    }

   
    
    
}
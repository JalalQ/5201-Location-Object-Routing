//LAB 1-1: LOCATION OBJECT & ROUTING
//alert("Lab 1 - 1");//DELETE ONCE CONNECTED.

//#### CONTENT FOR HOME PAGE ==== - BACKGROUND IS white
var contentHome = "<h3>Welcome to our website!</h3>";
contentHome += "<p>We have many wonderful products that you might be interested in.</p>";
//==== END OF CONTENT FOR HOME PAGE ####

//#### CONTENT FOR PRODUCTS PAGE ====  - BACKGROUND IS red
var contentProducts = "<h3>Our Top 5 Products</h3>";
contentProducts += "<ol><li>Computers</li><li>Hard Drives</li><li>USB Drives</li><li>Backup Drives</li><li>Printers</li></ol>";
//==== END OF CONTENT FOR PRODUCTS PAGE #### 

//#### CONTENT FOR ABOUT US PAGE ==== - BACKGROUND IS green
var contentAbout = "<h3>About Computer Corp</h3>";
contentAbout += "<p>We have been around a long time, so we know what we're doing.</p>";
contentAbout += "<p><h4>Customer Feedback</h4><q>You're the only computer company I trust</q>&mdash;Ernst Blofeld</p>";
//==== END OF CONTENT FOR ABOUT US PAGE ####


window.onload = function(){
    
    var contentBg = document.getElementById("mainContent");
    var contentItems = document.getElementById("output");
    
    var LocQstring = location.search;
    
    if (LocQstring === "?home"){
        contentBg.style.backgroundColor = "white";
        contentItems.innerHTML = contentHome;
        
        //this code has been taken from https://stackoverflow.com/questions/13650408/hide-variables-passed-in-url
        history.replaceState({}, null, "LAB1-1-routing.html");
    }
    
    else if (LocQstring === "?products") {
        contentBg.style.backgroundColor = "red";
        contentItems.innerHTML = contentProducts;
        
        history.replaceState({}, null, "LAB1-1-routing.html");         
    }
    
    else if (LocQstring === "?about"){
        contentBg.style.backgroundColor = "green";
        contentItems.innerHTML = contentAbout;

        history.replaceState({}, null, "LAB1-1-routing.html");
    }
    
}
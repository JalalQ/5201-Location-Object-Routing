/*LAB 1-2: CONSTRUCTOR FUNCTIONS*/
//FAVE FRIEND CONSTRUCTOR FUNCTION
///alert("fave 3");

window.onload = function(){
    
    function Friends(fName, fPhone) {
        this.name = fName;
        this.phone = fPhone;
    }
    
    const totFriends = 3;
    
	var faveThree = [];//FAVE 3 ARRAY
    
    var name = document.getElementsByClassName("names");
    var phone = document.getElementsByClassName("phones");
    
    var form = document.querySelector("form");
    var section = document.querySelector("section");
    var list = document.getElementById("faveList");
    var friendDiv = document.getElementById("faveBlock");
    
    console.log(form);
    
    form.addEventListener('submit', submitFriends);
    
    function submitFriends(e) {
        if (e.preventDefault) e.preventDefault();
        
        var contentList = "";
        for (let i=0; i<totFriends; i++) {
            faveThree[i]=new Friends(name[i].value, phone[i].value); 
            
            //FORM VALIDATION would be done here. So the values name[i].value and phone[i].value
            //would be evaluated to see whether they meet certain constraint. So for name there
            //should be no numbers and special characters. for phone number should be no letter.
            //If an error is found then I would display useful message for the user to correct the error
            //and then exit from this for loop. The program would enter this function again when the user
            //clicks on the submit button after correcting the input error.
            contentList +="<li>";
            contentList +=faveThree[i].name;
            contentList +="</li>";
        }
        
        section.style.display = "none";
        friendDiv.style.display = "inline-block";
        list.innerHTML=contentList;
        return false;
    }


}//END OF onload FUNCTION

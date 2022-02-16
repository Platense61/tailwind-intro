const mobile = document.querySelector(".mobile-menu"); //the elements to display when mobile mode activated
const btn = document.querySelector(".hamburger"); //hamburger button
const goright = document.getElementById("right-arrow");
const goleft = document.getElementById("left-arrow");
btn.addEventListener("click", mobileMenu);
goright.addEventListener("click", myincrease);
goleft.addEventListener("click", mydecrease);

var itr = 0;
var elem = document.getElementById('hero');
const my_arr = ["./images/lake.jpg", "./images/mountain.jpg", "./images/beach.jpg", "./images/space.jpg", "./images/forest.jpg", "./images/earth.jpg"];

function mobileMenu() {
    mobile.classList.toggle("hidden");
}

function myincrease(){
    if(itr == 5){
        itr = 0;
        elem.style.backgroundImage = "url(" + my_arr[itr] + ")";
        console.log(itr);
    }
    else{
        itr++;
        elem.style.backgroundImage = "url(" + my_arr[itr] + ")";
        console.log(itr);
    }
}

function mydecrease(){
    if(itr == 0){
        elem.style.backgroundImage = "url(" + my_arr[itr] + ")";
        itr = 5;
        console.log(itr);
    }
    else{
        elem.style.backgroundImage = "url(" + my_arr[itr] + ")";
        itr = itr - 1;
        console.log(itr);
    }
}
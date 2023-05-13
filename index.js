var randomVariable1 = Math.floor(Math.random()*6 ) + 1;


console.log(randomVariable1);

var randomVariable2 = Math.floor(Math.random()*6 ) + 1;


console.log(randomVariable2);

document.querySelector(".img1").src = "./images/dice"+randomVariable1+".png";
document.querySelector(".img2").src = "./images/dice"+randomVariable2+".png";
let rightArrow = document.querySelector(".right-arrow");
let leftArrow = document.querySelector(".left-arrow");
let wallpaper = document.querySelector(".wallpaper");
let title = document.querySelector(".title");
let titleWeAre = document.querySelector(".title-we-are");
let text = document.querySelector(".text");

let circlesArr = [
  document.querySelector(".circle1"),
  document.querySelector(".circle2"),
  document.querySelector(".circle3"),
];
// let surpriseBtn = document.querySelector(".surprise");
if (rightArrow.addEventListener("click", rightSlide)) {
  i++;
} else if (leftArrow.addEventListener("click", leftSlide)) {
  i--;
}
let titleArr = [
  "Wellcome to my website",
  "We offering good services",
  "You can always ask for help!",
  "Hello World!",
];
let wallpapersArr = [
  "imgs//photo.jpg",
  "imgs//photo1.jpg",
  "imgs//photo3.jpg",
  "imgs//pyramids.jpg",
];

let paragraphsArr = [
  "b2olk eh b2olk eh b2olk eh lorem loreeeeeeeeeem b2olk eh loreeem",
  "i'm abdelrhman hossam and i love your code very much and for that i want a ride for msh 3arf eh b2olk eh b2olk eh",
  "and i'm saying that don't i for   that im challanger for you please and i'm waiting for",
  "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam. Accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt.",
];

let secondTitleArr = [
  "You're in the right place",
  "Feel free to contact us",
  "Save time by using our website",
  "We Are Kasper We Make Art.",
];
let i = 0;

if (rightArrow.addEventListener("click", rightSlide)) {
  i++;
} else if (leftArrow.addEventListener("click", leftSlide)) {
  i--;
}
let j = 0;
function rightSlide() {
  wallpaper.src = wallpapersArr[i];
  text.textContent = paragraphsArr[i];
  titleWeAre.textContent = secondTitleArr[i];
  title.textContent = titleArr[i];
  ++i;
  if (i == titleArr.length) {
    i = 0;
  }
  
  circlesArr[j+1].style.backgroundColor = "#19c8fa";
  circlesArr[j].style.backgroundColor = "transparent";
  console.log(j);
  ++j;
  if(j==2){
    j=0;
  }
}

function leftSlide() {
  wallpaper.src = wallpapersArr[i];
  text.textContent = paragraphsArr[i];
  titleWeAre.textContent = secondTitleArr[i];
  title.textContent = titleArr[i];
  if (i == 0) {
    i = titleArr.length;
  }
  --i;
}

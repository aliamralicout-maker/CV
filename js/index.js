// local storage cheek
const bodyy = document.body;
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

const settingsToggle = document.querySelector("#settings-toggle");
const settingsSidebar = document.querySelector("#settings-sidebar");
const closeSettings = document.querySelector("#close-settings");

const dfColorBage = document.querySelector("#df-color-bage");
const orangeTextBage = document.querySelector("#orange-text-bage");
const greenTextBage = document.querySelector("#green-color-bage");
const blueTextBage = document.querySelector("#blue-color-bage");
const pinkTextBage = document.querySelector("#pink-color-bage");
const orange2Colorbage = document.querySelector("#orange2-color-bage");

// btn font
const chek1 = document.querySelector(".chek1");
const chek2 = document.querySelector(".chek2");
const chek3 = document.querySelector(".chek3");
const btnAlex = document.querySelector("#btn-alex");
const btnTajawal = document.querySelector("#btnTajawal");
const btnCairo = document.querySelector("#btnCairo");

// fonts
const alex = "Alexandria";
const tajawal =  ("Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
const cairo =  ("Liberation Mono", "Courier New");

const nextBtn = document.querySelector("#next-testimonial");
const prevBtn = document.querySelector("#prev-testimonial");
const carousel = document.querySelector("#testimonials-carousel");

const cards = Array.from(
  document.querySelectorAll("#testimonials-carousel .testimonial-card")
);

// validation
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");

const fullNameError = document.querySelector("#fullNameError");
const fullEmailError = document.querySelector("#fullEmailError");
const fullPhoneError = document.querySelector("#fullPhoneError");

const select = document.querySelector(".custom-select");
const optionsBox = document.querySelector(".custom-options");
const selectedText = document.querySelector(".selected-text");


let index = 0;
const visibleCount = 3;

let i;

const reset = document.querySelector("#reset");

let currentColor = 'df-color-bage';

let themeToggleButton = document.querySelector("#theme-toggle-button");

themeToggleButton.addEventListener("click", () =>{
  bodyy.classList.toggle("light");

  sun.classList.toggle("dark:opacity-100");
  sun.classList.toggle("dark:scale-100");
  // ----------------------------------------------------------------
  moon.classList.toggle("dark:opacity-100");

});

// slidpar hied
settingsToggle.addEventListener("click", () => {
  settingsSidebar.classList.replace("translate-x-full", "translate-x-0");
});
closeSettings.addEventListener("click", () => {
  settingsSidebar.classList.replace("translate-x-0", "translate-x-full");
});

dfColorBage.addEventListener("click", () => {
  colorText("df-color-bage");
});
orangeTextBage.addEventListener("click", () => {
  colorText("orange-color-bage");
  currentColor = "orange-color-bage";
});
greenTextBage.addEventListener("click", () => {
  colorText("green-color-bage");
  currentColor = "green-color-bage";
});
blueTextBage.addEventListener("click", () => {
  colorText("blue-color-bage");
  currentColor = "blue-color-bage"; 
});
pinkTextBage.addEventListener("click", () => {
  colorText("pink-color-bage");
  currentColor = "pink-color-bage";
});

// // rest color and font
reset.addEventListener("click", () => {
  colorText('df-color-bage');
  i =0;
  addFont(alex,i);
});

function colorText(cText){
  bodyy.classList.remove(currentColor);
  bodyy.classList.add(cText);
  // bodyy.classList.replace(currentColor,cText);
}






btnAlex.addEventListener('click', () =>{
  i = 0;
  addFont(alex,i);
})
btnTajawal.addEventListener('click', () =>{
  i = 1;
  addFont(tajawal,i);
})
btnCairo.addEventListener('click', () =>{
  i = 2;
  addFont(cairo,i);
})

function addFont(font,i){
  if(i === 0){
    chek1.style.opacity = 1;
    chek2.style.opacity = 0;
    chek3.style.opacity = 0;
  }
  else if(i === 1){
    chek1.style.opacity = 0;
    chek2.style.opacity = 1;
    chek3.style.opacity = 0;

  }
  if(i === 2){
    chek1.style.opacity = 0;
    chek2.style.opacity = 0;
    chek3.style.opacity = 1;
  }

  bodyy.style.fontFamily = font;
}



// btn next
nextBtn.addEventListener("click", () => {
  nex();
});
// btn prev
prevBtn.addEventListener("click", () => {
  pre();
});

function pre(){
  index--;
  
  if (index < 0) {
    index = cards.length - 1;
  }
  
  carousel.removeChild(carousel.lastElementChild);
  
  carousel.prepend(cards[index]);

}
function nex(){
index++;

  if (index >= cards.length) {
    index = 0;
  }

  carousel.removeChild(carousel.firstElementChild);

  carousel.appendChild(cards[(index + visibleCount - 1)  % cards.length]);

}

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case 'ArrowRight':
      pre();
      break;
    case 'ArrowLeft':
      nex();
      break;
    default:
      break;
  }
});



// const carousel1 = document.querySelector('#carousel1');
// const carousel2 = document.querySelector('#carousel2');
// const carousel3 = document.querySelector('#carousel3');
// const carousel4 = document.querySelector('#carousel4');
// let num = 0;

// carousel1.addEventListener('click', ()=>{
//   num = 1;
//   countCarousel(num);
//   num = 2;
// })
// carousel2.addEventListener('click', ()=>{
//   nex();
//   return;
// })
// carousel3.addEventListener('click', ()=>{
//   num = 3;
// })
// carousel4.addEventListener('click', ()=>{
//   num = 4;
// })

// function countCarousel(num){
//     if(num === 1 ){
//       nex();
//       return;
//     }else if(num > 1){
//       pre();
//       return;
//     } 

// }







fullName.addEventListener('input', (e) =>{
    validId = e.target.id;
    validValue = e.target.value;
    console.log(e.target);
    

    isValid(validId,validValue,fullNameError);
})
email.addEventListener('input', (e) =>{
    validId = e.target.id;
    validValue = e.target.value;

    isValid(validId,validValue,fullEmailError);
  
})
phone.addEventListener('input', (e) =>{
    validId = e.target.id;
    validValue = e.target.value;

    isValid(validId,validValue,fullPhoneError);
  
})

// function allValid(e){
//    let validId = e.target.id;
//    let validValue = e.target.value;
//    let changClass = e.target.classList;
// }

function isValid(id,value,er){
  const regex = {
    fullName : /^[A-Z][a-z]{2,14}?$/,
    email:/^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$/,                     
    phone:/^(20|\+2)?01[0-25][0-9]{8}$/,      
}
    const resultValid = regex[id].test(value);
    

  if (resultValid) {
    er.classList.add("hidden"); // الرسالة تختفي لو صح
  } else {
    er.classList.remove("hidden"); // تظهر لو غلط
  }
}






select.addEventListener("click", () => {
  optionsBox.classList.toggle("hidden");
});

document.querySelectorAll(".custom-option").forEach(option => {
  option.addEventListener("click", () => {
    selectedText.textContent = option.dataset.value;
    optionsBox.classList.add("hidden");
  });
});


document.querySelectorAll(".custom-select-wrapper").forEach(wrapper => {
  const select = wrapper.querySelector(".custom-select");
  const optionsBox = wrapper.querySelector(".custom-options");
  const selectedText = wrapper.querySelector(".selected-text");

  select.addEventListener("click", () => {
    optionsBox.classList.toggle("hidden");
  });

  wrapper.querySelectorAll(".custom-option").forEach(option => {
    option.addEventListener("click", () => {
      selectedText.textContent = option.dataset.value;
      optionsBox.classList.add("hidden");
    });
  });
});

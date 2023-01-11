const button = document.querySelector(".btnAcc");
const button2 = document.querySelector(".btnFin");
const button3 = document.querySelector(".btnAll");
const button4 = document.querySelector(".btnClr");
const button5 = document.querySelector(".btnRC");


button.addEventListener("click", () => {
    fetchHandlerAccount();
});

button2.addEventListener("click", () => {
    fetchHandlerFinances();
});

button3.addEventListener("click", () => {
    console.clear();
    fetchHandlerAccount();
    fetchHandlerFinances();
});

button4.addEventListener("click", () => {
    console.clear();
});


button5.addEventListener("click", () => {
    let isLoaded = image.complete;
  
    if (isLoaded) {
        randomCat();
    }
  });
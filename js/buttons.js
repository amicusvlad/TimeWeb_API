const button = document.getElementById("btnAcc");
const button2 = document.getElementById("btnFin");
const button3 = document.getElementById("btnAll");
const button4 = document.getElementById("btnClr");
const button5 = document.getElementById("btnRC");


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
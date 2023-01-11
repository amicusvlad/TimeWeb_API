const image = document.querySelector(".img");
const url = "http://aws.random.cat/meow";

async function randomCat() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    image.src = data.file;
  } catch (error) {
    console.log(error);
  }
}
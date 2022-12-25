const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "https://media.giphy.com/media/JcPAkfwDR133esiVl3/giphy.gif") {
    myImage.setAttribute("src", "https://media.giphy.com/media/VjOMuCv00TEQv8OTvv/giphy.gif");
  } else {
    myImage.setAttribute("src", "https://media.giphy.com/media/JcPAkfwDR133esiVl3/giphy.gif");
  }
};

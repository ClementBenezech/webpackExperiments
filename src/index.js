import webpackPng from "../assets/images/index.png";
import svgImage from "../assets/images/image.svg";
import inlineGif from "../assets/images/inlineGif.gif";
import resourceGif from "../assets/images/resourceGif.gif";
import SomeComponentWithDependencies from "./components/SomeComponentWithDependencies/SomeComponentWithDependencies";
import "./base.css";
import SomeModernJSComponent from "./components/SomeModernJSComponent/SomeModernJSComponent";
import SomeSassStyledComponent from "./components/SomeSassStyledComponent/SomeSassStyledComponent";

const someDiv = document.createElement("div");
const someOtherDiv = document.createElement("div");
const someImg = document.createElement("img");
const anotherImg = document.createElement("img");
const tinyGif = document.createElement("img");
const fatGif = document.createElement("img");
const pageTitle= document.createElement("div");
const subTitle= document.createElement("div");

someImg.src = webpackPng;
anotherImg.src = svgImage;
tinyGif.src = inlineGif;
fatGif.src = resourceGif;

someDiv.classList.add("card");
someOtherDiv.classList.add("card");
someImg.classList.add("card");
anotherImg.classList.add("card");
tinyGif.classList.add("card");
fatGif.classList.add("card");
pageTitle.classList.add("title");
subTitle.classList.add("subTitle");

pageTitle.textContent= "Welcome to 'The Build'. And no. It's not magic";
subTitle.textContent= "Try inspecting stuff to see how each element was rendered :)";
someDiv.textContent= "I'm just a div with a 'classic' className from base.css. Check the sources in the inspector though: my css class définition cannot be found in the main.css file. To find it, look in main.js ;)";
someOtherDiv.textContent= "Inspect the images here, check the src => See? webpack and Donald Trump are handled as assets (although regarding Donald Trump, this is debatable :p ) The other two have been injected as data INSIDE main.js. Check the webpack confing to learn why, and many more things!";

document.getElementsByTagName("body")[0].appendChild(pageTitle)
document.getElementsByTagName("body")[0].appendChild(subTitle)
document.getElementsByTagName("body")[0].appendChild(someDiv)
document.getElementsByTagName("body")[0].appendChild(someOtherDiv)
document.getElementsByTagName("body")[0].appendChild(someImg)
document.getElementsByTagName("body")[0].appendChild(anotherImg)
document.getElementsByTagName("body")[0].appendChild(tinyGif)
document.getElementsByTagName("body")[0].appendChild(fatGif)

SomeComponentWithDependencies();
SomeModernJSComponent();
SomeSassStyledComponent();
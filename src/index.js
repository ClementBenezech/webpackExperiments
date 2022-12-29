import webpackPng from "../assets/images/index.png";
import svgImage from "../assets/images/image.svg";
import inlineGif from "../assets/images/inlineGif.gif";
import resourceGif from "../assets/images/resourceGif.gif";
import SomeComponentWithDependencies from "./components/SomeComponentWithDependencies/SomeComponentWithDependencies";
import "./base.css";
import SomeModernJSComponent from "./components/SomeModernJSComponent/SomeModernJSComponent";

const someDiv = document.createElement("div");
const someImg = document.createElement("img");
const anotherImg = document.createElement("img");
const tinyGif = document.createElement("img");
const fatGif = document.createElement("img");

someImg.src = webpackPng;
anotherImg.src = svgImage;
tinyGif.src = inlineGif;
fatGif.src = resourceGif;

someDiv.classList.add("card");
someImg.classList.add("card");
anotherImg.classList.add("card");
tinyGif.classList.add("card");
fatGif.classList.add("card");

someDiv.textContent= "This is just a div with some styling";
document.getElementsByTagName("body")[0].appendChild(someDiv)
document.getElementsByTagName("body")[0].appendChild(someImg)
document.getElementsByTagName("body")[0].appendChild(anotherImg)
document.getElementsByTagName("body")[0].appendChild(tinyGif)
document.getElementsByTagName("body")[0].appendChild(fatGif)

SomeComponentWithDependencies();
SomeModernJSComponent();
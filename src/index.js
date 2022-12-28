import bear from "../assets/images/index.png";
import dot from "../assets/images/dot.svg";
import inlineGif from "../assets/images/inlineGif.gif";
import resourceGif from "../assets/images/resourceGif.gif";
import SomeComponentWithDependencies from "./components/SomeComponentWithDependencies";
import "./base.css";

const someDiv = document.createElement("div");
const someImg = document.createElement("img");
const anotherImg = document.createElement("img");
const tinyGif = document.createElement("img");
const fatGif = document.createElement("img");

someImg.src= bear;
anotherImg.src = dot;
tinyGif.src = inlineGif;
fatGif.src = resourceGif;

someDiv.textContent= "someDiv";
document.getElementsByTagName("body")[0].appendChild(someDiv)
document.getElementsByTagName("body")[0].appendChild(someImg)
document.getElementsByTagName("body")[0].appendChild(tinyGif)
document.getElementsByTagName("body")[0].appendChild(fatGif)

SomeComponentWithDependencies();
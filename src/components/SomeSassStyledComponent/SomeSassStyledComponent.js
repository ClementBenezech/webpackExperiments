import styles from "./SomeSassStyledComponent.style.scss";

// Just a simple component that will render a div with some text in the body.
// Notice how we import the css file above so we can access the css class howILook

// See how in here I use arrow functions, well, this i not undestood by all browsers
// Those browsers would need this syntax to be "translated" into "old school JS"
// To make sure the build is understandable by any browser while still being able to use modern JS syntaxes
// This is achieved using Babbel, see the rule in the webpack.config.json

const SomeSassStyledComponent = () => {

    const SomeRandomDiv = () => {
        const someRandomDiv = document.createElement("div");
        return someRandomDiv;
    };

    const theDiv = SomeRandomDiv();
    theDiv.classList.add(styles.howILook);
    theDiv.textContent = "I'm styled with SASS :)";
    document.getElementsByTagName("body")[0].appendChild(theDiv);
    }

export default SomeSassStyledComponent
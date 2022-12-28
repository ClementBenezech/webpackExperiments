import styles from "./SomeComponentWithDependencies.style.css";

// Just a simple component that will render a div with some text in the body.
// Notice how we import the css file above so we can access the css class howILook

const SomeComponentWithDependencies = () => {
        const SomeRandomDiv = document.createElement("div");
        SomeRandomDiv.classList.add(styles.howILook);
        SomeRandomDiv.textContent = "Yay I'm pretty";
        document.getElementsByTagName("body")[0].appendChild(SomeRandomDiv);
    }

export default SomeComponentWithDependencies


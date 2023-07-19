
import {useState} from "react";
import "./styles.css";

function ItemListContainer({greetings}) {
    const [saludo,setSaludo] = useState (greetings)

    function changeGreeting() {
       setSaludo ("Hello people")
    }

    return (
        <div className="item-list-container">
        <p>{saludo}</p>
        <button onClick={changeGreeting} >Press me</button>
        </div>    
    );
}

export default ItemListContainer
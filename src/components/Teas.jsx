import React, {Component} from "react";
import "./TeasStyle.css"

class Teas extends Component {
    render() {

        const teas = [
            {
                id: 1,
                name: "Thai",
                price: 12.00
            },
            {
                id: 2,
                name: "Matcha",
                price: 9.40
            },
            {
                id: 3,
                name: "Green Tea"
            },
            {
                id : 4,
                name : "Black Tea",
                price: 10.00
            },
        ]
        return(

         <div className="TeasList">
            <h1>Teas</h1>
            <ul>
                {teas.map((tea) => (<li key={tea.id}>{tea.name}: {tea.price}</li>
            ))}
            </ul>
         </div>
        );
    }
}



export default Teas;
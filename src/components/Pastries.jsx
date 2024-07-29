import React, { Component } from "react";



class PastryList extends Component {
    render() {
        const pastries = [
            {
                id: 1,
                name: "Croissant",
                price: 6.00
            },
            {
                id: 2,
                name: 'Eclair',
                price: 5.00
            },
            {
                id: 3,
                name: 'Apple Turnover',
                price: 7.00

            },
            {
                id: 4,
                name: 'Cannoli',
                price: 7.00
            }
        ];

        return (
            <div className="pastry-menu">
              <h2>Pastry Menu</h2>
              <ul>
                {pastries.map((pastry) => (
                  <li key={pastry.id}>Pastry:{pastry.name} Price: {pastry.price} </li>
                ))}
              </ul>
            </div>
          );
    }
}

export default PastryList;
    


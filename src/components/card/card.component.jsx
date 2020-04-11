import React from "react";
import "./card.styles.css";

// export const Card = props => {
//   return (
//     <div>
//       <h1>{props.monster.name}</h1>
//     </div>
//   );
// };
//same as below

export const Card = props => (
  <div className="card-container">
    <img
      alt="monster"
      src={`https://robohash.org/${props.monster.id}?set=set1&size=180x180`}
    />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);

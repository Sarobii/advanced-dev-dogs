import PropTypes from "prop-types";
import { useState } from "react";

export default function Trick({ category, title, description }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div onClick={() => setFlipped(!flipped)}>
      {/* Card Front */}
      {!flipped && (
        <div className="card">
          <p className="badge">{category}</p>
          <img src="/vite.svg"></img>
          <h2>{title}</h2>
        </div>
      )}

      {/* Card Back */}
      {flipped && 
        <div className="card-back">
          <p>{description}</p>
        </div>
      }
    </div>
  );
}

Trick.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

import React from "react";
import { Link } from "react-router-dom";
const Header = (props) => {
 const style = {
    display: "inline-block",
    margin: 10,
    marginBottom: 30,
  };
  return (
    <div>
      <div>
        <h3 style={style}>
          <Link to="/">Home</Link>
        </h3>
        <h3 style={style}>
          <Link to="/jokes">Jokes</Link   >
        </h3>
        <h3 style={style}>
          <Link to="/music-master">Music master</Link>
        </h3>
        <h3 style={style}>
          <Link to="/evens-or-odds">Even Or Odds</Link>
        </h3>
        <h3 style={style}>
          <Link to="/reaction">Reaction</Link>
        </h3>
      </div>
{props.children}
    </div>
  );
};
export default Header;

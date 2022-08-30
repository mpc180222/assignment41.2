import React from "react";
import { Link } from "react-router-dom";

function Nav({names}) {

  return (
    <ul>
        {names.map(name => (<li><Link to={`/dogs/${name}`}>{name}</Link></li>))}
    </ul>
  );
}
// end

export default Nav;
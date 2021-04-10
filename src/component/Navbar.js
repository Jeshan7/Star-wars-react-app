import React from "react";

const Navbar = ({ setPage }) => {
  return (
    <div>
      <button onClick={() => setPage("people")}>People</button>
      <button onClick={() => setPage("planets")}>Planet</button>
    </div>
  );
};

export default Navbar;

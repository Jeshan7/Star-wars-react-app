import React from "react";
import { useQuery } from "react-query";

const fetchPeople = async () => {
  const res = await fetch("https://swapi.dev/api/planets/");
  return res.json();
};

function Planet(props) {
  const { data, status } = useQuery("people", fetchPeople);
  return (
    <div>
      {status === "loading" && <div>Loading Data ...</div>}
      {status === "error" && <div>Error</div>}
      {status === "success" && (
        <div>
          {data.results.map((p) => {
            <div>{p.name}</div>;
          })}
        </div>
      )}
    </div>
  );
}

export default Planet;

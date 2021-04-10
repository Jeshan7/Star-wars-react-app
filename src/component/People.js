import React from "react";
import { useQuery } from "react-query";

const fetchPeople = async () => {
  const res = await fetch("https://swapi.dev/api/people/");
  return res.json();
};

function People(props) {
  const { data, status } = useQuery("people", fetchPeople);
  return (
    <div>
      {/* {status === "loading" && <div>Loading Data ...</div>}
      {status === "error" && <div>Error</div>} */}
      {status === "success" && (
        <div>
          {/* {console.log("sas", data)} */}
          {data.results.map((p) => {
            <div>{p.name}</div>;
          })}
        </div>
      )}
    </div>
  );
}

export default People;

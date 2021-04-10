import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import People from "./component/People";
import Planet from "./component/Planet";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
function App() {
  const [page, setPage] = useState("planets");
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <h1>Star Wars Info</h1>
        <Navbar setPage={setPage} />
        {page === "planets" ? <Planet /> : <People />}
      </QueryClientProvider>
    </div>
  );
}

export default App;

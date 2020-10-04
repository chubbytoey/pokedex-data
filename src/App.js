import React, { useState, useEffect } from "react";

async function fetchData() {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  return response.json();
}

function App() {
  const [pokeDatas, setPokeDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    setIsLoading(true);
    try {
      fetchData()
        .then((response) => setPokeDatas(response.results))
        .finally(() => setIsLoading(false));
    } catch {
      setError("เพื่อนตามแล้วisud");
    }
    return () => {};
  }, []);

  return (
    <>
      <h1>Pokedex</h1>
      {!isLoading && pokeDatas && (
        <ul>
          {pokeDatas.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}
export default App;

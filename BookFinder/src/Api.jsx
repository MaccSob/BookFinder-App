import React, { useEffect, useState } from "react";

const GetApi = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const url = "https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyD9B9w6BEhFoJJW108S6hDGx9YMEY7AiDc";

    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, [name]);

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setName("")}>Clear</button>
    </div>
  );
};

export default GetApi;
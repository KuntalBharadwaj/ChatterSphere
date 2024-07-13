import axios from "axios";
import { useEffect } from "react";

function App() {
  const fetchData = async () => {
    const response = await axios.get("http://127.0.0.1:5000");
    console.log(response.data);
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      <h1>hello2</h1>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import CoinInfo from "./Components/CoinInfo";
import SideNav from "./Components/SideNav";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const [list, setList] = useState(null);

  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
      const filteredData = Object.keys(list.Data).filter((item) =>
        Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(Object.keys(list.Data));
    }
  };

  useEffect(() => {
    const fetchAllCoinData = async () => {
      console.log('fetching all')
      const response = await fetch(
        "https://min-api.cryptocompare.com/data/all/coinlist?&api_key" + API_KEY
      );
      const json = await response.json();
      setList(json);
    };

    fetchAllCoinData().catch(console.error);
  }, []);

  // console.log(list.Data);
  return (
    <div className="whole-page">
      <SideNav />
      <h1>My Crypto List</h1>
      <h3>coins</h3>
      <input
        type="text"
        placeholder="Search..."
        onChange={(inputString) => searchItems(inputString.target.value)}
      />
      <ul>
        {searchInput.length > 0
          ? filteredResults.map((coin) =>
              list.Data[coin].PlatformType === "blockchain" ? (
                <CoinInfo key={list.Data[coin].FullName}
                  image={list.Data[coin].ImageUrl}
                  name={list.Data[coin].FullName}
                  symbol={list.Data[coin].Symbol}
                />
              ) : <p>loading..</p>
            )
          : list &&
            Object.entries(list.Data).map(([coin]) =>
              list.Data[coin].PlatformType === "blockchain" ? (
                <CoinInfo key={list.Data[coin].FullName}
                  image={list.Data[coin].ImageUrl}
                  name={list.Data[coin].FullName}
                  symbol={list.Data[coin].Symbol}
                />
              ) : <p>loading..</p>
            )}
      </ul>
    </div>
  );
}

export default App;

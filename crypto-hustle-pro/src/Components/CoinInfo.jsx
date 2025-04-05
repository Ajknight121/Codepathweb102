import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

export default function CoinInfo({ image, name, symbol }) {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const getCoinPrice = async () => {
      try {

        const response = await fetch(
          `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&api_key=` +
          API_KEY,
          { signal: controller.signal }
        );
        
        const json = await response.json();
        setPrice(json);
      } catch (error) {
        if (!error.name == "AbortError") {
          // ignore the AbortError thrown by abort
          console.error(error);
        }
      }
    };

    getCoinPrice().catch(console.error);
    return () => controller.abort();
  }, [symbol]);

  return (
    <div>
      {price && (
        <li className="main-list" key={symbol}>
          <Link
            style={{ color: "white" }}
            to={`/coinDetails/${symbol}`}
            key={symbol}
          >
            <img
              className="icons"
              src={`https://www.cryptocompare.com${image}`}
              alt={`Small icon for ${name} crypto coin`}
            />
            {name} <span className="tab"></span> ${price.USD} USD
          </Link>
        </li>
      )}
    </div>
  );
}

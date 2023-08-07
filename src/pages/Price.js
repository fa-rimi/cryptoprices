import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Price(props) {
  //state to hold the coin data
  const [coin, setCoin] = useState(null);

  // Grabbing the Currency symbol from the URL Params
  const params = useParams();
  // console.log(params); // check to see what params are
  const { symbol } = params;

  // Using the other two variables to create our URL
  // url = http://rest.coinapi.io/v1/exchangerate/
  // pass in symbol = ${symbol}
  // pass in default currency display = /USD
  // pass apiKey = ?apikey=${apiKey}
  const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${process.env.REACT_APP_COINAPI_KEY}`;
  // API Key can be found in .env.local file

  //function to fetch coin data
  const getCoin = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setCoin(data);
      console.log(data);
    } catch (e) {
      console.log("Error Fetching Data", e);
    }
  };

  // useEffect to run getCoin when component mounts
  useEffect(() => {
    getCoin();
  }, []);

  // show fetched data
  const loaded = () => {
    return (
      <div>
        <h1>
          {/* found asset_id_base in the console log */}
          {/* rendering */}
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };

  // show a loading message when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // if coin has data, run the loaded function, otherwise, run loading
  return coin && coin.rate ? loaded() : loading();
}

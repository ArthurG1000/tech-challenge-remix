import React from "react";
import { useState, useEffect } from "react";
import { fetchRoyalAssets } from "../services/api";

const RoyalAssets = (asset) => {
  const [royalAsset, setRoyalAsset] = useState([]);
  const fetch = async () => {
    const result = await fetchRoyalAssets();
    setRoyalAsset(result);
    console.log(result);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <div className="royalAssets">
        <h1 className="inventoryTitle">
          Inventory of the wealth and property of the Kingdom of Colchis
        </h1>

        <table className="inventory">
          <thead>
            <tr>
              <th>Assets</th>
              <th>Quantity</th>
              <th>
                Worth <br /> (in bitcoins)
              </th>
            </tr>
          </thead>

          {royalAsset && royalAsset.map((asset) => {
          return (

          <tbody>
            <tr>
              <td>{asset.name}</td>
              <td>{asset.number}</td>
              <td>{asset.worth}</td>
            </tr>         
          </tbody>
          )})} 
          
          </table>
      </div>
    </div>
  );
};

export default RoyalAssets;

import React from "react";
import { useState, useEffect } from "react";
import { fetchRoyalFamily } from "../services/api";

const RoyalFamily = (member) => {
  const [familyMember, setFamilyMember] = useState([]);
  const fetch = async () => {
    const result = await fetchRoyalFamily();
    setFamilyMember(result);
    console.log(result);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <h1 className="royalFamilyTitle">
        <br />
        Here are the three main members of the royal family of Colchis:
      </h1>

      <div className="royalFamily">
        <br />
        <br />
        <br />

        <div className="flex-container">
          {familyMember &&
            familyMember.map((member) => {
              return (
                <div>
                  <p className="familyNames">
                   <img src={member.picture} alt="KingAeetes" width="350" />  <br/> {member.title} {member.name}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default RoyalFamily;

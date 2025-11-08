import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import data from "../../data.json";
import './infoPage.css'

export default function InfoPage() {
  const { postId } = useParams();
  const [info, setInfo] = useState(data);

  async function filterInfo() {
    const info = data.filter((item) => item.link.includes(postId));
    setInfo(info);
  }

  useEffect(() => {
    filterInfo(postId);
  });

  return (
    <div className="Infopage_Container">
      {info.map((item) => (
        <div>
          <h1>{item.name}</h1>
          <h3>{item.rank}</h3>
          <img src={item.picture.profile} alt="" />
        </div>
      ))}
    </div>
  );
}

import React from "react";
import Featured from "../Featured";
import JucastaNuu from "../JucastaNuu";
import CardWrapper from "../CardWrapper";
import Card from "../Card";

export default function HomePage({data}) {
  return (
    <div>
      <Featured />
      <JucastaNuu />
      {/* <CardWrapper>
                {data.map((item) => (
                  <Card
                    profilePic={item.picture.profile}
                    Name={item.name}
                    Status={item.status}
                    Link={item.link}
                    Rank={item.rank}
                    HomeWorld={item.homeWorld}
                  />
                ))}
              </CardWrapper> */}
      <CardWrapper Title="JEDI">
        <Card
          profilePic={data[0].picture.profile}
          Name={data[0].name}
          Status={data[0].status}
          Link={data[0].link}
          Rank={data[0].rank}
          HomeWorld={data[0].homeWorld}
        />
        <Card
          profilePic={data[1].picture.profile}
          Name={data[1].name}
          Status={data[1].status}
          Link={data[1].link}
          Rank={data[1].rank}
          HomeWorld={data[1].homeWorld}
        />
        <Card
          profilePic={data[2].picture.profile}
          Name={data[2].name}
          Status={data[2].status}
          Link={data[2].link}
          Rank={data[2].rank}
          HomeWorld={data[2].homeWorld}
        />
        <Card
          profilePic={data[3].picture.profile}
          Name={data[3].name}
          Status={data[3].status}
          Link={data[3].link}
          Rank={data[3].rank}
          HomeWorld={data[3].homeWorld}
        />
      </CardWrapper>
      <CardWrapper Title="SITH">
        <Card
          profilePic={data[4].picture.profile}
          Name={data[4].name}
          Status={data[4].status}
          Link={data[4].link}
          Rank={data[4].rank}
          HomeWorld={data[4].homeWorld}
        />
        <Card
          profilePic={data[5].picture.profile}
          Name={data[5].name}
          Status={data[5].status}
          Link={data[5].link}
          Rank={data[5].rank}
          HomeWorld={data[5].homeWorld}
        />
        <Card
          profilePic={data[6].picture.profile}
          Name={data[6].name}
          Status={data[6].status}
          Link={data[6].link}
          Rank={data[6].rank}
          HomeWorld={data[6].homeWorld}
        />
        <Card
          profilePic={data[7].picture.profile}
          Name={data[7].name}
          Status={data[7].status}
          Link={data[7].link}
          Rank={data[7].rank}
          HomeWorld={data[7].homeWorld}
        />
      </CardWrapper>
    </div>
  );
}

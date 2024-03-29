import { teamdata } from "./../assets/data/dummydata";
import { Title, TitleSm } from "./../components/common/Title";
import team from "./../pages/team";
import React from "react";
import { Card2 } from "../components/common/Card2";

const Team = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="MEET OUR TEAM" /> <br />
            <br />
            <Title
              title="A team of smart & passionate creatives"
              className="title-bg"
            />
          </div>
          <div className="grid-4 py">
            {teamdata.map((item) => (
              <Card2 data={item} key={item.id} caption={item.post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;

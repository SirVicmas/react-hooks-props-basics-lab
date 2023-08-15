import React from "react";
import Links from './Links';


function About(props) {
  return (
    <div id="about">
      <h1>About Me</h1>
      {props.user.bio && <p>{props.user.bio}</p>}
      <Links github={props.user.github} linkedin={props.user.linkedin} />
    </div>
  );
}

export default About;

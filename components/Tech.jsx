import { Text } from "@chakra-ui/react";
import { Grid } from "@material-ui/core";
import React from "react";

const styless = {
  fontSize: "2.5",
};
function setColor(item) {
  if (item === "OpenGL") return "#ff0000";
  if (item === "C++") return "#00599c";
  if (item === "JavaScript") return "#F45834";
  if (item === "Python") return "#F4CD34";
  if (item === "Django") return "rgb(15, 70, 49)";
  if (item === "Postgresql") return "#31648c";
  if (item === "Docker") return "#0997e5";
  if (item === "Node.js") return "#87bf00";
  if (item === "React.js") return "#61dafb";
  if (item === "Redux") return "#764abc";
  if (item === "MongoDB") return "#4db33d";
  if (item === "Express.js") return "#000000";
  if (item === "HTML") return "#e34c26";
  if (item === "CSS") return "#264de4";
  if (item === "Bootstrap") return "#7952b3";
  if (item === "Material-UI") return "#0081cb";
  if (item === "Jquery") return "#0769ad";
  if (item === "Sass") return "#cc6699";
  if (item === "Laravel") return "#ff2d20";
  if (item === "PHP") return "#777bb4";
  if (item === "MySQL") return "#00758f";
  if (item === "PHP") return "#777bb4";
  return "#FFFFFF";
}

const Tech = ({ tech, techMr }) => (
  <>
    {tech.map((item, index) => (
      <Grid item key={`${item}-${index}`}>
        <Text
          as="kbd"
          mr={techMr}
          style={{ fontSize: "2.5vh", color: setColor(item) }}
        >
          {item}
        </Text>
      </Grid>
    ))}
  </>
);

export default Tech;

import { Text } from "@chakra-ui/react";
import { Grid } from "@material-ui/core";
import React from "react";

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

const styless = {
  fontSize: "2.5",
};
function setColor(item) {
  if (item == "OpenGL") return "#5dfb46c4";
  if (item == "C++") return "#bb00ffc4";
  if (item == "JavaScript") return "#F45834";
  if (item == "Python") return "#F4CD34";
  return "#FFFFFF";
}

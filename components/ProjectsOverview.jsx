import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { Grid } from "@material-ui/core";
import React from "react";
import { useMediaQuery } from "react-responsive";
import Fade from "react-reveal/Fade";

import projects from "../data/projects";
import { colors } from "../theme";
import LinkIconBar from "./LinkIconBar";
import Tech from "./Tech";

const styless = [
  {
    objectFit: "cover",
    flexShrink: 0,
    width: "45vh",
    height: "45vh",
    borderRadius: "20px",
    transition: "0.3s",
    cursor: "pointer",
  },
  {
    color: "#ff19a5",
  },
  {
    objectFit: "cover",
    flexShrink: 0,
    borderRadius: "20px",
    transition: "0.3s",
    cursor: "pointer",
    width: "90vw",
    height: "90vw",
  },
];

// const [matches, setMatches] = useState(
//   window.matchMedia("(max-width: 500px)").matches
// )

// useEffect(() => {
//   window
//   .matchMedia("(max-width: 500px)")
//   .addEventListener('change', e => setMatches( e.matches ));
// }, []);

const Card = ({ name, subtitle, description, links }) => {
  const bg = useColorModeValue(colors.bg.light, colors.bg.dark);

  return (
    <Box
      bgColor={bg}
      borderRadius="lg"
      borderWidth={bg === colors.bg.light ? "1px" : ""}
      rounded="md"
      shadow="lg"
      mt={0}
      m="auto"
      mb={3}
      w="75%"
      textAlign="start"
    >
      <Heading as="h1" size="lg" m={2} p={2} pt={6} style={styless[1]}>
        {name}
      </Heading>
      <Text hidden={!subtitle} size="sm" as="strong" m={2} p={2} pb={6}>
        {subtitle}
      </Text>
      <Text m={2} p={2} pb={6}>
        {description}
      </Text>
      <LinkIconBar
        className="project-icon"
        links={links}
        float="right"
        mt={0}
        mr={4}
        mb={4}
      />
    </Box>
  );
};

const ProjectContent = ({
  alternate,
  name,
  subtitle,
  description,
  pic,
  tech,
  links,
}) => {
  const isDesktopOrPhone = useMediaQuery({
    query: "(max-width: 500px)",
  });
  if (alternate) {
    return (
      <>
        <Card
          name={name}
          subtitle={subtitle}
          description={description}
          links={links}
        />
        <Grid container direction="row" justifyContent="center" spacing={2}>
          <Tech tech={tech} />
        </Grid>
      </>
    );
  }

  return (
    <Image
      m="auto"
      w="85%"
      p="auto"
      src={pic}
      alt={`${name} picture`}
      className="image project"
      style={isDesktopOrPhone ? styless[2] : styless[0]}
      onClick={() => {
        window.open(links[0].url);
      }}
    />
  );
};

const Project = ({ index, shouldAlternate, ...props }) => (
  <Fade>
    <Grid container direction="row">
      <Grid container item xs={12} sm={6}>
        <ProjectContent
          alternate={shouldAlternate ? index % 2 === 0 : false}
          {...props}
        />
      </Grid>
      <Grid container item xs={12} sm={6} style={{ padding: "2vh" }}>
        <ProjectContent
          alternate={shouldAlternate ? index % 2 === 1 : true}
          {...props}
        />
      </Grid>
    </Grid>
  </Fade>
);

function ProjectsOverview() {
  const shouldAlternate = useBreakpointValue({ base: false, md: true });
  return (
    <Flex pt={12}>
      <Grid container direction="column" justifyContent="center">
        {projects.map((project, index) => (
          <Project
            key={project.name}
            index={index}
            shouldAlternate={shouldAlternate}
            {...project}
          />
        ))}
      </Grid>
    </Flex>
  );
}

export default ProjectsOverview;

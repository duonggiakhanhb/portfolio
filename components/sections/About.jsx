import {
  GridItem,
  Image,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import { colors } from "../../theme";
import SectionContainer from "../SectionContainer";
import ProfileBox from "./ProfileBox";

const Bio = ({ secondary }) => (
  <GridItem>
    <VStack m="auto" w="75%" spacing="12px" pt="5%">
      <Text>
        Hi, I&apos;m Adam! I studied computer science at Ho Chi Minh city
        University of Education, and I&apos;m currently working{" "}
        {/* <Link href="https://www.sailpoint.com/" isExternal>
          SailPoint
        </Link>{" "} */}
        as a <strong style={{ color: secondary }}>Data Engineer</strong>{" "}
        {/* as a <strong style={{ color: secondary }}>Software Engineer II</strong>{" "} */}
        on the Platform Workflows team.{" "}
      </Text>
      <Text>
        I enjoy creating scalable & elegant web/mobile applications that have a
        real world impact. I&apos;m always learning new technologies, either
        through.{" "}
      </Text>
    </VStack>
  </GridItem>
);

const Bio2 = ({ third }) => (
  <GridItem>
    <VStack m="auto" w="75%" spacing="12px" pt="5%">
      <Text>
        &quot;Creativity&quot;, &quot;Caution&quot; and &quot;Ambition&quot; are
        three main qualities that stand out about me. I&apos;ve gained a
        plethora of knowledge about my capacity for research and learning new
        things during my three years of education at the Ho Chi Minh City
        University of Education. And my name is Tien -{" "}
        <strong style={{ color: third }}>A member of APT</strong>{" "}
      </Text>
      <Text>
        I enjoy working with data and finding the best solution to solve
        problems. I also like to research to improve my skills and mindset. With
        an extensive background in engineering principles and the effective
        application of research in technological companies, I am trying my best
        to be better.{" "}
      </Text>
    </VStack>
  </GridItem>
);

const Headshot = () => (
  // <GridItem>
  //   <Image
  //     className="box display image"
  //     m="auto"
  //     src="/profile.png"
  //     alt="Adam Nguyen"
  //     zIndex={1}
  //     onClick={() => {
  //       window.open("https://github.com/duonggiakhanhb");
  //     }}
  //   />
  // </GridItem>
  <ProfileBox />
);

const Nextshot = () => (
  <GridItem>
    <Image
      className="box display image"
      m="auto"
      src="/tien.jpeg"
      alt="Tien Phan"
      zIndex={1}
      onClick={() => {
        window.open("https://github.com/duonggiakhanhb");
      }}
    />
  </GridItem>
);

export default function About() {
  const shouldAlternate = useBreakpointValue({ base: false, md: true });
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );
  const third = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );
  return (
    <SectionContainer
      id="about"
      name="about"
      headerMt="0%"
      headerText="About Us"
      useHeaderStyle
    >
      <SimpleGrid
        pl="10%"
        pt="5%"
        pr="10%"
        spacing={12}
        columns={[1, null, 2]}
        justifyContent="center"
      >
        {shouldAlternate ? <Bio secondary={secondary} /> : <Headshot />}
        {shouldAlternate ? <Headshot /> : <Bio secondary={secondary} />}
      </SimpleGrid>
      <SimpleGrid
        pl="10%"
        pt="5%"
        pr="10%"
        spacing={12}
        columns={[1, null, 2]}
        justifyContent="center"
      >
        {shouldAlternate ? <Nextshot /> : <Bio2 third={third} />}
        {shouldAlternate ? <Bio2 third={third} /> : <Nextshot />}
      </SimpleGrid>
    </SectionContainer>
  );
}

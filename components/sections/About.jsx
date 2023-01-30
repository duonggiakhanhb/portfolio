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

import ProfileBox from "../sections/ProfileBox";

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

export default function About() {
  const shouldAlternate = useBreakpointValue({ base: false, md: true });
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );
  return (
    <SectionContainer
      id="about"
      name="about"
      headerMt="-5%"
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
    </SectionContainer>
  );
}

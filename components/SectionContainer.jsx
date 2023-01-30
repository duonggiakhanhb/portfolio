import { Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Fade from "react-reveal/Fade";

import styles from "../styles/components/SectionContainer.module.css";

function SectionContainer({
  children,
  headerMt = "",
  headerText = "",
  useHeaderStyle = false,
  ...props
}) {
  // const color = useColorModeValue("secondary.light", "secondary.dark");
  return (
    <div className={styles.container} {...props}>
      <Fade>
        <div className={styles.column}>
          <Text
            as="h1"
            mt={headerMt}
            style={{textAlign: "center"}}
            className={useHeaderStyle ? styles.header : ""}
          >
            {headerText}
          </Text>
          {children}
        </div>
      </Fade>
    </div>
  );
}
export default SectionContainer;

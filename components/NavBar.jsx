import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  Link,
  Spacer,
  Stack,
  Text,
  Tooltip,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { animateScroll as scroll, Link as ScrollLink } from "react-scroll";
import Sticky from "react-stickynode";

import { colors } from "../theme";

const styless = [
  {
    color: "#fff",
    fontSize: "1.2rem",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
  },
  {
    borderRadius: "18px",
    backgroundColor: "red",
    background: "rgba(255, 255, 255, 0.095)",
    boxShadow:
      "inset 2.01px -2.01px 20px rgba(214, 214, 214, 0.17), inset -3.01333px 3.01333px 3.01333px rgba(255, 255, 255, 0.39)",
    backdropFilter: "blur(74.4293px)",
  },
];

const navBtns = [
  {
    label: "About",
  },
  {
    label: "Experience",
  },
  {
    label: "Projects",
  },
  {
    label: "Contact",
  },
];

const HamburgerIcon = () => (
  <svg
    viewBox="0 0 24 24"
    focusable="false"
    width="3vh"
    height="3vh"
    color="white"
  >
    <path
      fill="currentColor"
      d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"
    />
  </svg>
);

const Logo = () => {
  const logo = useColorModeValue("/logo.png", "/logo-dark.png");
  return (
    <Text
      className="navlogo"
      style={{ cursor: "pointer" }}
      onClick={() => scroll.scrollToTop()}
    >
      APT TEAM
    </Text>
  );
};

const MenuToggle = ({ isOpen, onOpen }) => (
  <Box display={{ base: "block", md: "none" }} pr={4}>
    <Button onClick={onOpen} style={styless[1]}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon style={styless[1]} />}
    </Button>
  </Box>
);

const NavButtons = ({ size, onClose }) => {
  const btns = navBtns.map((btn) => (
    <Button
      key={btn.label}
      size={size}
      variant="link"
      mb={2}
      onClick={onClose}
      style={styless[0]}
    >
      {btn.href ? (
        <Link href={btn.href} isExternal>
          {btn.label}
        </Link>
      ) : (
        <ScrollLink
          to={btn.label.toLowerCase()}
          href={btn.href}
          spy
          smooth
          offset={-70}
          duration={500}
          onClick={onClose}
        >
          {btn.label}
        </ScrollLink>
      )}
    </Button>
  ));
  return <>{btns}</>;
};

const ColorModeButton = ({ mr }) => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const nextMode = useColorModeValue("dark", "light");
  return (
    <Tooltip
      label={`Toggle ${nextMode} mode`}
      aria-label={`Toggle ${nextMode} mode`}
    >
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Toggle ${nextMode} mode`}
        variant="ghost"
        color="current"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        style={{ marginRight: mr }}
      />
    </Tooltip>
  );
};

const MenuLinks = ({ onClose }) => (
  <Stack
    display={{ base: "none", sm: "none", md: "block" }}
    width={{ sm: "full", md: "auto" }}
    spacing="24px"
    direction={["column", "row", "row", "row"]}
    alignItems="center"
    style={{ marginRight: "40px" }}
  >
    <NavButtons size="sm" onClose={onClose} />
    {/* <ColorModeButton mr="12px" /> */}
  </Stack>
);

const NavMenu = ({ isOpen, onClose }) => (
  <Drawer
    placement="right"
    onClose={onClose}
    isOpen={isOpen}
    style={{ background: "black" }}
  >
    <DrawerOverlay>
      <DrawerContent>
        <DrawerBody>
          <Stack
            alignItems="center"
            justifyContent="center"
            direction={["column"]}
            spacing="24px"
            mt="20vh"
          >
            <NavButtons size="lg" onClose={onClose} />
            {/* <ColorModeButton /> */}
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </DrawerOverlay>
  </Drawer>
);

function Navbar() {
  const primary = useColorModeValue(colors.primary.light, colors.primary.dark);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Sticky enabled innerZ={99}>
      <Stack
        as="header"
        w="100%"
        direction={["row", "row", "row", "row"]}
        alignItems="center"
        justifyContent="center"
        bg="#1F1D2B"
      >
        <Logo />
        <Spacer />
        <MenuLinks onClose={onClose} />
        <NavMenu isOpen={isOpen} onClose={onClose} />
        <MenuToggle isOpen={isOpen} onOpen={onOpen} />
      </Stack>
    </Sticky>
  );
}

export default Navbar;

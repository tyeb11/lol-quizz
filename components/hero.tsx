import {
  Box,
  Button,
  Container,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

import { FC } from "react";
import SideHeros from "./side-hero";

const Hero: FC = () => {
  return (
    <>
      <Container display="flex" flexDirection="column">
        <Box>
          <Image
            alt="league-of-legends-logo"
            mt={50}
            src="https://logos-world.net/wp-content/uploads/2020/11/League-of-Legends-Logo.png"
          />
          <Text mt={-20} fontSize={50} textAlign="center" as="h1">
            Quizz!
          </Text>
        </Box>
        <InputGroup mt={20}>
          <Input size="md" placeholder="Email" />
          <InputRightElement></InputRightElement>
        </InputGroup>
        <Button mt={5}>Start</Button>
        <SideHeros />
      </Container>
    </>
  );
};

export default Hero;

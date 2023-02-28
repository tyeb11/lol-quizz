import { Image, Box, Container } from "@chakra-ui/react";

function SideHeros() {
  return (
    <>
      <Container>
        <Box pos="absolute" left={0} top={400} zIndex={-1}>
          <Image
            src="https://freepngimg.com/thumb/league_of_legends/92198-league-art-legends-riven-of-character-fictional.png"
            h="300"
          />
        </Box>
        <Box pos="absolute" right={0} top={400} zIndex={-1}>
          <Image
            h="400"
            src="https://vignette.wikia.nocookie.net/vsbattles/images/9/90/Ekko-League-of-Legends-Fan-Art-2605.png/revision/latest?cb=20161101210156"
          />
        </Box>
      </Container>
    </>
  );
}

export default SideHeros;

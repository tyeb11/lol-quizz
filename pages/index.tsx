import Hero from "@/components/hero";
import { Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Container maxH={100}>
        <Hero />
      </Container>
    </>
  );
}

import { Jumbotron, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <Container>
      <main>
        <Jumbotron className="text-center">
          <h3>Welcome to the Edwin's Trivia App!</h3>
          <h6 className="mt-5">Testing out Basic React functionality!!</h6>
          <Button className="mt-5" as={Link} to="/trivia" variant="secondary">
            Start Quiz
          </Button>
        </Jumbotron>
      </main>
    </Container>
  );
};

export default Homepage;

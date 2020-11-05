import { Renderer } from "../Renderer";
import { portDetails } from "../portfolioDetails";
import Container from "../components/Container";
import Row from "../components/Row";

const Portfolio = () => {
  return (
    <Container>
      <Row>
          <Renderer config={portDetails} />
      </Row>
    </Container>
  )
};

export default Portfolio;
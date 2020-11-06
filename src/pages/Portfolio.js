import { Renderer } from "../Renderer";
import { portDetails } from "../portfolioDetails";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


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
import { Renderer } from "../Renderer";
import { portDetails } from "../portfolioDetails";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const Portfolio = () => {
  return (
    <section id="portfolio" class="album1 py-5 diagonal-box">
      <Container>
      <h2 class="album-left album-left-port">Portfolio</h2>
        <Row className="content">
          <Renderer config={portDetails} />
        </Row>
      </Container>
    </section>
  )
};

export default Portfolio;
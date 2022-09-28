import { Card, Container, Row, Col } from "react-bootstrap";

const Frase = ({personaje}) => {
  return (
    <>
      <Container>
        <Card>
          <Card.Body>
          <Row>
            <Col md={5} className='text-center'>
              <img src={personaje.image} alt={personaje.character}
              />
            </Col>
            <Col md={7}>
              <Card.Title>
                <h5>{personaje.character}</h5>
              </Card.Title>
              <Card.Text>  
                 {personaje.quote}
              </Card.Text>
            </Col>
          </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Frase;

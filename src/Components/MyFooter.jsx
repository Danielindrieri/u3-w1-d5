import { Container, Row, Col} from "react-bootstrap";
const MyFooter = () => (
  <footer className="d-flex bg-dark border-top">
    <Container>
      <Row>
        <Col className="text-center">
          <span className="text-white m-auto p-2 mt-3 d-flex flex-column myw">
            <p className="text-secondary color d-inline">Privacy</p>
            <p className="text-secondary color d-inline">Contact us</p>
            <p className="text-secondary color d-inline">Terms of Use</p>
            <p className="text-secondary color d-inline">Help Center</p>
          </span>
        </Col>
      </Row>

      <Row>
        <strong className="text-secondary text-center">© {new Date().getFullYear()} Reactflix, Inc.</strong>
      </Row>
    </Container>
  </footer>
);

export default MyFooter;
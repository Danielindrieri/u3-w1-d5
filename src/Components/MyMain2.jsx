import {Component} from 'react'
import {Row, Col, Card, Alert, Spinner, ListGroup} from 'react-bootstrap'

class MyMainGallery2 extends Component {
  state = {
    films2: [],
  }

  GetFilms2 = () => {
    fetch('http://www.omdbapi.com/?apikey=5485af11&s=Batman')
      .then((resp) => {
        if (resp.ok) {
          return resp.json()
        } else {
          throw new Error('Errore nella chiamata')
        }
      })
      .then((data) => {
        console.log('Risposta dal server', data)
        this.setState({
          films2: data.Search,
        })
      })
      .catch((e) => {
        console.log('Errore!', e)
      })
  }

  componentDidMount() {
    this.GetFilms2()
  }

  render() {
    return (
      <div className="container">
        <h1 className="fs-3 mb-4 pt-1 fw-bold DC">Batman</h1>
        {this.state.isError && (
          <Alert variant="danger">Non è andata bene!</Alert>
        )}

        {/*Loader*/}
        {this.state.isLoading && (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{height: '50vh'}}>
            <Spinner animation="border" role="status" variant="success">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}

        {/* Se non ci sono film */}
        {!this.state.isLoading &&
          !this.state.isError &&
          this.state.films2.length === 0 && (
            <ListGroup>
              <ListGroup.Item>
                Non ci sono Film disponibili al momento
              </ListGroup.Item>
            </ListGroup>
          )}
        <Row>
          {this.state.films2.slice(0, 6).map((film) => (
            <Col key={film.imdbID} xs={12} md={4} lg={2} className="mb-4">
              <Card className="bg-black text-white mywi h-100 hover-card hovering2 ">
                <Card.Img
                  src={film.Poster}
                  alt={film.Title}
                  className="img-fluid"
                  style={{width: '180px', height: '200px'}}
                />
                <div className="d-flex justify-content-center">
                  <Card.Text>{film.Year}</Card.Text>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}

export default MyMainGallery2

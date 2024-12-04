import logo from './logo.svg';
import wanda from './data/wanda.jpg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import MyNav from './Components/MyNav';
import MyMain from './Components/MyMain';
import MyMain2 from './Components/MyMain2';
import MyMain3 from './Components/MyMain3';
import MyFooter from './Components/MyFooter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <MyNav logo={logo} wanda={wanda} />
        </header>
        <main className="bg-dark">
          <Routes>
            {/* Rotta per la homepage */}
            <Route
              path="/"
              element={
                <Row className="justify-content-center mt-3">
                  <Col xs={12} md={8} lg={6}>
                    <MyMain />
                    <MyMain2 />
                    <MyMain3 />
                  </Col>
                </Row>
              }
            />
          </Routes>
        </main>
        <footer>
          <MyFooter />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

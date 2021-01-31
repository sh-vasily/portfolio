import Projects from './Domain/Projects';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';


function App() {
  return (
    <div className="App">
      <Container >
        <Row>
          <Col>
            <Projects 
                name="Recommendations system" 
                description="Recommendations system, that predict book rating by user id. Developed on django fraemwork, using bootstrap."
                applicationUrl="http://shvasily.pythonanywhere.com/"
                sourceCodeUrl="https://github.com/dep-810b-studs/recommendation-systems/tree/master/books_recommendations"/>
          </Col>
          <Col>
            <Projects 
                name="AirBnB prototype" 
                description="AirBnB clone developed on kotlin, spring, using mongo, elastic"
                applicationUrl=""
                sourceCodeUrl=""/>
          </Col>
          <Col>
            <Projects 
                name="Simple CRM" 
                description="Simple CRM for imaginary company developed on dotnet core, wpf, blazor using mssql and ef corec"
                applicationUrl=""
                sourceCodeUrl=""/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

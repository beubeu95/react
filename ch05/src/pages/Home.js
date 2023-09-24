import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Vs1 from './vs1.svg';
import Vs2 from './vs2.svg';
import Vs3 from './vs3.svg';
import './Home.scss';
const Home = () => {

const [index, setIndex] = useState(0);
const handleSelect = (selectedIndex) => { setIndex(selectedIndex); };

return (
<div>
    <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <Card.Img variant="top" src={Vs1} />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Card.Img variant="top" src={Vs2} />
            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Card.Img variant="top" src={Vs3} />
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    <ListGroup as="ol" numbered>
      <ListGroup.Item as="li"><Link to="/about" className="list">Intro</Link></ListGroup.Item>
      <ListGroup.Item as="li"><Link to="/profile/sangmin" className="list">Developer 1</Link></ListGroup.Item>
      <ListGroup.Item as="li"><Link to="/profile/yeun" className="list">Developer 2</Link></ListGroup.Item>
      <ListGroup.Item as="li"><Link to="/profile/sehoon" className="list">Developer 3</Link></ListGroup.Item>
      <ListGroup.Item as="li"><Link to="/dataroom" className="list">자료실</Link></ListGroup.Item>
    </ListGroup>
</div>
)
}

export default Home
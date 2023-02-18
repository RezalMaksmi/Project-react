// import { Link } from 'react-router-dom';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
// eslint-disable-next-line no-unused-vars
import css from './../assets/Hero.css';


const Navigation = () => {
    return (
        <section className="heroo position-fixed top-0 start-50 translate-middle-x w-100" >
        <Navbar bg="light" expand="lg" >
        <Container>
            <Navbar.Brand href="/" className='txt'><span>BELANJA MUDAH</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                
            >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/buy">Product</Nav.Link> 
                <Nav.Link href="/contact">Contact</Nav.Link>
                
            </Nav>
            <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </section>
    );
}

export default Navigation;
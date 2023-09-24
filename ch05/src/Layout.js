//useNavigate : 자바스크립트와 같은 페이지 이동 또는 URL 제어와 관련한 훅(hook)
import React from 'react'
import { Outlet,  useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './Layout.scss';
const Layout = () => {
    const navigate = useNavigate();
    const goBack = () => { navigate(-1); };
    const goHome = () => { navigate('/', { replace : true }); }
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">REACT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Button onClick={goBack} variant="info" className="btn">뒤로가기</Button>
                            <Button onClick={goHome} variant="dark" className="btn">홈으로</Button>
                            <NavDropdown title="MENU" id="basic-nav-dropdown">
                                <NavDropdown.Item ><Link to='/articles' className="menuItem">게시판</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to='/login' className="menuItem">로그인</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to='/mypage'className="menuItem">마이페이지</Link></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
export default Layout
//NavLink : 조건 연결 및 사이트 이동
//Outlet : Route로 감싸서 설정하면, 공통 페이지가 되고, 서브 컴포넌트에서는 교체될 대상을 설정하는 훅(hook)
import { NavLink, Outlet } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';

const Articles = () => {
  return (
    <div>
        <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link ><ArticleItem id={1} /></Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1"><ArticleItem id={2} /></Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2"><ArticleItem id={3} /></Nav.Link>
        </Nav.Item>
        </Nav>
        <div>
            <Outlet />
        </div>
    </div>
  )
};

const ArticleItem = ({ id }) => {
    const activeStyle = { color:'deepskyblue', fontSize:20,};
    return (
       <li>
        <NavLink to={`/articles/${id}`} 
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>게시글 {id} 번째
        </NavLink></li> 
    );
};
export default Articles
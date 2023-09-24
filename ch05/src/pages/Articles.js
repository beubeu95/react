//NavLink : 조건 연결 및 사이트 이동
//Outlet : Route로 감싸서 설정하면, 공통 페이지가 되고, 서브 컴포넌트에서는 교체될 대상을 설정하는 훅(hook)
import { NavLink, Outlet } from 'react-router-dom'
const Articles = () => {
  return (
    <div>
        <h1>글 목록</h1>
        <ul>
            <ArticleItem id={1} /> <ArticleItem id={2} /> <ArticleItem id={3} />
        </ul>
        <div>
            <Outlet />
        </div>
    </div>
  )
};
const ArticleItem = ({ id }) => {
    const activeStyle = { color:'deeppink', fontSize:24,};
    return (
       <li>
        <NavLink to={`/articles/${id}`} 
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>게시글 {id} 번째
        </NavLink></li> 
    );
};
export default Articles
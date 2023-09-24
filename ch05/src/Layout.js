//useNavigate : 자바스크립트와 같은 페이지 이동 또는 URL 제어와 관련한 훅(hook)
import React from 'react'
import { Outlet,  useNavigate, Link } from 'react-router-dom';
const Layout = () => {
    const navigate = useNavigate();
    const goBack = () => { navigate(-1); };
    const goHome = () => { navigate('/', { replace : true }); }
    return (
        <div>
            <header style={{ background:'#ececec', padding:20, fontSize:24 }}>
                <button onClick={goBack}>뒤로가기</button>
                <button onClick={goHome}>홈으로</button>
                <ul style={{ float:'right' }}>
                    <li><Link to='/articles'>게시판</Link></li>
                    <li><Link to='/login'>로그인</Link></li>
                    <li><Link to='/mypage'>마이페이지</Link></li>
                </ul>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
export default Layout
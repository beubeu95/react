import { useParams } from 'react-router-dom';
import sangminP from "../sangmin.jpg";
import yeunP from "../yeun.jpg";
import sehoonP from "../sehoon.jpg";
import "./Profile.scss";
const data = {
  sangmin: {  name: '최상민', description: '백엔드를 좋아하는 개발자', pic:sangminP},
  yeun: { name: '신예은', description: '프론트엔드를 좋아하는 개발자', pic:yeunP},
  sehoon: { name: '오세훈', description: '서울을 사랑하는 개발자', pic:sehoonP},
};
const Profile = () => {
  const params = useParams();
  const profile = data[params.username];
  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div className='Profile'>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
          <p><img src={profile.pic} alt={profile.name} /></p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};
export default Profile;
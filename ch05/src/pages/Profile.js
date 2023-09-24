import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
          <Card style={{ width: '18rem' }} className='card'>
            <Card.Img variant="top" src={profile.pic} alt={profile.name}/>
            <Card.Body>
              <Card.Title>{profile.name}</Card.Title>
              <Card.Text>{profile.description}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};
export default Profile;
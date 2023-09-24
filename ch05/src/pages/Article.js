//useParams : 요청 파라미터의 값을 가져올 때 사용하는 훅(hook)
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Article.scss';

const Article = () => {
    const { id } = useParams();
    const [show, setShow] = useState(false);

  return (
    <>
    <Button variant="primary" onClick={() => setShow(true)} className="btnArticle">
    게시글 {id} 번째 제목
    </Button>

    <Modal
      show={show}
      onHide={() => setShow(false)}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          게시글 {id} 번째 제목
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
        게시글 {id} 번째 글의 내용입니다.
        </p>
      </Modal.Body>
    </Modal>
  </>
  )
}

export default Article
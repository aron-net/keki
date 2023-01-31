import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="xxl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Keki Video
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe width="450" height="490" src="https://www.youtube.com/embed/kB7DawAOmeI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;

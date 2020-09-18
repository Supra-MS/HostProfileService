import React, { useState } from 'react';
import ContactModal from './ContactModal';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const Contact = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <button className="contact-host" onClick={toggle}>Contact host</button>
      <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Sign up</ModalHeader>
        <ModalBody>
          <ContactModal />
        </ModalBody>
      </Modal>
    </>
  );
};

export default Contact;
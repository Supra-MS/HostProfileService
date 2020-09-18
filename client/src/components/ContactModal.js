import React from 'react';
import SvgApple from './SvgApple';
import SvgEmail from './SvgEmail';
import FacebookIcon from '@material-ui/icons/Facebook';
import SvgGgl from './SvgGgl';
import CustomControl from './CustomControl';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const ContactModal = () => {
  return (
    <>
      <Form>
        <CustomControl />
        <FormGroup row>
          <Input type="tel" name="tel" placeholder="Phone Number" />
        </FormGroup>
        <p className="modal-p">We’ll call or text you to confirm your number. Standard message and data rates apply.</p>
      <Button className="continue-btn" color="secondary" size="lg" block>Continue</Button>
      </Form>



      <span className="divider">{' '} or {' '}</span>

      <div className="social-auth">
        <div className="txt-container">
          <SvgEmail />
          <Button className="social-btn" color="secondary" size="lg" block>Continue with email</Button>
        </div>
        <div className="txt-container">
          <FacebookIcon className="social-logo fb" />
          <Button className="social-btn" color="secondary" size="lg" block>Continue with Facebook</Button>
        </div>
        <div className="txt-container">
          <SvgGgl />
          <Button className="social-btn" color="secondary" size="lg" block>Continue with Google</Button>
        </div>
        <div className="txt-container">
          <SvgApple />
          <Button className="social-btn" color="secondary" size="lg" block>Continue with Apple</Button>
        </div>

        <p className="modal-p-login">Already have an account? <button className="log-in-btn">Log in</button></p>

      </div>


    </>
  );
};

export default ContactModal;
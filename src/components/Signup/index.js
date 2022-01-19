import React from 'react';
import {
  Icon,
  FormContent,
  Form,
  FormH1,
  FormButton,
  FormInput,
  FormLabel,
  Text
} from './SignupElements';
import Image from '../../Assets/images/logo-lvn-small.png';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from '../../Assets/lottie/signup.json';
import './Signup.scss';

export default class SignupPage extends React.Component {

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    return <div className="signup container-fluid">
      <Icon to="/">
        <img src={Image} alt="lvn-logo" className="logo" />
      </Icon>
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-4 lottie">
            <Lottie
              className="lottie-img"
              options={defaultOptions}
            />
          </div>
          <div className="col-xl-7 col-lg-8 col-md12">
            <FormContent>
              <Form action="#">
                <FormH1>Start learning Vietnamese with LVN</FormH1>
                <div className="row">
                  <div className="col-6">
                    <FormLabel htmlFor='for'>Username</FormLabel>
                    <FormInput type="name" required />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type="text" required />
                  </div>
                  <div className="col-6">
                    <FormLabel htmlFor='for'>Phone Number</FormLabel>
                    <FormInput type="number" required />
                    <FormLabel htmlFor='for'>Confirm Password</FormLabel>
                    <FormInput type="text" required />
                  </div>
                  <div className="col-12">
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type="email" required />
                  </div>
                </div>
                <FormButton type="submit">Continue</FormButton>
                <Text>
                  Already have an account?
                  <Link to="/signin" className="signuptext"> Sign In</Link>
                </Text>
              </Form>
            </FormContent>
          </div>
        </div>
      </div>
    </div>
  }
}

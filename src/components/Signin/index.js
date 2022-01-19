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
} from './SigninElements';
import Image from '../../Assets/images/logo-lvn-small.png';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from '../../Assets/lottie/sign-in.json';
import './Signin.scss';

export default class SigninPage extends React.Component {

  render = () => {
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
                <FormH1>Sign in to your account</FormH1>
                <FormLabel htmlFor='for'>Username</FormLabel>
                <FormInput type="text" required />
                <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput type="password" required />
                <FormButton type="submit">Continue</FormButton>
                <Text>Forgot password</Text>
                <Text>
                  New to LVN?
                  <Link to="/signup" className="signuptext"> Sign Up</Link>
                </Text>
              </Form>
            </FormContent>
          </div>
        </div>
      </div>
    </div>
  }
}

import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../Assets/lottie/404-page-not-found.json';
import './PageNotFound.scss';

export default class PageNotFound extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    return (
      <div className="page-not-found">
        <Lottie
          className="lottie-img"
          options={defaultOptions}
          height={730}
        />
      </div>
    )
  }
}

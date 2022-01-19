import Image1 from '../../Assets/images/svg-01.svg'
import Image2 from '../../Assets/images/svg-02.svg'
import Image3 from '../../Assets/images/svg-03.svg'

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Learning Vietnamese courses',
    headline: 'Unlimited Vietnamese courses with zero fees',
    description: 'Get access to our exclusive app that allows you to learn unlimited Vietnamese courses without getting charged any fees.',
    buttonLabel: 'Get started',
    imgStart: false,
    img: Image1,
    alt: 'lvn',
    dark: true,
    primary: true,
    darkText: false,
    to: '/signin'
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Access unlimited',
    headline: 'Login to your account at any time',
    description: 'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: Image2,
    alt: 'lvn',
    dark: false,
    primary: false,
    darkText: true,
    to: '/signin'
};

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Join our team',
    headline: 'Creating an account is extremely easy',
    description: "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
    buttonLabel: 'Start Now',
    imgStart: false,
    img: Image3,
    alt: 'lvn',
    dark: false,
    primary: false,
    darkText: true,
    to: '/signup'
};


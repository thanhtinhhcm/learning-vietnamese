import React from 'react';
import { CoursesContainer, CoursesH1, CoursesH2, CoursesCard, CoursesIcon, CoursesP, CoursesWrapper } from './CoursesElements';
import Icon1 from '../../Assets/images/svg-01.svg';
import Icon2 from '../../Assets/images/svg-02.svg';
import Icon3 from '../../Assets/images/svg-03.svg';

const Courses = () => {
    return (
        <CoursesContainer id="courses">
            <CoursesH1>Our Courses</CoursesH1>
            <CoursesWrapper>
                <CoursesCard>
                    <CoursesIcon src={Icon1} />
                    <CoursesH2>Reduce expenses</CoursesH2>
                    <CoursesP>
                        We help reduce your fees and increase your overall revenue.
                    </CoursesP>
                </CoursesCard>
                <CoursesCard>
                    <CoursesIcon src={Icon2} />
                    <CoursesH2>Virtual Offices</CoursesH2>
                    <CoursesP>
                        You can access our platform online anywhere in the world.
                    </CoursesP>
                </CoursesCard>
                <CoursesCard>
                    <CoursesIcon src={Icon3} />
                    <CoursesH2>Premium Benefits</CoursesH2>
                    <CoursesP>
                        Unlock our special membership card that returns 5% cash back.
                    </CoursesP>
                </CoursesCard>
            </CoursesWrapper>
        </CoursesContainer>
    )
}

export default Courses

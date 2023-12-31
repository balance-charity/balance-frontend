import React from 'react';
import './works.css';
import Michal from '../../assets/Michal.png';

const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">Testimonials</h2>
            <div className="skillBar">
                <img src={Michal} alt="Michal" className="testimonialsImg" />
                <div className="testimonialsText">
                    <p>My name is Michal Chen, mother of 4 beautiful
                        children. My oldest daughter, Tehilla was such a bright, smart and
                        talented girl. She loved to help others and was very loving and everyone
                        loved her.</p>
                    <p><br />As she got older, life became more challenging and was hard for
                        her to deal with her emotions, she searched for unhealthy ways to comfort her
                        pain and it was very difficult to find emotional support socially and mentally.
                        I wish she had an outlet that would be a safe healthy place so she wouldn't feel
                        alone.</p>
                    <p><br />By the time she was 16.5, she fell to drugs and by 18, Tehilla tragically
                        left this world due to the addiction of fatal drugs. Our story is incredibly heartbreaking
                        , a beautiful girl with a whole life ahead of her was taken away from us. </p>
                    <p><br />I really hope that the kids today can feel that there is a place for them to just be accepted
                        and loved for who they are in a healthy social environment so that they won't look
                        to numb their pain in destructive ways.</p>
                </div>
            </div>
            <hr />
        </section>
    );
}

export default Works;
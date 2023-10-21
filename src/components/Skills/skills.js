import React from 'react';
import './skills.css';
import Shlomo from '../../assets/Shlomo.jpeg'
import Shmuel from '../../assets/Shmuel.jpeg'

const Skills = () => {
    return (
        <section id='skills'>
            <hr />
            <span className="skillTitle">The Team</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={Shlomo} alt="Shlomo" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Shlomo Mizrahi</h2>
                        <h3>Co-Founder and Head of Fundraising</h3>
                        <p><br></br>After suffering a close personal loss due to drug overdose,
                            Shlomo's entire life was changed and his priorities shifted
                            immediately. He took on a new life mission: to help abandoned,
                            abused, or otherwise neglected children and young adults and save
                            them from similar tragedies.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Shmuel} alt="Shmuel" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Shmuel Nachman</h2>
                        <h3>Co-Founder and Head of Operations</h3>
                        <p><br></br>As a young kid, Shmuel left the unwavering certainty of his strict orthodox
                            community for the deceptive allure of freedom on the streets of Jerusalem.
                            During this time he witnessed widespread drug abuse, rampant sexual assault,
                            and unnecessary violence amongst his peers. These firsthand experiences inspired
                            him to escape this lifestyle and be sober. Today, he dedicates his life to help
                            other make the same choice and take back their life.</p>
                    </div>
                </div>
            </div>
            <span className="skillTitle2">Volunteers</span>
            <span className="skillDesc">Our program relies the time and effort generously shared by our many
                wonderful volunteers. We recieve help from a wide variety of volunteers including dancers,
                religious leaders, therapists, musicians, recovered drug-users, and people of all walks of life.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <div className="skillBarText">
                        <h2>We need your help!</h2>
                        <p><br></br>With your participation, we hope to expand the frequency and variety of services we provide.
                            This will include daily programing at a permanent drop-in center and critical staff members
                            who can provide full-time services.</p>
                        <p><br></br>You can help too! If you are anywhere near Jerusalem, reach out to Shmuel Nachman via
                            <a href="mailto:shmuel@balance.charity"> shmuel@balance.charity</a> to see how you can get involved on the ground.</p>
                        <p><br></br>Alternatively, your donation will enable us to acquire a more permanent location with which we will reach ever
                            more at-risk children and young adults.</p>
                    </div>
                </div>
            </div>
            <hr />
        </section>
    );
}

export default Skills;
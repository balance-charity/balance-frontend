import React from 'react';
import './faq.css';

const Faq = () => {
    return (
        <section id='faq'>
            <span className="faqTitle">FAQ</span>
            <div className="faqBars">
                <div className="faqBar">
                    <div className="faqBarText">
                        <h2>What are we doing now?</h2>
                        <p><br />We are currently running a late night Thursday program in Jerusalem.
                            We rely on donated food, donated space, and donated time. We'd love to get
                            you more involved, or if you are in need of our services, we'd love to help
                            you out!</p>
                        <p><br />Contact Shmuel via <a href="mailto:shmuel@balance.charity">shmuel@balance.charity
                        </a> for more information.</p>
                        <hr />
                        <h2>What are we missing and how can you help?</h2>
                        <p><br />We are missing <b>YOU!</b></p>
                        <p><br />With your participation, we hope to expand the frequency and variety of services we provide.
                            This will include daily programing at a permanent drop-in center and critical staff members who
                            can provide full-time services.</p>
                        <p><br />You can help too! If you are anywhere near Jerusalem, reach out to Shmuel Nachman
                            via <a href="mailto:shmuel@balance.charity">shmuel@balance.charity</a> to see how you can get involved
                            on the ground.</p>
                        <p><br />Alternatively, your donation will enable us to acquire a more permanent location with which we will
                            reach ever more at-risk children and young adults.</p>
                        <hr />
                        <h2>Why did we create The Balance?</h2>
                        <div className="faqVideo">
                            <iframe
                                src="https://www.youtube.com/embed/2N2_tCmCZxE?si=5Z5SHB--crsj5Uz7"
                                title="YouTube video"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </section>
    );
}

export default Faq;
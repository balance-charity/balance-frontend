import React from 'react';
import './intro.css';
import { Link } from 'react-scroll';
import { InstagramEmbed } from 'react-social-media-embed';

const Intro = () => {
    return (
        <section id="intro" className="flex-container">
            <div className="textColumn">
                <div className="textTitle">
                    <p>OUR MISSION</p>
                </div>
                <div className="textSection">
                    <p>The Balance seeks to save at-risk youth from falling prey to violence,
                        drug abuse, and sexual assault on the streets of Jerusalem and beyond.
                        We foster a space that provides the emotional, physical, and spiritual
                        support at-risk youth need to rise above their circumstances and develop
                        their full potential.</p>
                </div>
            </div>
            <div className="centerVideo">
                <iframe
                    src="https://www.youtube.com/embed/Ej0sryIy_do?si=WBDxIKgFEgWUmuyU"
                    title="YouTube video"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>
            <div className="instagramColumn">
                <InstagramEmbed url="https://www.instagram.com/reel/CyJbvY6i8-p/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" />
            </div>
        </section>
    );
}

export default Intro;
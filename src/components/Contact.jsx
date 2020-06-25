import React, {Component} from 'react';

import {Link} from "react-router-dom";


import userImage from '../data/background.jpeg';
import resume from '../data/resume.pdf';
import mobileIcon from '../data/icons/mobile.png';
import linkedinIcon from '../data/icons/linkedin.png';
import twitterIcon from '../data/icons/twitter.png';
import githubIcon from '../data/icons/github.png';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return(
            <div className='contact-page page'>
                <h1 className='title'>
                  Let's Talk...
                </h1>
                 <div className='description'>
                   <div className='user'>
                        <img src={userImage} className='user-image' alt='SHIVRANJANI VYAS' />
                        <h3 className='user-name'>SHIVRANJANI VYAS</h3>
                        <h3 className='call-section'><img src={mobileIcon} alt='mobile' />+91-9588062534</h3>
                        <h3>
                            <a href={resume} download className='active-link'>
                                Download Resume
                            </a>
                        </h3>
                        <div className='social-profile'>
                            <Link href='https://www.linkedin.com/in/shivranjani-vyas-b535b2178/' target='_blank' rel="noopener noreferrer">
                                <img src={linkedinIcon} alt='linkedin' />
                            </Link>
                            <Link href='https://github.com/shivranjanivyas1312' target='_blank' rel="noopener noreferrer">
                                <img src={githubIcon} alt='github' />
                            </Link>
                            <Link href='https://twitter.com/shivranjanivyas' target='_blank' rel="noopener noreferrer">
                                <img src={twitterIcon} alt='twitter' />
                            </Link>
                        </div>
                    </div>
                </div>
                 </div>
        );
    }
}

export default Contact;
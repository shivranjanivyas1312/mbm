import React, {Component} from 'react';
import {NavLink} from "react-router-dom";




class About extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return(
            <div className='page'>
                <h1 className='title'>
                   HI,
                </h1>
               
                <div className='shivi'>

                  <h3>I am  technology enthusiast who likes reading,learning and sharing new innovations.<br></br>I am seeking a position in engineering where I could add my knowledge and skills for the better growth of organization and build my professional carrer.<br></br> 
                    I am willing to work in high tech environment with commited and dedicated people,which help to realise my potential.
                  <br></br>  I am currently pursuing my Bachleor of Engineering(3 yr)in Information Technology from MBM Engineering College Jodhpur (Rajasthan).
                                 </h3>  
                    
                    
                        <NavLink to='/portfolio/contact' className='active-link'>
                            <h3> Let's  Talk...</h3>
                        </NavLink>
                    
                </div>
            </div>
           
        );
    }
}

export default About;


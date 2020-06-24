import React, {Component} from 'react';
import {NavLink} from "react-router-dom";



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return(
            <div className='home-page page op-zero'>
                <h2 className='greeting-text'>
                    HI,
                </h2>
                <h1 className='title'>
                    I am SHIVRANJANI VYAS
                </h1>
                <div className='description'>
                    <h3>I am a technology enthusiast who loves reading,learning and sharing new IT innovations.
                   
                        <NavLink to='/portfolio/about' className='active-link'>
                            See More >
                        </NavLink>
                    </h3>
                </div>
            </div>
        );
    }
}

export default Home;
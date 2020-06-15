import React from 'react';
import HeadNavbar from './HeadNavbarComponent';
import SiteCards from './SiteCardsComponent';
import { } from 'reactstrap';

const Main = (props) => {
    
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <HeadNavbar />

                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <SiteCards />

                </div>
            </div>
        </div>
    );
}

export default Main;

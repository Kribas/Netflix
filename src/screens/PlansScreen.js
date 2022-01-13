import { collection, getDocs, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import db from "../firebase";
import './PlansScreen.css';

function PlansScreen() {
    
    return (
        <div className='plansScreen'>
            <p>Renewal date: 04/03/2021</p>
                <div className='plan__netflix'>
                    <div className='netflix__standard'>
                    <h3>Netflix Standard</h3>
                    <p>1080p</p>
                    </div>
                    <button className='subscribe'>Subscribe</button>
                </div>

                <div className='plan__netflix'>
                    <div className='netflix__basic'>
                    <h3>Netflix Basic</h3>
                    <p>480p</p>
                    </div>
                    <button className='subscribe'>Subscribe</button>
                </div>

                <div className='plan__netflix'>
                    <div className='netflix__premium'>
                    <h3>Netflix Premium</h3>
                    <p>4K+HDR</p>
                    </div>
                    <button className='current__package'>Current Package</button>
                </div>
        </div>
    )
}

export default PlansScreen

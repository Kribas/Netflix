import { signOut } from 'firebase/auth';
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase';
import Nav from '../Nav'
import './ProfileScreen.css'

function ProfileScreen() {
    const user = useSelector(selectUser);

    return (
        <div className='profileScreen'>
            <Nav/>
            <div className='profileScreen__body'>
                <h1>Edit Profile</h1>
                <div className='profileScreen__info'>
                <img src="https://avatars.githubusercontent.com/u/32868850?v=4" alt="User Image"/>
                <div className='profileScreen__details'>
                <h2>{user.email}</h2>
                <div className='profileScreen__plans'>
                <h3>Plans</h3>
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


                <button onClick={() => signOut(auth)} className='profileScreen__signOut'>Sign Out</button>
            </div>
            </div> 
            </div>
            </div>
            
        </div>
    )
}

export default ProfileScreen

import React,{useState} from 'react';
import ToDo from '../Comp/ToDo.js'
import Navbar from '../Comp/Navbar.js'

function Home() {

    return(
    <div>
        <Navbar/>
        <ToDo/>
    </div>
    );
}

export default Home;


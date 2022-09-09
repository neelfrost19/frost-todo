import React,{useState} from 'react';

function Wall({tasks}) {

    return(
    <div>
        {tasks?tasks.map((data)=>{
            return({data})
        }):[]}
    </div>
    );
}

export default Wall;


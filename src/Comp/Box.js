import React,{useState, useEffect, useRef} from 'react';
import './Box.css'

function Box({task, children, ...props}){

    const [disBox, setDisBox] = useState(false);
    const [editing, setEditing] = useState(false);
    const [penIcon, setPenIcon] = useState(false);
    const icon = '/images/pen.png';

    const deleteTask = () => {
        console.log(task)
        setDisBox(true);
        props.del(task);
    }


    const enableEdit = () => {
        setEditing(true);
    }

    const disableEdit = () => {
        setEditing(false);
        console.log(editing)

    }

    const hoverInEffect = () => {
        setPenIcon(true);
        setEditing(true);
    }

    const hoverOutEffect = () => {
        setPenIcon(false);
        setEditing(false);
    }

    useEffect(() => {
           /* if (parentRef && parentRef.current) {
                parentRef.current.focus();
            }
            */
        },[])


    return(
    <div
        className='Cwarpper '
        onBlur={()=>disableEdit()}
        onMouseEnter={()=>hoverInEffect()}
        onMouseLeave={()=>hoverOutEffect()}
    >
        {!disBox &&
        <div className='float-container'>
            {!editing?
            <div className='float-childL'
                onClick={()=>{enableEdit()}}
            >
                {task}
            </div>
            :
            <div className='float-childL'>
                {children}
            </div>}
            <div className='float-childR'>
                {penIcon && <img class='pen-icon' src={icon} />}
                {" "}
                <i className='fas fa-times' onClick={()=>deleteTask()} />
            </div>
        </div>}
        <br/>
    </div>
    );
}

export default Box;


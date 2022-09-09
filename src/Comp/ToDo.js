import React,{useState, useEffect, useRef} from 'react';
import Box from './Box.js'
import {Button} from './Button.js'
import './ToDo.css'
import { db } from "../fb-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function ToDo() {

   const ucr = collection(db, "task");

   const [task, setTask] = useState("");
   const [taskArrDb, setTaskArrDb] = useState([]);
   const [taskArr, setTaskArr] = useState([]);
   const [addBtn, setAddBtn] = useState(false);
   const [updateTask, setUpdateTask] = useState('');
   const [error, setError] = useState('');

   //retreive - reverse order
   useEffect(() => {
      const getTasks = async () => {
        const data = await getDocs(ucr);
        setTaskArrDb(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };

      getTasks();
      console.log(taskArr);
    },[]);

    useEffect(() => {
    console.log(taskArrDb);
       let obj = [...taskArrDb].reverse();
               let obj1=[];
               obj.map((data)=>{ obj1.push(data.task_name); })
               setTaskArr(obj1);
    },[taskArrDb])

    //-----

   const handleTaskArrElement = (e, i) =>{
        let arr = [...taskArr];
        arr[i]= e.target.value;
        setTaskArr(arr);

   }


   //add to db + table
   const addTask = async () => {
        let regex = '^[0-9a-zA-Z]+(([-_. ]?[0-9a-zA-Z]+)+)?$';
        if(task!==''||task.match(regex)){
            setError('');
            setTaskArr((old)=> [...old,  task]);
            await addDoc(ucr, { task_name: task});
            console.log(taskArr)
            setTask("");
       /* const data = await getDocs(ucr);
        setTaskArrDb(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        */
        }
        else{
            setError('ERROR: The input cannot be empty and can only contain "-,_,."')
        }

   }

   const deleteTask = async (data) => {
        let id = taskArrDb.find(o => o.task_name === data).id;
        const del = doc(db, "task", id);
        await deleteDoc(del);
   }

   const updateDb = async (i) => {
           console.log(updateTask)
          let id = taskArrDb.find(o => o.task_name === updateTask).id;
          console.log(id);
          const task = doc(db, "task", id);
          const newTask = { task_name: taskArr[i]};
          console.log(taskArr[i]);
          await updateDoc(task, newTask);
   }

   const enableAddButton = () => {
        setAddBtn(true);
        console.log(taskArrDb);
   }


    return(
    <div className='toDo'>
        <div className='toDo-Container'>
      <br />
      <div className='header'>
           {"What to do today?"}
      </div>
      <br />
      {!addBtn ? <Button
        className='btns'
        style='btn--outline'
        size='btn--large'
        onClick={()=>{
            enableAddButton();
        }}
        >
            Want to add something?
      </Button>
      :
      <>
      <input
        value={task}
        className='input-large'
        placeholder='Enter a task'
        onChange={(e) => {
            setTask(e.target.value);
        }}
      />

      <div className='error'>
              {error}
            </div>
      <br/>
      <Button
            className='btns'
            style='btn--outline'
            size='btn--large'
            onClick={()=>{
                addTask();
            }}
      >
        Add Task
      </Button>

      </>}
      <br />
      <br />
      <div className='task-element'>
      {taskArr?taskArr.map((data, i)=>{
            return(
            <div
                //key={data}
                >
                <Box
                    task={data}
                    del={deleteTask}
                >
                    <input
                        className='task-input'
                        value={data}
                        placeholder={data}
                        onChange={(e)=>{handleTaskArrElement(e, i)}}
                        onClick={()=>setUpdateTask(data)}
                        onMouseLeave={() => updateDb(i) }
                    />
                </Box>

            </div>
        )
      })
      :
      <div className='header'>
        {"loading from firebase...."}
      </div>
      }
      </div>
      </div>
    </div>
    );
}

export default ToDo;


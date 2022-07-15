import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//Container Main


//AñadirTarea
function AddTask(props) {

  const [valor, setValue] = useState('');

  function GetValueInput(e) {
    setValue(e.target.value);
  }

  function SubmitValue(e) {

    props.funcionAddContact(valor); //Enviando a la base de datos padre(AddContactArrray)
    setValue(''); //Limpiando el valor anteriormente guardado;
    e.preventDefault();
  }


  return <form onSubmit={SubmitValue}>
    <label for="task">Add a new task</label>
    <input value={valor} onChange={GetValueInput} name="task" className='form-control mt-2' placeholder='Write your new task'></input>
    <button type="submit" class="btn btn-success mt-3">Add</button>
  </form>
}

//Mostrar listas

function ShowTask(props) {
  const valores = props.ValueToShow;

  var mapVal;

  if (props.ValueToShow != "") {
    mapVal = valores.map((value, index) =>
      <div className='ContenedorTarea'>
        <p id={index}>{value}</p>
      </div>
    )
  } else {
    mapVal = <p className="NoTask">No tasks have been added yet, add one by clicking the <span className='buttonColor'>add</span> button</p>
  }


  return <div>
    {mapVal}
  </div>
}

function TaskContainer(props) {

  const [tarea, setTarea] = useState(props.tareas);

  //Añadir a la base de datos (array)

  function AddContactArray(name) {
    setTarea([...tarea, name]); //Recibe un valor y lo concatena a el array
  }

  return <div className='container'>
    <AddTask funcionAddContact={AddContactArray} />
    <ShowTask ValueToShow={tarea} />
  </div>
}





//Database
const tasks = [];

ReactDOM.render(
  <TaskContainer tareas={tasks} />,
  document.getElementById('root')
);
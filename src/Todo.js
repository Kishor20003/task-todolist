import { useState } from "react";

function Todo() {

  const [list, setlist] = useState(["apple"])
  const [newitem, setnewitem] = useState("")




  function handlechange(evt) {
    setnewitem(evt.target.value)
  }
  
  function addbutton(){
    setlist([...list,newitem])
    setnewitem("")
  }


  return (
    <div className="todo">
      <div className="box">
      <h1>To-Do-List</h1>
      <div><input value={newitem} onChange={handlechange}></input><button onClick={addbutton}>Add</button></div>
      <ul>
        {
          list.map(function (item) {
            return <li>{item}</li>
          })
        }
      </ul>
      </div>
    </div>
  );
}

export default Todo

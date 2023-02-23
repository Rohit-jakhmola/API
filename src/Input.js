// import React from "react";
import React, { useState} from "react";
function Input(props) {

    let obj={name:"",email:"",id:""}
    const [data, setData] = useState(obj);
    function handle(e) {
        setData({...data, [e.target.name]: e.target.value });
      }
    function onsubmit(e)
    {
        e.preventDefault()
        // console.log(data)
         props.data(data)
    }
   
  return (
    <>
     
      <div class="container">
        <form onSubmit={(e)=>{onsubmit(e)}}>
          <p>
            <label>
              name : <input  onChange={(e)=>{handle(e)}} name="name" type="text" />
            </label>
          </p>

          <p>
            <label>
              email : <input  onChange={(e)=>{handle(e)}} name="email" type="text" />
            </label>
          </p>

          <p>
            <label>
              id : <input   onChange={(e)=>{handle(e)}} name="id" type="text" />
            </label>
          </p>

          <p>
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
    </>
  );
}

export default Input;

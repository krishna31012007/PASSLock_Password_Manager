/* imports */
import React from 'react'
import { useRef , useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';   /* for the pop up msgs */
import { v4 as uuidv4 } from 'uuid';  /* for unique key get this from its documentation */


/* main function */
const Manager = () => {

  // 
   /* States */
  //  
    const [form, setform] = useState({site:"", username:"", password:""});  /* create a state in the form of object having 3 things  site, name and password */
    const [passwordArray, setpasswordArray] = useState([]);    /* create a state in the form of array of that forms(passwords) that we have created as name form */

    // 
    /* toasts functioins */
    // 
    const notify = () => toast("Copied to clipboard !"); /* this is toast wala part the pop up function */
    const deleted = () => toast("deleted !");
    const edited = () => toast("edited !");
    const saved = () => toast("Saved !");

    // 
    /* useRef */
    // 
  const ref = useRef();  /* use ref */
  const passwordref =useRef(); /* use ref */


  // 
  /* functions */
  // 


  /*useEffect is a React Hook used to perform side effects in a component.A side effect means anything that happens outside of rendering the UI */

  useEffect(() => {
    getpasswords();  /* call that get password function when the webpage loaded */
}, []);


  const getpasswords = async () => {  
    let req = await fetch("http://localhost:3000/");  /* get the passwords in the form of json file from the backend */
    let passwords = await req.json();  /* save it in form of json in passwords */

    setpasswordArray(passwords);   /* and then save that password in our state passwordarray as array */
};

  
  

  const handlechange = (e)=> {  /* that the event objects and set the form vaue to the value that the input takes */
   setform({...form, [e.target.name]: e.target.value})
  }

  const savepassword = async () => {

    const newPassword = {
        ...form,
        id: uuidv4()
    };  /* this give a id to the form */

    await fetch("http://localhost:3000/", { /* send req to backend to get the access of the passwords that we store in your backend */
        method: "DELETE",   /* use delete method for the editing button part*/
        headers: {  /* this tell we are sending some json data */
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id: form.id })  /* delete that id from the backend according to the method and here we are using delete method */
    });

    await fetch("http://localhost:3000/", {
        method: "POST",  /* use post request method */
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPassword)  /* add that new new password that we created */
    });

    await getpasswords();   /* call getpasswords */

    setform({  /* set the forms values empty so that when the form get save the input values also become epmty */
        site: "",
        username: "",
        password: ""
    });
};

  const deletepassword = async (id) => {

    let c = confirm("Do you really want to delete this password?"); /* confirmation check */

    if (!c) return;

    await fetch("http://localhost:3000/", {  /* send an request to your backend to get access to this link */
        method: "DELETE",             /* this tell express to use the delete wala part */
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id })  /* and this convert id to a json string and send it to backend  */
    });

    await getpasswords();   /* this is a get passwords function */

    deleted();  /* toast */
};

  const copytext = (text) => {   /* this got from chat gpt */
    navigator.clipboard.writeText(text)
  }


const showpassword = () => {  
    passwordref.current.type = "text";  /* that the ref of the password that we enter in the password wala inout and make it type to text */
    if (ref.current.src.includes("/eye.svg")) { /* its a basic if else function and here ref is of image referal*/
        ref.current.src = "/eyeclose.svg";
        passwordref.current.type = "text";
    } else {
        ref.current.src = "/eye.svg";
        passwordref.current.type = "password";
    }
};

const editpassword = (id) => {
    setform({...passwordArray.filter(i=>i.id===id)[0],id: id});  /* set form set the forms values to that id that we clicked and becuase the inputs values we use is forms value then the inpur automatically get filled with the values of that d that we clicked */
      const newArray = passwordArray.filter(
    (item) => item.id !== id
  ); /* delete that form from the array */

  setpasswordArray(newArray);
    
  {document.querySelector('#btn').innerHTML = `<lord-icon
    src="https://cdn.lordicon.com/vjgknpfx.json"
        trigger="hover"
        state="hover-swirl"
        colors="primary:#000000,secondary:#ffffff">
    </lord-icon>Save Password`}

}

const deleteall = async () => {
  let c = confirm("Are you sure you want to delete all passwords?"); /* confirmation check */

  if (!c) return; 

  try {
    await fetch("http://localhost:3000/all", {  /* this will send a request to all the password that are present in the passwordArray*/
      method: "DELETE"                    /* this method delete tell the express(backend) to use the app.delete wala part */
    });

    setpasswordArray([]);  /* once the forms(passworsds) got deleted we set our passwordArray back to empty */
    deleted();  /* toast popup */

  } catch (error) {
    console.log(error);
  }
};

  return (
    <>
    {/* toast imported from its documentation */}
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>

      {/* this is the input wala container */}
    <div className="container bg-purple-100 w-[60%] m-auto rounded-2xl p-2">
        <h1 className='flex justify-center items-center text-3xl font-bold my-3'>
            <span className='text-purple-800 text-[20px] font-bold'>&lt;</span>
        POSS<span className='text-purple-800'>Lock/</span> 
        <span className='text-purple-800 text-[20px] font-bold'>&gt;</span>
        </h1>
        <p className='flex justify-center items-center text-purple-800 my-2'>Your own password manager</p>
    
        

    <div className=" max-w-3xl m-auto flex-col justify-center items-center">
        {/* it by default set the input value equal value use in its tag as form.site.  name use as id for the input tags. handlechange function add that change in input to the state form(as a password) */}
        <input onChange={(e)=>handlechange(e)} value={form.site} placeholder='Enter your URL' className='w-[98%]  rounded-[50px] bg-white border-[2px] border-purple-200 px-3 py-1 m-2 ' type="text" name='site' />

        <div className="flex justify-center items-center relative">
              {/* same functions and same sence as site input */}
            <input onChange={(e)=>handlechange(e)} value={form.username} placeholder='Enter your user name' className='relative rounded-[50px] bg-white border-[2px] border-purple-200 px-3  py-1 w-[70%] mr-54' type="text" name='username'/>
            <input ref={passwordref} onChange={(e)=>handlechange(e)} value={form.password} placeholder='Enter PassWord' className='absolute rounded-[50px] bg-white  border-[2px] border-purple-200 px-3 py-1 w-[27%] m-2 right-0' type="password" name='password'/>

            {/* show password make the password enable to see by the user */}
            <span onClick={()=>showpassword()} className='absolute right-4 cursor-pointer'><img ref={ref} className='invert' width={20} src="/eye.svg" alt="" /></span>
        </div>

    <div className='flex justify-center items-center my-3'>
       {/* savepassword function save the password in the backend and show it using fetch api */}
    <button id='btn' onClick={()=>{savepassword(); saved()}} className='flex justify-center items-center w-auto border-[2px] border-purple-800 px-4 py-1 bg-purple-600 rounded-[50px] hover:bg-purple-800 text-white hover:font-bold hover:px-3 gap-1'> <lord-icon
    src="https://cdn.lordicon.com/vjgknpfx.json"
        trigger="hover"
        state="hover-swirl"
        colors="primary:#000000,secondary:#ffffff">
    </lord-icon>Add Password</button>
    </div>

    
    </div>
    </div>



    <div className='flex justify-between items-center px-4 my-4'>
<h1 className='text-purple-800 font-bold '>Your Passwords</h1>

{/* delete all function delete all the passwords */}
<div onClick={()=>deleteall()} className='px-3 flex h-auto border-[2px] border-purple-500 py-1 items-center justify-center rounded-3xl hover:bg-purple-300'><lord-icon src="https://cdn.lordicon.com/jzinekkv.json" trigger="hover"> </lord-icon>Delete All</div>
</div>

    <div className="passwords m-3 h-[40vh] overflow-y-auto">
        
        {passwordArray.length===0 && <div> No password to show</div> }
        {passwordArray.length!=0 && 
        <table className="table-auto w-full bg-transparent rounded-t-2xl overflow-hidden">
  <thead className=' h-10 w-full bg-purple-800'>
    <tr>
      <th className='text-left px-2'>Site</th>
      <th className='text-left px-2'>Username</th>
      <th className='text-left px-2'>Password</th>
      <th className='text-left px-2 w-28'>Actions</th>
    </tr>
  </thead>
  <tbody className='my-2'>
    {/* for the passwordarray to get its item in javascript we use map function */}
    {passwordArray.map((item)=>{ return(<>
    <tr key={item.id} className="border-2 border-transparent hover:border-purple-300/30">
      {/* then where we want the site we simple use item.site here item is a element of passwordarray which is a object and we know when we do object.itschild we get the value of the child */}
      {/* copytext function copy the value of the item */}
      <td className='py-3 px-2'><div className='flex gap-2'>{item.site} <img  onClick={()=>{copytext(item.site); notify()}} className='invert hover:cursor-pointer' width={18}  src="/copy.svg" alt="" /> </div></td>
      <td className='py-3 px-2'><div className='flex gap-2'>{item.username} <img  onClick={()=>{copytext(item.username); notify()}}  className='invert hover:cursor-pointer' width={18} src="/copy.svg" alt="" /> </div></td>
      <td className='py-3 px-2'><div className='flex gap-2'>{"*".repeat(item.password.length)} <img  onClick={()=>{copytext(item.password); notify()}} className='invert hover:cursor-pointer' width={18}  src="/copy.svg" alt="" /></div> </td>
      <td className='py-3 px-2 w-28'>
        <div className='flex'>
          {/* edit pass word edit the from */}
        <div onClick={()=>{editpassword(item.id)}}><lord-icon src="https://cdn.lordicon.com/exymduqj.json" trigger="hover"></lord-icon></div>
        {/* deletepassword delete the form from backend */}
        <div onClick={()=>{deletepassword(item.id); deleted()}}><lord-icon src="https://cdn.lordicon.com/jzinekkv.json" trigger="hover"> </lord-icon></div>
        </div>
      </td>
    </tr>
    </>
   )
     })}
  </tbody>
</table>
}
    </div>
    
    </>
  )
}

export default Manager





import { useState } from "react"



function App() {

  const [name, setName] = useState("");
 const [email, setEmail] = useState("");

 const [password, setPassword] = useState("");

 const [isSubmit, setIsSubmit] = useState(false);
 const [checked, setChecked] = useState(false);

 const handleSub = (event) =>{
  event.preventDefault();
if(!checked){
  return;
}

  const user = {
    name: name,
    email: email,
    password: password,
  }
  setIsSubmit(true)
console.log(user);
 }

//  console.log({name: name, email: email, pass: pass})

  return (
    <>
  <div className="flex justify-center bg-orange-300 h-screen items-center " >
    <div className="w-[320px] bg-blue-400 p-2 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-g">Sign Up</h1>
    <form onSubmit={(event) =>handleSub(event)}>

    <div className="mt-5 ">
    <h1 className="mb-3 text-xl font-bold" >Name</h1>
      <input

      onChange={(event) => setName(event.target.value)}

      className="border-2 w-[300px] h-[50px] rounded-lg" type="name" 
      placeholder="enter your name"
      required
      />
    </div>

    <div className="mt-5 ">
    <h1 className="mb-3 text-xl font-bold">Email</h1>
      <input 
      
      onChange={(event) => setEmail(event.target.value)}

      className="border-2 w-[300px] h-[50px] rounded-lg" type="email" 
      placeholder="enter your email"
      required
      />
    </div>
    <div className="mt-5 ">
    <h1 className="mb-3 text-xl font-bold">Password</h1>
      <input
      
      onChange={(event) =>setPassword(event.target.value)}

      className="border-2 w-[300px] h-[50px] rounded-lg" type="password" 
      placeholder="enter your password"
      required
      />
    </div>
<div className="mt-2 ">
  <input onChange={(event) => setChecked(event.target.checked)} className="w-[30px] text-white" type="checkbox" />terms and condition?
</div>
     <div className="flex justify-end mt-3">
      <button className="  rounded-lg bg-orange-500 p-2 
      text-xl text-white font-bold">Submit</button>
     </div>

    </form>
  
    </div>
{isSubmit && <div className="fixed top-0 flex justify-center items-center h-screen w-full">
  <div className="w-2/3 h-2/3 bg-pink-200 text-center">
    <h1>you have sucess the form succsessfuly</h1>
    <p className="text-2xl mt-2">name: {name}</p>
    <p className="text-2xl mt-2">email: {email}</p>
  </div>
  </div>
}

  </div>
 

    </>
  )
}

export default App

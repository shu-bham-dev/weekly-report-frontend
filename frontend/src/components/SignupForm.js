import React,{useState} from 'react'
function SignupForm() {
const handleFormSubmut =(event)=>{
    event.preventDefault();
}
const [values, setvalue] = useState(
    {
        fullname:"",
        email:"",
        password:"",
        role:"",
        project:"",
        department:"",
        dateofjoining:""

    }
)
const handleChange=(event)=>{
setvalue({
    ...values,
    [event.target.name]:event.target.value,

})

}
  return (
    <div className='container'>
    <div className='app-wrapper' >
    <div>
        <h1 className='title'> SignupForm</h1>
    </div>
<form className='form-wrapper' >
<div className='name'>
    <label className='label'> name </label>
<input className='input'type="text"
 name="fullname" 
 value={values.fullname}
     onChange={handleChange}
 />

</div>
<div className='email'>
    <label className='label'> email </label>
<input className='input'type="email"  name='email'
onChange={handleChange}
 value={values.email}/>

</div>
<div className='password'>
    <label className='label'> password </label>
<input className='input'type="text"  name='password'

 value={values.password}
 onChange={handleChange}
 />

</div>
<div className='password'>
    <label className='label'> role </label>
<input className='input'type="text"  name='role'

 value={values.role}
 onChange={handleChange}
 />

</div>
<div className='password'>
    <label className='label'> project </label>
<input className='input'type="text"  name='project'

 value={values.project}
 onChange={handleChange}
 />

</div>
<div className='password'>
    <label className='label'> dateofjoining </label>
<input className='input'type="date"  name='dateofjoining'

 value={values.dateofjoining}
 onChange={handleChange}
 />

</div>
<div className='password'>
    <label className='label'> department </label>
<input className='input'type="text"  name='department'

 value={values.department}
 onChange={handleChange}
 />

</div>


<div>
    <button className='submit' onClick={handleFormSubmut}>
        Signup
    </button>
</div>


</form>

    </div>
    </div>
  )
}

export default SignupForm 
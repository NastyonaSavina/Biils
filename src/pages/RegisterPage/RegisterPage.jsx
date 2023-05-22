// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { toast } from 'react-toastify';



// const initialState = {
//   name: '',
//   email: '',
//   password: '',
// };


// const RegisterPage = () => {

//     const dispatch = useDispatch();
//     const [isLoading, setIsLoading] = useState(false);
//     const [values, setValues] = useState(initialState);
    

//     const handleChange = event => {
//         const { value, name } = event.target;
        
//         setValues(prev => ({ ...prev, [name]: value }));
//     };


//     const handleSubmit = async (event) => {
//         event.preventDefault();

//     try {
//         setIsLoading(true);
//         await dispatch(register(values)).unwrap();


//         setIsLoading(false);
//         toast.success('Success!');
//         } catch (e) {
//         console.log(e);
//         toast.error('Some error');
//         }
//     };


//     return (
//         <>
//             {isLoading && <p>Loading ...</p>}

//             <form action="#" className="mt-5 mx-auto p-0" style={{ width: '450px' }} onSubmit={handleSubmit} >
//                 <h1 className="h3 mb-3 fw-normal">Please sing up</h1>

//                <div className="form-floating my-4">
//                     <input
//                         id="name"
//                         name="name"
//                         type="text"
//                         autoComplete="off"
//                         value={values.name}
//                         onChange={handleChange}
//                         className="form-control"
//                         required
//                     />
//                     <label htmlFor="name">First & Last Name</label>
                
//                 </div>
                
//                 <div className="form-floating my-4">
//                     <input
//                         id="email"
//                         name="email"
//                         type="email"
//                         autoComplete="username"
//                         value={values.email}
//                         onChange={handleChange}
//                         className="form-control"
//                         required
//                     />
//                     <label htmlFor="email">Email address</label>
//                 </div>

            

//                 <div className="form-floating my-4">
//                     <input
//                         id="password"
//                         name="password"
//                         type="password"
//                         autoComplete="current-password"
//                         value={values.password}
//                         onChange={handleChange}
//                         className="form-control"
//                         required
//                     />
//                     <label htmlFor="password">Password (at least 7 symbols) </label>
//                 </div>

             

//                 <button className="w-100 mt-2 btn btn-lg btn-primary" type="submit" >
//                     Sign up
//                 </button>

//                  <Link to="/login" className="d-block my-4">
//                     Already have an account?
//                 </Link>
//             </form>

//         </>
//     );
// };

// export default RegisterPage;
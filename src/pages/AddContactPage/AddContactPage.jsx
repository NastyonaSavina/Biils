// import { useDispatch, useSelector } from 'react-redux';
// import { useState } from 'react';
// import { toast } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";




// const AddContactPage = () => {
    
//     const [name, setName] = useState('');
//     const [number, setNumber] = useState('');
//     const dispatch = useDispatch();
//     const contacts = useSelector(selectContacts);

//     const handleChange = event => {
//     const { name, value } = event.target;
//       switch (name) {
//       case 'name':
//         setName(value);
//         break;

//       case 'number':
//         setNumber(value);
//         break;

//       default:
//         break;
//     }
//     };
    
//      const handleSubmit = event => {
//         event.preventDefault();

//         const Contact = {
//             name,
//             number,
//             };
        
//         if (
//         contacts.some(
//             contact => contact.name.toLowerCase() === Contact.name.toLowerCase()
//         )
//         ) {
//         return toast.warning(`${Contact.name} is already in contacts.`);
//         }

//         dispatch(addContact(Contact));

//         setName('');
//         setNumber('');

//     };

    
//     return (
//         <form action="#" className="mt-5 mx-auto p-0" style={{ width: '450px' }} onSubmit={handleSubmit} >
//         <h1 className="h3 mb-3 fw-normal">Add new contact details</h1>

//         <div className="form-floating my-4">
//           <input
//             type="text"
//             id="name"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"

//             className="form-control"
//             onChange={handleChange}
//             value={name}
//           />
//           <label htmlFor="name" >First & Second name</label>
//         </div>

//         <div className="form-floating my-4">
//           <input
//             id="number"
//             type="text"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"

//             className="form-control"
//             onChange={handleChange}
//             value={number}
//           />
//           <label htmlFor="number">Number</label>
//         </div>

//         <button type="submit" className="btn btn-primary">
//           Add contact
//         </button>
//       </form> 
//     )
// }
   

   
// export default AddContactPage;
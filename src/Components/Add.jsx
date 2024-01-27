import React, { useState } from 'react'
import { MDBListGroup, MDBListGroupItem, MDBInput } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Add() {
    const location = useNavigate()

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [zipcode, setZipcode] = useState("")
    const [phoneno, setPhoneno] = useState("")

   

    const base_url = 'http://localhost:8000/add-an-contact'
    const addContact = async (e) => {
        //to prevent loading(for  not refresh the page)
        
        e.preventDefault()
        console.log(id, name, email, city, street, zipcode, phoneno);
        const body = { id, name, email, city, street, zipcode, phoneno }

        const result = await axios.post(base_url,body).then((result)=>{
            console.log(result);
            alert(`${name}  added succesfully`)
            location('/')//redirected to adminpage
          }).catch((error)=>{
            alert(error)
          })
    }

    return (

        <div className='d-flex'>
            <div className="container ml-3 m-5 ">
                <h4 className='p-5 '>Add Contact Details :</h4>
                <form className='w-75 '>
                    <MDBInput label='id' id='formControlLg' type='text' size='lg' onChange={(e) => setId(e.target.value)} />
                    <br />
                    <MDBInput label='firstname' id='formControlLg' type='text' size='lg' onChange={(e) => setName(e.target.value)} />
                    <br />
                    <MDBInput label='email' id='formControlLg' type='text' size='lg' onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <MDBInput label='city' id='formControlLg' type='text' size='lg' onChange={(e) => setCity(e.target.value)} />
                    <br />
                    <MDBInput label='street' id='formControlLg' type='text' size='lg' onChange={(e) => setStreet(e.target.value)} />
                    <br />
                    <MDBInput label='zipcode' id='formControlLg' type='text' size='lg' onChange={(e) => setZipcode(e.target.value)} />
                    <br />
                    <MDBInput label='phone no' id='formControlLg' type='text' size='lg' onChange={(e) => setPhoneno(e.target.value)} />
                    <div>
                       

                        <button onClick={(e)=>addContact(e)} className='btn btn-success m-3'>Add <i className='fa-solid fa-user-plus'></i></button>
                    </div>
                </form>
            </div>
            <div className='m-5 justify-content-center'><img src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="" /></div>
        </div>
    )
}

export default Add

import React, { useEffect, useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {

  const [cid, setId] = useState("")
  const [cname, setName] = useState("")
  const [cemail, setEmail] = useState("")
  const [ccity, setCity] = useState('')
  const [cstreet, setStreet] = useState('')
  const [czipcode, setZipcode] = useState("")
  const [cphoneno, setPhoneno] = useState("")

  //get a partiular id from the url
  const { id } = useParams()
  console.log(id);

  //get a particular employee details
  const base_url = 'http://localhost:8000'
  
  const getcontacts = async (id) => {
    const result = await axios.get(`${base_url}/get-an-contact/${id}`)
    console.log(result.data.users);//object
    //setContacts(result.data.employees)
    setId(result.data.users.id)
    setName(result.data.users.name)
    setEmail(result.data.users.email)
    setCity(result.data.users.city)
    setStreet(result.data.users.street)
    setZipcode(result.data.users.zipcode)
    setPhoneno(result.data.users.phoneno)
  }
  useEffect(() => {
    getcontacts(id)
  }, [])

  const location = useNavigate()

  //api call to update an employee an employee details


  const updateContact = async (e) => {
    e.praventDefault()

    const body = {
      id: cid,
      name: cname,
      email: cemail,
      city: ccity,
      street: cstreet,
      zipcode: czipcode,
      phoneno: cphoneno
    }

    const result = await axios.post(`${base_url}/update-an-contact/${id}`, body)
    console.log(result);
    alert(result.data.message)
    location('/')
  }

  return (
    <div>
      <div className="container text-center m-5">
        <h2>Edit Employee</h2>
        <form className='p-5'>
          <MDBInput onChange={(e) => setId(e.target.value)} value={cid} label='ID' id='formControlLg' type='text' size='lg' readOnly />
          <br />
          <MDBInput onChange={(e) => setName(e.target.value)} value={cname} label='Name' id='formControlLg' type='text' size='lg' />
          <br />
          <MDBInput onChange={(e) => setEmail(e.target.value)} value={cemail} label='Email' id='formControlLg' type='text' size='lg' />
          <br />
          <MDBInput onChange={(e) => setCity(e.target.value)} value={ccity} label='city' id='formControlLg' type='text' size='lg' />
          <br />
          <MDBInput onChange={(e) => setStreet(e.target.value)} value={cstreet} label='street' id='formControlLg' type='text' size='lg' />
          <br />
          <MDBInput onChange={(e) => setZipcode(e.target.value)} value={czipcode} label='zipcode' id='formControlLg' type='text' size='lg' />
          <br />
          <MDBInput onChange={(e) => setPhoneno(e.target.value)} value={cphoneno} label='phoneno' id='formControlLg' type='text' size='lg' />
          <div>
            {<button onClick={(e) => updateContact(e)} className='btn btn-success m-3'>Update <i className='fa-solid fa-user'></i></button> }
          </div>
        </form>
      </div>
    </div>
  )

}

export default Edit

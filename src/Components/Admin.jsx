import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Admin() {

   //Api fetching - to get all the employees details 
   const base_url='http://localhost:8000/getcontacts'

const [allUsers,setAllUsers]=useState([])

const fetchData=async()=>{
  const result = await axios.get(base_url)
  console.log(result.data.contacts);
  setAllUsers(result.data.contacts)
}
console.log(allUsers);


useEffect(()=>{
  fetchData()
},[])
  return (
    <div>

      <MDBTable align='middle'>
        <MDBTableHead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Name</th>
            <th scope='col'>Address</th>
            <th scope='col'>Zipcode</th>
            <th scope='col'>Phone no</th>
            <th scope='col'>Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
         {
          allUsers.map((items)=>(

            <tr>
            <td>
              {items.id}
            </td>
            <td>
              <div className='d-flex align-items-center text-center justify-content-center'>
                
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>{items.name}</p>
                  <p className='text-muted mb-0'>{items.email}</p>
                </div>
              </div>
            </td>
            <td>
              <p className='fw-normal mb-1'>{items.street}</p>
              <p className='text-muted mb-0'>{items.city}</p>
            </td>
            <td>
            <p className='text-muted mb-0'>{items.zipcode}</p>
             
            </td>
            <td>{items.phoneno}</td>
            <td className='justify-content-around d-flex'>
              <i className='fa-solid fa-eye text-dark'></i>
              <Link to={`edit/${items.id}`}>
              <i className='fa-solid fa-pen text-success' ></i>
              </Link>
              <i className='fa-solid fa-trash text-danger'></i>
             
            </td>
          </tr>

          )
          )
         }
           <button className='btn btn-success m-5 '>Add </button>

        </MDBTableBody>
      </MDBTable>
    </div>
  )
}

export default Admin
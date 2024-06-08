import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewUser = () => {
    const [data, changeData] = useState(
        [
            {"user_id": 120, "username": "anjaly", "pincode": 680699},
            {"user_id": 122, "username": "surya", "pincode": 720699},
            {"user_id": 111, "username": "devika", "pincode": 680789},
        ]
    )
  return (
    <div>
        <Navbar/>
        <div class="container">
        <div class="row">
          <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
                  
    
                <thead>
                  <tr>
                    <th scope="col">User Id</th>
                    <th scope="col">User Name</th>
                    <th scope="col">pincode</th>
                    
                  </tr>
                </thead>
                {data.map(
                    (value, index) => {
                return <tbody>
                  <tr>
                    <th scope="row">{value.user_id}</th>
                    <td>{value.username}</td>
                    <td>{value.pincode}</td>
                    
                  </tr>


                </tbody>
                }
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewUser
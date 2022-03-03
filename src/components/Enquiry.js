import React, { useState } from "react";
import _ from "lodash";
import EditModal from "./EditModal";
const Enquiry = () => {
  const enquiryData = [
    {
      parent_name: "RK Gautam",
      chile_name: "ranjeet kumar",
      parent_mobile: "9386561275",
      enquiry_class: "8",
      parent_email: "rkgautam434@yahoo.com",
    },
    {
      parent_name: "RK Gautam",
      chile_name: "ranjeet kumar",
      parent_mobile: "9386561275",
      enquiry_class: "8",
      parent_email: "rkgautam434@yahoo.com",
    },
    {
      parent_name: "RK Gautam",
      chile_name: "ranjeet kumar",
      parent_mobile: "9386561275",
      enquiry_class: "8",
      parent_email: "rkgautam434@yahoo.com",
    },
    {
      parent_name: "RK Gautam",
      chile_name: "ranjeet kumar",
      parent_mobile: "9386561275",
      enquiry_class: "8",
      parent_email: "rkgautam434@yahoo.com",
    },
  ];
  const[edit,setEdit]=useState(false)
  const handleEditModalOpen=()=>{
    setEdit(true)
  }
  const handleModalClose=()=>{
    setEdit(false);
  }
  return (
    <div>
      <div className="container-fluid">
        {
          //   enquiryData .map((data,index)=>{
          //       return(
          //           <div>
          //               hiiii
          //           </div>
          //       )

          //   })
          _.map(enquiryData, (data, index) => {
            return (
              <div className="list">
                <div className="img-container">
                  <img
                    className="child-img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTWC-gNXo5Wd22oY8_BGdHdlMLHcMXvWPWVA&usqp=CAU"
                  />
                </div>
                <div className="list_item">{data.parent_name}</div>
                <div className="list_item">{data.chile_name}</div>
                <div className="list_item">{data.parent_mobile}</div>
                <div className="list_item">{data.enquiry_class}</div>
                <div className="list_item">{data.parent_email}</div>
                <img
                  className="edit-icon"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRWHj5I3m_KJdm05iic2uYU2NtNdTssHZKQ&usqp=CAU"
                onClick={ handleEditModalOpen}
                />
                <img className="move-icon" src="https://img.icons8.com/ios/500/forward-arrow.png"/>
                <img
                  className="delete-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Delete-button.svg/862px-Delete-button.svg.png"
                />
              </div>
            );
          })
        }
      </div>
      <EditModal show={edit} handleClose={handleModalClose}/>
    </div>
  );
};
export default Enquiry;

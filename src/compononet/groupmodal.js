import React, { useEffect, useState } from "react";
import className from "./modal.module.scss";
import API from "@/utils/apiConfig";
import MultiSelect from "./multiselect";

export default function GroupList({isOpen,setIsOpen,onPress}) {
    const [data, setdata] = useState([])
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [groupName, setgroupName] = useState("")
    
    const fecthAllUser=async()=>{
        const token=await localStorage.getItem("Token")
        const config = {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        };
        await API.get("/user",config).then((res)=>{

            const options=res.data.map((item)=>{
                return {
                    label:item.name,
                    value:item._id
                }
            })
            setdata([...options])
            }).catch((err)=>console.log(err))
    }

    useEffect(() => {
      fecthAllUser()
    }, [])
    
  

  return (
    <>
     {isOpen && (
    <div className={className.modal}>
      <div className={`${className.modal_content}`}>
        <div
          style={{
            position: "relative",
            paddingLeft:"5px",
            paddingRight:"5px"
          }}
        >
          <div style={{height:"30px",padding:"10px"}}>
            <p className="titleheader" style={{color:"#001044",fontWeight:600}}>Create a New Group</p>
          </div>
          <div
            style={{
              width: "100%",
              height: "0.1px",
              background: "#676E83",
              opacity: "0.75",
              marginBottom: "2px",
            }}
          ></div>
          
          <div>
            <p className="headertitletag">Group name</p>
            <input type="text" placeholder="enter a group name " value={groupName} onChange={(e)=>setgroupName(e.target.value)} />

          </div>
          <div>
            <p className="headertitletag">Select user</p>
            <MultiSelect data={data} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
            
          </div>
          <div>
            <button
              style={{
                width:"90%",
                margin:"10px",
                height:"40px"

              }}
             onClick={()=>onPress({
                name:groupName,
                users:selectedOptions
            })}>Create</button>
          </div>
         
        </div>
      
      </div>
    </div>)}</>
  );
}

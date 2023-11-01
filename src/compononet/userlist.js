// components/UserList.js
import Image from 'next/image';
import React from 'react';



const UserList = ({ users, onUserSelect }) => {

  return (
    <div className="user-list" >
      <div style={{display:'flex', flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
      <h2>User List</h2>
      <button  style={{cursor:'pointer',height:"25px"}}>Create a group</button>
      </div>
      <div>
        {users.map((user) => (
          <div key={user.id} style={{
            display:'flex',
            flexDirection:'row',
            gap:2,
            borderBottom:"1px solid black",
            padding:"4px"

          }} onClick={() => onUserSelect(user)}>
            <div style={{flex:0.2,height:"40px",width:"40px",justifyContent:'center', borderRadius:"100%", border:"1px solid black ",background:"#FFFF"}}>
              
            </div>
            <div style={{flex:0.8,display:"flex",flexDirection:"column"}}>
            <p className='headertitle'>{user.senderName.name}</p>
            
            <p className='headertitletag'>{user.isNewMessage?"":"You:"} {user.latestmessages} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;

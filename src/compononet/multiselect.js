
import React, { useState } from 'react';
import Select from 'react-select';
function Itemcompononet({selectedUser,data,onPress}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 4,
        border: "2px solid black",
        padding: "4px",
        background: "black",
        borderRadius:"10px",
        margin:"5px",
        justifyContent:'space-around'
      }}
    >
      <div
        
      >
        <img style={{
          flex: 0.2,
          height: "40px",
          width: "40px",
          justifyContent: "center",
          borderRadius: "100%",
          border: `1px solid black `,
          background: "#FFFF",
        }} src= {"https://thumbs.dreamstime.com/b/flat-male-avatar-image-beard-hairstyle-businessman-profile-icon-vector-179285629.jpg"} />
      </div>
      <div
        style={{
          flex: 0.8,
          display: "flex",
          flexDirection: "column",
          cursor:'pointer',
          justifyContent:"center"
        }}
      >
        <p className="headertitle" style={{color: "white"}}>{data.label}</p>

        
      </div>
    </div>
  );
}
const MultiSelect = ({data, selectedOptions, setSelectedOptions}) => {

 

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };

  return (
    <div>
      
      <Select
        isMulti
        options={data}
        value={selectedOptions}
        onChange={handleChange}
      />
     
      
        {selectedOptions.map((option) => <Itemcompononet key={option.value} data={option} />) }
    </div>
  );
};

export default MultiSelect;

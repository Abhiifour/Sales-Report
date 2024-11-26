import React, { useState } from "react";
import { TextField, MenuItem, Button } from "@mui/material";
import { useRecoilState } from "recoil";

import { dataAtomState } from "./dataAtom";

const Leftcol = () => {
    const [date , setDate] = useState("");
    const [product , setProduct] = useState("");
    const [region , setRegion] = useState("");

    const [dataState, setDataState] = useRecoilState(dataAtomState);

    const handleApplyFilters = () => {
    
        setDataState({ date: date, product: product, region: region });
        
      };
   


  return (
    <div style={{ padding: "1rem", backgroundColor: "#f5f5f5", height: "100%" }} className="mt-[30px]">
      <h3 className="text-2xl mb-4">Filters</h3>
      <TextField
        label="Date Range"
        type="date"
        InputLabelProps={{ shrink: true }}
        fullWidth
        style={{ marginBottom: "1rem" }}
        value={date} // Bind the state to the TextField
        onChange={(e)=>{setDate(e.target.value)}}
      />
      <TextField
        label="Product"
        select
        fullWidth
        style={{ marginBottom: "1rem" }}
        value={product} // Bind the state to the TextField
        onChange={(e)=>{setProduct(e.target.value)}}
      >
        <MenuItem value="Coke">Coke</MenuItem>
        <MenuItem value="Pepsi">Pepsi</MenuItem>
      </TextField>
      <TextField
        label="Region"
        select
        fullWidth
        style={{ marginBottom: "1rem" }}
        value={region} // Bind the state to the TextField
        onChange={(e)=>{setRegion(e.target.value)}}
      >
        <MenuItem value="Delhi">Delhi</MenuItem>
        <MenuItem value="Mumbai">Mumbai</MenuItem>
      </TextField>
      <Button variant="contained" color="primary" onClick={handleApplyFilters}>
        Apply Filters
      </Button>
    </div>
  );
};

export default Leftcol;

import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { useRecoilState } from "recoil";

import { ListAtomState } from "./dataAtom";


const Centercol = () => {
    const[listState,setListState] = useRecoilState(ListAtomState);
  return (
    <div style={{ padding: "1rem" }} className="mt-[30px]">
      <h3 className="py-[10px] text-2xl">Sales Table</h3>
      <Paper style={{ marginBottom: "2rem" }}>
        <Table>
          <TableHead>
            <TableRow >
              <TableCell style={{ fontSize: "18px" }} >Product</TableCell>
              <TableCell style={{ fontSize: "18px" }} >Total Sales</TableCell>
              <TableCell style={{ fontSize: "18px" }} >Units Sold</TableCell>
              <TableCell style={{ fontSize: "18px" }} >Revenue</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listState.map((row, index) => (
              <TableRow key={index}>
                <TableCell style={{ fontSize: "15px" }} >{row.product}</TableCell>
                <TableCell style={{ fontSize: "15px" }} >{row.sales}</TableCell>
                <TableCell style={{ fontSize: "15px" }} >{row.units}</TableCell>
                <TableCell style={{ fontSize: "15px" }} >{row.revenue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <h3>Revenue by Product</h3>
      <BarChart width={500} height={300} data={listState} borderRadius={10}>
        <XAxis dataKey="product" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="revenue" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Centercol;

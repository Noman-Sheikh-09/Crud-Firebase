import { Button } from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import UseStudentList from "./UseStudentList";
export default function StudentList({student,ctaDeleteHandler,ctaUpdateHandler}) {
  // const { student,ctaDeleteHandler,ctaUpdateHandler } = UseStudentList();

  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Roll No.</TableCell>
              <TableCell>Batch</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody> 
            {student.map((item, index) => (
              <TableRow
                key={index}
                // sx={{ "&:last-child td, &:last-child th": { border: 2 } }}
              >
                {/* <TableCell component="th" scope="row"></TableCell> */}
                <TableCell align="left">{item.name}</TableCell>
                <TableCell align="left">{item.email}</TableCell>

                <TableCell align="left">{item.roll}</TableCell>
                <TableCell align="left">{item.batch}</TableCell>
                <TableCell style={{padding:5,}}>
                  <Button variant="contained" color="error" onClick={()=>ctaDeleteHandler(item.docID)}>
                    Delete
                  </Button>
                  <Button variant="contained" color="secondary" style={{marginLeft:10}} onClick={()=>ctaUpdateHandler(item)}>
                    Update
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

import { Box, Button, Chip, IconButton } from "@mui/material";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

export default function ExpenseItem(props: any) {
  const handleDelete = () => {
    console.log(props.expense);
    props.onDelete(props.expense)
  }
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      bgcolor={"grey"}
      color={"white"}
      alignItems={'center'}
    >
      <Chip
        sx={{
          height: "auto",
          "& .MuiChip-label": {
            display: "block",
            whiteSpace: "normal",
            color: "white",
            width: "45px",
            textAlign: "center",
            padding: "10px",
            margin: "5px",
            background: "black",
            borderRadius: "5px",
          },
        }}
        //label={`${new Date(props.expense.expenseDate)}`}
        label={props.expense.expenseDate}
        variant="filled"
      />
      <Box padding={"5px"} flexGrow={1}>
        {props.expense.label}
      </Box>
      <Box padding={"5px"}>
      <Button variant="outlined" sx={{
         bgcolor: 'black',
         color: 'white',
        minWidth: '90px'
      }}>$ {props.expense.amount}</Button>
      </Box>
      <IconButton aria-label="delete" value={props.expense.id} onClick={handleDelete} >
  <DeleteIcon />
</IconButton>
    </Box>
  );
}

import { Box, FormControl, MenuItem, Select, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ExpenseList from "./ExpenseList/ExpenseList";

function ExpenseWindow(props: any) {
  const [year, setYear] = useState("2023");
  const filteredExpenses = props.expenseData.filter((item:any) => (item.expenseDate.includes(year)));

  const handleChange = (event: any) => {
    setYear(event.target.value);
  };
  return (
    <Stack bgcolor={"Black"} padding={"5px"} mt={4} borderRadius={'5px'}>
            <Stack>
      <Stack direction={"row"} justifyContent={"space-between"} padding={"5px"}>
        <Typography variant="h6" color={"white"} alignSelf={"center"}>
          Filter by year
        </Typography>
        <Box bgcolor={"whitesmoke"} width={"90px"} borderRadius={"5px"}>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={year}
              label="year"
              onChange={handleChange}
            >
              <MenuItem value={2021}>2021</MenuItem>
              <MenuItem value={2022}>2022</MenuItem>
              <MenuItem value={2023}>2023</MenuItem>
              <MenuItem value={2024}>2024</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>
    </Stack>
      <ExpenseList data={filteredExpenses}  onDelete={props.onDelete}/>
    </Stack>
  );
}

export default ExpenseWindow;

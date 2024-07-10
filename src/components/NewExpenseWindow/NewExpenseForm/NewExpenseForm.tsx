import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, FormLabel, Stack } from "@mui/material";

function NewExpenseForm(props: any) {
  const [label, setLabel] = useState("");
  const [amount, setAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [cancel, setCancel] = useState(true);

  function handleSubmit(event: any): void {
    event.preventDefault();
    console.log(label, amount, expenseDate);
    props.onNewExpenseItem({label, amount, expenseDate});
    setTimeout(() => {
      setAmount('');
      setLabel('')
      setExpenseDate('')
    }, 1000)
  }

  const handleCancel = (event: any) => {
    console.log("cancel button is clicked...!");
    setCancel(true);
  };

  return (
    <Stack
      bgcolor={"rgba(141,118,232,255)"}
      padding={"15px"}
      borderRadius={"5px"}
    >
      {cancel ? (
        <Stack direction={"row"} alignSelf={'center'}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ padding: "10px" }}
            onClick={() => {
              setCancel(false);
            }}
          >
            Add New Expense
          </Button>
        </Stack>
      ) : (
        <form onSubmit={handleSubmit}>
          <Stack direction={"column"} spacing={3}>
            <Stack direction={"row"} spacing={3}>
              <div>
                <FormLabel sx={{ fontWeight: "bold" }}>Title</FormLabel>
                <div>
                  <TextField
                    required
                    id="label-required"
                    onChange={(e) => setLabel(e.target.value)}
                    value={label}
                    sx={{ bgcolor: "white", borderRadius: "5px" }}
                  />
                </div>
              </div>
              <div>
                <FormLabel sx={{ fontWeight: "bold" }}>Amount</FormLabel>
                <div>
                  <TextField
                    required
                    id="amount-required"
                    onChange={(e) => setAmount(e.target.value)}
                    value={amount}
                    sx={{ bgcolor: "white", borderRadius: "5px" }}
                  />
                </div>
              </div>
            </Stack>
            <Stack>
              <div>
                <FormLabel sx={{ fontWeight: "bold" }}>Date</FormLabel>
                <div>
                  <TextField
                    type="date"
                    onChange={(e) => setExpenseDate(e.target.value)}
                    value={expenseDate}
                    sx={{ bgcolor: "white", borderRadius: "5px" }}
                    required
                  />
                </div>
              </div>
            </Stack>
            <Stack direction={"row-reverse"} spacing={2}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ padding: "10px" }}
              >
                Add Expense
              </Button>
              <Button
                variant="text"
                sx={{ color: "black" }}
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      )}
    </Stack>
  );
}

export default NewExpenseForm;

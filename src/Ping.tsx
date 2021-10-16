import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";

export default function Ping() {
  const [message, setMessage] = useState("");
  const sendInfo = () => {
    axios
      .post("http://181.12.248.55:8080/open", {
        message: message,
      })
      .then((value) => {
        console.log(value.data);
      });
  };
  return (
    <div>
      <Button variant="contained" onClick={sendInfo}>
        Hello
      </Button>
      <TextField
        label="Standard"
        variant="standard"
        onChange={(e) => setMessage(e.target.value)}
      >
        {message}
      </TextField>
    </div>
  );
}

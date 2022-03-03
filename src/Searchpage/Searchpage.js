import * as React from "react";
import MenuBar from "../components/MenuBar";
import { Box, Button, TextField } from "@mui/material";
import "./SearchPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../Axios.config";

function SearchPage() {
  let history = useNavigate();

  const [helperTextCorrect, sethelperTextError] =
    useState("請輸入您的手機號碼");
  const [numerror, setnumerror] = useState(false);
  const [num, setnum] = useState("");

  const handleChangePhone = (e) => {
    setnum(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (num == "") {
      sethelperTextError("請輸入手機號碼!");
      setnumerror(true);
    } else {
      axios
        .get("/api/lottery", {
          params: {
            phoneNumber: num,
          },
        })
        .then((response) => {
          history("/SearchPageWait", { state: response.data.message });
        })
        .catch((error) => {
          setnumerror(true);
          sethelperTextError(error.response.data["message"]);
        });
    }
  };
  return (
    <div className="box">
      <MenuBar name="查詢登記" />
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div className="phoneenter">
          <TextField
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            id="outlined-password-input"
            label="手機號碼"
            type="number"
            onChange={(e) => handleChangePhone(e)}
            helperText={helperTextCorrect}
            error={numerror}
            fullWidth
          />
        </div>
        <div className="finishbutton">
          <Button
            fullWidth
            variant="contained"
            type="submit"
            style={{ backgroundColor: "#02A2EE", color: "#FFFFFF" }}
          >
            完成
          </Button>
        </div>
      </form>
    </div>
  );
}
export default SearchPage;

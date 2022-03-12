import React from "react";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import { pink } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { generateSymbolsList, generatePassword } from "./generate-utils";

import "./styles.css";

function GenerationForm() {
  const [pwdConfig, setPwdConfig] = React.useState({
    length: 8,
    numbers: true,
    capitalLetters: true,
    specialSymbols: true,
  });

  const [pwd, setPwd] = React.useState("");
  const [copied, setCopied] = React.useState(false);

  const handleChangeLength = (event) => {
    setPwdConfig((prev) => ({
      ...prev,
      length: event.target.value,
    }));
  };

  const handleChangeNumbers = (event) => {
    setPwdConfig((prev) => ({
      ...prev,
      numbers: event.target.checked,
    }));
  };

  const handleChangeCapitalLetters = (event) => {
    setPwdConfig((prev) => ({
      ...prev,
      capitalLetters: event.target.checked,
    }));
  };

  const handleChangeSpecialSymbols = (event) => {
    setPwdConfig((prev) => ({
      ...prev,
      specialSymbols: event.target.checked,
    }));
  };

  const genPwd = () => {
    let list = generateSymbolsList(pwdConfig);
    let pwd = generatePassword(list, pwdConfig.length);
    setCopied(false);
    setPwd(pwd);
  };

  const handleCopy = () => {
    setCopied(true);
  };

  return (
    <FormControl className="form-control">
      <Typography variant="h5" className="display" gutterBottom component="div">
        Password generator
      </Typography>
      <TextField id="outlined-name" label="Length" color="secondary" value={pwdConfig.length} onChange={handleChangeLength} />
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked
            onChange={handleChangeNumbers}
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[800],
              },
            }}
          />
        }
        label="Numbers"
      />
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked
            onChange={handleChangeCapitalLetters}
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[800],
              },
            }}
          />
        }
        label="Capital letters"
      />
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked
            onChange={handleChangeSpecialSymbols}
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[800],
              },
            }}
          />
        }
        label="Special symbols"
      />

      <div className="result">
        <Typography variant="h6" className="display" gutterBottom component="div">
          {pwd}
        </Typography>
        {pwd && (
          <CopyToClipboard text={pwd} onCopy={handleCopy}>
            <IconButton aria-label="copy password button" color={copied ? "secondary" : "success"}>
              <ContentCopyIcon />
            </IconButton>
          </CopyToClipboard>
        )}
      </div>

      <Button type="button" onClick={genPwd} color="secondary" variant="contained">
        Generate
      </Button>
    </FormControl>
  );
}

export default GenerationForm;

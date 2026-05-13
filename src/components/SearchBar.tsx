import { Button, TextField } from "@mui/material";
export default function SearchBar() {
  return (
    <div>
      <TextField
        label="Standard warning"
        variant="standard"
        color="warning"
        focused
      />
      <Button color="secondary">검색</Button>
    </div>
  );
}

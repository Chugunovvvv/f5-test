import { Typography } from "@mui/material";

const ErrorMessage = ({ error = "" }: { error: string }) => {
  return error && <Typography color="error">{error}</Typography>;
};

export default ErrorMessage;

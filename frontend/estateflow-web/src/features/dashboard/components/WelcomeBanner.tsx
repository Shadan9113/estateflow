import { Box, Typography } from "@mui/material";

export const WelcomeBanner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Typography variant="h4">
        Good Morning, Super Admin
      </Typography>

      <Typography variant="body1" color="text.secondary">
        Here's what's happening in your platform today.
      </Typography>
    </Box>
  );
};
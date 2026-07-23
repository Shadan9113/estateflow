import {
  Avatar,
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <Box
      sx={{
        height: 70,
        px: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
      }}
    >
      <TextField
        size="small"
        placeholder="Search..."
        sx={{
          width: 320,
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />

      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
        }}
      >
        <IconButton>
          <NotificationsNoneIcon />
        </IconButton>

        <Avatar>S</Avatar>

        <Typography
          sx={{
            fontWeight: 600,
          }}
        >
          Super Admin
        </Typography>

        <IconButton size="small">
          <KeyboardArrowDownIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Header;
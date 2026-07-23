import {
  Box,
  Button,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import BusinessIcon from "@mui/icons-material/Business";
import PeopleIcon from "@mui/icons-material/People";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Icons } from "../../assets/icons/icons";
import { useNavigate } from "react-router-dom";
import { authService } from "../../features/auth/services/auth.service";

const Sidebar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    navigate("/login",{replace:true})
  }

  const LogoIcon = Icons.LocationCityIcon  
  const menuItems = [
    {
      label: "Dashboard",
      icon: <DashboardIcon />,
    },
    {
      label: "Company",
      icon: <BusinessIcon />,
    },
    {
      label: "Users",
      icon: <PeopleIcon />,
    },
    {
      label: "Subscriptions",
      icon: <Inventory2Icon />,
    },
    {
      label: "Properties",
      icon: <ApartmentIcon />,
    },
    {
      label: "Settings",
      icon: <SettingsIcon />,
    },
  ];
  return (
    <Box
      sx={{
        width: 260,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        borderRight: 1,
        borderColor: "divider",
      }}
    >
      {/* Logo */}
      <Box
  sx={{
    display: "flex",
    alignItems: "center"
  }}
></Box><Box sx={{p:2}}>
        <LogoIcon fontSize="medium"/>
        <Typography variant="h5" sx={{ fontWeight: "700" }}>
          EstateFlow
        </Typography>
      </Box>

      <Divider />

      {/* Navigation */}
      <Box sx={{ flexGrow: 1 }}>
        <List>
          {menuItems.map((item) => (
            <ListItemButton key={item.label}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.label}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Box>

      <Divider />

      {/* Logout */}
      <Box sx={{ p: 2 }}>
        <Button onClick={handleLogout} fullWidth startIcon={<LogoutIcon />} variant="outlined">
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;

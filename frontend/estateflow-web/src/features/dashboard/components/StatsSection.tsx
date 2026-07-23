import { Grid } from "@mui/material";

import PeopleIcon from "@mui/icons-material/People";
import BusinessIcon from "@mui/icons-material/Business";
import ApartmentIcon from "@mui/icons-material/Apartment";
import Inventory2Icon from "@mui/icons-material/Inventory2";

import { StatCard } from "./StatCard";

const stats = [
  {
    title: "Total Users",
    value: 250,
    icon: <PeopleIcon color="primary" />,
  },
  {
    title: "Companies",
    value: 35,
    icon: <BusinessIcon color="success" />,
  },
  {
    title: "Properties",
    value: 1240,
    icon: <ApartmentIcon color="warning" />,
  },
  {
    title: "Subscriptions",
    value: 18,
    icon: <Inventory2Icon color="secondary" />,
  },
];

const StatsSection = () => {
  return (
    <Grid container spacing={3}>
      {stats.map((stat) => (
        <Grid
          key={stat.title}
          size={{ xs: 12, sm: 6, md: 3 }}
        >
          <StatCard
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default StatsSection;
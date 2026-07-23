import { Box, Paper, Typography } from "@mui/material";

type StatCardProps = {
  title: string;
  value: number;
  icon: React.ReactNode;
};

export const StatCard = ({ title, value, icon }: StatCardProps) => {
  return (
    <Paper>
      <Box sx={{ p: 3, borderRadius:4 }}>
        {/* Top Row */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>{icon}</Box>

          <Typography variant="h4" sx={{fontWeight:700}}>
            {value}
          </Typography>
        </Box>

        {/* Title */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 2 }}
        >
          {title}
        </Typography>
      </Box>
    </Paper>
  );
};
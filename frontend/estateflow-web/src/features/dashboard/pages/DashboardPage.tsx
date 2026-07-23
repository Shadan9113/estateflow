import { Box } from "@mui/material"
import { WelcomeBanner } from "../components/WelcomeBanner"
import StatsSection from "../components/StatsSection"

export const DashboardPage =()=> {
    return (
<Box sx={{ p: 3 }}>
   <WelcomeBanner />
   <StatsSection />
</Box>
    )
}
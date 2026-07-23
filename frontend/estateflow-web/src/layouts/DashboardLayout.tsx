import { Box } from "@mui/material"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import { DashboardPage } from "../features/dashboard/pages/DashboardPage"

type DashboardLayoutProps = {
    children : React.ReactNode
}

export const DashboardLayout =({children}: DashboardLayoutProps)=> {
    return(
<Box sx={{ minHeight: "100vh", display: "flex" }}>
    <Sidebar />

    <Box sx={{ flex: 1 }}>
        <Header />

        <Box sx={{ p: 3 }}>
            {children}
        </Box>
    </Box>
</Box>
    )
}
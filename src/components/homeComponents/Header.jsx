import { Box, Button } from "@mui/material";
import { useSelector } from "react-redux";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Header({ setOpenLogin }) {
    const isLogin = useSelector(state => state.reducer1.isLogin)

    return (
        <>
            <Box sx={{ display: 'flex', zIndex: 1, alignItems: 'center', top: 0, backgroundColor: 'white', position: 'sticky', justifyContent: 'space-between', padding: '10px 20px', boxShadow: 2, alignItems: 'center' }}>
                <Box sx={{ fontWeight: 'bold' }}>YumYumDine</Box>
                <Box sx={{ display: 'flex', gap: '10px' }}>
                    <Button sx={{ color: "#00665c", borderColor: '#00665c', '&:hover': { color: '#004f48', borderColor: '#004f48', backgroundColor: '#00665c15' } }} variant="outlined">Add Restaurant</Button>
                    {
                        isLogin ?
                            <AccountCircleIcon sx={{ color: '#00665c', fontSize: '40px' }} />
                            :
                            <Button onClick={() => setOpenLogin(true)} sx={{ backgroundColor: '#00665c', '&:hover': { backgroundColor: '#004f48' } }} variant="contained">Login</Button>
                    }
                </Box>
            </Box>
        </>
    )
}
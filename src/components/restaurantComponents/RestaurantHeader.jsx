import { Box, Button } from "@mui/material";
import { useSelector } from "react-redux";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PlaceIcon from '@mui/icons-material/Place';
import { useState } from "react";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SearchIcon from '@mui/icons-material/Search';


export default function RestaurantHeader({ setOpenLogin }) {
    const isLogin = useSelector(state => state.reducer1.isLogin)
    const [place, setPlace] = useState("");
    const [restaurantName, setRestaurantName] = useState("")

    return (
        <>
            <Box sx={{ display: 'flex', zIndex:1, alignItems: 'center', top: 0, backgroundColor: 'white', justifyContent: 'space-between', padding: '10px 20px', boxShadow: 2, alignItems: 'center' }}>
                <Box sx={{ fontWeight: 'bold' }}>YumYumDine</Box>
                <Box>
                    <Box sx={{ display: 'flex' }}>
                        <Box sx={{ backgroundColor: 'white', border:'1px solid black', gap: '5px', alignItems: 'center', display: 'flex', padding: '8px', height: '40px', width: '246px', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}>
                            <Box>
                                <PlaceIcon sx={{ pl: '5px' }} />
                            </Box>
                            <Box sx={{ overflow: 'hidden' }}>
                                <input onChange={(e) => { setPlace(e.target.value) }} value={place} className='placeInput' type="text" placeholder='Place' />
                            </Box>
                            <Box sx={{ pl: '5px', cursor: 'pointer', visibility: `${!place && "hidden"}` }}>
                                <HighlightOffIcon onClick={()=>{setPlace('')}} sx={{ borderRadius: '50%', padding: '0.5px', '&:hover': { backgroundColor: 'lightgrey' } }} />
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', border:'1px solid black', padding: '8px', gap: '50px', justifyContent: 'space-between', borderTopRightRadius: '10px', borderBottomRightRadius: '10px', alignItems: 'center', backgroundColor: 'white' }}>
                            <Box sx={{ gap: '5px', alignItems: 'center', display: 'flex', height: '40px' }}>
                                <Box>
                                    <SearchIcon sx={{ pl: '5px' }} />
                                </Box>
                                <Box sx={{ overflow: 'hidden' }}>
                                    <input onChange={(e) => { setRestaurantName(e.target.value) }} value={restaurantName} className='restaurantInput' type="text" placeholder='Restaurant name' />
                                </Box>
                                <Box sx={{ pl: '5px', cursor: 'pointer', visibility: `${!restaurantName && "hidden"}` }}>
                                    <HighlightOffIcon onClick={()=>{setRestaurantName('')}} sx={{ borderRadius: '50%', padding: '0.5px', '&:hover': { backgroundColor: 'lightgrey' } }} />
                                </Box>
                            </Box>
                            <Box>
                                <Button variant="contained" sx={{ backgroundColor: '#00665c', '&:hover': { backgroundColor: '#004f48' } }}>Search</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{display:'flex'}}>
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
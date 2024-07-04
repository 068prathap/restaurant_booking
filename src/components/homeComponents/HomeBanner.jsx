import { Box, Button } from "@mui/material"
import PlaceIcon from '@mui/icons-material/Place';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

export default function HomeBanner() {
    const [place, setPlace] = useState("");
    const [restaurantName, setRestaurantName] = useState("")
    
    return (
        <>
            <Box sx={{ padding: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '300px', background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0) 100%)', backgroundColor: '#00665c', borderRadius: '25px' }}>
                    <Box>
                        <Box sx={{ fontWeight: 'bold', fontSize: '44px', color: 'white', mb: '20px' }}>Discover and book the best restaurant</Box>
                        <Box sx={{ display: 'flex', gap: '0.5px' }}>
                            <Box sx={{ backgroundColor: 'white', gap: '5px', alignItems: 'center', display: 'flex', padding: '8px', height: '51px', width: '246px', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}>
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
                            <Box sx={{ display: 'flex', padding: '8px', gap: '50px', justifyContent: 'space-between', borderTopRightRadius: '10px', borderBottomRightRadius: '10px', alignItems: 'center', backgroundColor: 'white' }}>
                                <Box sx={{ gap: '5px', alignItems: 'center', display: 'flex', height: '51px' }}>
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
                </Box>
            </Box>
        </>
    )
}
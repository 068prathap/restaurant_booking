import { Box, Button } from "@mui/material";
import DirectionsOutlinedIcon from '@mui/icons-material/DirectionsOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';

export default function RestaurantBio({ setOpenRegister }) {
    return (
        <>
            <Box sx={{ display: 'flex', width: '100%', backgroundColor: 'white', top: '0px', zIndex: 1, position: 'sticky' }}>
                <Box sx={{ width: '50%' }}>
                    <Box sx={{ fontSize: '25px', fontWeight: 'bold', py: '5px' }}>Restaurant Name</Box>
                    <Box sx={{ fontSize: '17px', py: '5px' }}>Available Cuisine</Box>
                </Box>
                <Box sx={{ display: 'flex', py: '15px', alignItems: 'start', width: '50%', justifyContent: 'right' }}>
                    <Box sx={{ display: 'flex', gap: '5px', alignItems: 'end' }}>
                        <Box sx={{ alignItems: 'center', fontSize: '25px', fontWeight: 'bold', display: 'flex', backgroundColor: '#00665c', color: 'white', padding: '0px 5px', borderRadius: '5px' }}>
                            4.0
                            <StarPurple500Icon sx={{ fontSize: '15px' }} />
                        </Box>
                        <Box sx={{ fontSize: '17px' }}>100 Reviewes</Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', backgroundColor: 'white' }}>
                <Box sx={{ width: '50%' }}>
                    <Box sx={{ fontSize: '17px', py: '5px' }}>Restaurant Address</Box>
                    <Box sx={{ fontSize: '17px', py: '5px' }}> current status : startTime - endTime (Today)</Box>
                </Box>
            </Box >
            <Box sx={{ gap: '10px', backgroundColor: 'white', py: '10px', display: 'flex', top: '75px', zIndex: 1, position: 'sticky' }}>
                <Button sx={{ color: "#00665c", fontSize: '11px', borderRadius: '10px', gap: '5px', borderColor: '#00665c', '&:hover': { color: '#004f48', borderColor: '#004f48', backgroundColor: '#00665c15' } }} variant="outlined">
                    <DirectionsOutlinedIcon sx={{ fontSize: '18px' }} />
                    Direction
                </Button>
                <Button sx={{ color: "#00665c", fontSize: '11px', borderRadius: '10px', gap: '5px', borderColor: '#00665c', '&:hover': { color: '#004f48', borderColor: '#004f48', backgroundColor: '#00665c15' } }} variant="outlined">
                    <BookmarkAddOutlinedIcon sx={{ fontSize: '18px' }} />
                    BookMark
                </Button>
                <Button onClick={()=>setOpenRegister(state => !state)} variant="contained" sx={{ backgroundColor: '#00665c', boxShadow: 0, fontSize: '11px', borderRadius: '10px', gap: '5px', '&:hover': { backgroundColor: '#004f48', boxShadow: 0 } }}>
                    Book A Table
                </Button>
            </Box>
        </>
    )
}
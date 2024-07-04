import { Box, Button } from "@mui/material";
import SuccessfullyBooked from '../../assets/images/SuccessfullyBooked.png'

export default function RestaurantBookingSuccessful() {
    return (
        <>
            <Box>
                <Box sx={{ fontWeight: 'bold', fontSize: '20px', textAlign: 'center' }}>Your booking successfully completed</Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img width={'250px'} height={'250px'} src={SuccessfullyBooked} alt="" />
                </Box>
                <Box>
                    <Box sx={{ textAlign: 'center' }}>You can even order the cuisine ahead of time, so the dishes fly to your table.</Box>
                    <Box sx={{ display: 'flex', mt: '10px', justifyContent: 'center' }}>
                        <Button onClick={() => { }} variant="contained" sx={{ backgroundColor: '#00665c', boxShadow: 0, fontSize: '15px', borderRadius: '10px', gap: '5px', '&:hover': { backgroundColor: '#004f48', boxShadow: 0 } }}>
                            Order Now
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
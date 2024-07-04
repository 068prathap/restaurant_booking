import { Box } from "@mui/material"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function RestaurantBookingNavbar({ setStepNo, stepNo }) {
    function changeStepNo(step) {

    }

    return (
        <>
            <Box sx={{ mt: '20px', display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ border: '1px solid black', alignItems: 'center', borderRadius: '10px', display: 'flex' }}>
                    <Box sx={{ display: 'flex', width: '107px', position: 'relative', alignItems: 'center' }}>
                        <Box onClick={() => { setStepNo(1) }} sx={{ display: 'flex', cursor: 'pointer', color: `white`, borderTopLeftRadius: '9px', borderBottomLeftRadius: '9px', p: '5px 20px', backgroundColor: '#00665c', alignItems: 'center' }}>
                            <CalendarMonthIcon sx={{ fontSize: '20px' }} />
                            <Box sx={{ fontSize: '17px' }}>Date</Box>
                        </Box>
                        <Box sx={{ width: '23px', right: 0, position: 'absolute', height: `${stepNo > 1 ? '33px' : '23px'}`, backgroundColor: '#00665c', transform: `${stepNo > 1 ? 'rotate(0deg)' : 'rotate(45deg)'}` }}></Box>
                    </Box>
                    <ArrowForwardIosIcon sx={{ fontSize: '15px', height: '100%', color: `${stepNo > 1 && 'white'}`, backgroundColor: `${stepNo > 1 && '#00665c'}` }} />
                    <Box sx={{ display: 'flex', width: '115px', position: 'relative', alignItems: 'center' }}>
                        <Box onClick={() => { stepNo > 2 && setStepNo(2) }} sx={{ display: 'flex', cursor: `${stepNo > 2 ? 'pointer' : 'no-drop'}`, backgroundColor: `${stepNo > 1 && '#00665c'}`, color: `${stepNo > 1 && 'white'}`, p: '5px 20px', alignItems: 'center' }}>
                            <PersonIcon sx={{ fontSize: '20px' }} />
                            <Box sx={{ fontSize: '17px' }}>Guest</Box>
                        </Box>
                        {
                            stepNo > 1 &&
                            <Box sx={{ width: '23px', right: 0, position: 'absolute', height: `${stepNo > 2 ? '33px' : '23px'}`, backgroundColor: '#00665c', transform: `${stepNo > 2 ? 'rotate(0deg)' : 'rotate(45deg)'}` }}></Box>
                        }
                    </Box>
                    <ArrowForwardIosIcon sx={{ fontSize: '15px', height: '100%', color: `${stepNo > 2 && 'white'}`, backgroundColor: `${stepNo > 2 && '#00665c'}` }} />
                    <Box onClick={() => { stepNo > 3 && setStepNo(3) }} sx={{ display: 'flex', cursor: `${stepNo > 3 ? 'pointer' : 'no-drop'}`, borderBottomRightRadius: `9px`, borderTopRightRadius: `9px`, backgroundColor: `${stepNo > 2 && '#00665c'}`, color: `${stepNo > 2 && 'white'}`, p: '5px 20px', alignItems: 'center' }}>
                        <AccessTimeIcon sx={{ fontSize: '20px' }} />
                        <Box sx={{ fontSize: '17px' }}>Time</Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
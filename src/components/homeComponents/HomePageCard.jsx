import { Backdrop, Box, Button, Fade, IconButton, Modal, TextField } from "@mui/material";
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";
import FoodOrderField from "../FoodOrderField";

export default function HomePageCard() {
    const [open, setOpen] = useState(false)
    const [bookingDetails, setBookingDetails] = useState({
        "date": "",
        "startTime": "",
        "endTime": "",
        "tableNo": 0,
        "restaurantId": 1,
        "userId": 1
    })

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 3,
        borderRadius: "20px"
    };

    function changeValues(key, value) {
        setBookingDetails((state => {
            return { ...state, [key]: value }
        }))
    }

    async function Booking() {
        try {
            let response = await axios({
                method: 'POST',
                url: "https://192.168.1.223:7198/booking",
                data: bookingDetails
            })
            console.log(response)
            // if (response.status === 200) {
            //     dispatch(setLogin({ token: response.data.token, userId: response.data.userId }))
            //     closeLogin(false);
            // }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Box onClick={() => { setOpen(true) }} sx={{ width: '250px', borderRadius: '10px', padding: '10px', cursor: 'pointer', '&:hover': { boxShadow: 3 } }}>
                <Box sx={{ borderRadius: '5px', overflow: 'hidden' }}>
                    <img width={'100%'} height={'270px'} src="https://b.zmtcdn.com/data/collections/91657c6e0f9452b3d54b4658e7bc90b9_1692375924.jpg?output-format=webp" alt="" />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <Box sx={{ fontWeight: 'bold', width: '80%', wordBreak: 'break-word' }}>Restaurant name</Box>
                    <Box sx={{ alignItems: 'center', fontWeight: 'bold', display: 'flex', backgroundColor: '#00665c', color: 'white', padding: '0px 5px', borderRadius: '5px' }}>
                        4.0
                        <StarPurple500Icon sx={{ fontSize: '15px' }} />
                    </Box>
                </Box>
                <Box sx={{ wordBreak: 'break-word', pt: '10px' }}>Restaurant address</Box>
            </Box>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Box sx={{ display: 'flex', justifyContent: 'right', cursor: 'pointer' }}>
                            <IconButton onClick={() => { setOpen(false) }}>
                                <CloseIcon sx={{ fontSize: '30px' }} />
                            </IconButton>
                        </Box>
                        <Box sx={{ fontWeight: 'bold', textAlign: 'center', fontSize: '20px' }}>Book Table</Box>
                        <Box sx={{ display: "flex", mt: '30px', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                            <TextField type="date" onChange={(e) => { changeValues("date", e.target.value) }} value={bookingDetails.date} sx={{ width: '80%' }} fontSize="30px" id="filled-basic" variant="filled" size="small" />
                            <TextField type="time" onChange={(e) => { changeValues("startTime", e.target.value) }} value={bookingDetails.startTime} sx={{ width: '80%' }} id="filled-basic" variant="filled" size="small" />
                            <TextField type="time" onChange={(e) => { changeValues("endTime", e.target.value) }} value={bookingDetails.endTime} sx={{ width: '80%' }} id="filled-basic" variant="filled" size="small" />
                            <TextField type="number" onChange={(e) => { changeValues("tableNo", e.target.value) }} value={bookingDetails.tableNo} sx={{ width: '80%' }} label="TableNo" id="filled-basic" variant="filled" size="small" />
                            <Box sx={{width:'80%'}}>
                                <FoodOrderField />
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', my: '20px' }}>
                            <Button onClick={() => { Booking() }} sx={{ backgroundColor: '#00665c', width: '80%', '&:hover': { backgroundColor: '#004f48' } }} variant="contained">Submit</Button>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}
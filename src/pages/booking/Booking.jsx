import { Backdrop, Box, Button, Fade, IconButton, Modal, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import './Booking.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import RestaurantBookingCalendar from "../../components/restaurantComponents/RestaurantBookingCalendar";
import RestaurantBookingNavbar from "../../components/restaurantComponents/RestaurantBookingNavbar";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import RestaurantBookingGuests from "../../components/restaurantComponents/RestaurantBookingGuests";
import RestaurantBookingTime from "../../components/restaurantComponents/RestaurantBookingTime";
import RestaurantBookingSuccessful from "../../components/restaurantComponents/RestaurantBookingSuccessful";

export default function Booking({ openRegister, setOpenRegister }) {
    const [userDetails, setUserDetails] = useState({
        "phone": "",
        "password": ""
    })
    const [stepNo, setStepNo] = useState(1);

    const dispatch = useDispatch()

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
        setUserDetails((state => {
            return { ...state, [key]: value }
        }))
    }

    function closeBooking() {
        setUserDetails({
            "phone": "",
            "password": ""
        })
        setStepNo(1)
        setOpenRegister(false)
    }

    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openRegister}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    }
                }}
            >
                <Fade in={openRegister}>
                    <Box sx={style}>
                        <Box sx={{ display: 'flex', justifyContent: 'right', cursor: 'pointer' }}>
                            <IconButton onClick={() => { closeBooking() }}>
                                <CloseIcon sx={{ fontSize: '30px' }} />
                            </IconButton>
                        </Box>
                        {
                            stepNo < 4 &&
                            <>
                                <Box sx={{ fontWeight: 'bold', textAlign: 'center', fontSize: '20px' }}>Book Table</Box>
                                <RestaurantBookingNavbar stepNo={stepNo} setStepNo={setStepNo} />
                                <hr />
                            </>
                        }
                        {
                            stepNo === 1 &&
                            <RestaurantBookingCalendar />
                        }
                        {
                            stepNo === 2 &&
                            <RestaurantBookingGuests />
                        }
                        {
                            stepNo === 3 &&
                            <RestaurantBookingTime />
                        }
                        {
                            stepNo === 4 &&
                            <RestaurantBookingSuccessful />
                        }
                        {
                            stepNo === 3 ?
                                <Box onClick={() => { setStepNo(state => state + 1) }} sx={{ display: 'flex', justifyContent: 'right', mt: '10px' }}>
                                    <Button variant="contained" sx={{ backgroundColor: '#00665c', gap: '5px', boxShadow: 0, borderRadius: '10px', '&:hover': { backgroundColor: '#004f48', boxShadow: 0 } }}>
                                        Book Now
                                    </Button>
                                </Box>
                                :
                                stepNo < 3 ?
                                    <Box onClick={() => { setStepNo(state => state + 1) }} sx={{ display: 'flex', justifyContent: 'right', mt: '10px' }}>
                                        <Button variant="contained" sx={{ backgroundColor: '#00665c', gap: '5px', boxShadow: 0, borderRadius: '10px', '&:hover': { backgroundColor: '#004f48', boxShadow: 0 } }}>
                                            Next
                                            <ArrowRightAltIcon />
                                        </Button>
                                    </Box>
                                    :
                                    <></>
                        }
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}
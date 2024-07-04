import { Backdrop, Box, Button, Fade, IconButton, Modal, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import './Register.css'
import { useState } from "react";
import axios from "axios";

export default function Register({ openRegister, setOpenRegister, setOpenLogin }) {
    const [userDetails, setUserDetails] = useState({
        "name": "",
        "phone": "",
        "email": "",
        "password": ""
    });
    const [inputErrorDetails, setInputErrorDetails] = useState({
        "name": false,
        "phone": false,
        "email": false,
        "password": false
    });
    const [registerError, setRegisterError] = useState(0)

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

    function goToLogin() {
        setUserDetails({
            "name": "",
            "phone": "",
            "email": "",
            "password": ""
        })
        setOpenLogin(true);
        setOpenRegister(false);
        setInputErrorDetails({
            "name": false,
            "phone": false,
            "email": false,
            "password": false
        })
        setRegisterError(0)
    }

    function changeValues(key, value) {
        setUserDetails((state => {
            return { ...state, [key]: value }
        }))
        if (inputErrorDetails[key]) {
            setInputErrorDetails(state => {
                return { ...state, [key]: false }
            })
        }
    }

    async function register() {
        let inputError = true
        if (!userDetails.name) {
            setInputErrorDetails(state => {
                return { ...state, name: true }
            })
            inputError = false
        }
        if (!userDetails.phone) {
            setInputErrorDetails(state => {
                return { ...state, phone: true }
            })
            inputError = false
        }
        if (!userDetails.email) {
            setInputErrorDetails(state => {
                return { ...state, email: true }
            })
            inputError = false
        }
        if (!userDetails.password) {
            setInputErrorDetails(state => {
                return { ...state, password: true }
            })
            inputError = false
        }
        if (inputError) {
            try {
                let response = await axios({
                    method: 'POST',
                    url: "https://192.168.1.223:7198/register",
                    data: userDetails
                })
                console.log(response)
                if (response.status === 201) {
                    setRegisterError(201)
                    goToLogin();
                }
            } catch (error) {
                console.log(error);
                setRegisterError(500)
            }
        }
    }

    function closeRegister() {
        setUserDetails({
            "name": "",
            "phone": "",
            "email": "",
            "password": ""
        })
        setOpenRegister(false)
        setInputErrorDetails({
            "name": false,
            "phone": false,
            "email": false,
            "password": false
        })
        setRegisterError(0)
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
                    },
                }}
            >
                <Fade in={openRegister}>
                    <Box sx={style}>
                        <Box sx={{ display: 'flex', justifyContent: 'right', cursor: 'pointer' }}>
                            <IconButton onClick={() => { closeRegister() }}>
                                <CloseIcon sx={{ fontSize: '30px' }} />
                            </IconButton>
                        </Box>
                        <Box sx={{ fontWeight: 'bold', textAlign: 'center', fontSize: '20px' }}>Register</Box>
                        <Box sx={{ display: "flex", mt: '30px', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                            <Box sx={{ width: '80%' }}>
                                <TextField onChange={(e) => { changeValues("name", e.target.value) }} value={userDetails.name} sx={{ width: '100%' }} fontSize="30px" id="filled-basic" label="Name" variant="filled" size="small" />
                                <Box sx={{ pl: '15px', color: 'red' }}>{inputErrorDetails.name && 'name is missing'}</Box>
                            </Box>
                            <Box sx={{ width: '80%' }}>
                                <TextField onChange={(e) => { changeValues("phone", e.target.value) }} value={userDetails.phone} sx={{ width: '100%' }} fontSize="30px" id="filled-basic" label="Phone" variant="filled" size="small" />
                                <Box sx={{ pl: '15px', color: 'red' }}>{inputErrorDetails.phone && 'phone is missing'}</Box>
                            </Box>
                            <Box sx={{ width: '80%' }}>
                                <TextField onChange={(e) => { changeValues("email", e.target.value) }} value={userDetails.email} sx={{ width: '100%' }} fontSize="30px" id="filled-basic" label="Email" variant="filled" size="small" />
                                <Box sx={{ pl: '15px', color: 'red' }}>{inputErrorDetails.email && 'email is missing'}</Box>
                            </Box>
                            <Box sx={{ width: '80%' }}>
                                <TextField onChange={(e) => { changeValues("password", e.target.value) }} value={userDetails.password} sx={{ width: '100%' }} id="filled-basic" label="Password" variant="filled" size="small" />
                                <Box sx={{ pl: '15px', color: 'red' }}>{inputErrorDetails.password && 'password is missing'}</Box>
                            </Box>
                        </Box>
                        <Box sx={{ pt: '20px', textAlign: 'center', color: 'red' }}>{registerError === 500 ? 'something went wrong, please try again later' : ''}</Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', my: '20px' }}>
                            <Button onClick={() => { register() }} sx={{ backgroundColor: '#00665c', width: '80%', '&:hover': { backgroundColor: '#004f48' } }} variant="contained">Submit</Button>
                        </Box>
                        <hr />
                        <Box>Already have an account? <span onClick={() => { goToLogin() }} className="registerLink">Login</span></Box>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}
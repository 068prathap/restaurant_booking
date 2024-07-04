import { Backdrop, Box, Button, Fade, IconButton, Modal, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import './Login.css'
import { useState } from "react";
import axios from "axios";
import { setLogin } from "../../reduxToolkit/slice";
import { useDispatch } from "react-redux";

export default function Login({ openLogin, setOpenLogin, setOpenRegister }) {
    const [userDetails, setUserDetails] = useState({
        "phone": "",
        "password": ""
    })
    const [phoneInputError, setPhoneInputError] = useState(false)
    const [passwordInputError, setPasswordInputError] = useState(false)
    const [loginError, setLoginError] = useState(0)

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

    function goToRegister() {
        setUserDetails({
            "phone": "",
            "password": ""
        })
        setOpenLogin(false);
        setOpenRegister(true);
        setPhoneInputError(false)
        setPasswordInputError(false)
        setLoginError(0)
    }

    function changeValues(key, value) {
        setUserDetails((state => {
            return { ...state, [key]: value }
        }))
        if (phoneInputError && key === 'phone' && value.length > 0) {
            setPhoneInputError(false)
        }
        if (passwordInputError && key === 'password' && value.length > 0) {
            setPasswordInputError(false)
        }
    }

    async function login() {
        let inputError = true
        if (!userDetails.phone) {
            setPhoneInputError(true)
            inputError = false
        }
        if (!userDetails.password) {
            setPasswordInputError(true)
            inputError = false
        }
        if (inputError) {
            try {
                let response = await axios({
                    method: 'POST',
                    url: "https://192.168.1.223:7198/login",
                    data: userDetails
                })
                console.log(response)
                if (response.status === 200) {
                    dispatch(setLogin({ token: response.data.token, userId: response.data.userId }))
                    closeLogin(false);
                }
                else {
                    setLoginError(response.status);
                }
            } catch (error) {
                console.log(error);
                if (error.response?.status === 404) {
                    setLoginError(404);
                }
                else {
                    setLoginError(500);
                }
            }
        }
    }

    function closeLogin() {
        setUserDetails({
            "phone": "",
            "password": ""
        })
        setOpenLogin(false)
        setPhoneInputError(false)
        setPasswordInputError(false)
        setLoginError(0)
    }

    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openLogin}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={openLogin}>
                    <Box sx={style}>
                        <Box sx={{ display: 'flex', justifyContent: 'right', cursor: 'pointer' }}>
                            <IconButton onClick={() => { closeLogin() }}>
                                <CloseIcon sx={{ fontSize: '30px' }} />
                            </IconButton>
                        </Box>
                        <Box sx={{ fontWeight: 'bold', textAlign: 'center', fontSize: '20px' }}>Login</Box>
                        <Box sx={{ display: "flex", mt: '30px', flexDirection: 'column', alignItems: 'center' }}>
                            <TextField onChange={(e) => { changeValues("phone", e.target.value) }} value={userDetails.phone} sx={{ width: '80%' }} fontSize="30px" id="filled-basic" label="Phone" variant="filled" size="small" />
                            <Box sx={{ width: '80%' }}>
                                <Box sx={{ pl: '15px', color: 'red' }}>{phoneInputError && 'phone Number is missing'}</Box>
                            </Box>
                            <TextField onChange={(e) => { changeValues("password", e.target.value) }} value={userDetails.password} sx={{ width: '80%', mt: '20px' }} id="filled-basic" label="Password" variant="filled" size="small" />
                            <Box sx={{ width: '80%' }}>
                                <Box sx={{ pl: '15px', color: 'red' }}>{passwordInputError && 'password is missing'}</Box>
                            </Box>
                        </Box>
                        <Box sx={{ pt: '20px', textAlign: 'center', color: 'red' }}>{loginError === 404 ? 'phone number or password is wrong' : loginError === 500 ? 'something went wrong, please try again later' : ''}</Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', my: '20px' }}>
                            <Button onClick={() => { login() }} sx={{ backgroundColor: '#00665c', width: '80%', '&:hover': { backgroundColor: '#004f48' } }} variant="contained">Submit</Button>
                        </Box>
                        <hr />
                        <Box>Don't have an account? <span onClick={() => { goToRegister() }} className="registerLink">Create account</span></Box>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}
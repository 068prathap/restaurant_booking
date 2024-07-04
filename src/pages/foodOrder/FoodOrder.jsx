import { Box, Button, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, TextField } from '@mui/material'
import './FoodOrder.css'
import { useSelector } from 'react-redux'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function FoodOrder() {
    const isLogin = useSelector(state => state.reducer1.isLogin)
    const [SearchValue, setSearchValue] = useState('');

    return (
        <>
            <Box sx={{ display: 'flex', zIndex: 1, alignItems: 'center', top: 0, backgroundColor: 'white', position: 'sticky', justifyContent: 'space-between', padding: '10px 20px', boxShadow: 2, alignItems: 'center' }}>
                <Box sx={{ fontWeight: 'bold' }}>YumYumDine</Box>
                <Box sx={{ display: 'flex', gap: '10px' }}>
                    {
                        isLogin ?
                            <AccountCircleIcon sx={{ color: '#00665c', fontSize: '40px' }} />
                            :
                            <Button onClick={() => { }} sx={{ backgroundColor: '#00665c', '&:hover': { backgroundColor: '#004f48' } }} variant="contained">Login</Button>
                    }
                </Box>
            </Box>
            <Box sx={{ display: 'flex', py: '20px', justifyContent: 'center' }}>
                <Box sx={{ maxWidth: '1200px', display: 'flex', width: '100%' }}>
                    <Box sx={{ width: '250px' }}>
                        <Box>
                            <Box sx={{ py: '10px' }}>veg</Box>
                            <Box sx={{ py: '10px' }}>veg</Box>
                            <Box sx={{ py: '10px' }}>veg</Box>
                            <Box sx={{ py: '10px' }}>veg</Box>
                            <Box sx={{ py: '10px' }}>veg</Box>
                        </Box>
                    </Box>
                    <Box sx={{ borderLeft: '1px solid grey', width: '100%' }}>
                        <Box>
                            <FormControl sx={{ m: 1, width: "300px" }} variant="filled">
                                <InputLabel htmlFor="filled-adornment-password">Search</InputLabel>
                                <FilledInput
                                    id="filled-adornment-password"
                                    type="text"
                                    value={SearchValue}
                                    onChange={(e)=>{setSearchValue(e.target.value)}}
                                    size='small'
                                    endAdornment={
                                        <InputAdornment position="end"
                                            sx={{alignItems:'start', pb:'20px'}}
                                        >
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                edge="end"
                                            >
                                                {SearchValue.length > 0 && <HighlightOffIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
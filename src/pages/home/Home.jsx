import { Box } from '@mui/material'
import './Home.css'
import { useState } from 'react';
import Login from '../login/Login';
import Register from '../register/Register';
import Header from '../../components/homeComponents/Header';
import HomePageCard from '../../components/homeComponents/HomePageCard';
import HomePageCardsHeader from '../../components/homeComponents/HomePageCardsHeader';
import HomeBanner from '../../components/homeComponents/HomeBanner';

export default function Home() {
    const [openLogin, setOpenLogin] = useState(false)
    const [openRegister, setOpenRegister] = useState(false)

    return (
        <>
            <Header setOpenLogin={setOpenLogin} />
            <HomeBanner />
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: '100px', mt: '20px' }}>
                <Box sx={{ width: '1200px' }}>
                    <Box sx={{ mb: '40px' }}>
                        <HomePageCardsHeader />
                        <Box sx={{ display: 'flex', mt: '10px', gap: '20px' }}>
                            <HomePageCard />
                            <HomePageCard />
                        </Box>
                    </Box>
                    <Box>
                        <HomePageCardsHeader />
                        <Box sx={{ display: 'flex', mt: '10px', gap: '20px' }}>
                            <HomePageCard />
                            <HomePageCard />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Login openLogin={openLogin} setOpenLogin={setOpenLogin} setOpenRegister={setOpenRegister} />
            <Register openRegister={openRegister} setOpenRegister={setOpenRegister} setOpenLogin={setOpenLogin} />
        </>
    )
}
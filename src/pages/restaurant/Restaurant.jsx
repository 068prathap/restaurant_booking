import './Restaurant.css'
import RestaurantHeader from '../../components/restaurantComponents/RestaurantHeader'
import { Box } from '@mui/material'
import { useState } from 'react';
import RestaurantCarousel from '../../components/restaurantComponents/RestaurantCarousel';
import RestaurantBio from '../../components/restaurantComponents/RestaurantBio';
import RestaurantNavBar from '../../components/restaurantComponents/RestaurantNavBar';
import RestaurantOverallReview from '../../components/restaurantComponents/RestaurantOverallReview';
import RestaurantReviewFilter from '../../components/restaurantComponents/RestaurantReviewFilter';
import RestaurantReviewCard from '../../components/restaurantComponents/RestaurantReviewCard';
import Booking from '../booking/Booking';

export default function Restaurant() {
    const [activeTab, setActiveTab] = useState(2)
    const [selectedOption, setSelectedOption] = useState(1)
    const [openRegister, setOpenRegister] = useState(false)

    function changeFilterOption(option) {
        setSelectedOption(option)
    }

    return (
        <>
            <RestaurantHeader />
            <RestaurantCarousel />
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: '1200px' }}>
                    <RestaurantBio setOpenRegister={setOpenRegister}/>
                    <RestaurantNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
                    <Box sx={{ pt: '15px', position: 'relative' }}>
                        {
                            activeTab === 1 &&
                            <Box>
                                <Box sx={{ fontWeight: 'bold', fontSize: '20px' }}>About this place</Box>
                                <Box sx={{ pl: '10px' }}>A restaurant is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services.</Box>
                            </Box>
                        }
                        {
                            activeTab === 2 &&
                            <>
                                <RestaurantOverallReview />
                                <Box>
                                    <RestaurantReviewFilter selectedOption={selectedOption} changeFilterOption={changeFilterOption} />
                                    <Box sx={{ zIndex: -1, p: '20px' }}>
                                        <Box>
                                            <RestaurantReviewCard />
                                        </Box>
                                        <hr style={{ margin: '15px 0px' }} />
                                        <Box>
                                            <RestaurantReviewCard />
                                        </Box>
                                    </Box>
                                </Box>
                            </>
                        }
                    </Box>
                </Box>
            </Box>
            <Booking openRegister={openRegister} setOpenRegister={setOpenRegister} />
            <Box sx={{ mb: '100px' }}></Box>
        </>
    )
}
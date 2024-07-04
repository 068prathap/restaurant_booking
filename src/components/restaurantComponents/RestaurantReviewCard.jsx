import { Box } from "@mui/material";
import RecommendIcon from '@mui/icons-material/Recommend';
import ChatIcon from '@mui/icons-material/Chat';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';

export default function RestaurantReviewCard() {
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between' }}>
                <Box>
                    <p style={{ margin: '0px' }}>
                        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>reviewer name</span>
                        <span style={{ padding: '0px 5px' }}>•</span>
                        <span style={{ fontSize: '15px' }}>totel reviews</span>
                    </p>
                    <Box>Review date</Box>
                </Box>
                <Box sx={{ alignItems: 'end', display: 'flex' }}>
                    <Box sx={{ fontSize: '30px', fontWeight: 'bold' }}>8.5 </Box>
                    <Box sx={{ fontSize: '15px' }}>/10</Box>
                </Box>
            </Box>
            <Box sx={{ py: '20px' }}>The food was excellent! Great place to go if you want to have something grilled. The staff was very friendly and helpful. They even gave us some free side dish on the house.</Box>
            <Box sx={{ display: 'flex', gap: '30px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', color: '#00665c', cursor: 'pointer', borderBottom: '1px solid white', '&:hover': { color: '#004f48', borderBottomColor: '#004f48' } }}>
                    <RecommendIcon sx={{ fontSize: '20px' }} />
                    <Box sx={{ fontSize: '16px' }}>Like</Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', color: '#00665c', cursor: 'pointer', borderBottom: '1px solid white', '&:hover': { color: '#004f48', borderBottomColor: '#004f48' } }}>
                    <ChatIcon sx={{ fontSize: '20px' }} />
                    <Box sx={{ fontSize: '16px' }}>Comment</Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', color: '#00665c', cursor: 'pointer', borderBottom: '1px solid white', '&:hover': { color: '#004f48', borderBottomColor: '#004f48' } }}>
                    <FlagCircleIcon sx={{ fontSize: '20px' }} />
                    <Box sx={{ fontSize: '16px' }}>Report</Box>
                </Box>
            </Box>
        </>
    )
}
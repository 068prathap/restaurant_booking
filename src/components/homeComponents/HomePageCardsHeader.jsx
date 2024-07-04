import { Box, IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function HomePageCardsHeader() {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ fontWeight: 'bold', fontSize: '20px' }}>Top rated restaurants in Chennai</Box>
                <Box sx={{ display: 'flex', gap: '5px' }}>
                    <IconButton sx={{ boxShadow: 3, cursor: 'pointer' }} disabled={true}>
                        <KeyboardArrowLeftIcon />
                    </IconButton>
                    <IconButton sx={{ boxShadow: 3, cursor: 'pointer' }} disabled={true}>
                        <KeyboardArrowRightIcon />
                    </IconButton>
                </Box>
            </Box>
        </>
    )
}
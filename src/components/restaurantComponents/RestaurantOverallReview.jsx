import { Box } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';

export default function RestaurantOverallReview() {
    return (
        <>
            <Box sx={{ display: 'flex', borderRadius: '20px', p: '20px', width: 'fit-content', backgroundColor: 'hsl(180, 9%, 98%)', alignItems: 'center', gap: '20px' }}>
                <Box sx={{ display: 'flex', gap: '50px', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                        <Box sx={{ width: 'fit-content', position: 'relative' }}>
                            <CircularProgress thickness={2} sx={{ color: '#00665c' }} size={70} variant="determinate" value={85} />
                            <Box sx={{ position: 'absolute', alignItems: 'end', display: 'flex', left: 'Calc(50% - 25px)', top: 'Calc(50% - 22px)' }}>
                                <Box sx={{ fontSize: '25px', fontWeight: 'bold' }}>8.5 </Box>
                                <Box sx={{ fontSize: '11px' }}>/10</Box>
                            </Box>
                        </Box>
                        <Box>
                            <Box sx={{ fontWeight: 'bold' }}>Excelent</Box>
                            <Box>119 Reviews</Box>
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                            <Box sx={{ alignItems: 'end', display: 'flex' }}>
                                <Box sx={{ fontSize: '25px', fontWeight: 'bold' }}>8.5 </Box>
                                <Box sx={{ fontSize: '11px' }}>/10</Box>
                            </Box>
                            <Box>Food</Box>
                        </Box>
                        <hr />
                        <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                            <Box sx={{ alignItems: 'end', display: 'flex' }}>
                                <Box sx={{ fontSize: '25px', fontWeight: 'bold' }}>8.5 </Box>
                                <Box sx={{ fontSize: '11px' }}>/10</Box>
                            </Box>
                            <Box>Service</Box>
                        </Box>
                        <hr />
                        <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                            <Box sx={{ alignItems: 'end', display: 'flex' }}>
                                <Box sx={{ fontSize: '25px', fontWeight: 'bold' }}>8.5 </Box>
                                <Box sx={{ fontSize: '11px' }}>/10</Box>
                            </Box>
                            <Box>Ambience</Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: '1px', height: '140px', backgroundColor: '#808080' }}></Box>
                <Box>
                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <Box sx={{ fontSize: '16px', width: '50px', textAlign: 'right' }}>9-10</Box>
                        <LinearProgress sx={{ width: '200px', backgroundColor: '#00665c3b', '& span': { backgroundColor: '#00665c' } }} variant="determinate" value={10} />
                    </Box>
                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <Box sx={{ fontSize: '16px', width: '50px', textAlign: 'right' }}>7-8</Box>
                        <LinearProgress sx={{ width: '200px', backgroundColor: '#00665c3b', '& span': { backgroundColor: '#00665c' } }} variant="determinate" value={10} />
                    </Box>
                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <Box sx={{ fontSize: '16px', width: '50px', textAlign: 'right' }}>5-6</Box>
                        <LinearProgress sx={{ width: '200px', backgroundColor: '#00665c3b', '& span': { backgroundColor: '#00665c' } }} variant="determinate" value={10} />
                    </Box>
                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <Box sx={{ fontSize: '16px', width: '50px', textAlign: 'right' }}>3-4</Box>
                        <LinearProgress sx={{ width: '200px', backgroundColor: '#00665c3b', '& span': { backgroundColor: '#00665c' } }} variant="determinate" value={10} />
                    </Box>
                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <Box sx={{ fontSize: '16px', width: '50px', textAlign: 'right' }}>1-2</Box>
                        <LinearProgress sx={{ width: '200px', backgroundColor: '#00665c3b', '& span': { backgroundColor: '#00665c' } }} variant="determinate" value={10} />
                    </Box>
                </Box>
            </Box>
        </>
    )
}
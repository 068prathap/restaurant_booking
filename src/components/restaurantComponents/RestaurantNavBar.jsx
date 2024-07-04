import { Box } from "@mui/material"

export default function RestaurantNavBar({ activeTab, setActiveTab }) {
    return (
        <>
            <Box sx={{ display: 'flex', zIndex: 5, backgroundColor: 'white', position: 'sticky', top: '120px', gap: '50px', borderBottom: '2px solid lightgrey', pb: '4px', pt: '20px', zIndex: '1', color: 'black', }}>
                <Box sx={{ cursor: 'pointer', px: '10px', position: 'relative', color: `${activeTab === 1 && '#00665c'}` }} onClick={() => { setActiveTab(1) }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', fontWeight: `${activeTab === 1 && 'bold'}` }}>Overview</Box>
                    {activeTab === 1 && <Box sx={{ borderBottom: '2px solid #00665c', position: 'absolute', width: '100%', top: '25.6px', ml: '-10px' }}></Box>}
                </Box>
                <Box sx={{ cursor: 'pointer', px: '10px', position: 'relative', color: `${activeTab === 2 && '#00665c'}` }} onClick={() => { setActiveTab(2) }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', fontWeight: `${activeTab === 2 && 'bold'}` }}>Review</Box>
                    {activeTab === 2 && <Box sx={{ borderBottom: '2px solid #00665c', position: 'absolute', width: '100%', top: '25.6px', ml: '-10px' }}></Box>}
                </Box>
                <Box sx={{ cursor: 'pointer', px: '10px', position: 'relative', color: `${activeTab === 3 && '#00665c'}` }} onClick={() => { setActiveTab(3) }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', fontWeight: `${activeTab === 3 && 'bold'}` }}>Photos</Box>
                    {activeTab === 3 && <Box sx={{ borderBottom: '2px solid #00665c', position: 'absolute', width: '100%', top: '25.6px', ml: '-10px' }}></Box>}
                </Box>
                <Box sx={{ cursor: 'pointer', px: '10px', position: 'relative', color: `${activeTab === 4 && '#00665c'}` }} onClick={() => { setActiveTab(4) }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', fontWeight: `${activeTab === 4 && 'bold'}` }}>Menu</Box>
                    {activeTab === 4 && <Box sx={{ borderBottom: '2px solid #00665c', position: 'absolute', width: '100%', top: '25.6px', ml: '-10px' }}></Box>}
                </Box>
            </Box>
        </>
    )
}
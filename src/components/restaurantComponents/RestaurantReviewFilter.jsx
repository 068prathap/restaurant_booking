import { Box } from "@mui/material"
import SortIcon from '@mui/icons-material/Sort';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useState } from "react";

export default function RestaurantReviewFilter({ changeFilterOption, selectedOption }) {
    const filterOptions = ['Newest First', 'Oldest First', 'Highest First', 'Lowest First']
    const [openFilter, setOpenFilter] = useState(false)

    function closeFilter(option) {
        changeFilterOption(option)
        setOpenFilter(false)
    }

    return (
        <>
            <Box sx={{ mt: '15px', position: 'relative', width: 'fit-content' }}>
                <Box onClick={() => { setOpenFilter(!openFilter) }} sx={{ display: 'flex', gap: '10px', borderRadius: '5px', p: '10px', width: 'fit-content', cursor: 'pointer', alignItems: 'center', '&:hover': { backgroundColor: '#00000003' } }}>
                    <SortIcon />
                    <Box sx={{ fontSize: '19px' }}>{filterOptions[selectedOption - 1]}</Box>
                    <ArrowDropUpIcon sx={{ fontSize: '30px', transform: `${openFilter ? "rotate(0deg)" : "rotate(180deg)"}`, transition:'0.2s' }} />
                </Box>
                <Box sx={{ position: 'absolute', width: '100%' }}>
                    <Box sx={{ p: '10px', display: `${openFilter ? 'block' : 'none'}`, transition: 'transform 0.2s ease', transform: `${openFilter ? 'transform: translateY(0)' : 'translateY(-5px)'}`, position: 'relative' }}>
                        <Box sx={{ position: 'absolute', right: '20px', top: '-19px' }}>
                            <ArrowDropUpIcon sx={{ color: 'white', fontSize: '50px' }} />
                        </Box>
                        <Box sx={{ boxShadow: '0px 10px 13px -6px rgba(0,0,0,0.2),0px 0px 10px 0px rgba(0,0,0,0.14),0px 0px 29px 0px rgba(0,0,0,0.12)', backgroundColor: 'white', borderRadius: '10px', width: '100%', py: '10px' }}>
                            <Box onClick={() => { closeFilter(1) }} sx={{ p: '5px', backgroundColor: `${selectedOption === 1 ? '#00665c59' : 'white'}`, cursor: 'pointer', fontSize: '19px', textAlign: 'center', '&:hover': { backgroundColor: '#00665c14' } }}>Newest First</Box>
                            <Box onClick={() => { closeFilter(2) }} sx={{ p: '5px', backgroundColor: `${selectedOption === 2 ? '#00665c59' : 'white'}`, cursor: 'pointer', fontSize: '19px', textAlign: 'center', '&:hover': { backgroundColor: '#00665c14' } }}>Oldest First</Box>
                            <Box onClick={() => { closeFilter(3) }} sx={{ p: '5px', backgroundColor: `${selectedOption === 3 ? '#00665c59' : 'white'}`, cursor: 'pointer', fontSize: '19px', textAlign: 'center', '&:hover': { backgroundColor: '#00665c14' } }}>Highest First</Box>
                            <Box onClick={() => { closeFilter(4) }} sx={{ p: '5px', backgroundColor: `${selectedOption === 4 ? '#00665c59' : 'white'}`, cursor: 'pointer', fontSize: '19px', textAlign: 'center', '&:hover': { backgroundColor: '#00665c14' } }}>Lowest First</Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
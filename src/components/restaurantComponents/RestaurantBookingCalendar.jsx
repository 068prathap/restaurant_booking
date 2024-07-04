import { Box, Button, IconButton } from "@mui/material"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from "react";

export default function RestaurantBookingCalendar() {
    const [selectedDate, setSelectedDate] = useState()

    function dayCounts(monthNumber) {
        let date = new Date();
        let month = date.getMonth() + monthNumber;
        let year = date.getFullYear();
        return new Date(year, month, 0).getDate();
    }

    function calenderArray(monthNumber) {
        let day = firstDay(monthNumber);
        let dayCount = dayCounts(monthNumber)
        let allWeeks = [], innerDays = [];
        for (let i = 0; i < day; i++) {
            innerDays.push(null)
        }
        for (let i = 1; i <= dayCount; i++) {
            innerDays.push(i)
            day += 1;
            if (day === 7) {
                allWeeks.push(innerDays)
                day = 0;
                innerDays = [];
            }
        }
        if (day !== 7) {
            for (let i = day; i < 7; i++) {
                innerDays.push(null)
            }
            allWeeks.push(innerDays)
        }
        return allWeeks;
    }

    function firstDay(monthNumber) {
        let date = new Date();
        let month = date.getMonth() + (monthNumber - 1);
        let year = date.getFullYear();
        const firstDayOfMonth = new Date(year, month, 1);
        return firstDayOfMonth.getDay();
    }

    return (
        <>
            <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <IconButton>
                        <KeyboardArrowLeftIcon />
                    </IconButton>
                    <Box>April</Box>
                    <IconButton>
                        <KeyboardArrowRightIcon />
                    </IconButton>
                </Box>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ width: '14%', fontWeight: 'bold', textAlign: 'center', py: '10px' }}>sun</Box>
                        <Box sx={{ width: '14%', fontWeight: 'bold', textAlign: 'center', py: '10px' }}>mon</Box>
                        <Box sx={{ width: '14%', fontWeight: 'bold', textAlign: 'center', py: '10px' }}>tue</Box>
                        <Box sx={{ width: '14%', fontWeight: 'bold', textAlign: 'center', py: '10px' }}>wed</Box>
                        <Box sx={{ width: '14%', fontWeight: 'bold', textAlign: 'center', py: '10px' }}>thu</Box>
                        <Box sx={{ width: '14%', fontWeight: 'bold', textAlign: 'center', py: '10px' }}>fri</Box>
                        <Box sx={{ width: '14%', fontWeight: 'bold', textAlign: 'center', py: '10px' }}>sat</Box>
                    </Box>
                    <Box>
                        {
                            calenderArray(1).map((week, index) => {
                                return (
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        {
                                            week.map((day, index) => {
                                                if (day) {
                                                    return (

                                                        <Box onClick={() => { setSelectedDate(day) }} sx={{ py: '10px', justifyContent: 'center', display: 'flex', width: '13%' }}>
                                                            {
                                                                selectedDate === day ?
                                                                    <Button variant="contained" sx={{ backgroundColor: '#00665c', py: '9px', px: '0px', minWidth: '44.5px', boxShadow: 0, borderRadius: '5px', '&:hover': { backgroundColor: '#004f48', boxShadow: 0 } }}>{day}</Button>
                                                                    :
                                                                    <Button disabled={false} sx={{ color: "#00665c", py: '9px', px: '0px', minWidth: '44.5px', borderRadius: '5px', borderColor: '#00665c', '&:hover': { color: '#004f48', borderColor: '#004f48', backgroundColor: '#00665c15' } }} variant="outlined">{day}</Button>
                                                            }
                                                        </Box>
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <Box sx={{ width: '13%', textAlign: 'center', py: '10px' }}>{day}</Box>
                                                    )
                                                }
                                            })
                                        }
                                    </Box>
                                )
                            })
                        }
                    </Box>
                </Box>
            </Box>
        </>
    )
}
import { Box, Button } from "@mui/material"
import { useState } from "react";

export default function RestaurantBookingGuests() {
    const [guestsCount, setGuestsCount]=useState(1)
    
    function guestsArray() {
        let rows = [], innerNumbers = [];
        for (let i = 1; i <= 11; i++) {
            innerNumbers.push(i);
            if (i % 4 === 0) {
                rows.push(innerNumbers)
                innerNumbers = []
            }
        }
        if (11 % 4 != 0) {
            for (let i = 11; i % 4 != 0; i++) {
                innerNumbers.push(null)
            }
            rows.push(innerNumbers)
        }
        return rows;
    }

    return (
        <>
            <Box>
                <Box sx={{ fontWeight: 'bold', textAlign: 'center' }}>Number of Guests</Box>
                <Box sx={{ mt: '15px' }}>
                    {
                        guestsArray().map((row, index) => {
                            return (
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    {
                                        row.map((count, index) => {
                                            if (count) {
                                                return (
                                                    <Box onClick={() => { setGuestsCount(count) }} sx={{ py: '10px', justifyContent: 'center', display: 'flex', width: '24%' }}>
                                                        {
                                                            guestsCount===count ?
                                                                <Button variant="contained" sx={{ backgroundColor: '#00665c', py: '9px', px: '0px', minWidth: '85px', boxShadow: 0, borderRadius: '5px', '&:hover': { backgroundColor: '#004f48', boxShadow: 0 } }}>{count}</Button>
                                                                :
                                                                <Button disabled={false} sx={{ color: "#00665c", py: '9px', px: '0px', minWidth: '85px', borderRadius: '5px', borderColor: '#00665c', '&:hover': { color: '#004f48', borderColor: '#004f48', backgroundColor: '#00665c15' } }} variant="outlined">{count}</Button>
                                                        }
                                                    </Box>
                                                )
                                            }
                                            else {
                                                return (
                                                    <Box sx={{ width: '24%', textAlign: 'center', py: '10px' }}>{count}</Box>
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
        </>
    )
}
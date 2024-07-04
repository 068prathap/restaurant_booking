import { Box, Button } from "@mui/material"
import { useState } from "react";

export default function RestaurantBookingTime() {
    const [time, setTime] = useState('')

    function timeArray() {
        return [["19:00", '19:15', '19:30', '19:45'], ["20:00", '20:15', '20:30', '20:45'], ["21:00", '21:15', '21:30', null]];
    }

    return (
        <>
            <Box>
                <Box sx={{ fontWeight: 'bold', textAlign: 'center' }}>Choose your time</Box>
                <Box sx={{ mt: '15px' }}>
                    <Box>
                        <Box sx={{ fontWeight: 'bold' }}>Dinner:</Box>
                        <Box>
                            {
                                timeArray().map((row, index) => {
                                    return (
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            {
                                                row.map((count, index) => {
                                                    if (count) {
                                                        return (
                                                            <Box onClick={() => { setTime(count) }} sx={{ py: '10px', justifyContent: 'center', display: 'flex', width: '24%' }}>
                                                                {
                                                                    count === time ?
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
                </Box>
            </Box>
        </>
    )
}
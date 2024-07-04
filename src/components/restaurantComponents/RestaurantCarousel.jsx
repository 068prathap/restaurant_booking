import { Box } from "@mui/material";

export default function RestaurantCarousel() {
    return (
        <>
            <Box sx={{ p: '20px', pb: '5px' }}>
                <Box sx={{ width: '100%', justifyContent: 'space-between', display: 'flex', height: '225px' }}>
                    <img height={'100%'} width={'33%'} src="https://b.zmtcdn.com/data/pictures/7/20742477/4e0899b33705483d9f2400aad3092916.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="" />
                    <img height={'100%'} width={'33%'} src="https://b.zmtcdn.com/data/pictures/7/20742477/4e0899b33705483d9f2400aad3092916.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="" />
                    <img height={'100%'} width={'33%'} src="https://b.zmtcdn.com/data/pictures/7/20742477/4e0899b33705483d9f2400aad3092916.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="" />
                </Box>
            </Box>
        </>
    )
}
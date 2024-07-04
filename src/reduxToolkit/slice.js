import { createSlice } from "@reduxjs/toolkit";

const initialState={
    token:'',
    userId:'',
    isLogin:false
}

export const slice1= createSlice({
    name:'slice1',
    initialState,
    reducers:{
        setLogin: (state,{payload})=>{
            state.token=payload.token
            state.userId=payload.userId
            state.isLogin=true
        }
    }
})

export const {setLogin}=slice1.actions
export default slice1.reducer
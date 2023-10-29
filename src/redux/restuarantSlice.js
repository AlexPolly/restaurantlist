import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// api call - createAsyncThunk
export const fetchRestuarants =createAsyncThunk('restuarantList/fetchRestuarants',()=>{
    // api call
    return axios.get('restaurants.json').then(response=>response.data.restaurants)
})

const restuarantSlice = createSlice({
    name:'restuarantList',
    initialState:{
        loading:false,
        allRestuarants:[],
        error:''
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchRestuarants.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchRestuarants.fulfilled,(state)=>{
            state.loading = false
            state.allRestuarants = action.payload
            state.error=""
        })
        builder.addCase(fetchRestuarants.rejected,(state)=>{
            state.loading = false
            state.allRestuarants = []
            state.error=action.error.message
        })
    }
})

export default restuarantSlice.reducer

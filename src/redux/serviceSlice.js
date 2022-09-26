import { createSlice } from "@reduxjs/toolkit"

const serviceState = {
    services: [],
    searched: [], 
    isSearching: false
}

const serviceSlice = createSlice({
    name: 'services',
    initialState: serviceState,
    reducers: {
        initServicers(state){
            if(localStorage.getItem('services')){
                state.services = JSON.parse(localStorage.getItem('services'));
            } else {
                localStorage.setItem('services', JSON.stringify(state.services));
            }
        },
        addService(state, action){
            state.services.push(action.payload);
            localStorage.setItem('services', JSON.stringify(state.services));
        },
        searchService(state, action){
            state.isSearching = true;
            state.searched = [];
            state.services.forEach(service => {
                if(service.serviceName === action.payload) state.searched.push(service);
            })
        },
        searchLeaving(state){
            state.isSearching = false;
        }
    }
})

export const { initServicers, addService, searchService, searchLeaving } = serviceSlice.actions;
export const servicesReducer = serviceSlice.reducer; 
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
        initServicers(state) {
            if (localStorage.getItem('services')) {
                state.services = JSON.parse(localStorage.getItem('services'));
            } else {
                localStorage.setItem('services', JSON.stringify(state.services));
            }
        },
        addService(state, action) {
            state.services.push(action.payload);
            localStorage.setItem('services', JSON.stringify(state.services));
        },
        searchService(state, action) {
            state.isSearching = true;
            state.searched = [];
            state.services.forEach(service => {
                if (service.serviceName === action.payload) state.searched.push(service);
            })
        },
        advancedSearch(state, action) {

            state.searched = [];

            const filterSearchingParams = card => {
                let searchCard = {};
                
                if (card.serviceName) searchCard = { ...searchCard, serviceName: card.serviceName };
                if (card.specialistName) searchCard = { ...searchCard, name: card.specialistName };
                if (card.minPrice) searchCard = { ...searchCard, minPrice: card.minPrice };
                if (card.maxPrice) searchCard = { ...searchCard, maxPrice: card.maxPrice };
                if (card.city) searchCard = { ...searchCard, adress: card.city };

                return searchCard;
            }

            const searchingByParams = (searchCard, whereToFind) => {
                let founded = [];
                whereToFind.forEach(service => {
                    Object.keys(searchCard).forEach(key => {
                        if(searchCard[key] === service[key] && !founded.includes(service)) founded.push(service);
                        else if (searchCard[key] === service[key]) return;
                        else founded = [];
                    })
                    if(founded) state.searched.push(founded);
                })
            }

            const searchParams = filterSearchingParams(action.payload);
            console.log(state.services);
            searchingByParams(searchParams, state.services);
        },
        searchLeaving(state) {
            state.isSearching = false;
        }
    }
})

export const { initServicers, addService, searchService, searchLeaving, advancedSearch } = serviceSlice.actions;
export const servicesReducer = serviceSlice.reducer; 
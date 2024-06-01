import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import apiService from '@/apiService';
export default createStore({
    state:{
        selectedUserData: []
    },
    mutations:{
        addToSelectedUserData(state, newData) {
            console.log("Adding data:", newData);
            // Ensure newData is an object before pushing it to the array
            if (Array.isArray(state.selectedUserData)) {
                state.selectedUserData.push(newData);
            } else {
                console.error('selectedUserData is not an array:', state.selectedUserData);
            }
        },
    },
    actions:{
        getProductDetail({ commit }, id) {
            apiService.getProductwithId(id).then(res => {
                console.log("API Response:", res); // Log the response to check its format
                commit("addToSelectedUserData", res.data); // Assuming res.data is the object you want to add
            }).catch(error => {
                console.error("Error fetching product:", error);
            });
        },
    }, 
    plugins: [
        createPersistedState({ storage: window.sessionStorage })
      ]
})
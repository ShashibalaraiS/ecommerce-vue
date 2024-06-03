import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import apiService from '@/apiService';
export default createStore({
    state:{
        selectedUserData: []
    },
    mutations:{
        addToSelectedUserData(state, newData) {
            if (Array.isArray(state.selectedUserData)) {
                state.selectedUserData.push(newData);
            } else {
                console.error('selectedUserData is not an array:', state.selectedUserData);
            }
        },
        clearSelectedUserData(state) {
            state.selectedUserData = [];
          }
    },
    actions:{
        getProductDetail({ commit }, id) {
            apiService.getProductwithId(id).then(res => {
                commit("addToSelectedUserData", res.data);
            }).catch(error => {
                console.error("Error fetching product:", error);
            });
        },
        clearSelectedUserData({ commit }) {
            commit("clearSelectedUserData");
          }
    }, 
    plugins: [
        createPersistedState({ storage: window.sessionStorage })
      ]
})
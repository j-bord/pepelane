import {getVehicles} from "@/api/request";

export const state = () => ({
  items: []
})

export const mutations = {
  setVehicles(state, items) {
    if(Array.isArray(items)){
      state.items.push(...items);
    }else{
      state.items.push(items);
    }    
  }
}

export const actions = {
  setVehicles({commit}, items) {
    commit('setVehicles', items)    
  },
  nuxtServerInit({ dispatch }, { error }){
    return getVehicles()
      .then(res => {          
        dispatch("setVehicles", res);          
      })
      .catch(err => {                    
          error(err);
      });  
  },
}

export const getters = {
  vehicles(state) {
    return state.items;
  }
}
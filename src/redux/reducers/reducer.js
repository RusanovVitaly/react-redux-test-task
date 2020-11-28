import {SELECT_SEARCH, SET_DATA, SORT_DATA, SORT_NAME} from "../names";

const initialState = {
  defaultData:[],
  data:[],
  selected:null
}


export const rootReducer = (state=initialState,action)=>{
  switch (action.type){
    case SET_DATA:{
      return {...state,defaultData: action.payload,data: action.payload}
    }
    case SORT_DATA:{
      return {...state,data: action.payload}
    }
    case SORT_NAME:{
      return {...state,data: action.payload}
    }
    case SELECT_SEARCH:{
      return {...state,selected: action.payload}
    }
    default: return state
  }
}

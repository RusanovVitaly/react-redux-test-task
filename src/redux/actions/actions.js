import {getData} from "../../api";
import {setFilters,setName} from "../../utils/filters.utils";
import {SELECT_SEARCH, SET_DATA, SORT_DATA, SORT_NAME} from "../names";

function setData(data){
  return{
    type:SET_DATA,
    payload:data
  }
}
export function getRegions(){
  return  (dispatch)=>{
     getData()
       .then(result=>{
         dispatch(setData(result))
       })
  }
}
export function sortData(type){
  return (dispatch,getState)=>{
    const state = getState();
    let filters = setFilters(state,type);
    dispatch({type:SORT_DATA,payload:filters})
  }
}
export function searchName(name){
  return (dispatch,getState)=>{
    const state = getState();
    let data = setName(state,name)
    dispatch({ type:SORT_NAME,payload:data})
  }
}
function selectRegion(item){
    return  {type:SELECT_SEARCH,payload:item}
}
export function getRegion(id){
  return (dispatch)=>{
    getData()
      .then(result=>{
        let item = result.filter(item=>item.order===id)[0]
        dispatch(selectRegion(item))
      })
  }
}



export function setFilters(state,filters){
  let isSorted = state.defaultData.length === state.data.length;
  switch (filters){
    case "asc":{
      if (isSorted){
        const sortedData = Array.from(state.defaultData).sort((a, b)=>a.libraries - b.libraries);
        return [...sortedData]
      }
      else {
        const sortedData = state.data.sort((a, b)=>a.libraries - b.libraries);
        return [...sortedData]
      }
    }
    case 'desc':{
      if (isSorted){
        const sortedData = Array.from(state.defaultData).sort((a, b)=>b.libraries - a.libraries);
        return [...sortedData]
      }
      else {
        const sortedData = state.data.sort((a, b)=>b.libraries - a.libraries);
        return [...sortedData]
      }
    }
  }
}
export function setName(state,name){
  const sortedData = Array.from(state.defaultData).filter(item=>item.territory.includes(name));
  return [...sortedData]
}

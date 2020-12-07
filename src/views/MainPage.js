import React, {useEffect} from "react";
import {Row,Button,Input} from 'antd';
import Card from "../components/Card";
import {useDispatch,useSelector} from 'react-redux'
import {getRegions,sortData,searchName} from 'redux/actions/actions'
import {Link} from "react-router-dom";


export default function MainPage(){

  const dispatch = useDispatch();
  const data = useSelector(state=>state.data)

  useEffect(() => {
    dispatch(getRegions());
  }, []);

  return(
    <div className='container' >
      <Input onChange={(event)=>dispatch(searchName(event.target.value))} style={{margin:'15px'}} placeholder='Поиск по области'/>
      <Button style={{margin:'15px'}} type="primary" onClick={()=>dispatch(sortData('asc'))}>По возрастанию</Button>
      <Button style={{margin:'15px'}} type="primary" onClick={()=>dispatch(sortData('desc'))}>По убыванию</Button>
      <Row justify="center" gutter={[16,24]}>
        {data&&data.map((item,key)=>(
          <Card key={key} title={item.territory} extra={<Link to={`/page?id=${item.order}`}>Подробнее</Link>} options={[{title:'Количество библиотек',value:item.libraries}]}/>
        ))}
      </Row>
    </div>
  )
}

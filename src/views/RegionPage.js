import React, {useEffect} from "react";
import {Descriptions,Breadcrumb } from 'antd';
import {getRegion} from "../redux/actions/actions";
import {useDispatch,useSelector} from 'react-redux'
import {Link} from "react-router-dom";




const RegionPage = () =>{

  const dispatch = useDispatch();
  const data = useSelector(state=>state.selected)

  useEffect(() => {
    let url = new URL(window.location);
    let search = new URLSearchParams(url.search);
    if(search.has('id')){
      dispatch(getRegion(parseInt(search.get('id'))));
    }
  }, []);
  return(
    <div className='container'>
      <Breadcrumb>
        <Breadcrumb.Item><Link to='/'>На главную</Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to={`/page?id=${data?data.order:''}`}>{data?data.territory:''}</Link></Breadcrumb.Item>
      </Breadcrumb>
      <Descriptions column={2} title={`Информация о ${data?data.territory:''}`} bordered>
        {data&&Object.keys(data).map(item=>(
          <Descriptions.Item label={`${item}`}>{data[item]}</Descriptions.Item>
        ))}
      </Descriptions>
    </div>
  )
}

export default RegionPage;

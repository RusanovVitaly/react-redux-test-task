import React from "react";
import {Card, Col} from "antd";
import {Link} from "react-router-dom";

export default ({title,options,extra})=>(
  <Col className="gutter-row" span={8}>
    <Card title={title} size={"small"} extra={extra}>
      {options&&options.map((option,key)=>(
        <p key={key}>{option.title}: {option.value}</p>
      ))}
    </Card>
  </Col>
)

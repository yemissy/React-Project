import React, {Component} from 'react';
import { Form, Input, Icon, Select, Row, Col, Checkbox, Button, AutoComplete, DatePicker} from 'antd';

const { MonthPicker,RangePicker, WeekPicker} = DatePicker;

class ServiceForm extends Component {
  constructor(props){
    super(props);
    this.state ={
      users:[
        {name: ''},
        {service: ''},
        {startDate: ''},
        {endDate: ''},
        {cellPhone: ''},
        {email: ''},
      ],
    }
  }
  render(){
    return (
      <div id="formbody">
        <div id="lists">
          <h2>Services</h2>
          {this.props.titles.map((title)=> (
            <ul>
              <li>{title.name}</li>
            </ul>
          ))}
        </div>
        <hr></hr>
          <Form action="https://formspree.io/yonayemi@yahoo.com" method="POST" className="FormRequest" >
            <div className="myformcontainer"><Form.Item label="Name" name="Full Name"><Input /></Form.Item></div>
            <div className="myformcontainer"><Form.Item label="Email" name="Email"><Input /></Form.Item></div>
            <div className="myformcontainer"><Form.Item label="Phone" name="Phone"><Input /></Form.Item></div>
            <div className="myformcontainer" id="service"><Form.Item label="Service :" name="service">
              <div id='select'>
                <Select defaultvalue ="Weddings" >
                    <Select.Option value ="Weddings">Weddings</Select.Option>
                    <Select.Option value ="BabyShower">BabyShower</Select.Option>
                    <Select.Option value ="Engagements">Engagements</Select.Option>
                    <Select.Option value ="Light Series">Light Series</Select.Option>
                    <Select.Option value ="Potraits">Potraits</Select.Option>
                    <Select.Option value ="Birthdays">Birthdays</Select.Option>
              </Select>
            </div>
          </Form.Item></div>
          <div className="myformcontainer" id="date"><Form.Item label ="Date" ><RangePicker /></Form.Item></div>
            <Button type= "primary" id="ant-btn-primary" onClick ={ () => this.props.renderThis('mainScreen1')}>Submit</Button>
          </Form>
      </div>
    )
  }
}

export default ServiceForm;

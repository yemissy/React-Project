import React, {Component} from 'react';
import { Form, Input, Icon, Select, Row, Col, Checkbox, Button, AutoComplete, DatePicker} from 'antd';


// const FormItem = Form.Item;
// const Option = Select.Option;
// const AutoCompleteOption = AutoComplete.Option;
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
          <Form onSubmit className="FormRequest" >
            <div className="myformcontainer"><Form.Item label="Name"><Input /></Form.Item></div>
            <div className="myformcontainer"><Form.Item label="Email"><Input /></Form.Item></div>
            <div className="myformcontainer"><Form.Item label="Phone"><Input /></Form.Item></div>
            <div className="myformcontainer" id="service"><Form.Item label="Service :">
              <div id='select'>
                <Select defaultvalue ="Weddings">
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
            <Button type= "primary">Submit</Button>
          </Form>
      </div>
    )
  }
}

export default ServiceForm;

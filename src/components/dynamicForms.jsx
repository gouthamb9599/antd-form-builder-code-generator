import React ,{useLayoutEffect, useState} from "react";
import { Form, Button,Checkbox } from "antd";
import FormBuilder from "antd-form-builder";
import config from "../config/config";
// import { FormInstance } from 'antd/lib/form';
import { MessageBus } from "./messagebus.jsx";

function DynamicForm() {
  useLayoutEffect(() => {
    MessageBus.init();
  }, []);
  const [form] = Form.useForm();
  console.log(config);
  const [ctn,setCtn]=useState('');
  const handleSubmit = (values) => {
    console.log("Submit: ", values);
    MessageBus.send("SM.FORM.SUBMIT", values);
  };
//  const formRef = React.createRef<FormInstance>();
  const onCTNChange = (e)=>{
    setCtn(e.target.value);
  }

  return (
    <div>
      <Form form={form} layout="horizontal" onFinish={handleSubmit}>
        <Form.Item name="CTNnumber" label="CTN Number" rules={[{ required: true }]}>
          <Select
            onChange={onCTNChange}
          >
            <Option default value="(784)234-1231">(784)234-1231</Option>
            <Option value="(753)232-3333">(753)232-3333</Option>
            <Option value="(788)123-5532">(788)123-5532</Option>
          </Select>
        </Form.Item>
        <FormBuilder meta={config.forms} form={form} />
        <Form.Item>
          <Checkbox>I agree the <a href="#terms">terms and Conditions</a></Checkbox>
        </Form.Item>
      </Form>
    </div>
  );
}

export default DynamicForm;

import React ,{useLayoutEffect} from "react";
import { Form, Button,Checkbox } from "antd";
import FormBuilder from "antd-form-builder";
import config from "../config/config";
import { MessageBus } from "./messagebus.jsx";

function DynamicForm() {
  useLayoutEffect(() => {
    MessageBus.init();
  }, []);
  const [form] = Form.useForm();
  console.log(config);

  const handleSubmit = (values) => {
    console.log("Submit: ", values);
    MessageBus.send("SM.FORM.SUBMIT", values);
  };

  return (
    <div>
      <Form form={form} layout="horizontal" onFinish={handleSubmit}>
        <FormBuilder meta={config.forms} form={form} />
        <Form.Item>
          <Checkbox>I agree the <a href="#terms">terms and Conditions</a></Checkbox>
        </Form.Item>
      </Form>
    </div>
  );
}

export default DynamicForm;

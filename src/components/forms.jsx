import React,{useState} from 'react';
import {Form,Button} from 'antd';
import config from "../config/config";
import FormBuilder from 'antd-form-builder';
export default ()=>{
    const [form] = Form.useForm()
    const forceUpdate = FormBuilder.useForceUpdate();
    const meta = [{ key: 'name', label: 'Name' }]
    return(<Form form={form} onValuesChange={forceUpdate}>
        <FormBuilder meta={config} form={form}></FormBuilder>
        <Form.Item className="form-footer">
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Form.Item>
    </Form>)

}
import { Select, Form,DatePicker, Input, message, Button } from 'antd';
import '../index.css'

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

export function CareerForm() {
  const [form] = Form.useForm();
  const onFinish = () => {
    message.success('Submit success!');
  };
  const onFinishFailed = () => {
    message.error('Submit failed!');
  };
  const onFill = () => {
    form.setFieldsValue({
      url: 'https://taobao.com/',
    });
  };

  return (
    <div className='m-32'>
      <div className='w-full m-auto text-center'>
        <h1 className='font-semibold text-4xl pb-4'>Careers</h1>
        <p className='text-2xl pb-32 font-light'>Check out our job postings & opportunities waiting for you</p>
      </div>

          <Form
            validateMessages={validateMessages}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            style={{
              maxWidth: 900,
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              margin: 'auto',
              gap: '8px',
              
            }}
          >
            <Form.Item label="" className='w-5/12 border-b-2 border-b-slate-900'>
              <p className='text-xl py-5'>First Name</p>
              <Input className='h-[50px] border-none'/>
            </Form.Item>
            <Form.Item label="" className='w-5/12 border-b-2 border-b-slate-900'>
              <p className='text-xl py-5'>Last Name</p>
              <Input className='h-[50px] border-none outline-none'/>
            </Form.Item>
              <Form.Item
              name={['user', 'email']}
              label=""
              rules={[
                {
                  type: 'email',
                },
                {
                  required: true,
                },
              ]}
              className='w-5/12 border-b-2 border-b-slate-900'>
                <p className='py-5 text-xl'>Email * </p>
                <Input className='h-[50px] border-none'/>
            </Form.Item>
            <Form.Item label="" className='w-5/12 border-b-2 border-b-slate-900'>
              <p className='text-xl py-5 '>Phone</p>
              <Input className='h-[50px] border-none'/>
            </Form.Item>
          <Form.Item label="" className='w-5/12 border-b-slate-900 '>
            <p className='py-5 text-xl'>Position You Apply for</p>
            <Select placeholder='Select Position ' className='h-[50px]'>
              <Select.Option value="In-store Sales">In-store Sales</Select.Option>
              <Select.Option value="Store LEadership">Store Leadership</Select.Option>
              <Select.Option value="In-store Operations">In-store Operations</Select.Option>
              <Select.Option value="Warehouse & Logistics">Warehouse & Logistics</Select.Option>
              <Select.Option value="eCommerce">eCommerce</Select.Option>
            </Select>
          </Form.Item>
            <Form.Item label="" className='w-5/12 '
            name='date'
            rules={[
              {
                required: true
              },
              {
                type: 'date',
                warningOnly: true
              }
            ]}>
                <p className='inline-block text-xl py-5 px-3'>Available Start Date *</p>
                <DatePicker className='w-[350px] h-[50px]' />
            </Form.Item>
          <Form.Item
              name="url"
              label=""
              rules={[
                {
                  required: true,
                },
                {
                  type: 'url',
                  warningOnly: true,
                },
                {
                  type: 'string',
                  min: 6,
                },
              ]}
              className='max-w-[600px] w-[600px] min-w-[450px] '
            >
              <p className='py-5 text-xl'>Link to Resume</p>
              <Input placeholder="Enter URL" className='h-[50px]'/>
            </Form.Item>


              <Button type="primary" htmlType="submit" className='my-16 w-[200px] h-[50px] text-xl bg-purple-600 rounded-full duration-300 button-career-form transition ease-in-out'>
                Submit
            </Button>
          </Form>
    </div>
  );
};
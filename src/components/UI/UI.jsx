import React from 'react';
import { Menu, Form, Input, Button, Checkbox } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';


const { SubMenu } = Menu;

const SignIn = () => {

 const onFinish = (values) => {
  console.log('Success:', values);
 }

 const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
 }

	return (
		<Form
			name="basic"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
		>
			<Form.Item
				label="Username"
				name="username"
				rules={[ { required: true, message: 'Please input your username!' } ]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Password"
				name="password"
				rules={[ { required: true, message: 'Please input your password!' } ]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
				<Checkbox>Remember me</Checkbox>
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

const DashboardMenu = () => {
	//  handleClick = e => {
	//   console.log('click ', e);
	// };

	// 1. კომპოზიცია უზრუნველყოფს კომპლექსური ინტერფეისის
	// მცირე ნაწილებად დაშლას და მის გაერთიანებას
	const handleClick = (e) => {
		console.log(e);
	};

	return (
		<Menu
			onClick={handleClick}
			style={{ width: 256 }}
			defaultSelectedKeys={[ '1' ]}
			defaultOpenKeys={[ 'sub1' ]}
			mode="inline"
		>
			<SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
				<Menu.ItemGroup key="g1" title="Item 1">
					<Menu.Item key="1">Option 1</Menu.Item>
					<Menu.Item key="2">Option 2</Menu.Item>
				</Menu.ItemGroup>
				<Menu.ItemGroup key="g2" title="Item 2">
					<Menu.Item key="3">Option 3</Menu.Item>
					<Menu.Item key="4">Option 4</Menu.Item>
				</Menu.ItemGroup>
			</SubMenu>
			<SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
				<Menu.Item key="5">Option 5</Menu.Item>
				<Menu.Item key="6">Option 6</Menu.Item>
				<SubMenu key="sub3" title="Submenu">
					<Menu.Item key="7">Option 7</Menu.Item>
					<Menu.Item key="8">Option 8</Menu.Item>
				</SubMenu>
			</SubMenu>
			<SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
				<Menu.Item key="9">Option 9</Menu.Item>
				<Menu.Item key="10">Option 10</Menu.Item>
				<Menu.Item key="11">Option 11</Menu.Item>
				<Menu.Item key="12">Option 12</Menu.Item>
			</SubMenu>
		</Menu>
	);
};

const HomeWork = () => {


 // 1. სთეითები დავამატოთ ინფორმაციის შესანახად.
 // შევინახოთ სახელი, გვარი, ასაკი

 // 2. ღილაკის კლიკზე დავასაბმითოთ ფორმა, კონსოლში გამოვიტანოთ დასაბმითებული
 // ინფორმაცია
 
 return (
  <div>
    <div>
      <label htmlFor=""> First name </label>
      <Input placeholder="Enter first name" />,
    </div>
    <div>
      <label htmlFor=""> Last name </label>
      <Input placeholder="Enter first name" />,
    </div>
    {/* დავამატოთ სელექტ კომპონენტი */}
    <div>
     <Button> Signup </Button>
    </div>
  </div>
 )
}

const App = () => {
 return (
  <div>
   {/* <DashboardMenu />
   <SignIn/> */}
   <HomeWork/>
  </div>
 )
}

export default App

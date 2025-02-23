'use client';
import { useState } from "react";
import { Layout, Menu, Dropdown, Button, Row, Col, Form,Input,Select,Table } from "antd";
import { DownOutlined, LogoutOutlined } from "@ant-design/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";

const { Option } = Select;
const { Header, Content } = Layout;

export default function page(){
  const router = useRouter();
  const handleMenuClick = (e) => {
    router.push(`/${e.key}`);
  };

  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState([]);

  const onFinish = (values) => {
    setDataSource([...dataSource, { key: dataSource.length, ...values }]);
    form.resetFields();
  };

  const columns = [
    { title: "Target", dataIndex: "target", key: "target" },
    { title: "Target Description", dataIndex: "target_description", key: "target_description" },
    { title: "Patien Number", dataIndex: "patien_number", key: "patien_number" },
    { title: "Contact", dataIndex: "contact", key: "contact" },
    { title: "ID Card", dataIndex: "id_card", key: "id_card" },

    { title: "Full Name", dataIndex: "full_name", key: "full_name" },
    { title: "Gender", dataIndex: "gender", key: "gender" },
    { title: "DOB", dataIndex: "dob", key: "dob" },
    { title: "Career", dataIndex: "career", key: "career" },
    { title: "National", dataIndex: "national", key: "national" },
    { title: "Place of Treatment", dataIndex: "pleace_of_treatment", key: "pleace_of_treatment"},

    { title: "Address", dataIndex: "address", key: "address" },
    { title: "Province", dataIndex: "province", key: "province" },
    { title: "District", dataIndex: "district", key: "district" },
    { title: "Village", dataIndex: "village", key: "village" },
    { title: "Unit", dataIndex: "unit", key: "unit" },
  ];


  const menuItems = [
    {
      key: "register",
      label: (
        <Dropdown
          menu={{
            items: [
              { key: "registers", label: "Register Member" },
              { key: "getbill", label: "Get Bill" },
              { key: "member", label: "List of Member" },
            ],
          }}
        >
          <span>Reports <DownOutlined /></span>
        </Dropdown>
      ),
    },
    {
      key: "hoard",
      label: "Hoard",
    },
    {
      key: "health",
      label: "Health Check",
    },
  ];

  const handleLogout = () => {
    router.push("/"); 
  };

  const handleHome = () => {
    router.push("/dashboard"); 
  };

    return (
        <Layout style={{ minHeight: "100vh" }}>
      {/* Header */}
      <Header style={{ display: "flex", alignItems: "center", background: "#003366", padding: "0 20px" }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", marginRight: 20 }}>
          <Image onClick={handleHome} src="/logo.png" alt="Logo" width={40} height={40} />
          <span style={{ color: "white", fontSize: "18px", fontWeight: "bold", marginLeft: 10 }}>HospitaL</span>
        </div>

        {/* Navigation Menu */}
        <Menu
          theme="dark"
          mode="horizontal"
          items={menuItems}
          onClick={handleMenuClick}
          style={{ flex: 1, background: "transparent", borderBottom: "none" }}
        />

        {/* Logout Button */}
        <Button type="primary" icon={<LogoutOutlined />} onClick={handleLogout}>
          Logout
        </Button>
      </Header>

      {/* Content */}
      <Content style={{ padding: "20px" }}>
      <div style={{ padding: '20px' }}>
      <Form form={form} layout="vertical">
      <Row gutter={16}>
          <Col span={4}>
            <Form.Item label="Target" name="target" rules={[{ required: true, message: 'Name is required' }]}>
            <Select>
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
                <Option value="option3">Option 3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="Target Description" name="target_description" rules={[{ required: true, message: 'Contact is required' }]}>
            <Select>
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
                <Option value="option3">Option 3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="Patien Number" name="patien_number" rules={[{ required: true, message: 'Village is required' }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="ID Card" name="id_card" rules={[{ required: true, message: 'District is required' }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="Contact" name="Contact" rules={[{ required: true, message: 'Contact is required' }]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={4}>
            <Form.Item label="Full Name" name="full_name" rules={[{ required: true, message: 'Name is required' }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="Gender" name="gender" rules={[{ required: true, message: 'Contact is required' }]}>
            <Select>
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
                <Option value="option3">Option 3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="DOB" name="dob" rules={[{ required: true, message: 'Village is required' }]}>
              <Input type="date" />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="Career" name="career" rules={[{ required: true, message: 'District is required' }]}>
            <Select>
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
                <Option value="option3">Option 3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="National" name="national" rules={[{ required: true, message: 'Province is required' }]}>
            <Select>
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
                <Option value="option3">Option 3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="Pleace of treatment" name="pleace_of_treatment" rules={[{ required: true, message: 'DOB is required' }]}>
              <Input type="date" />
            </Form.Item>
          </Col>
        </Row>


        <Row gutter={16}>
          <Col span={4}>
            <Form.Item label="Address" name="address" rules={[{ required: true, message: 'Name is required' }]}>
              <textarea ></textarea>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="Province" name="Province" rules={[{ required: true, message: 'Contact is required' }]}>
            <Select>
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
                <Option value="option3">Option 3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="District" name="District" rules={[{ required: true, message: 'Village is required' }]}>
            <Select>
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
                <Option value="option3">Option 3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="Village" name="Village" rules={[{ required: true, message: 'District is required' }]}>
            <Select>
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
                <Option value="option3">Option 3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="Unit" name="Unit" rules={[{ required: true, message: 'Province is required' }]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button type="primary" className="text-right" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      <Table
        columns={columns}
        dataSource={dataSource}
        rowKey="name"
        pagination={false}
      />
    </div>
      </Content>
    </Layout>
    )
}
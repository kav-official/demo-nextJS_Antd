'use client';
import { Layout, Menu, Dropdown, Space, Button } from "antd";
import { UserOutlined, SettingOutlined, DownOutlined, LogoutOutlined } from "@ant-design/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";

const { Header, Content } = Layout;

export default function page(){
  const router = useRouter();
  const handleMenuClick = (e) => {
    router.push(`/${e.key}`);
  };

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

    return (
        <Layout style={{ minHeight: "100vh" }}>
      {/* Header */}
      <Header style={{ display: "flex", alignItems: "center", background: "#003366", padding: "0 20px" }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", marginRight: 20 }}>
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
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
        <h2>Welcome to Dashboard</h2>
        <p>This is dashboard content.</p>
      </Content>
    </Layout>
    )
}
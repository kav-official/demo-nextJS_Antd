'use client';
import { useRouter } from "next/navigation";
import "./App.css"
import {useState,React} from "react";
import { Form, Input, Button, Checkbox, Card, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    const { username, password } = values;
    if (username === "admin" && password === "123") {
      setTimeout(() => router.push("/dashboard"), 1000);
    } else {
      // message.error("Invalid username or password!");
      alert('User/Password incorrect');
      setLoading(false);
    }
  };
  //   e.preventDefault();
  //   // Sample username & password check
  //   if (username === "admin" && password === "1234") {
  //     // alert("Good");
  //     router.push("/dashboard"); // Redirect to the dashboard
  //   } else {
  //     setError("Invalid username or password");
  //   }
  // };

  return (
    <div className="bg-cover" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      
      <Card style={{ width: 300 }}>
      <Image src="/next.svg" alt="Logo" width={100} height={100} style={{ marginBottom: 20 }} />
        <Form name="login-form" onFinish={onFinish}>
          <Form.Item name="username" rules={[{ required: true, message: "Please enter your username!" }]}>
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true, message: "Please enter your password!" }]}>
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

import { Button, Form, Input, InputNumber, Select, Spin, message } from "antd";
import { useState , useEffect} from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateEmployeePage = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [form] = Form.useForm();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);

      try {
        const response = await fetch(`${apiUrl}/api/categories`);

        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        } else {
          message.error("Veri getirme başarısız.");
        }
      } catch (error) {
        console.log("Veri hatası:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [apiUrl]);
  const onFinish = async (values) => {

  // Colors alanının boş olup olmadığını kontrol edin
  if (!values.colors || values.colors.trim() === '') {
    console.log('Colors field is empty');
    message.error("Lütfen en az 1 ürün rengi girin!");
    return;
  }
    const imgLinks = values.img.split("\n").map((link) => link.trim());
    const colors = values.colors.split("\n").map((link) => link.trim());
    const sizes = values.sizes.split("\n").map((link) => link.trim());
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/employees`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          price: {
            current: values.current,
            discount: values.discount,
          },
          colors,
          sizes,
          img: imgLinks,
        }),
      });

      if (response.ok) {
        message.success("Ürün başarıyla oluşturuldu.");
        form.resetFields();
      } else {
        message.error("Ürün oluşturulurken bir hata oluştu.");
      }
    } catch (error) {
      console.log("Ürün oluşturma hatası:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Spin spinning={loading}>
      <Form name="basic" layout="vertical" onFinish={onFinish} form={form}>
      
        <Form.Item
          label="Gemi Adamı İsmi&Soyismi"
          name="name"
          rules={[
            {
              required: true,
              message: "Lütfen ad soyad giriniz!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Gemi Adamı Kategorisi"
          name="category"
          rules={[
            {
              required: true,
              message: "Lütfen 1 kategori seçin!",
            },
          ]}
        >
          <Select>
            {categories.map((category) => (
              <Select.Option value={category._id} key={category._id}>
                {category.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Maaş"
          name="current"
          rules={[
            {
              required: true,
              message: "Lütfen maaş bilgisini giriniz!",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Gemi Adamı Bilgileri"
          name="description"
          rules={[
            {
              required: true,
              message: "Lütfen gemi adamı detay bilgilerini giriniz!",
            },
          ]}
        >
          <ReactQuill style={{
            backgroundColor: "white",
          }} />
        </Form.Item>

        

        <Form.Item
          label="Gemi Adamı Görselleri (Linkler)"
          name="img"
          rules={[
            {
              required: true,
              message: "Lütfen en az 4 gemi adamı görsel linki girin!",
            },
          ]}
        >
          <Input.TextArea 
          placeholder="Her bir görsel linkini yeni bir satıra yazın."
          autoSize={{ minRows: 4}}/>
        </Form.Item>

     


        

        <Button type="primary" htmlType="submit">
          Oluştur
        </Button> 
      </Form>
    </Spin>
  );
};

export default CreateEmployeePage;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Card, Modal, Input } from "antd";
import {
  EditOutlined,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  DeleteFilled,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "./Main.scss";

const style = { padding: "8px 0" };
const { Meta } = Card;

const Main = () => {
  const [cols, setCols] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editid, setEditId] = useState(0);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  useEffect(() => {
    const handleGet = async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          const sample = [];
          res.data.map((e) => {
            e.like = false;
            sample.push(e);
          });
          setCols(sample);
        })
        .catch((err) => console.log(err));
    };
    handleGet();
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (id) => {
    setIsModalVisible(false);
    setCols([
      ...cols,
      ((cols[id].name = inputs.name),
      (cols[id].email = inputs.email),
      (cols[id].phone = inputs.phone),
      (cols[id].website = inputs.website)),
    ]);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleLike = (i, like) => {
    setCols([...cols, (cols[i].like = !like)]);
  };

  const handleDelete = (i) => {
    setCols(cols.filter((row) => row.id !== i));
  };

  const modal = (id) => {
    return (
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={() => {
          handleOk(id);
        }}
        onCancel={handleCancel}
      >
        <div className="input-box">
          <label htmlFor="name">* Name:</label>
          <Input
            onChange={(event) => {
              event.preventDefault();
              setInputs({ ...inputs, [event.target.name]: event.target.value });
            }}
            id="name"
            name="name"
            value={inputs.name}
          />
        </div>
        <div className="input-box">
          <label htmlFor="email">* Email:</label>
          <Input
            onChange={(event) => {
              event.preventDefault();
              setInputs({ ...inputs, [event.target.name]: event.target.value });
            }}
            id="email"
            name="email"
            value={inputs.email}
          />
        </div>
        <div className="input-box">
          <label htmlFor="phone">* Phone:</label>
          <Input
            onChange={(event) => {
              event.preventDefault();
              setInputs({ ...inputs, [event.target.name]: event.target.value });
            }}
            id="phone"
            name="phone"
            value={inputs.phone}
          />
        </div>
        <div className="input-box">
          <label htmlFor="website">* Website:</label>
          <Input
            onChange={(event) => {
              event.preventDefault();
              setInputs({ ...inputs, [event.target.name]: event.target.value });
            }}
            id="website"
            name="website"
            value={inputs.website}
          />
        </div>
      </Modal>
    );
  };

  const data = cols.map((e, i) => {
    return (
      <Col className="gutter-row col" span={6} key={i}>
        <div style={style}>
          <Card
            className="card"
            style={{ width: 280 }}
            cover={
              <img
                alt="example"
                src={`https://avatars.dicebear.com/v2/avataaars/${e.username}.svg?options[mood][]=happy`}
              />
            }
            actions={[
              <div className="like">
                {e.like === false ? (
                  <HeartOutlined
                    onClick={() => {
                      handleLike(e.id - 1, e.like);
                    }}
                    key="like"
                  />
                ) : (
                  <HeartFilled
                    onClick={() => {
                      handleLike(e.id - 1, e.like);
                    }}
                    key="like"
                  />
                )}
              </div>,
              <div className="edit">
                <EditOutlined
                  onClick={() => {
                    showModal();
                    setEditId(e.id - 1);
                    setInputs({
                      name: e.name,
                      email: e.email,
                      phone: e.phone,
                      website: e.website,
                    });
                  }}
                  key="edit"
                />
              </div>,
              <div className="delete">
                <DeleteFilled
                  onClick={() => {
                    handleDelete(e.id);
                  }}
                  key="delete"
                />
              </div>,
            ]}
          >
            <Meta
              title={e.name}
              description={
                <>
                  <div className="card-icon-1">
                    <MailOutlined /> <p>{e.email} </p>
                  </div>
                  <div className="card-icon-1">
                    <PhoneOutlined /> <p> {e.phone}</p>
                  </div>
                  <div className="card-icon-1">
                    <GlobalOutlined /> <p> {"http://" + e.website}</p>
                  </div>
                </>
              }
            />
          </Card>
        </div>
      </Col>
    );
  });

  return (
    <div className="main">
      <Row gutter={[16, 24]}>{data}</Row>
      {modal(editid)}
    </div>
  );
};

export default Main;

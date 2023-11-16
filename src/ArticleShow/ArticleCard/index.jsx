import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { marked } from 'marked';
import { useTitle, useRequest } from 'ahooks';
import Mock from 'mockjs';
import { Card, Space, Col, Row, Skeleton } from 'antd';
import { Divider, Breadcrumb, Layout, Menu, theme } from 'antd';
import axios from "axios";


// function getArticle() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(Mock.mock({
//         "list|8": [
//           {
//             "id": '@increment(1)',
//             "title": "@ctitle",
//             "content": "@cparagraph",
//             "add_time": "@date(yyyy-MM-dd hh:mm:ss)"
//           }
//         ]
//       }))
//     }, 1000)
//   });
// }

const baseURL = "http://127.0.0.1:8000/articles";


async function getArticle() {
    return new Promise((resolve) => {
        axios.get(baseURL).then((res) => {
            resolve(res.data)
        })
  });
}

const ArticleCard = (props) => {
    const { navigate } = props
    const { data, error, loading } = useRequest(() => getArticle());
    const data2 = [
        { key: 1, value: 10 },
        { key: 2, value: 20 },
        { key: 3, value: 30 },
    ];

    if (error) {
        return <div>failed to load</div>
    }

    if (loading) {
        return (
            <>
                <Cardz loading={loading} />
                <Cardz loading={loading} />
                <Cardz loading={loading} />
                <Cardz loading={loading} />
                <Cardz loading={loading} />
                <Cardz loading={loading} />
                <Cardz loading={loading} />
                <Cardz loading={loading} />
            </>
        )
    }

    console.log('data  zzz', data)

    return (
        <>
            <Divider dashed />
                <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                    {data.map(({ id, title, discribe }) => {
                        return (
                            <>
                                <Cardz id={id}  title={title} content={discribe} bordered={true} loading={loading} navigate={navigate} />
                            </>
                        )
                    })}
            </Space>
            <Divider dashed />
        </>
    )
}

export default ArticleCard

function seeArticle(navigate, id) {
    axios.get(baseURL+'/'+id).then((res) => {
        navigate('/articles/' + id)
        // console.log('page data', res.data)
    })
}

const Cardz = (props) => {
    // const { navigate } = props
    const navigate = useNavigate();

    const { loading } = props
    return (
        <>
            <Row>
                <Col span={12} offset={6}>
                    <Card
                        title={props.title}
                        // extra={<a href="#">More</a>}
                        bordered={true}
                        hoverable={true}
                        loading={loading}
                        style={{
                        }}
                        headStyle={{
                            textAlign: "center",
                            fontWeight: "bolder",
                            fontSize: "1.2rem",
                        }}
                        onClick={() => {
                            // console.log("click ", props.title, "props", props, "......")
                        // navigate("/articles/"+props.id)
                            seeArticle(navigate, props.id)
                        }}
                    >
                        <p>{props.content}</p>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
import React, { Component } from 'react';
import Classification from '../Classification';
import Archive from '../Archive';
import About from '../About'
import ArticleShow from '../ArticleShow'
import Admin from '../Admin'
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Divider, Breadcrumb, Layout, Menu, theme } from 'antd';
import ArticlePage from '../ArticleShow/ArticlePage'
import Logo from '../logo192.png'
import ArticlesListView from '../Admin/ArticlesListView'
const { Header, Content, Footer } = Layout;



const titleArray = ["首页", "分类", "归档", "关于", "登录"]



const Home = (props) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const navigate = useNavigate();

    const onClick = (e) => {
        // console.log('click ', e);
        if (e.key == '1') {
            navigate('/');
        } else if (e.key == '2') {
            navigate('/classification');
        } else if (e.key == '3') {
            navigate('/archive');
        } else if (e.key == '4') {
            navigate('/about');
        } else if (e.key == '5') {
            navigate('/admin')
        }
    };

    return (
        <Layout className="layout">
        <Header
            style={{
            display: 'flex',
            alignItems: 'center',
            }}
        >
            <div className="demo-logo" />
            <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            items={ titleArray.map((title, index) => {
                const key = index + 1;
                return {
                key,
                label: title,
                };
            })}
            onClick={onClick}
            />
        </Header>
        <Content
            style={{
            padding: '0 50px',
            }}
        >
            <div
            className="site-layout-content"
            style={{
                background: colorBgContainer,
            }}
            >
            <Routes>
                <Route path="/" element={<ArticleShow />} />
                <Route path="/classification" element={<Classification />} />
                <Route path="/archive" element={<Archive />} />
                <Route path="/about" element={<About />} />
                {/* <Route path="/admin" element={<Admin />} /> */}
                <Route path="/articles/:id" element={<ArticlePage name="zyh" />} />
                
            </Routes>
            </div>
        </Content>
        <Footer
            style={{
            textAlign: 'center',
            }}
        >
            Z-Blog Design ©2023 Created by Rainchill
        </Footer>
        </Layout>
    );
};
export default Home;


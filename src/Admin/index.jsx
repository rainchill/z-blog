import React, { useState } from 'react';
import {
	AppstoreOutlined,
	ContainerOutlined,
	DesktopOutlined,
	MailOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	PieChartOutlined,
	SettingOutlined,
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined
} from '@ant-design/icons';
import { Button, message, Upload, Avatar, List, Radio, Space, Row, Col, Table, Layout, Menu, theme, Divider } from 'antd';
import axios from "axios";
import { Route, Routes, useNavigate } from 'react-router-dom';
import ArticlesListView from './ArticlesListView'
import MenuBarView from './MenuBarView'
import UploadView from './UploadView'


// const Admin = () => {

//     return (
// 		<>
// 			<MenuBarView />

//         </>
//     )
// }




const { Header, Content, Footer, Sider } = Layout;
const Admin = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	return (
		<>
			{/* <Divider dashed /> */}
			<Layout>
			<Sider
					breakpoint="lg"
					collapsedWidth="0"
					onBreakpoint={(broken) => {
						console.log(broken);
					}}
					onCollapse={(collapsed, type) => {
						console.log(collapsed, type);
					}}
			>
				<div className="demo-logo-vertical" />
				<Divider dashed />
				<MenuBarView
					theme="dark"
					mode="inline"
					defaultSelectedKeys={['1']}
				/>
				{/* <MenuBarView mode="inline" theme="dark" /> */}
			</Sider>
			<Layout>
				{/* <Header
				style={{
					padding: 0,
					background: colorBgContainer,
				}}
				/> */}
				<Content
				style={{
							margin: '24px 16px 0',
							padding: '0 50px',
				}}
				>
				<div
					style={{
					padding: 24,
					minHeight: 360,
					background: colorBgContainer,
					}}
				>
					<Routes>
						<Route path="/" element={<UploadView />} />
						<Route path="/uploadfile" element={<UploadView />} />
						<Route path="/articleslist" element={<ArticlesListView />} />
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
			</Layout>
		</>
	);
};

export default Admin



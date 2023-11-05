import React, { Component } from 'react';
import Home from './Home';
import Classification from './Classification';
import Archive from './Archive';
import About from './About'
import ArticleShow from './ArticleShow'
import Admin from './Admin'
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Divider, Breadcrumb, Layout, Menu, theme } from 'antd';
import ArticlePage from './ArticleShow/ArticlePage'
import Logo from './logo192.png'
import ArticlesListView from './Admin/ArticlesListView'
const { Header, Content, Footer } = Layout;



const titleArray = ["首页", "分类", "归档", "关于", "登录"]



const App = (props) => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	// const navigate = useNavigate();

	// const onClick = (e) => {
	// 	// console.log('click ', e);
	// 	if (e.key == '1') {
	// 	navigate('/');
	// 	} else if (e.key == '2') {
	// 	navigate('/classification');
	// 	} else if (e.key == '3') {
	// 	navigate('/archive');
	// 	} else if (e.key == '4') {
	// 	navigate('/about');
	// 	} else if (e.key == '5') {
	// 	navigate('/admin')
	// 	}
	// };

	return (
		<>
			<Routes>
				<Route path="/admin/*" element={<Admin />} />
				<Route path="/*" element={<Home />} />
            </Routes>
		</>
	);
};
export default App;


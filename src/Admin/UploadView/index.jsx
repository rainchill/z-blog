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
	UploadOutlined
} from '@ant-design/icons';
import { Button, message, Upload, Avatar, List, Radio, Space, Row, Col, Table, Menu, Divider } from 'antd';
import axios from "axios";
import './index.css'
import upload_show from '../../Public/upload_files_show.jpg'
import {MathJaxContext, MathJax} from 'better-react-mathjax'


const props = {
	name: 'file',
	action: 'http://127.0.0.1:8000/api/admin/uploadfile',
	onChange(info) {
		if (info.file.status !== 'uploading') {
		console.log("uploading", info.file, info.fileList);
		}
		if (info.file.status === 'done') {
		message.success(`${info.file.name} file uploaded successfully`);
		} else if (info.file.status === 'error') {
		message.error(`${info.file.name} file upload failed.`);
		}
	},
};

const UploadView = () => (
	<>
		<Space align="center" direction="vertical" style={{ width: '100%' }}>

			<h2>{"不知道放些什么 二次元镇楼！！！"}</h2>
			<img src={upload_show} />
			<h3>此处上传markdown文件</h3>
			<Space align="center" direction="horizontal" style={{ width: '100%' }}>
				<Upload {...props}>
					<Button icon={<UploadOutlined />}>Click to Upload</Button>
				</Upload>
			</Space>
		</Space>
	</>
);

export default UploadView

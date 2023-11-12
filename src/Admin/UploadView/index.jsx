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
import { Button, message, Upload, Avatar, List, Radio, Space, Row, Col, Table, Menu } from 'antd';
import axios from "axios";


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
	<Upload {...props}>
		<Button icon={<UploadOutlined />}>Click to Upload</Button>
	</Upload>
);

export default UploadView

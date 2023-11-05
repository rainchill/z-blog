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

const columns = [
	{
		title: 'Title',
		dataIndex: 'title',
	},
	{
		title: 'Date',
		dataIndex: 'date',
	}
];
const data = [];
for (let i = 0; i < 46; i++) {
	data.push({
		key: i,
		title: `Edward King ${i}`,
		date: 32,
		address: `London, Park Lane no. ${i}`,
	});
}

const ArticlesListView = () => {
	const [selectedRowKeys, setSelectedRowKeys] = useState([]);
	const [loading, setLoading] = useState(false);
	const start = () => {
		setLoading(true);
		// ajax request after empty completing
		setTimeout(() => {
		setSelectedRowKeys([]);
		setLoading(false);
		}, 1000);
	};
	const onSelectChange = (newSelectedRowKeys) => {
		console.log('selectedRowKeys changed: ', newSelectedRowKeys);
		setSelectedRowKeys(newSelectedRowKeys);
	};
	const rowSelection = {
		selectedRowKeys,
		onChange: onSelectChange,
	};
	const hasSelected = selectedRowKeys.length > 0;
	return (
		<div>
		<div
			style={{
			marginBottom: 16,
			}}
		>
			<Button type="primary" onClick={start} disabled={!hasSelected} loading={loading} danger>
				Delete
			</Button>
			<span
			style={{
				marginLeft: 8,
			}}
			>
			{hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
			</span>
		</div>
		<Table rowSelection={rowSelection} columns={columns} dataSource={data} />
		</div>
	);
};

export default ArticlesListView
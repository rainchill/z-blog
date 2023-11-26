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
import { useTitle, useRequest } from 'ahooks';
import axios from "axios";

const columns = [
	{
		title: 'Title',
		dataIndex: 'title',
	},
	{
		title: 'Date',
		dataIndex: 'date',
	},
	{
		title: 'Tags',
		dataIndex: 'tags'
	}
];
// const data = [];
// for (let i = 0; i < 46; i++) {
// 	data.push({
// 		key: i,
// 		title: `Edward King ${i}`,
// 		date: 32,
// 		address: `London, Park Lane no. ${i}`,
// 	});
// }
const baseURL = "http://127.0.0.1:8000/api/admin/";

async function getAdminArticleslist() {
    return new Promise((resolve) => {
        axios.get(baseURL+'articleslist').then((res) => {
			// console.log("--------res.data",res.data)
			const data = []
			for (let i = 0; i < res.data.length; i++) {
				data.push({
					key: i,
					title: res.data[i].ztitle,
					date: res.data[i].zdate,
					// address: `London, Park Lane no. ${i}`,
				});
			}
			console.log('in data', data)
            resolve(data)
        })
  });
}


const ArticlesListView = () => {
	const [flag, setFlag] = useState(false);
	const [selectedRowKeys, setSelectedRowKeys] = useState([]);
	const [loading3, setLoading] = useState(false);
	const { data, error, loading } = useRequest(() => getAdminArticleslist(), {
		refreshDeps: [flag]
	});
	const start = () => {
		setLoading(true);
		// ajax request after empty completing
		var arr = selectedRowKeys.map(index => {
			return data[index].title
		})
		console.log("arr", arr)
		axios.post(baseURL + 'delete', {
			deleteList: arr
		}).then(function (response) {
			console.log('success delete');
			setFlag(!flag)
			// console.log('flag', flag)
			setLoading(false);
			setSelectedRowKeys([])
		})
		// setTimeout(() => {
		// setLoading(false);
		// }, 1000);
	};
	// console.log('data222',data)
	const onSelectChange = (newSelectedRowKeys) => {
		console.log('selectedRowKeys changed: ', newSelectedRowKeys);
		setSelectedRowKeys(newSelectedRowKeys);
	};
	const rowSelection = {
		selectedRowKeys,
		onChange: onSelectChange,
	};
	const hasSelected = selectedRowKeys.length > 0;
	// if(loading)
	// 	return <>loading... ...</>
	return (
		<div>
		<div
			style={{
			marginBottom: 16,
			}}
		>
			<Button type="primary" onClick={start} disabled={!hasSelected} loading={loading3} danger>
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
			<Table rowSelection={rowSelection} columns={columns} dataSource={data}>
			
			</Table>
		</div>
	);
};

export default ArticlesListView
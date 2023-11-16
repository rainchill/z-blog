import React, { Component, useState } from 'react';
import { marked } from 'marked';
import { useTitle, useRequest } from 'ahooks';
import { useParams } from "react-router-dom";
import Mock from 'mockjs';
import { Card, Space, Col, Row, Skeleton } from 'antd';
import { Divider, Breadcrumb, Layout, Menu, theme } from 'antd';
import axios from "axios";


// function seeArticle(id) {
//     axios.get(baseURL+'/'+id).then((res) => {
//         navigate('/articles/' + id)
//         console.log('page data', res.data)
//     })
// }

const baseURL = "http://127.0.0.1:8000/articles";

async function seeArticle(id) {
    return new Promise((resolve) => {
        // console.log("here id222", id)
        axios.get(baseURL+'/'+id).then((res) => {
            // navigate('/articles/' + id)
            // console.log('page2 data', res.data)
            // console.log("here url222", baseURL+'/'+id)
            resolve(res.data)
        })
  });
}

async function getArticle() {
    return new Promise((resolve) => {
        axios.get(baseURL).then((res) => {
            resolve(res.data)
        })
  });
}

marked.setOptions({
    renderer: new marked.Renderer(),
    // highlight: function (code) {
    //   return hljs.highlightAuto(code).value;
    // },  
    gfm: true, // 允许 Git Hub标准的markdown.
    pedantic: false, // 不纠正原始模型任何的不良行为和错误（默认为false）
    sanitize: false, // 对输出进行过滤（清理），将忽略任何已经输入的html代码（标签）
    tables: true, // 允许支持表格语法（该选项要求 gfm 为true）
    breaks: false, // 允许回车换行（该选项要求 gfm 为true）
    smartLists: true, // 使用比原生markdown更时髦的列表
    smartypants: false, // 使用更为时髦的标点
  })


const ArticlePage = (props) => {
    const { id } = useParams();
    const { data, error, loading } = useRequest(() => {
        return seeArticle(id)
    });
    if (loading) {
        return(
            <>
                <Skeleton />
            </>
        )
    }
    const html = marked(data.content)
    const str = "hello world"
    // console.log('in', data)
    return (
        <>
            <div className="show-html" dangerouslySetInnerHTML={{ __html: html }}></div>   
        </>
    )
}

export default ArticlePage
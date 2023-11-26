import React, { Component, useState, useEffect, useRef } from 'react';
import { marked } from 'marked';
import { useTitle, useRequest } from 'ahooks';
import { useParams } from "react-router-dom";
import Mock from 'mockjs';
import { Card, Space, Col, Row, Skeleton } from 'antd';
import { Divider, Breadcrumb, Layout, Menu, theme } from 'antd';
import axios from "axios";
import s from './html.css'
import hljs from 'highlight.js';
import "highlight.js/styles/github.css";
import {MathJaxContext, MathJax} from 'better-react-mathjax'

const baseURL = "http://127.0.0.1:8000/articles";

async function seeArticle(id) {
    return new Promise((resolve) => {
        axios.get(baseURL+'/'+id).then((res) => {
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
// marked.setOptions({
 
//     renderer: new marked.Renderer(),
//     gfm: true,
//     pedantic: false,
//     sanitize: false,
//     tables: true,
//     breaks: true,
//     smartLists: true,
//     smartypants: true,
//     highlight: function (code) {
//             return hljs.highlightAuto(code).value;
//     }
//   });

// marked.setOptions({
//     renderer: new marked.Renderer(),
//     // highlight: function (code) {
//     //   return hljs.highlightAuto(code).value;
//     // },
//     gfm: true, // 允许 Git Hub标准的markdown.
//     pedantic: false, // 不纠正原始模型任何的不良行为和错误（默认为false）
//     sanitize: false, // 对输出进行过滤（清理），将忽略任何已经输入的html代码（标签）
//     tables: true, // 允许支持表格语法（该选项要求 gfm 为true）
//     breaks: false, // 允许回车换行（该选项要求 gfm 为true）
//     smartLists: true, // 使用比原生markdown更时髦的列表
//     smartypants: false, // 使用更为时髦的标点
//   })


const ArticlePage = (props) => {
    useEffect(() => {
        hljs.highlightAll();
    });
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
    var finalData = data.content.replace(/(?<!\\)\$(.*)\$/g, '\\\\($1\\\\)')
    const html = marked(finalData)
    const str = "hello world"
    // console.log('in', data)
    return (
        <>
            <Row>
                <Col span={12} offset={6}>
                    <MathJaxContext>
                        <MathJax>
                            <div className={s} dangerouslySetInnerHTML={{ __html: html }}></div>
                        </MathJax>
                    </MathJaxContext>
                </Col>
            </Row>
        </>
    )
}

export default ArticlePage
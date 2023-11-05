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
        console.log("here id222", id)
        axios.get(baseURL+'/'+id).then((res) => {
            // navigate('/articles/' + id)
            console.log('page2 data', res.data)
            console.log("here url222", baseURL+'/'+id)
            resolve(res.data)
        })
  });
}

async function getArticle() {
    return new Promise((resolve) => {
        axios.get(baseURL).then((res) => {
            resolve(res.data.list)
        })
  });
}

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
    console.log('in', data)

    return (
        <>
            <h1>{data.title}</h1>
            <p>{data.content}</p>
            <br />
        </>
    )
}

export default ArticlePage
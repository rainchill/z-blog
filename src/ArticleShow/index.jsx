import React, { Component } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { marked } from 'marked';
import { useTitle, useRequest } from 'ahooks';
import Mock from 'mockjs';
import { Card, Space, Col, Row, Skeleton, Pagination } from 'antd';
import { Divider, Breadcrumb, Layout, Menu, theme } from 'antd';
import ArticleCard from './ArticleCard'
import ButtonView from './ButtonView'
import ArticlePage from './ArticlePage'
import Home from '../Home';
import Classification from '../Classification';

const ZButton = () => <Pagination defaultCurrent={1} total={50} />;

const ArticlesPreview = (props) => {
    const { navigate } = props

    return (
        <>
            <ArticleCard navigate={navigate}/>
            <ButtonView />
        </>
    )
}

const ArticleShow = ({ }) => {
    const navigate = useNavigate();

    return (
        <>
            <Routes>
                <Route path="/" element={<ArticlesPreview navigate={navigate} />} />
            </Routes>
        </>
    )
}

export default ArticleShow




// export default class ArticleShow extends Component {
//   getMarkdownText() {
//     var rawMarkup = marked.parse("# ---This is _Markdown_.--\n \
//     sadadasda你好世界dasd");
//     return { __html: rawMarkup };
//   }

//   render() {
//     return <div dangerouslySetInnerHTML={this.getMarkdownText()} />;
//   }
// }

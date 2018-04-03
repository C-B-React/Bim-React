import React, {Component} from 'react';
import BoxTitle from 'bim-ui/BoxTitle';
import ImageTitle from 'bim-ui/ImageItem';
import ImageItem from "bim-ui/ImageItem/ImageItem";

const styles = {
    container: {
        width: 600,
        border: "1px solid #ccc",
        padding: "20px 0 100px 10px"
    },
    item: {
        display: "inline-block",
        width: "25%",
    }
};

const data = {
    title: "管理仪表盘",
    items: [
        {
            title: "综合分析",
            url: "resource/images/综合分析.png"
        }, {
            title: "WBS总览",
            url: "resource/images/WBS总览.png"
        }, {
            title: "KPI维护",
            url: "resource/images/KPI维护.png"
        }
    ]
};

export default class BoxTitlePage extends Component {
    render() {
        return <div style={styles.container}>
            <BoxTitle title="管理仪表盘"/>
            <div style={{}}>
                {
                    data.items.map((item) => (
                        <ImageItem url={item.url} title={item.title} style={styles.item} imgStyle={{width:50}}/>
                    ))
                }
            </div>
        </div>
    }
}
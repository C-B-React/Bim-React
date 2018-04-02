import React, {Component} from 'react';
import Code from '../components/Code';
import Example from '../components/Example';
import List from 'bim-ui/List';
import WhiteSpace from 'bim-ui/WhiteSpace';

const styles = {
    container: {
        backgroundColor: "#f2f2f2",
        maxWidth: 600,
        border: "1px solid #ddd",
        paddingBottom: 80
    }
};

const Avatar = () => (
    <img src="resource/images/defaultAvatar.png" style={{clear: "both", float: "left", width: 80}}/>
);

export default class ListDemo extends Component {
    render() {
        return <div className="content">
            <h1>List</h1>
            <div>
                <Code>
                    {`<List
content={string}
extra={enum}
arrow={string}               // 'up|down|horizontal',default is 'horizontal'
onClick={func}                //  arrow click callback
contentStyle={object}         //override the inline-block
contentClassName={string}    //
extraStyle={object}         //
extraClassName={string}     //
/>`}
                </Code>
                <h2 className="subhead">Example</h2>
                <Example>
                    <div style={styles.container}>
                        <List items={[
                            {content: "头像", extra: <Avatar/>}]
                        }/>
                        <WhiteSpace color="#f2f2f2" size="xl"/>
                        <List items={[{
                            content: "姓名",
                            extra: "周树超"
                        }, {
                            content: "手机",
                            extra: '13544554488'
                        }, {
                            content: "邮箱",
                            extra: "zhoushuchao@cjhdj.com   "
                        }]}/>
                        <WhiteSpace color="#f2f2f2" height={20}/>
                        <List items={[{
                            content: "部门",
                            extra: "安全管理"
                        }, {
                            content: "职务",
                            extra: "经理"
                        }]}/>
                        <WhiteSpace height={20}/>
                        <List items={[{
                            content: "设置"
                        }]}/>
                    </div>
                </Example>
                <Code>
                    {
                        '                    <div style={styles.container}>\n' +
                        '                        <List items={[\n' +
                        '                            {content: "头像", extra: ""}]\n' +
                        '                        }/>\n' +
                        '                        <WhiteSpace color="#f2f2f2" size="xl"/>\n' +
                        '                        <List items={[{\n' +
                        '                            content: "姓名",\n' +
                        '                            extra: "周树超"\n' +
                        '                        }, {\n' +
                        '                            content: "手机",\n' +
                        '                            extra: \'13544554488\'\n' +
                        '                        }, {\n' +
                        '                            content: "邮箱",\n' +
                        '                            extra: "zhoushuchao@cjhdj.com   "\n' +
                        '                        }]}/>\n' +
                        '                        <WhiteSpace color="#f2f2f2" height={20}/>\n' +
                        '                        <List items={[{\n' +
                        '                            content: "部门",\n' +
                        '                            extra: "安全管理"\n' +
                        '                        }, {\n' +
                        '                            content: "职务",\n' +
                        '                            extra: "经理"\n' +
                        '                        }]}/>\n' +
                        '                        <WhiteSpace height={20}/>\n' +
                        '                        <List items={[{\n' +
                        '                            content: "设置"\n' +
                        '                        }]}/>\n' +
                        '                    </div>'
                    }
                </Code>
            </div>
        </div>
    }
}
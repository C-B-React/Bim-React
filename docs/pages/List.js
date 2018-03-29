import React, {Component} from 'react';
import Code from '../components/Code';
import Example from '../components/Example';
import List from 'bim-ui/List';

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
                    <List content="姓名" extra="周树超"/>
                </Example>
                <Code>
                    {
                        '<List content="姓名" extra="周树超" />'
                    }
                </Code>
            </div>
        </div>
    }
}
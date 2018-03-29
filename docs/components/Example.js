import React from 'react';
import classnames from 'classnames';
import '../css/docs';

const Example = (props) => (
    <div className={classnames('docs-example', props.className)}>
        {props.children}
    </div>
);

export default Example;

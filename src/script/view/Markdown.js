import React from 'react';
import marked from 'marked';
import { ClassComponent } from '../module/container/Application';
marked.setOptions({
  sanitize: true
});
const Markdown = (props) => <div dangerouslySetInnerHTML={ { '__html': marked(props.source || '# test') } } />;
export default ClassComponent()(Markdown);
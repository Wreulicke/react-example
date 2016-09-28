import React from 'react';
import TextField from 'material-ui/TextField';
import { List, ListItem } from 'material-ui/List';

import ActionGrade from 'material-ui/svg-icons/action/grade';
import { pinkA200 } from 'material-ui/styles/colors';
import { ClassComponent } from '../module/container/Application';
import enter from '../module/functions/onEnter';
import handler from '../module/functions/handler';
const map = Function.prototype.call.bind(Array.prototype.map);

class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {
        name: ''
      },
      tasks: [{
        name: 'init'
      }]
    };
  }

  addTask() {
    const newState = {
      input: {
        name: ''
      },
      tasks: this.state.tasks.concat({
        name: this.state.input.name
      })
    };
    this.setState(newState);
  }

  render() {
    const TaskList = map(this.state.tasks, (task, i) => {
      return (<ListItem
                        key={ i }
                        leftIcon={ <ActionGrade color={ pinkA200 } /> }>
                { task.name }
              </ListItem>);
    });
    const trans = (v) => {
      return {
        name: v
      };
    };
    return (
      <div>
        <TextField
                   hintText="input task name"
                   value={ this.state.input.name }
                   onKeyDown={ enter(::this.addTask) }
                   onChange={ this::handler('input', trans) } />
        <List>
          { TaskList }
        </List>
      </div>
      );
  }
}

export default ClassComponent(TodoApp);

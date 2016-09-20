import React from 'react';
import TextField from 'material-ui/TextField';
import { List, ListItem } from 'material-ui/List';

import ActionGrade from 'material-ui/svg-icons/action/grade';
import { pinkA200 } from 'material-ui/styles/colors';
const map = Function.prototype.call.bind(Array.prototype.map);

class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [{
        name: 'init'
      }]
    };
  }

  addTask(e) {
    if (e.keyCode && e.keyCode == 13) {
      const newState = {
        tasks: this.state.tasks.concat({
          name: e.target.value
        })
      };
      this.setState(newState);
      e.target.value = '';
    }
  }

  render() {
    const TaskList = map(this.state.tasks, (task, i) => {
      return (<ListItem
                        key={ i }
                        leftIcon={ <ActionGrade color={ pinkA200 } /> }>
                { task.name }
              </ListItem>);
    });
    return (
      <div>
        <TextField
                   hintText="input task name"
                   onKeyDown={ ::this.addTask } />
        <List>
          { TaskList }
        </List>
      </div>
      );
  }
}

export default TodoApp;

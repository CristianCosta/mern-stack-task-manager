import React, { Component } from 'react';

class CurrentTasksForm extends Component {

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Responsible</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.collectionTasks.map(task => {
                            return (
                                <tr key={task._id}>
                                    <td>{task.title}</td>
                                    <td>{task.description}</td>
                                    <td>{task.priority}</td>
                                    <td>{task.responsible}</td>
                                    <td>
                                        <button className="btn" onClick={() => this.props.editTask(task._id)}>
                                            <i className="material-icons">edit</i>
                                        </button>
                                        <button className="btn" onClick={() => this.props.deleteTask(task._id)}>
                                            <i className="material-icons">delete</i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        );
    }
}

export default CurrentTasksForm;
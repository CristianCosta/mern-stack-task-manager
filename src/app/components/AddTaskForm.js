import React, { Component } from 'react';

class AddTaskForm extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <form onSubmit={this.props.addTask}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input name="title" onChange={this.props.handleChange} type="text" placeholder="Task title" value={this.props.title}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input name="description" onChange={this.props.handleChange} type="text" placeholder="Task description" value={this.props.description}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input name="priority" onChange={this.props.handleChange} type="text" placeholder="Task priority" value={this.props.priority}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input name="responsible" onChange={this.props.handleChange} type="text" placeholder="Task responsible" value={this.props.responsible}/>
                            </div>
                        </div>
                        <button type="submit" className="btn">
                            Save
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddTaskForm;
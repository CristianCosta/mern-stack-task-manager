import React, { Component } from 'react';
import Navigation from './components/Navigation';
import AddTaskForm from './components/AddTaskForm';
import CurrentTasksForm from './components/CurrentTasksForm';

class App extends Component {

    constructor() {
        super();
        this.state = {
            appTitle: 'MERN Stack - Task Manager',
            numberOfTask: 0,
            collectionTasks: [],
            //taskState: {
                _id: '',
                title: '',
                description: '',
                priority: '',
                responsible: ''
            //}
        };
        this.addTask = this.addTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.editTask = this.editTask.bind(this);
    }

    componentDidMount() {
        this.getTasks();
    }

    getTasks() {
        fetch('/api/tasks')
        .then(response => response.json())
        .then(data => {
            this.setState({
                numberOfTask: data.length,
                collectionTasks: data
            });   
        });
    }

    addTask(event) {
        if (this.state._id) {
            fetch('/api/tasks/' + this.state._id, {
                method: 'PUT',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                M.toast({html: data.status});
                this.setState({
                    //taskState: {
                        _id: '',
                        title: '',
                        description: '',
                        priority: '',
                        responsible: ''
                    //}
                });
                this.getTasks();
            })
            .catch(error => console.error(error));
        } else {
            fetch('/api/tasks', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                M.toast({html: data.status});
                this.setState({
                    //taskState: {
                        title: '',
                        description: '',
                        priority: '',
                        responsible: ''
                    //}
                });
                this.getTasks();
            })
            .catch(error => console.error(error));
        }
        event.preventDefault();
    }

    handleChange(event) {
        const {  name, value } = event.target;
        this.setState({
            //taskState: {
                [name]: value
            //}
        });
    }

    deleteTask(taskId) {
        fetch('/api/tasks/' + taskId, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            M.toast({html: data.status});
            this.getTasks();
        })
        .catch(error => console.error(error));;
    }

    editTask(id) {
        fetch('/api/tasks/' + id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'                
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                //taskState: {
                    _id: data._id,
                    title: data.title,
                    description: data.description,
                    priority: data.priority,
                    responsible: data.responsible
                //}
            });
        })
        .catch(error => console.error(error));
    }

    render() {
        return (
            <div>
                <Navigation appTitle={this.state.appTitle} numberOfTask={this.state.numberOfTask} />
                <div className="container">
                    <div className="row">
                        <div className="col s4">
                            <AddTaskForm 
                                title={this.state.title}
                                description={this.state.description}
                                priority={this.state.priority}
                                responsible={this.state.responsible} 
                                addTask={this.addTask} 
                                handleChange={this.handleChange} />
                        </div>
                        <div className="col s8">
                            <CurrentTasksForm 
                                collectionTasks={this.state.collectionTasks} 
                                deleteTask={this.deleteTask}
                                editTask={this.editTask} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
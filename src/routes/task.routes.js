const express = require('express');
const router = express.Router();
const task = require('../models/task');

router.get('/', async (request, response) => {
    const tasks = await task.find();
    response.json(tasks);
});

router.get('/:id', async (request, response) => {
    const retrievedTask = await task.findById(request.params.id);
    response.json(retrievedTask);
});

router.post('/', async (request, response) => {
    const { title, description, priority, responsible } = request.body;
    const newTask = new task({
        title: title,
        description: description,
        priority: priority,
        responsible : responsible
    });
    await newTask.save();
    response.json({
        status: 'Task Saved'
    });
});

router.put('/:id', async (request, response) => {
    const { title, description, priority, responsible } = request.body;
    const newTask = {
        title: title,
        description: description,
        priority: priority,
        responsible : responsible
    };
    await task.findOneAndUpdate(request.params.id, newTask);
    response.json({
        status: 'Task Updated'
    });
});

router.delete('/:id', async (request, response) => {
    await task.findByIdAndDelete(request.params.id);
    response.json({
        status: 'Task Deleted'
    });
});

module.exports = router;
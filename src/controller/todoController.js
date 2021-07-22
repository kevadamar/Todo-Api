const { Todo } = require('../../models');

module.exports.getTodos = async (req, res) => {
  try {
    let todos, countTodos;
    const { rows, count } = await Todo.findAndCountAll({
      where: { isDeleted: false },
      order: [['createdAt', 'DESC']],
    });
    todos = rows;
    countTodos = count;

    res.status(200).send({
      status: 200,
      message: 'Successfully',
      countData: countTodos,
      data: todos,
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: error,
    });
  }
};
module.exports.postTodo = async (req, res) => {
  try {
    const resultCreated = await Todo.create(req.body);

    res.status(201).send({
      status: 201,
      message: 'Successfully Created!',
      data: resultCreated,
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: error,
    });
  }
};
module.exports.updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const action = req.params.action;
    let payload = req.body;
    console.log(req.body, action);

    if (action === 'done') {
      payload = { isDone: true };
    }

    if (action === 'notDone') {
      payload = { isDone: false };
    }

    if (action === 'delete') {
      payload = { isDeleted: true };
    }

    const resultUpdated = await Todo.update(payload, { where: { id } });

    res.status(200).send({
      status: 200,
      message: 'Successfully Updated!',
      data: resultUpdated,
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: error,
    });
  }
};

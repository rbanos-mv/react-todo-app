import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { todo, handleChangeProps, deleteTodoProps } = this.props;
    const { title, completed, id } = todo;

    return (
      <li key={id}>
        <input type="checkbox" checked={completed} onChange={() => handleChangeProps(id)} />
        <button type="button" onClick={() => deleteTodoProps(id)}>
          Delete
        </button>
        {' '}
        {title}
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};

export default TodoItem;

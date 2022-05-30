import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { todo } = this.props;
    const { title, completed, id } = todo;

    return (
      <li key={id}>
        <input type="checkbox" checked={completed} />
        {' '}
        {title}
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TodoItem;

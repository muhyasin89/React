import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {
      title: ''
  }

  onSubmitAddTodo = (e) => {
      e.preventDefault();
      this.props.addTodo(this.state.title);
      this.setState({ title: '' });
  }

  onChangeAddTodo = (e) => this.setState({ 
      [e.target.name]: e.target.value
  });

  render() {
    return (
        <form onSubmit={this.onSubmitAddTodo} style={{ display: 'flex' }}>
            <input 
                type="text" 
                name="title"
                style={{ flex: '10', padding: '5px' }}
                placeholder="Add Todo"
                value={ this.state.title }
                onChange={ this.onChangeAddTodo }
            />
            <input 
                type="submit" 
                value="Submit" 
                className="btn"
                style={{ flex: '1' }}
            />
        </form>
    )
  }
}

export default AddTodo

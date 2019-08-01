import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {

    /* //--this old code is cover in redux--
        // constructor(props) {
            super(props);
            this.state = {
                posts: []
            }
        }

        componentWillMount() { 
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => this.setState({posts: data}));
        }
    */

   componentWillMount() { 
       this.props.fetchPosts();
   }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                {post.body}
            </div>
        ))
        return (
        <div>
            <h1 className="App-title">Posts</h1>
            {postItems}
        </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}

const mapSateToProps = state => ({
    posts: state.posts.items
});

export default connect(mapSateToProps, { fetchPosts })(Posts);
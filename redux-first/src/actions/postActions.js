import { FETCH_POSTS, NEW_POST } from './types';

export const  fetchPosts = () => dispatch => { 
    /* as same as
        export function fetchPosts(){
            return function(dispatch){

            }
        }    
    */
    // console.log('test');

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => 
            dispatch({
                type: FETCH_POSTS,
                payload: posts 
            })
    );
}
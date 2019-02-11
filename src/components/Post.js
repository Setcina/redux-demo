import React, { Component } from 'react'

import {connect} from 'react-redux'

import {fetchPosts} from '../actions/postAction'

 class Post extends Component {

  
  componentDidMount(){  

    //触发action
    this.props.fetchPosts()

  }

  componentWillReceiveProps(nextProps){ 
    if(nextProps.newPost){ 

      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {

    const PostItem = this.props.posts.map(item=>{ 
      return(
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      )
    })

    return (
      <div>
        <div>Posts</div>
        {PostItem}
      </div>
    )
  }
}

const mapStateToProps = state =>({ 
  posts:state.stateReducer.posts,
  newPost:state.stateReducer.creatPost
})

export default connect(mapStateToProps,{ fetchPosts })(Post)


//  用于更新的state   方法    ui组件
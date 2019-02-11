import React, { Component } from 'react'

import {connect} from 'react-redux'

import {creatPost} from '../actions/postAction'

class PostsForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       title:'',
       body:''
    }
  }

  onChangeInput=(e)=>{ 
    this.setState({ 
      [e.target.name]:e.target.value
    })
  }

  Submit=(e)=>{  
    e.preventDefault()
    const post ={ 
      title:this.state.title,
      body:this.state.body
    }

    this.props.creatPost(post);
    console.log(this.props.newPost);
  }

  render() {
    return (
      <div>
        <h3>添加内容</h3>
        <form onSubmit={this.Submit.bind(this)}>
          <div>
            <label>title</label>
            <br/>
            <input name="title" type="text" onChange={this.onChangeInput.bind(this)}/>
          </div>
          <div>
            <label>title</label>
            <br/>
            <textarea name="body" onChange={this.onChangeInput.bind(this)}></textarea>
          </div>
          <button type="submit">提交</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state =>({ 
  newPost:state.stateReducer.creatPost
})


export default connect(mapStateToProps,{ creatPost })(PostsForm)


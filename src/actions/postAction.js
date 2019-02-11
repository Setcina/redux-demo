import {FETCH_POSTS,CREAT_POST} from './types'

// 分发操作，将数据分发到reducer里面
export const fetchPosts = () => dispatch =>{ 
   
  fetch('http://jsonplaceholder.typicode.com/posts')
  .then(Response=>{ 
    return Response.json()
  })
  .then(posts=>{
    dispatch({  
      type:FETCH_POSTS,
      payload:posts
    })
  })
  .catch(error=>{  
    
  })
  
}

export const creatPost = (post) => dispatch =>{  

  fetch('http://jsonplaceholder.typicode.com/posts',{ 
      method:'POST',
      headers:{ 
        "content-type":'application/json'
      },
      body:JSON.stringify(post)
    })
    .then(res=>res.json())

    .then(data=>{
      
      dispatch({  
        type:CREAT_POST,
        payload:data
      })
      
    })

}


// export function fetchPosts(){ 
//   return function(dispatch){  
//     fetch('http://jsonplaceholder.typicode.com/posts')
//     .then(Response=>{ 
//       return Response.json()
//     })
//     .then(posts=>{
//       dispatch({  
//         type:FETCH_POSTS,
//         payload:posts
//       })
//     })
//     .catch(error=>{  

//     })
//   }
// }
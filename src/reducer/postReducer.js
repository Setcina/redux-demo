//reducer的作用：返回新的状态
import {FETCH_POSTS,CREAT_POST} from '../actions/types'

const initialState = {  
  posts:[],
  creatPost:''
}

//ruducer拿到action分发过来的数据，判断是哪个类型的值，修改了那些值
export default function (state = initialState,action){  

  switch(action.type){ 
    case FETCH_POSTS:
      return {  
        ...state,
        posts:action.payload
      }

    case CREAT_POST:
      return {  
        ...state,
        creatPost:action.payload
      }

    default:
    return state;
  }
  
}
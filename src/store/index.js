import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      memories: [
        {
        id: '1', 
        image: 'https://images.pexels.com/photos/4913371/pexels-photo-4913371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'A trip into the mountains',
        description: 'It was a really nice trip' 
        },
         {
         id: 'm2', 
         image:'https://images.pexels.com/photos/4913371/pexels-photo-4913371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'A trip into the mountains',
        description: 'It was a really nice trip' 
        },
      ]
    };
  },
  getters: {
    memories(state) {
      return state.memories;
    }
  }
}
 

);

export default store
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
         id: '2', 
         image:'https://images.pexels.com/photos/4913371/pexels-photo-4913371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'A trip into the mountains',
        description: 'It was a really nice trip' 
        },
        {
          id: '3', 
          image:'https://images.pexels.com/photos/4913371/pexels-photo-4913371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
         title: 'A beautiful ocean',
         description: 'It was a really nice ocean' 
         },
      ],
      message: 'Hello Vuex from store',
      messageComp: 'Hello Vuex from Components',
      messageComputed: 'Hello Vuex from Computed',
      usersObj:[
        {name: 'Obj from vuex', email:'john@example.com', age:22},
        {name: 'Obj from vuex', email: 'merry@facebook.com',age:33},
        {name: 'Obj from vuex', email: 'ken@amazon.com',age:29}
      ]
    };
  },
  mutations: {
       addMemory(state, memoryData) {
          const newMemory = {
            id: new Date().toISOString(),
            title:memoryData.title,
            image:memoryData.imageUrl,
            description:memoryData.description
          };

          state.memories.unshift(newMemory);
       }
  },
  actions: {
    addMemory(context, memoryData) {
      //addMemoryミューテーションをコミット
      context.commit('addMemory', memoryData);
    }
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memory(state) {
      return (memoryId) => {
        //memoriesからmemoryIdと一致するものを取得
        return state.memories.find(memory => memory.id === memoryId)
      };
  },
  usergetters(state){
    return state.usersObj.filter(user => user.age < 30);
  }
  
  }
}
 
);

export default store
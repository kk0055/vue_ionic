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
  
  }
}
 
);

export default store
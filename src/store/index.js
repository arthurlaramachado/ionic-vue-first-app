import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            memories: [
                {
                    id: "m1",
                    image: "https://s.aficionados.com.br/imagens/tripulacao-do-luffy-historia-poderes-arco-em-que-cada-um-entrou-e-akuma-no-mi_ws.jpg",
                    title: "Dream of One Piece Characters",
                    description: "A really nice dream"
                },
                {
                    id: "m2",
                    image: "https://sm.ign.com/t/ign_br/image/o/one-piece-/one-piece-the-8-best-fights-in-the-first-130-episodes_bxjm.h960.jpg",
                    title: "Usopp almost dead",
                    description: "KKKKK"
                },
                {
                    id: "m3",
                    image: "https://criticalhits.com.br/wp-content/uploads/2022/07/one-piece-luffy-gear-5-fanart-au-910x512.jpg",
                    title: "God Nikka",
                    description: "Luffy in Gear 5"
                }
            ]
        };
    },
    getters: {
        memories(state) {
            return state.memories;
        },
        memoryById(state) {
            return (memoryId) => {
                return state.memories.find((memory) => memory.id === memoryId);
            }
        }
    }
});

export default store;
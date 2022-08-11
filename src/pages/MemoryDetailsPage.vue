<template>
    <base-layout :pageTitle="memory ? memory.title : 'Loading...'" pageDefaultBackLink="/memories">
        <h2 v-if="!memory">Could not find a memory for the given id.</h2>
        <memory-overview v-else :title="memory.title" :image="memory.image" :description="memory.description"/>
    </base-layout>
</template>

<script>
import MemoryOverview from '../components/memories/MemoryOverview.vue';

export default {
    components: {
        MemoryOverview
    },
    data() {
        return {
            memoryId: this.$route.params.id
        }
    },
    computed: {
        memory() {
            return this.$store.getters.memoryById(this.memoryId);
        }
    },
    /* watch: {
        '$route'(currentRoute) {
            this.memoryId = currentRoute.params.id;
        }
    } */
};
</script>
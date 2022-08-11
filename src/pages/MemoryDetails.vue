<template>
    <base-layout :pageTitle="memory ? memory.title : 'Loading...'" pageDefaultBackLink="/memories">
        <h2 v-if="!memory">Could not find a memory for the given id.</h2>
        <h2 v-else>Loaded it</h2>
    </base-layout>
</template>

<script>
export default {
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
<template>
  <div>
    <button
      @click="openModal"
      class="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded disabled:opacity-50"
    >
      Create New Post
    </button>
    <PostsTable v-if="!loading" />
    <div v-else class="flex justify-center items-center">Loading...</div>
    <ModalCreate v-if="isModalVisible" @close="isModalVisible = false" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { usePostsStore } from '@/store/usePostsStore';
import PostsTable from '@/components/PostsTable.vue';
import Modal from '@/components/Modal.vue';
import ModalCreate from '@/components/ModalCreate.vue';

const isModalVisible = ref(false);
const store = usePostsStore();
const { loading } = storeToRefs(store);
const { fetchPosts } = store;

onMounted(() => {
  fetchPosts();
});

const openModal = () => {
  isModalVisible.value = !isModalVisible.value;
  console.log(isModalVisible.value);
};
</script>

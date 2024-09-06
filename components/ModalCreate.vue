<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    @click.self="closeModal"
  >
    <div class="bg-white p-6 rounded-md shadow-md max-w-lg w-full">
      <h3 class="text-lg font-bold mb-4">Create New Post</h3>
      <form @submit.prevent="createPost">
        <div class="mb-4">
          <label for="title" class="block text-sm font-medium text-gray-700"
            >Title</label
          >
          <input
            v-model="newPost.title"
            id="title"
            placeholder="Title"
            class="border p-2 mb-2 w-full"
          />
        </div>
        <div class="mb-4">
          <label for="body" class="block text-sm font-medium text-gray-700"
            >Body</label
          >
          <textarea
            v-model="newPost.body"
            id="body"
            placeholder="Body"
            class="border p-2 mb-2 w-full max-h-40 min-h-32"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
          :class="{ 'bg-blue-300 cursor-not-allowed': !isFormValid }"
          :disabled="!isFormValid"
        >
          Create
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, defineEmits } from 'vue';
import { usePostsStore } from '@/store/usePostsStore';
import { Post } from '@/types/Post';

const emit = defineEmits<{ (e: 'close'): void }>();

const isVisible = ref(true);
const newPost = ref<{ title: string; body: string }>({ title: '', body: '' });

const store = usePostsStore();
const { addPost } = store;

const validate = () => {
  return newPost.value.title.trim() !== '' && newPost.value.body.trim() !== '';
};

const isFormValid = computed(() => validate());

const createPost = () => {
  if (isFormValid.value) {
    addPost({
      userId: 1,
      title: newPost.value.title,
      body: newPost.value.body,
    } as Post);
    closeModal();
  }
};

const closeModal = () => {
  emit('close');
};

const handleEscKey = (event: KeyboardEvent) => {
  if (event.key === 'Escape') closeModal();
};

onMounted(() => {
  window.addEventListener('keydown', handleEscKey);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscKey);
});
</script>

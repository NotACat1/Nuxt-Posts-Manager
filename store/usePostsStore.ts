import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import { Post } from '@/types/Post';

export const usePostsStore = defineStore('posts', () => {
  const posts = ref<Post[]>([]);
  const loading = ref(false);

  const fetchPosts = async () => {
    loading.value = true;
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );

      posts.value = response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      loading.value = false;
    }
  };

  const addPost = (newPost: Post) => {
    posts.value.push({
      ...newPost,
      id: posts.value.length + 1,
    });
  };

  return {
    posts,
    loading,
    fetchPosts,
    addPost,
  };
});

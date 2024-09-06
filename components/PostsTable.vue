<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div class="overflow-hidden shadow-md sm:rounded-lg">
          <table class="min-w-full">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  @click="toggleSort"
                  class="px-6 py-3 cursor-pointer text-left text-xs font-medium text-gray-500 uppercase whitespace-nowrap"
                >
                  ID
                  <span v-if="sortDirection === 'asc'">▲</span>
                  <span v-else>▼</span>
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                >
                  Title
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                >
                  Body
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="post in paginatedPosts"
                :key="post.id"
                class="bg-white border-b"
              >
                <td class="px-6 py-4">{{ post.id }}</td>
                <td class="px-6 py-4">{{ post.title }}</td>
                <td class="px-6 py-4">{{ post.body }}</td>
              </tr>
            </tbody>
          </table>
          <div
            class="flex justify-between items-center px-4 py-3 bg-white border-t"
          >
            <button
              @click="prevPage"
              :disabled="currentPage === 1"
              class="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span>{{ currentPage }} of {{ totalPages }}</span>
            <button
              @click="nextPage"
              :disabled="currentPage === totalPages"
              class="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { usePostsStore } from '@/store/usePostsStore';

const store = usePostsStore();
const { posts, loading, fetchPosts } = store;

const sortPosts = ref([...posts]);
console.log(sortPosts);
const currentPage = ref(1);
const itemsPerPage = 10;
const sortDirection = ref<'asc' | 'desc'>('asc');

const toggleSort = () => {
  sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
  sortPosts.value.sort((a, b) => {
    return sortDirection.value === 'asc' ? a.id - b.id : b.id - a.id;
  });
};

const totalPages = computed(() =>
  Math.ceil(sortPosts.value.length / itemsPerPage),
);

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return sortPosts.value.slice(start, end);
});

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};
</script>

<template>
  <div>
    <h1>Yemek Tarifleri</h1>

    <div v-if="recipes.length > 0">
      <ul>
        <li v-for="recipe in recipes" :key="recipe.id">
          {{ recipe.title }}
        </li>
      </ul>
    </div>

    <div v-else>
      <p>Henüz tarif yok. Tarifleri getirmek için bekleniyor...</p>
    </div>
  </div>
</template>

<script setup>
import Carousel from '@components/Homepage/Carousel.vue';
import { useRecipeStore } from '@/store/recipeStore';
import { ref, onMounted } from 'vue';
const recipeStore = useRecipeStore();
const recipes = ref([]);

const fetchRecipes = async () => {
  await recipeStore.fetchRecipes();
  console.log(recipes);
};

onMounted(() => {
  fetchRecipes();
});
</script>

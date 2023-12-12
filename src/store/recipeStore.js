import { defineStore } from "pinia";
import axios from "axios";

export const useRecipeStore = defineStore("recipe", {
    state : () => ({
        recipes: [],
    }),
    getters: {
        getRecipes(state) {
            return state.recipes
        }
    },
    actions: {
        async fetchRecipes() {
          try {
            const apiKey = import.meta.env.VITE_API_KEY;
            const response = await axios.get(
              `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`
            );
            this.recipes = response.data.recipes;
            console.log(this.recipes);
          } catch (error) {
            console.error("API isteği başarısız:", error);
          }
        },
      },
})
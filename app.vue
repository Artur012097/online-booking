<script setup lang="ts">
import { useMainStore } from "~/stores/main";
import { storeToRefs } from "pinia";

const inputVal = ref("");

const mainStore = useMainStore();
const { addValueToSomething, remove } = mainStore;
const { something } = storeToRefs(mainStore);
</script>

<template>
  <div class="app">
    <h1 class="text-6xl mb-10">
      Online booking service
    </h1>
    <div>
      <h2 class="text-xl mb-3">Pinia store example</h2>
      <span >{{ something }}</span>
    </div>
    <button class="text-green-100" @click="addValueToSomething('asd')">add</button>
    <button class="text-red-100 ml-1" @click="remove()">remove</button>
  </div>
</template>

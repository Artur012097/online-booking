import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const something = ref(['asdasd', 'asasd'])

  const addValueToSomething = (value: string) => {
    something.value.push(value)
  }

  const remove = () => {
    something.value.pop()
  }
  return { addValueToSomething, remove, something }
})
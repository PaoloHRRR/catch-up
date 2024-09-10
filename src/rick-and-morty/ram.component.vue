<script>
import axios from 'axios'
export default {
  name: "ram.component",
  data(){
    return{
      info:[],
      allCharacters:[],
      currentIndex:0
    };
  },
  methods: {
    fetchAllCharacters(){
      axios.get("https://rickandmortyapi.com/api/character/").then((response)=>{
        this.allCharacters = response.data.results;
      });
    },
    getInfo(){
      if(this.currentIndex < this.allCharacters.length){
        this.info.push(this.allCharacters[this.currentIndex]);
        this.currentIndex++;
      }
    },
    deleteInfo(){
     this.info=[];
     this.currentIndex=0;
    },
    deleteLastCharacter(){
      if(this.currentIndex > 0){
        this.info.pop();
        this.currentIndex--;
      }
    }
    },
    created(){
      this.fetchAllCharacters();
  }
}
</script>

<template>
  <div>
    <button @click="getInfo">AÑADIR PERSONAJE</button>
    <button @click="deleteLastCharacter">BORRAR ULTIMO PERSONAJE</button>
    <button @click="deleteInfo">BORRAR PERSONAJES</button>
  </div>
  <div v-if="info.length > 0">
    <div v-for="i in info" :key="i.id">
    <p>ID: {{ i.id.toString() }}   Nombre: {{ i.name.toString() }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>
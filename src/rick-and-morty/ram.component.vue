<script>
import axios from 'axios';
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
    <pv-buttton class="bt" type="button" label="Add character" @click="getInfo"/>
    <pv-buttton class="bt" type="button" label="Eliminate last character" @click="deleteLastCharacter"/>
    <pv-buttton class="bt" type="button" label="Eliminate all characters" @click="deleteInfo"/>

  </div>

  <div v-if="info.length > 0">
    <div v-for="i in info" :key="i.id">
      <pv-card class="crd">
        <template #title>
          <p class="m-0">{{ i.name.toString() }}</p>
        </template>
        <template #content>
          <p class="m-0">
            Specie: {{ i.species.toString() }}
         </p>
          <p class="m-0">
            Gender: {{ i.gender.toString() }}
          </p>
          <p class="m-0">
            Origin: {{ i.origin.name.toString() }}
          </p>
          <pv-image :src="i.image"/>

        </template>
      </pv-card>
    </div>
  </div>
</template>

<style scoped>
.bt {
  margin: 5px;
  margin-bottom: 20px;
}
crd{
  margin-top: 30px;
}
</style>
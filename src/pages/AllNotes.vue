<template>
  <div>
    <router-link to="/new"><button>New Entry</button></router-link>
    <div class="note" v-for="(note, index) in $attrs.notes" v-bind:key="index">
      
      <router-link :to="{name: 'note', params: {id: index}}">
        <h1 id="noteLink">{{note.date}}</h1>
      </router-link>
      <h2>{{note.activity}}</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AllNotes",
  };
</script>

<style>
  .note {
    text-align: center;
    border: 3px solid black;
    border-radius: 20%;
    margin: 10px auto;
    width: 100%;
    height: 140px;
    width: 600px;
  }
  #noteLink {
    color: white;
  }
</style>
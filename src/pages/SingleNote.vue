<template>
  <div class="note">
    <h1>{{ note.date }}</h1>
    <h2>{{ note.activity }}</h2>
    <ul>
      <li>{{ note.foodB }}</li>
      <li>{{ note.foodL }}</li>
      <li>{{ note.foodD }}</li>
      <li>{{ note.foodS }}</li>
      <li>{{ note.water }}</li>
    </ul>
    <router-link to="/"><button>Back to Home</button></router-link>
    <!-- <router-link to="{ name: 'edit', params: { id: note.id } }"> -->
    <router-link :to="{path: 'edit', query: { id: note.id } }">
      ><button>Edit This Entry</button></router-link
    >
    <button v-on:click="deleteNote">Delete Entry</button>
  </div>
</template>

<script>
// get useRoute hook to get access to params
import { useRoute, useRouter } from "vue-router";
// getting toRefs hook to maintain props reactivity
import { toRefs } from "vue";

export default {
  name: "SingleNote",
  props: ["notes", "url", "getNotes"],
  setup(props) {

    // get route object to access params
    const route = useRoute();
    // get Router
    const router = useRouter();
    // retrieve notes from props
    const { notes, url, getNotes } = toRefs(props);
    // grab target note from notes
    const note = notes.value[route.params.id];
        console.log(note)

    const deleteNote = async () => {
      await fetch(url.value + note.id + "/", {
        method: "delete",
      });

      await getNotes.value();

      router.push("/");
    };

    //return properties
    return {
      note,
      deleteNote,
    };
  },
};
</script>

<style>
button {
  margin: 10px;
}

</style>
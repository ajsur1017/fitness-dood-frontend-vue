<template>
  <form v-on:submit.prevent="handleSubmit">
    <h4>Date:</h4>
    <input type="text" placeholder="date" v-model="date" />
    <h4>Activity:</h4>
    <input type="text" placeholder="activity" v-model="activity" />
    <h4>Breakfast:</h4>
    <input type="text" placeholder="breakfast" v-model="foodB" />
    <h4>Lunch:</h4>
    <input type="text" placeholder="lunch" v-model="foodL" />
    <h4>Dinner:</h4>
    <input type="text" placeholder="dinner" v-model="foodD" />
    <h4>Snack:</h4>
    <input type="text" placeholder="snack" v-model="foodS" />
    <h4>Water (OZ):</h4>
    <input type="number" placeholder="water" v-model="water" />
    <div>
      
    </div>
    <button type="submit">{{buttonLabel}}</button>
    <!-- <input type="submit" :value="buttonLabel" /> -->
    
  </form>
</template>

<script>
  // get router hooks
  import { useRoute, useRouter } from "vue-router";
  // get vue hooks
  import { ref, toRefs } from "vue";

  export default {
    name: "Form",
    props: ["notes", "url", "getNotes", "id"],
    setup(props) {
      // console.log(props)
      
      const route = useRoute(); //get route
      console.log(route)
      const router = useRouter(); //get router
      const { notes, url, getNotes } = toRefs(props); // get notes from props
      const date = ref(""); // variable for date in form
      const activity = ref(""); // variable for activity in form
      const foodB = ref("")
      const foodL = ref("")
      const foodD = ref("")
      const foodS = ref("")
      const water = ref("")


      let buttonLabel; // label for submit button
      let handleSubmit; //variable to hold submit function
      // If edit route setup for editing, if not setup for creating
      if (route.path === "/note/edit") {
        //get note to be edited from notes
        const note = notes.value.find((p) => {
          console.log(p.id, route.query.id)
          return p.id == route.query.id}
          );
        
        // fill the form with that notes values
        date.value = note.date;
        activity.value = note.activity;
        foodB.value = note.foodB;
        foodL.value = note.foodL;
        foodD.value = note.foodD;
        foodS.value = note.foodS;
        water.value = note.water;
        // label for submit button
        buttonLabel = "edit entry";
        // define function to update
        handleSubmit = async () => {
          // console.log(url)
          // console.log(route.params)
          await fetch(url.value + route.query.id + "/", {
            method: "put",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              date: date.value,
              activity: activity.value,
              foodB: foodB.value,
              foodL: foodL.value,
              foodD: foodD.value,
              foodS: foodS.value,
              water: water.value,
            }),
          });

          getNotes.value();
          router.push("/");
        };
      } else {
        // label for submit button
        buttonLabel = "Create Entry";
        // define function to create
        handleSubmit = async () => {
          await fetch(url.value, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              date: date.value,
              activity: activity.value,
              foodB: foodB.value,
              foodL: foodL.value,
              foodD: foodD.value,
              foodS: foodS.value,
              water: water.value,
            }),
          });

          getNotes.value();
          router.push("/");
        };
      }
      return {
        date,
        activity,
        foodB,
        foodL,
        foodD,
        foodS,
        water,
        handleSubmit,
        buttonLabel,
      };
    },
  };
</script>

<style></style>
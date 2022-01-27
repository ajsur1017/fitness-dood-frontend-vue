/////////////////////////
// Component Imports
/////////////////////////
import AllNotes from "./pages/AllNotes.vue";
import SingleNote from "./pages/SingleNote.vue";
import Form from "./pages/Form.vue";
import About from "./pages/About.vue";
import Contact from "./pages/Contact.vue";
/////////////////////////
// Array of Routes
/////////////////////////
export default [
  // main page that shows all todos
  { path: "/", component: AllNotes },
  // page for seeing an individual todo
  { path: "/note/:id", component: SingleNote, name: "note" },
  // route for creating a new todo
  { path: "/new", component: Form },
  // route for updating a todo
  { path: "/note/edit", component: Form, props: true },
  // route for about
  { path: "/about", component: About },
  // route for contact
  { path: "/contact", component: Contact }
];
<template>
  <div>
    <!-- <h1>Contact:</h1>
    <form>
      <h4>Your Email:</h4>
      <input type="email" placeholder="email address" required="true" />
      <h4>Subject:</h4>
      <input type="text" placeholder="subject" />
      <h4>Name:</h4>
      <input type="text" placeholder="name" />
      <h4>Message:</h4>
      <textarea id="messageBox"></textarea>
      <button type="submit">send it!</button>
    </form> -->

    <div id="overlay">
        <form v-on:submit.prevent="validateForm">
            <h1>Contact Us</h1>

            <label for="name">Name:</label>
            <input type="text" id="name" placeholder="Your Name">
            <small class="error"></small>

            <label for="email">Email:</label>
            <input type="text" id="email" placeholder="Your email">
            <small class="error"></small>

            <label for="message">Message:</label>
            <textarea id="message" placeholder="Your Message" rows="6"></textarea>
            <small class="error"></small>

            <div class="center">
                <input type="reset" value="Send it!">
                <p id="sucess"></p>
            </div>
        </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>
    
<style>

</style>
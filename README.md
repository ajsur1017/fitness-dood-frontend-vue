# capstone
Welcome to fitnessDOOD. This is a simple application that was built using ruby on rails for the backend utilizing postgresql for the database. The front end application which currently has no authentication implemented (TBD) was created to help you stay on track.

## Technologies used:
* HTML, CSS, JavaScript
* Ruby on Rails
* PostgreSQL
* Vue.js with vue-router
* Milligram.css
* GitHub
* Heroku (backend hosting)
* Netlify (frontend hosting)

## Talking points:
#### The dynamic and reactive "hamburger" menu is created using entirly HTML and CSS (ZERO JAVASCRIPT!)
* It is reactive and has multiple animations using transistion and transform. 
* It is dynamic so no matter where you scroll on the page it will always be displayed on the top left corner of the screen. 
#### Vue.js was very pleasant to work with especially once I got a better understanding of what was going on under the hood. 
* Rendering components bassed on what path you are on is a very nice feature.
#### Milligram.css give you a very nice starting point if you arent looking to go to crazy with design of basic items.
* Also presents issues when you try to change somethings being affected by milligram.

## Moving forward (icebox)
#### Backend with Auth.
* I have a completed backed with the same schema completed and deployed that has JWT authentication with bcrypt.
* Once I have a btter understanding I would like to rework the front end to inclue the ability for a user to have unique posts.
#### Contact form
* As a last minute project I attempted to add a function contact us form.
* The current state of the form does absolutly nothing except take you inputs and clear the form, I would like to make that function one day as well. 


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

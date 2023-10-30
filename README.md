# goit-advancedjs-hw-01

### Task 1. `SimpleLightbox` library

Complete this task in the files `01-gallery.html` and `01-gallery.js`. Break it
down into several subtasks:

1. Add the [SimpleLightbox](https://simplelightbox.com/) library as a project
   dependency using `npm` (no need for a CDN link from your previous work).
2. Utilize your JavaScript code from the last
   [homework](https://github.com/AM1007/goit-js-finalproject) on the
   **JavaScript Fundamentals** course, but refactor it considering that the
   library was installed via `npm` (use import/export syntax).

   To include the library's CSS code in the project, you need to add another
   import, in addition to what is described in the documentation.

   ```js
   *// Described in documentation*
   import SimpleLightbox from "simplelightbox";
   *// Additional styles import*
   import "simplelightbox/dist/simple-lightbox.min.css";
   ```

---

### Task 2. Videoplayer

HTML contains an `<iframe>` with a Vimeo video player. Write a script that will
save the current playback time of the video in local storage and, after page
reload, resume playing the video from that time.

```html
<iframe
  id="vimeo-player"
  src="https://player.vimeo.com/video/878916453"
  width="640"
  height="360"
  frameborder="0"
  allowfullscreen
  allow="autoplay; encrypted-media"
></iframe>
```

Complete this task in the files `02-video.html` and `02-video.js`. Break it down
into several subtasks:

1. Familiarize yourself with the
   [documentation](https://github.com/vimeo/player.js/#vimeo-player-api) of the
   Vimeo player library.
2. Add the library as a project dependency via `npm`.
3. Initialize the player in the script file as described in the
   [pre-existing player](https://github.com/vimeo/player.js/#pre-existing-player)
   section, but keep in mind that your player is added as an npm package, not
   via a CDN.
4. Study the documentation for the
   ['on()'](https://github.com/vimeo/player.js/#onevent-string-callback-function-void)
   method and start tracking the
   ['timeupdate'](https://github.com/vimeo/player.js/#events) event - updating
   the playback time.
5. Store the playback time in local storage. Use the string
   `'videoplayer-current-time'` as the key for the storage.
6. During page reload, use the
   ['setCurrentTime()'](https://github.com/vimeo/player.js/#setcurrenttimeseconds-number-promisenumber-rangeerrorerror)
   method to resume playback from the saved position.
7. Add the [lodash.throttle](https://www.npmjs.com/package/lodash.throttle)
   library to the project and ensure that the playback time is updated in
   storage no more frequently than once per second.

---

### Task 3. Feedback form

HTML contains a form layout. Write a script that will save the values of the
fields in local storage when the user inputs something.

```html
<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>
```

Complete this task in the files `03-feedback.html` and `03-feedback.js`. Break
it down into several subtasks:

1. Track the `input` event on the form, and each time, store an object in local
   storage with fields `email` and `message`, saving the current values of the
   form fields. Use the string `'feedback-form-state'` as the key for the
   storage.
2. During page load, check the state of the storage, and if there are saved
   data, fill the form fields with it; otherwise, the fields should be empty.
3. Upon submitting the form, clear the storage and form fields, and also output
   an object to the console with fields `email`, `message`, and their current
   values. Ensure that the storage is updated no more frequently than once every
   500 milliseconds. To achieve this, add the
   [lodash.throttle](https://www.npmjs.com/package/lodash.throttle) library to
   the project and use it.

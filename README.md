# jQuery scrollStyles

A small jQuery plugin that allows you to add specific styles to an element (a sticky title for example) according to the section that the user is currently scrolling over.

[See the DEMO](https://codepen.io/balix/full/BerzrK)

## Setup

### Including files

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js"></script>
<script type="text/javascript" src="jquery.scrollstyles.min.js"></script>
```

### Setup

Add a "scrollstyles-section" class and a "data-styles-class" classes to your sections :

```html
<section class="scrollstyles-section" data-styles-class="light">
    Some content
</section>

<section class="scrollstyles-section" data-styles-class="dark">
    Some content
</section>
```

### Initialization
Call the plugin inside a `$(document).ready` function :

```javascript
$(document).ready(function() {
    $('.header').scrollStyles();
});
```

## Options

### Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
frameRate | Seconds | 500 | Refresh time on scroll
scrollOffset | Number | 50 | Trigger the event before the scroll has arrived to the section
targetElements | String | '.scrollstyles-section' | Sections that should update the toggle element on scroll
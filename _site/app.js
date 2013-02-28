var s = skrollr.init(/*other stuff*/);

//The options (second parameter) are all optional. The values shown are the default values.
skrollr.menu.init(s, {
    animate: true, //skrollr will smoothly animate to the new position using `animateTo`.
    duration: 500, //How long the animation should take in ms.
    easing: 'sqrt' //The easing function to use.
});
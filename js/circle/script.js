var bar = new ProgressBar.Circle(container, {
    color: '#ffe600',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 3,
    trailWidth: 3,
    trailColor: '#fff',
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#ffe600', width: 1 },
    to: { color: '#ffe600', width: 3 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100) + ' %';
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
  
    }
  });
  bar.text.style.fontFamily = '"Oswald", Helvetica, sans-serif';
  bar.text.style.fontSize = '2rem';
  bar.text.style.fontWeight = 'light';
  
  bar.animate(0.9); 
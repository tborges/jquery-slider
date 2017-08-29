 // Touch Event Support: http://touchpunch.furf.com/

// On browser ready
  $(function() {
    // Create slider-1
    $( ".slider-1" ).slider({
      range: "min",
      animate: "fast",
      value: 249,
      min: 1,
      max: 500,
      slide: function( event, ui ) {
        // Update value during slide
        $( ".number-1" ).html( ui.value );
      }
    });
    // Set initial value
    var value = $( ".slider-1" ).slider( "value" );
    $( ".number-1" ).html( value );
    
     // Create slider-2
    $( ".slider-2" ).slider({
      range: "min",
      animate: "fast",
      value: 0,
      min: 0,
      max: 9,
      slide: function( event, ui ) {
        // Update value during slide
        $( ".number-2" ).html( ui.value );
      }
    });
    // Set initial value
    var value = $( ".slider-2" ).slider( "value" );
    $( ".number-2" ).html( value );
    
     // Create slider-3
    $( ".slider-3" ).slider({
      range: "min",
      animate: "fast",
      value: 0,
      min: 0,
      max: 9,
      slide: function( event, ui ) {
        // Update value during slide
        $( ".number-3" ).html( ui.value );
      }
    });
    // Set initial value
    var value = $( ".slider-3" ).slider( "value" );
    $( ".number-3" ).html( value );
    
     // Create slider-4
    $( ".slider-4" ).slider({
      range: "min",
      animate: "fast",
      value: 0,
      min: 0,
      max: 9,
      slide: function( event, ui ) {
        // Update value during slide
        $( ".number-4" ).html( ui.value );
      }
    });
    // Set initial value
    var value = $( ".slider-4" ).slider( "value" );
    $( ".number-4" ).html( value );
    
     // Create slider-5
    $( ".slider-5" ).slider({
      range: "min",
      animate: "fast",
      value: 0,
      min: 0,
      max: 9,
      slide: function( event, ui ) {
        // Update value during slide
        $( ".number-5" ).html( ui.value );
      }
    });
    // Set initial value
    var value = $( ".slider-5" ).slider( "value" );
    $( ".number-5" ).html( value );
  });
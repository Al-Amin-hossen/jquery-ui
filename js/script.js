
$(document).ready(function(){
    // draggable
    $("#drag").draggable();

});

$(document).ready(function(){
    // droppable
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });

    // Resizable
    $("#resizable").resizable();

    // Selectable
    $("#selectable").selectable();

    // Sortable
    $("#sortable").sortable();

    // Accordion
    $("#accordion").accordion({
        collapsible: true
    });


    // autocomplete variable
    var tags=  [ "Asp",
                 "Bootstrap",
                 "C#",
                 "C++",
                 "Java",
                 "JavaScript",
                 "Php",
                 "React.js",
                 "Node.js",
                 "Laravel",
                 "Woordpress"
                ];

    $("#tags").autocomplete({
        source: tags
    });

    // Date Picker
    $("#datepicker").datepicker({
        changeMonth: true,
        changeYear: true
    });

    // Price Slider
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 1000,
        values: [ 50, 200 ],
        slide: function( event, ui ) {
          $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
      });
      $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );

    
    // Tabs
    $("#tabs").tabs();

    // Tooltip
        $( "[title]" ).tooltip({
            position: {
                my: "left top",
                at: "right+5 top-5",
                collision: "none"
            }
        } );

    // Effect
    function runEffect() {
        // get effect type from
        var selectedEffect = $( "#effectTypes" ).val();
   
        // Most effect types need no options passed by default
        var options = {};
        // some effects have required parameters
        if ( selectedEffect === "scale" ) {
          options = { percent: 50 };
        } else if ( selectedEffect === "transfer" ) {
          options = { to: "#button", className: "ui-effects-transfer" };
        } else if ( selectedEffect === "size" ) {
          options = { to: { width: 200, height: 60 } };
        }
   
        // Run the effect
        $( "#effect" ).toggle( selectedEffect, options, 500 );
      };
   
      // Callback function to bring a hidden box back
    //   function callback() {
    //     setTimeout(function() {
    //       $( "#effect" ).removeAttr( "style" ).hide().fadeIn();
    //     }, 1000 );
    //   };
   
      // Set effect from select menu value
      $( "#button" ).on( "click", function() {
        runEffect();
        return false;
      });

    // Image Slider
    function left( element, using ) {
        element.position({
          my: "right middle",
          at: "left+25 middle",
          of: "#container",
          collision: "none",
          using: using
        });
      }
      function right( element, using ) {
        element.position({
          my: "left middle",
          at: "right-25 middle",
          of: "#container",
          collision: "none",
          using: using
        });
      }
      function center( element, using ) {
        element.position({
          my: "center middle",
          at: "center middle",
          of: "#container",
          using: using
        });
      }
   
      left( $( "img" ).eq( 0 ) );
      center( $( "img" ).eq( 1 ) );
      right( $( "img" ).eq( 2 ) );
   
      function animate( to ) {
        $( this ).stop( true, false ).animate( to );
      }
      function next( event ) {
        event.preventDefault();
        center( $( "img" ).eq( 2 ), animate );
        left( $( "img" ).eq( 1 ), animate );
        right( $( "img" ).eq( 0 ).appendTo( "#container" ) );
      }
      function previous( event ) {
        event.preventDefault();
        center( $( "img" ).eq( 0 ), animate );
        right( $( "img" ).eq( 1 ), animate );
        left( $( "img" ).eq( 2 ).prependTo( "#container" ) );
      }
      $( "#previous" ).on( "click", previous );
      $( "#next" ).on( "click", next );
   
      $( "img" ).on( "click", function( event ) {
        $( "img" ).index( this ) === 0 ? previous( event ) : next( event );
      });
   
      $( window ).on( "resize", function() {
        left( $( "img" ).eq( 0 ), animate );
        center( $( "img" ).eq( 1 ), animate );
        right( $( "img" ).eq( 2 ), animate );
      });
});
/**
 *  A method for hindering input capabilities within a textarea or text input.  Attempts to disallow text selection,
 *  cursor placement, and characters outside of the "normal" ASCII print character range.
 **/
(function( $ ) {

  /**
   * Hinder the input capabilites of the selected elements.
   *
   * @param {object} options A set of configuration options.
   *  onAdd: A function called when a character is added.
   *  onDelete: A function called when a character is deleted.
   **/
  var hinderInput = $.fn.hinderInput = function( options ) {
    var options = $.extend( {}, hinderInput.defaults, options );

    return this.each(function( index, element ) {
      var $target = $(this);

      $target.keypress( $.proxy( hinderInput.addChar, hinderInput, options ) )
        .keydown( $.proxy( hinderInput.addSpecial, hinderInput, options ) )
        .click(function( event ) {
          $target.setCaretAtEnd();
        });
    });
  };

  /**
   * Add a character to the input if it's valid.  Execute the onAdd
   * callback.
   *
   * @param {object} event The event that triggered the input.
   * @param {object} options The options provided to hinderInput.
   **/
  hinderInput.addChar = function( options, event ){
    var $target = $(event.target),
      keyCode = event.which;

      if ( this.isValidChar( keyCode ) ) {
        $target.setCaretAtEnd();
        options.onAdd( String.fromCharCode( keyCode ) );
      }
  };

  /**
   * Apply a special character to the input if it's allowed.  Currently,
   * only delete is allowed.  Execute the onDelete callback.
   *
   * @param {object} event The event that triggered the input.
   * @param {object} options The options provided to hinderInput.
   **/
  hinderInput.addSpecial = function( options, event ) {
    var $target = $( event.target ),
      keyCode = event.which;

    $target.setCaretAtEnd();

    if( keyCode === 8 ) {
      options.onDelete();
    }
    //TODO more TLC
    else if( !this.isValidChar(keyCode) || this.isModifierPresent( event ) ) {
      event.preventDefault();
    }
  };

  /**
   * Determine if the given key code is within the acceptable
   * range.
   *
   * @param {number} keyCode The char code of the character to check.
   **/
  hinderInput.isValidChar = function( keyCode ) {
    return (keyCode > 31 && keyCode < 37)
      || (keyCode > 40 && keyCode < 127)
      || (keyCode > 185 && keyCode < 223);
  };

  /**
   * Determine if any modifier keys were present during the given
   * event.
   *
   * @param {object} event The event to check.
   **/
  hinderInput.isModifierPresent = function( event ) {
    return event.altKey || event.ctrlKey || event.metaKey;
  };

  /**
   * The default options for hinderInput.
   **/
  hinderInput.defaults = {
    onAdd: function( value ) {
      return;
    },
    onDelete: function() {
      return;
    }
  };

})( jQuery );
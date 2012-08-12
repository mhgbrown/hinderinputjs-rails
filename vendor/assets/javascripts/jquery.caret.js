/**
 * A set of methods to manipulate caret position.  Does the world need another set of
 * these methods? Definitely. :P
 **/
(function( $ ) {

  /**
   *  Set a selection range with the given start and end indicies.
   *
   * @param {number} start The position at which to start the selection.
   * @param {number} end The position at which to end the selection.
   **/
  $.fn.setSelection = function( start, end ) {
    return this.each(function( index, element ){
      var range;

      if ( typeof element.setSelectionRange === 'function' ) {
        element.focus();
        element.setSelectionRange( start, end );
      }
      else if( typeof element.createTextRange === 'function' ) {
        range = element.createTextRange();
        range.collapse( true );
        range.moveEnd( 'character', start );
        range.moveStart( 'character', end );
        range.select();
      }
    });
  };

  /**
   * Set the position of the cursor to the given index.
   *
   * @param {number} pos The position at which to set the caret.
   **/
  $.fn.setCaretPosition = function( pos ) {
    return this.each(function( index, element ) {
      $(element).setSelection( pos, pos );
    });
  };

  /**
   *  Set the position of the cursor to the end
   **/
  $.fn.setCaretAtEnd = function() {
    return this.each(function( index, element ) {
      var length = element.value.length;
      $(element).setCaretPosition( length, length );
    });
  };

})( jQuery );
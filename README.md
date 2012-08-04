# Hinder Input
This is a jQuery plugin that attempts to disallow text selection, cursor placement, and characters outside of the "normal" ASCII print character range.

## Usage

	$(element).hinderInput({
		onAdd: function ( value ) {
			// do something when a valid character is added
		},
		onDelete: function() {
			// do something when a character is deleted
		}
	});
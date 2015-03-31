// Using strict mode
'use strict';

// Define our globals
window.Algorithms = window.Algorithms || {};
Algorithms.Sort = Algorithms.Sort || {};

/**
 * Gnome sort algorithm.
 * @param {array} arr Array of items to sort.
 * @param {callback} cmp Optional callback to sort by.
 */
Algorithms.Sort.gnomeSort = function(arr, cmp) {

	// Default sort comparator
	function comparator(a, b) {
		return a >= b;
	}

	// Process sorting
	function sort(arr, cmp) {
		cmp = cmp || comparator;
		
		var pos = 1;

		while (pos < arr.length) {
			if ( cmp(arr[pos], arr[pos-1]) ) {
				pos++;
			} else {
				var temp = arr[pos];
				arr[pos] = arr[pos - 1];
				arr[pos - 1] = temp;
				if (pos > 1) {
					pos--;
				}
			}
		}

		return arr;
	}

	return sort(arr, cmp);

};
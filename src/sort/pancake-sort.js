// Using strict mode
'use strict';

// Define our globals
window.Algorithms = window.Algorithms || {};
Algorithms.Sort = Algorithms.Sort || {};

/**
 * Pancake sort algorithm.
 * @param {array} arr Array of items to sort.
 * @param {callback} cmp Optional callback to sort by.
 */
Algorithms.Sort.pancakeSort = function(arr, cmp) {

	// Default sort comparator
	function comparator(a, b) {
		return a > b;
	}

	// Process sorting
	function sort(arr, cmp) {
		cmp = cmp || comparator;

		for (var i = arr.length - 1; i >= 1; i--) {
			var max_idx = 0,
				max = arr[0];

			for (var j = 1; j <= i; j++) {
				if ( cmp(arr[j], max) ) {
					max = arr[j];
					max_idx = j;
				}
			}

			if (max_idx == i) {
				continue;
			}

			var new_slice;

			if (max_idx > 0) {
				new_slice = arr.slice(0, max_idx + 1).reverse();
				for (var j = 0; j <= max_idx; j++) {
					arr[j] = new_slice[j];
				}
			}

			new_slice = arr.slice(0, i + 1).reverse();
			
			for (var j = 0; j <= i; j++) {
				arr[j] = new_slice[j];
			}
		}

		return arr;
	}

	return sort(arr, cmp);

};
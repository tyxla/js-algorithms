// Using strict mode
'use strict';

// Define our globals
window.Algorithms = window.Algorithms || {};
Algorithms.Sort = Algorithms.Sort || {};

/**
 * Odd-even sort algorithm.
 * @param {array} arr Array of items to sort.
 * @param {callback} cmp Optional callback to sort by.
 */
Algorithms.Sort.oddEvenSort = function(arr, cmp) {

	// Default sort comparator
	function comparator(a, b) {
		return a > b;
	}

	// Swaps array elements at provided indexes
	function swap(arr, a, b) {
		var temp = arr[a];
		arr[a] = arr[b];
		arr[b] = temp;
	}

	// Process sorting
	function sort(arr, cmp) {
		cmp = cmp || comparator;

		var sorted = false,
			i;

		while(!sorted) {
			sorted = true;
			
			for (i = 1; i < arr.length - 1; i += 2) {
				if ( cmp(arr[i], arr[i + 1]) ) {
					swap(arr, i, i + 1);
					sorted = false;
				}
			}

			for (i = 0; i < arr.length - 1; i += 2) {
				if ( cmp(arr[i], arr[i + 1]) ) {
					swap(arr, i, i + 1);
					sorted = false;
				}
			}
		}

		return arr;
	}

	return sort(arr, cmp);

};
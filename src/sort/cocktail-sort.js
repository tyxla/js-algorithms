// Using strict mode
'use strict';

// Define our globals
window.Algorithms = window.Algorithms || {};
Algorithms.Sort = Algorithms.Sort || {};

/**
 * Cocktail sort algorithm.
 * @param {array} arr Array of items to sort.
 * @param {callback} cmp Optional callback to sort by.
 */
Algorithms.Sort.cocktailSort = function(arr, cmp) {

	// Default sort comparator
	function comparator(a, b) {
		if (a < b) {
			return -1;
		}
		if (a > b) {
			return 1;
		}
		return 0;
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
		var start = -1,
			end = arr.length - 2,
			swapped,
			i;

		do {
			swapped = false;
			for (i = ++start; i <= end; i++) {
				if ( cmp(arr[i], arr[i + 1]) > 0 ) {
					swap(arr, i, i + 1);
					swapped = true;
				}
			}

			if (!swapped) {
				break;
			}

			swapped = false;
			for (i = --end; i >= start; i--) {
				if ( cmp(arr[i], arr[i + 1]) > 0 ) {
					swap(arr, i, i + 1);
					swapped = true;
				}
			}
		} while (swapped);

		return arr;
	}

	return sort(arr, cmp);

};
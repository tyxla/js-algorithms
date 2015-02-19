// Using strict mode
'use strict';

// Define our globals
window.Algorithms = window.Algorithms || {};
Algorithms.Sort = Algorithms.Sort || {};

/**
 * Insertion sort algorithm.
 * @param {array} arr Array of items to sort.
 * @param {callback} cmp Optional callback to sort by.
 */
Algorithms.Sort.insertionSort = function(arr, cmp) {

	// Default sort comparator
	function comparator(a, b) {
		return a > b;
	}

	// Process sorting
	function sort(arr, cmp) {
		cmp = cmp || comparator;
		var len = arr.length, 
			i = -1, 
			j, 
			tmp;

		while (len--) {
			tmp = arr[++i];
			j = i;

			while ( j-- && cmp(arr[j], tmp) ) {
				arr[j + 1] = arr[j];
			}
			
			arr[j + 1] = tmp;
		}

		return arr;
	}

	return sort(arr, cmp);

};
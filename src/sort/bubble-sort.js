// Using strict mode
'use strict';

// Define our globals
window.Algorithms = window.Algorithms || {};
Algorithms.Sort = Algorithms.Sort || {};

/**
 * Bubble sort algorithm.
 * @param {array} arr Array of items to sort.
 * @param {callback} cmp Optional callback to sort by.
 */
Algorithms.Sort.bubbleSort = function(arr, cmp) {

	// Default sort comparator
	function comparator(a, b) {
		return a - b;
	}

	// Process sorting
	function sort(arr, cmp) {
		cmp = cmp || comparator;
		var temp;

		for (var i = 0; i < arr.length; i++) {
			for (var j = i; j > 0; j--) {
				if (cmp(arr[j], arr[j - 1]) < 0) {
					temp = arr[j];
					arr[j] = arr[j - 1];
					arr[j - 1] = temp;
				}
			}
		}

		return arr;
	}

	return sort(arr, cmp);

};
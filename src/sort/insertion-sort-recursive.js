// Using strict mode
'use strict';

// Define our globals
window.Algorithms = window.Algorithms || {};
Algorithms.Sort = Algorithms.Sort || {};

/**
 * Insertion sort algorithm - recursive.
 * @param {array} arr Array of items to sort.
 * @param {callback} cmp Optional callback to sort by.
 */
Algorithms.Sort.insertionSortRecursive = function(arr, cmp) {

	// Default sort comparator
	function comparator(a, b) {
		return a - b;
	}

	// Process sorting
	function sort(arr, cmp, max) {
		cmp = cmp || comparator;

		if (typeof max === 'undefined') {
			max = arr.length - 1;
		}

		if (max <= 0) {
			return arr;
		}

		sort(arr, cmp, max - 1);

		for (var i = max - 1, current = arr[max]; i >= 0 && cmp(current, arr[i]) < 0; i -= 1) {
			arr[i + 1] = arr[i];
		}

		arr[i + 1] = current;

		return arr;
	}

	return sort(arr, cmp);

};
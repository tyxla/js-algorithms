// Using strict mode
'use strict';

// Define our globals
window.Algorithms = window.Algorithms || {};
Algorithms.Sort = Algorithms.Sort || {};

/**
 * Quicksort algorithm.
 * @param {array} arr Array of items to sort.
 * @param {callback} cmp Optional callback to sort by.
 */
Algorithms.Sort.quicksort = function(arr, cmp) {

	// Default sort comparator
	function comparator(a, b) {
		return a > b;
	}

	// Process sorting
	function sort(arr, cmp) {
		cmp = cmp || comparator;

		if (arr.length == 0) return [];

		var left = [], right = [], pivot = arr[0];

		for (var i = 1; i < arr.length; i++) {
			cmp(pivot, arr[i]) ? left.push(arr[i]) : right.push(arr[i]);
		}

		return sort(left).concat(pivot, sort(right));
	}

	return sort(arr, cmp);

};
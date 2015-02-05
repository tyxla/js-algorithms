// Using strict mode
'use strict';

// Define our globals
window.Algorithms = window.Algorithms || {};
Algorithms.Sort = Algorithms.Sort || {};

/**
 * Shell sort algorithm.
 * @param {array} arr Array of items to sort.
 * @param {callback} cmp Optional callback to sort by.
 */
Algorithms.Sort.shellSort = function(arr, cmp) {

	// Default sort comparator
	function comparator(a, b) {
		return a < b;
	}

	// Process sorting
	function sort(arr, cmp) {
		cmp = cmp || comparator;

		for (var h = arr.length; h = parseInt(h / 2);) {
			for (var i = h; i < arr.length; i++) {
				var k = arr[i];
				for (var j = i; !cmp(j, h) && cmp(k, arr[j - h]); j -= h) {
					arr[j] = arr[j - h];
				}
				arr[j] = k;
			}
		}

		return arr;
	}

	return sort(arr, cmp);

};
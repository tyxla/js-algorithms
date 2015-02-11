// Using strict mode
'use strict';

// Define our globals
window.Algorithms = window.Algorithms || {};
Algorithms.Sort = Algorithms.Sort || {};

/**
 * Insertion binary sort algorithm.
 * @param {array} arr Array of items to sort.
 * @param {callback} cmp Optional callback to sort by.
 */
Algorithms.Sort.insertionBinarySort = function(arr, cmp) {

	// Default sort comparator
	function comparator(a, b) {
		return a - b;
	}

	// Process sorting
	function sort(arr, cmp) {
		cmp = cmp || comparator;

		var current,
			middle,
			left,
			right;

		for (var i = 1; i < arr.length; i += 1) {
			current = arr[i];
			left = 0;
			right = i;
			middle = Math.floor((left + right) / 2);

			while (left <= right) {
				if (cmp(arr[middle], current) <= 0) {
					left = middle + 1;
				} else if (cmp(arr[middle], current) > 0) {
					right = middle - 1;
				}
				middle = Math.floor((right + left) / 2);
			}

			for (var j = i; j > left; j -= 1) {
				arr[j] = arr[j - 1];
			}

			arr[j] = current;
		}

		return arr;
	}

	return sort(arr, cmp);

};
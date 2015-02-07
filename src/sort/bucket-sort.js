// Using strict mode
'use strict';

// Define our globals
window.Algorithms = window.Algorithms || {};
Algorithms.Sort = Algorithms.Sort || {};

/**
 * Bucket sort algorithm.
 * @requires Algorithms.Sort.insertionSort
 *
 * @param {array} arr Array of items to sort.
 * @param {callback} cmp Optional callback to sort by.
 */
Algorithms.Sort.bucketSort = function(arr, cmp) {

	// Default sort comparator
	function comparator(a, b) {
		return a > b;
	}

	// Process sorting
	function sort(arr, cmp) {
		cmp = cmp || comparator;

		var n = arr.length,
			buckets = [],
			totalBuckets = 10,
			j = 0,
			idx,
			i;

		for (i = 0; i < n; i++) {
			buckets[i] = [];
		}
		
		for (idx in arr) {
			var bucketKey = Math.ceil(arr[idx]/totalBuckets);
			buckets[bucketKey].push(arr[idx]);
		}

		for (i = 0; i < n; i++) {
			if (buckets[i].length) {
				buckets[i] = Algorithms.Sort.insertionSort(buckets[i], cmp);
				
				for (idx in buckets[i]) {
					arr[j++] = buckets[i][idx];
				}
			}
		}

		return arr;
	}

	return sort(arr, cmp);

};
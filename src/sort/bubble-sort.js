'use strict';

window.Algorithms = window.Algorithms || {};
Algorithms.Sort = Algorithms.Sort || {};

Algorithms.Sort.bubbleSort = function(arr, cmp) {

	function comparator(a, b) {
		return a - b;
	}

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
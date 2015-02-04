QUnit.test( "Selection Sort", function( assert ) {
	var original = [1, 10, 5, 3, 11, 9, 31, 4],
		sorted = [1, 3, 4, 5, 9, 10, 11, 31],
		result = Algorithms.Sort.selectionSort(original);

	assert.deepEqual( result, sorted, "Sorting Results" );
});
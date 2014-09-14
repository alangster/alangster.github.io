Basic Methods
	#to_a 
		Returns an array of all elements
	#entries 
		Returns an array of the filenames in the directory on which it was called
	#count 
		Returns the total number of elements 
	#count(value) 
		Returns the number of elments equal to value
	#count {|x| ...} 
		Returns the number of elements for which the block returns true
		e.g. [1,2,3,4,5].count {|x| x%2==0} #=> 2

Iteration
	#each {|x| ...} 
		Yields all elements to code block 
	#each_with_index {|x, i| ...} 
		Yields all elements with their indices to code block
	#each_cons(n) {|x| ...} 	
		Iterates the block for each array of n consective elements
		e.g. (1..5).each_cons(2) {|x| p x} #=> [1,2] [2,3] [3,4] [4,5]
	#each_slice(n) {|x| ...} 
		Iterates the block for each slice of n elements
		e.g. (1..5).each_slice(2) {|x| p x} #=> [1,2] [3,4] [5]
	#reverse_each {|x| ...} 
		Iterates over the elements in reverse order

Questions
	#include?(value) 
		Returns true if any element == value
	#member?(value) 
		Returns true if any element == value
	#all? [{|x| ...}] 
		Returns true if block never returns false for any element
			(Default block is {|x| x})
	#any? [{|x| ...}] 
		Returns true if block ever returns true for any element
			(Default block is {|x| x})
	#none? [{|x| ...}] 
		Returns true if block never returns true for any element
			(Default block is {|x| x})
	#one? [{|x| ...}] 
		Returns true if block returns true for only one element
			(Default block is {|x| x})

Sorting
	#sort [{|a,b} ...}] 
		Returns array sorted by <=> or block
			(Default block is {|a,b| a<=>b})
	#sort_by {|x| ...} 
		Returns array sorted by the return value of the block
		e.g. [1,2,3,4,5,6,7,8].sort_by {|x| x%2} #=> [8,2,6,4,5,3,7,1]
	#max [{|a,b| ...}] 
		Returns maximum element
			(Default block is {|a,b| a<=>b})
	#max_by {|x| ...} 	
		Returns element with maximum block return value
		e.g. [1,2,3,4].max_by {|x| x+2} #=> 4
	#min [{|a,b| ...}] 
		Returns minimum element
			(Default block is {|a,b| a<=>b})
	#min_by {|x| ...} 
		Returns element with minimum block return value
		e.g. [1,2,3,4].max_by {|x| x+2} #=> 1
	#minmax [{|a,b| ...}] 	
		Returns [min, max]
		(Default block is {|a,b| a<=>b})
	#minmax_by {|x| ...} 
		Returns [min, max] using block return value
		e.g. [1,2,3,4].minmax_by {|x| x%2} #=> [2, 1] 

Searching for One Element
	#detect {|x| ...} 
		Returns first element for which block is true
		e.g. [1,2,3,4,5,6].detect {|x| x.between?(3,6)} #=> 3
	#find {|x| ...} 	
		Returns first element for which block is true
		e.g. [1,2,3,4,5].find {|x| x%2==0} => 2 
	#find_index(value) 
		Returns index of first element equal to value
		e.g. [1,2,3,2,1].find_index(2) => 1 
	#find_index {|x| ...} 
		Returns index of first element for which block is true
		e.g. [1,2,3,2,1].find_index {|x| x+2==4} => 1 
	
Filter by Value
	#find_all {|x| ...} 	
		Returns array of all elements for which block returns true
		e.g. [1,2,3,4,5].find_all {|x| x%2==0} => [2, 4] 
	#select {|x| ...} 
		Returns array of all elements for which block returns true
		e.g. [1,2,3,4,5].select {|x| x%2==1} => [1, 3, 5] 
	#reject {|x| ...} 
		Returns array of all elements for which block returns false
		e.g. [1,2,3,4,5].reject {|x| x%2==1} => [2, 4] 
	#grep(pattern) [{|x| ...}] 
		Returns array of block return values for elements where pattern===element
			(Default block is {|x| x})
		e.g. [:alex, :andrew, :alan].grep(/al/) => [:alex, :alan] 

Filtering by Position
	#first 
		Returns first element
	#first(n) 
		Returns array of first n elements
		e.g. [1,2,3,4,5,6].first(3) => [1, 2, 3] 
	#take(n) 
		Returns array of first n elements
		e.g. [1,2,3,4,5,6].take(3) => [1, 2, 3] 
	#take_while {|x| ...} 
		Returns array of all elements before the first element for which block returned false
		e.g. [1,3,5,7,9,10,11,12].take_while {|x| x%2==1} => [1, 3, 5, 7, 9]
	#drop(n) 
		Returns array of all elements after the first n elements
		e.g. [1,2,3,4,5,6,7].drop(3) => [4, 5, 6, 7] 
	#drop_while {|x| ...} 
		Returns array of all elements after and including the first for which the block returned false
		e.g. [1,3,5,7,9,10,11,12].drop_while {|x| x%2==1} => [10, 11, 12] 

Dividing into Subsets
	#chunk {|x| ...} 
		Returns an enumerator for consecutive chunk of elements
			The consecutive elements with the same block value are chunked
			The result enumerator is essentialy [block value [array]]
				Need to call #each to really do anything
		e.g. [3,1,4,1,5,7,6,8].chunk {|x| x.even?}.each {|val, ary| p [val, ary]}
			#=> [false, [3,1]], [true, [4]], [false, [1,5,7]], [true, [6,8]]
	#slice_before(pattern) 
		Returns enumerator for consecutive chunks of elements
			If pattern === element, that element is beginning of a chunk
	#slice_before {|x| ...} 
		Returns enumerator for consecutive chunks of elements
			If block returns true for an element, that element is beginning of chunk
	#partition {|x| ...}
		Returns [true_array, false_array]
		e.g. [3,1,4,1,5,7,6,8].partition {|x| x.even?} => [[4, 6, 8], [3, 1, 1, 5, 7]] 
	#group_by {|x| ...} 
		Returns a hash associating block return values to arrays of elements
			Hash = {return_value_1=>[element(s)], return_value_2=>[element(s)]}
		e.g. [1,2,3,4,5,6,7,8,9].group_by {|x| x%3} => {1=>[1, 4, 7], 2=>[2, 5, 8], 0=>[3, 6, 9]} 

Other
	#collect {|x| ...} 
		Returns an array with the results from the block
		e.g. [1,2,3,4,5].collect {|x| x+1} => [2, 3, 4, 5, 6] 
	#map {|x| ...} 
		Returns an array with the results from the block
		e.g. [1,2,3,4,5].collect {|x| x+1} => [2, 3, 4, 5, 6]
		e.g. [1,2,3,4,5,6].collect {|x| x%2==0} => [false, true, false, true, false, true] 
	#inject(symbol) 
		Combines all elements by appling the binary operation specified by the symbol
		e.g. [1,2,3,4].inject(:+) #=> 10
	#inject(initial) {|memo,x| ...} 
		Combines all elements using memo as an accumulator
			Use optional 'initial' to set an initial value for memo
		e.g. [1,2,3,4,5].inject {|sum, x| sum+x} => 15 
		e.g. [1,2,3,4,5].inject(2) {|sum, x| sum+x} => 17 
	



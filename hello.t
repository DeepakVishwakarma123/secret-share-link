#!/usr/bin/perl
use strict;
use warnings;
use Test::More tests => 3;

# Test 1: Basic arithmetic
is(2 + 2, 4, "Addition works");

# Test 2: String comparison
is("hello", "hello", "String comparison works");

# Test 3: Array length
my @array = (1, 2, 3);
is(scalar(@array), 3, "Array has 3 elements");

done_testing();
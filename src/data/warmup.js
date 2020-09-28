module.exports = [
  {
    title: 'Warmup-1',
    name: 'SleepIn',
    question: `The parameter WEEKDAY is true if it is a weekday, and the parameter
       VACATION is false if we are on vacation. We sleep in if it is not a weekday or
       we're on vacation. Output "TRUE" if we sleep in, "FALSE" if we do not.`,
    inputs: [
      '(TRUE, TRUE)',
      '(TRUE, FALSE)',
      '(FALSE, TRUE)',
      '(FALSE, FALSE)',
    ],
  }, {
    title: 'Warmup-1',
    name: 'MonkeyTrouble',
    question: `We have two monkeys, a and b, and the parameters ASMILE and
            BSMILE indicate if each is smiling. We are in trouble if they are both smiling
            or if neither of them is smiling. Output "TRUE" if we are in trouble, "FALSE" otherwise.`,
    inputs: [
      '(TRUE, TRUE)',
      '(FALSE, FALSE)',
      '(TRUE, FALSE)',
      '(FALSE, TRUE)',
    ],
  }, {
    title: 'Warmup-1',
    name: 'SumDouble',
    question: `Given two numbers, output their sum. Unless the two values are the same,
     then output double their sum.`,
    inputs: [
      '(1, 2)',
      '(3, 2)',
      '(2, 2)',
      '(-1, 0)',
      '(3, 3)',
      '(0, 0)',
      '(0, 1)',
      '(3, 4)',
    ],
  }, {
    title: 'Warmup-1',
    name: 'Diff21',
    question: `Given an number, N, output the absolute difference between N and 21,
              except output double the absolute difference if N is over 21.`,
    inputs: [
      '(19)',
      '(10)',
      '(21)',
      '(22)',
      '(25)',
      '(30)',
      '(0)',
      '(1)',
      '(2)',
      '(-1)',
      '(-2)',
      '(50)',
    ],
  }, {
    title: 'Warmup-1',
    name: 'ParrotTrouble',
    question: `We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23.
  We are in trouble if the parrot is talking and the hour is before 7 or after 20.
  Output "TRUE" if we are in trouble.`,
    inputs: [
      '(TRUE, 6)',
      '(TRUE, 7)',
      '(FALSE, 6)',
      '(TRUE, 21)',
      '(FALSE, 21)',
      '(TRUE, 23)',
      '(FALSE, 23)',
      '(TRUE, 20)',
      '(FALSE, 12)',
    ],
  }, {
    title: 'Warmup-1',
    name: 'Makes10',
    question: 'Given 2 numbers, A and B, Output "TRUE" if one if them is 10 or if their sum is 10.',
    inputs: [
      '(9, 10)',
      '(9, 9)',
      '(1, 9)',
      '(10, 1)',
      '(10, 10)',
      '(8, 2)',
      '(8, 3)',
      '(10, 42)',
      '(12, -2)',
    ],
  }, {
    title: 'Warmup-1',
    name: 'NearHundred',
    question: `Given a number N, Output "TRUE" if it is within 10 of 100 or 200.`,
    inputs: [
      '(93)',
      '(90)',
      '(89)',
      '(110)',
      '(111)',
      '(121)',
      '(0)',
      '(5)',
      '(191)',
      '(189)',
    ],
  }, {
    title: 'Warmup-1',
    name: 'posNeg',
    question: `Given 2 int values, Output "TRUE" if one is negative and one is positive.
        Except if the parameter "negative" is true, then Output "TRUE" only if both are negative.`,
    inputs: [
      '(1, -1, false)',
      '(-1, 1, false)',
      '(-4, -5, true)',
      '(-4, -5, false)',
      '(-4, 5, false)',
      '(-4, 5, true)',
      '(1, 1, false)',
      '(-1, -1, false)',
      '(1, -1, true)',
      '(-1, 1, true)',
      '(1, 1, true)',
      '(-1, -1, true)',
      '(5, -5, false)',
      '(-6, 6, false)',
      '(-5, -6, false)',
      '(-2, -1, false)',
      '(1, 2, false)',
      '(-5, 6, true)',
      '(-5, -5, true)',
    ],
  }, {
    title: 'Warmup-1',
    name: 'notString',
    question: `Given a string, return a new string where "not " has been added to the front. However,
    if the string already begins with "not", return the string unchanged.`,
    inputs: [
      "('candy')",
      "('x')",
      "('not bad')",
      "('bad')",
      "('not')",
      "('is not')",
      "('no')",
    ],
  }, {
    title: 'Warmup-1',
    name: 'missingChar',
    question: `Given a non-empty string and an int n, return a new string where the char at index n has been removed.
  The value of n will be a valid index of a char in the original string (i.e. n will be in the range
    0..str.length()-1 inclusive).`,
    inputs: [
      "('kitten', 1)",
      "('kitten', 0)",
      "('kitten', 4)",
      "('Hi', 0)",
      "('Hi', 1)",
      "('code', 0)",
      "('code', 1)",
      "('code', 2)",
      "('code', 3)",
      "('chocolate', 8)",
    ],
  }, {
    title: 'Warmup-1',
    name: 'frontBack',
    question: `Given a string, return a new string where the first and last chars have
          been exchanged.`,
    inputs: [
      "('code')",
      "('a')",
      "('ab')",
      "('abc')",
      "('')",
      "('Chocolate')",
      "('aavj')",
      "('hello')",
    ],
  }, {
    title: 'Warmup-1',
    name: 'front3',
    inputs: [
      "('Java')",
      "('Chocolate')",
      "('abc')",
      "('abcXYZ')",
      "('ab')",
      "('a')",
      "('')",
    ],
    question: `Given a string, we'll say that the front is the first 3 chars of the string.
            If the string length is less than 3, the front is whatever is there. Return a new
            string which is 3 copies of the front.`,
  }, {
    title: 'Warmup-1',
    name: 'backAround',
    inputs: [
      "('cat')",
      "('Hello')",
      "('a')",
      "('abc')",
      "('read')",
      "('boo')",
    ],
    question: `Given a string, take the last char and return a new string with the last
            char added at the front and back, so 'cat' yields 'tcatt' The original string will be
            length 1 or more.`,
  }, {
    title: 'Warmup-1',
    name: 'or35',
    inputs: [
      '(3)',
      '(10)',
      '(8)',
      '(15)',
      '(5)',
      '(4)',
      '(9)',
      '(4)',
      '(7)',
      '(6)',
      '(17)',
      '(18)',
      '(29)',
      '(20)',
      '(21)',
      '(22)',
      '(45)',
      '(99)',
      '(100)',
      '(101)',
      '(121)',
      '(122)',
      '(123)',
    ],
    question: `Output "TRUE" if the given non-negative number is a multiple of 3 or a
            multiple of 5. (Hint: Use the % 'mod' operator)`,
  }, {
    title: 'Warmup-1',
    name: 'front22',
    inputs: [
      "('kitten')",
      "('Ha')",
      "('abc')",
      "('ab')",
      "('a')",
      "('')",
      "('Logic')",
    ],
    question: `Given a string, take the first 2 chars and return the string with the 2
            chars added at both the front and back, so 'kitten' yields 'kikittenki' chars are
            there.`,
  }, {
    title: 'Warmup-1',
    name: 'startHi',
    inputs: [
      "('hi there')",
      "('hi')",
      "('hello hi')",
      "('he')",
      "('h')",
      "('')",
      "('ho hi')",
      "('hi ho')",
    ],
    question: `Given a string, Output "TRUE" if the string starts with 'hi'and
            false otherwise.`,
  }, {
    title: 'Warmup-1',
    name: 'icyHot',
    inputs: [
      '(120, -1)',
      '(-1, 120)',
      '(2, 120)',
      '(-1, 100)',
      '(-2, 120)',
      '(120, 120)',
    ],
    question: `Given two temperatures, Output "TRUE" if one is less than 0 and the
              other is greater than 100.`,
  }, {
    title: 'Warmup-1',
    name: 'in1020',
    inputs: [
      '(12, 99)',
      '(21, 12)',
      '(8, 99)',
      '(99, 10)',
      '(20, 20)',
      '(21, 21)',
      '(9, 9)',
    ],
    question: `Given 2 int values, Output "TRUE" if either of them is in the range
              10..20 inclusive.`,
  }, {
    title: 'Warmup-1',
    name: 'hasTeen',
    inputs: [
      '(13, 20, 10)',
      '(20, 19, 10)',
      '(20, 10, 13)',
      '(1, 20, 12)',
      '(19, 20, 12)',
      '(12, 20, 19)',
      '(12, 9, 20)',
      '(12, 18, 20)',
      '(14, 2, 20)',
      '(4, 2, 20)',
      '(11, 22, 22)',
    ],
    question: `We'll say that a number is 'teen' if it is in the range 13..19 inclusive. Given 3 int values,
                Output "TRUE" if 1 or more of them are teen.`,
  }, {
    title: 'Warmup-1',
    name: 'loneTeen',
    inputs: [
      '(13, 99)',
      '(21, 19)',
      '(13, 13)',
      '(14, 20)',
      '(20, 15)',
      '(16, 17)',
      '(16, 9)',
      '(16, 18)',
      '(13, 19)',
      '(13, 20)',
      '(6, 18)',
      '(99, 13)',
      '(99, 99)',
    ],
    question: `We'll say that a number is 'teen' if it is in the range 13..19 inclusive.
                Given 2 int values, Output "TRUE" if one or the other is teen, but not both.`,
  }, {
    title: 'Warmup-1',
    name: 'delDel',
    inputs: [
      "('adelbc')",
      "('adelHello')",
      "('abcdel')",
      "('add')",
      "('ad')",
      "('a')",
      "('')",
      "('del')",
      "('adel')",
      "('aadelbb')",
    ],
    question: `Given a string, if the string "del" appears starting at index 1,
                  return a string where that "del" has been deleted. Otherwise, return the string
                  unchanged.`,
  }, {
    title: 'Warmup-1',
    name: 'mixStart',
    inputs: [
      "('mix snacks')",
      "('pix snacks')",
      "('piz snacks')",
      "('nix')",
      "('ni')",
      "('n')",
    ],
    question: `Output "TRUE" if the given string begins with 'mix', except the 'm' can be
                  anything, so 'pix', '9ix' .. all count.`,
  }, {
    title: 'Warmup-1',
    name: 'startOz',
    inputs: [
      "('ozymandias')",
      "('bzoo')",
      "('oxx')",
      "('ounce')",
      "('o')",
      "('abc')",
      "('')",
      "('zoo')",
      "('aztec')",
      "('zzzz')",
      "('oznic')",
    ],
    question: `Given a string, return a string made of the first 2 chars (if present),
                   however include first char only if it is 'o' and include the second only if it
                   is 'z', so 'ozymandias' yields 'oz'.`,
  },
  {
    title: 'Warmup-1',
    name: 'intMax',
    inputs: [
      '(1, 2, 3)',
      '(1, 3, 2)',
      '(3, 2, 1)',
      '(9, 3, 3)',
      '(3, 9, 3)',
      '(3, 3, 9)',
      '(8, 2, 3)',
      '(-3, -1, -2)',
      '(6, 2, 5)',
      '(5, 6, 2)',
      '(5, 2, 6)',
    ],
    question: 'Given three int values, a b c, return the largest.',
  },
  {
    title: 'Warmup-1',
    name: 'close10',
    inputs: [
      '(8, 13)',
      '(13, 8)',
      '(13, 7)',
      '(7, 13)',
      '(9, 13)',
      '(13, 8)',
      '(10, 12)',
      '(11, 10)',
      '(5, 21)',
      '(0, 20)',
      '(0, 20)',
      '(10, 10)',
    ],
    question: `Given 2 int values, return whichever value is nearest to the value 10,
                 or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute
                  value of a number.`,
  },
  {
    title: 'Warmup-1',
    name: 'in3050',
    inputs: [
      '(30, 31)',
      '(30, 41)',
      '(40, 50)',
      '(40, 51)',
      '(39, 50)',
      '(50, 39)',
      '(40, 39)',
      '(49, 48)',
      '(50, 40)',
      '(50, 51)',
      '(35, 36)',
      '(35, 45)',
    ],
    question: `Given 2 int values, Output "TRUE" if they are both in the range 30..40
                inclusive, or they are both in the range 40..50 inclusive.`,
  },
  {
    title: 'Warmup-1',
    name: 'max1020',
    inputs: [
      '(11, 19)',
      '(19, 11)',
      '(11, 9)',
      '(9, 21)',
      '(10, 21)',
      '(21, 10)',
      '(9, 11)',
      '(23, 10)',
      '(20, 10)',
      '(7, 20)',
      '(17, 16)',
    ],
    question: `Given 2 positive int values, return the larger value that is in the range
                10..20 inclusive, or return 0 if neither is in that range.`,
  },
  {
    title: 'Warmup-1',
    name: 'stringE',
    inputs: [
      "('Hello')",
      "('Heelle')",
      "('Heelele')",
      "('HII')",
      "('e')",
      "('')",
    ],
    question: 'Output "TRUE" if the given string contains between 1 and 3 \'e\' chars.',
  },
  {
    title: 'Warmup-1',
    name: 'lastDigit',
    inputs: [
      '(7, 17)',
      '(6, 17)',
      '(3, 113)',
      '(114, 113)',
      '(114, 4)',
      '(10, 0)',
      '(11, 0)',
    ],
    question: `Given two non-negative int values, Output "TRUE" if they have the same
                last digit, such as with 27 and 57. Note that the % 'mod' operator computes
                remainders, so 17 % 10 is 7.`,
  }, {
    title: 'Warmup-1',
    name: 'endUp',
    inputs: [
      "('Hello')",
      "('hi there')",
      "('hi')",
      "('woo hoo')",
      "('xyz12')",
      "('x')",
      "('')",
    ],
    question: `Given a string, return a new string where the last 3 chars are now in
                upper case. If the string has less than 3 chars, uppercase whatever is there.
                Note that str.toUpperCase() returns the uppercase version of a string.`,
  }, {
    title: 'Warmup-1',
    name: 'everyNth',
    inputs: [
      "('Miracle', 2)",
      "('abcdefg', 2)",
      "('abcdefg', 3)",
      "('Chocolate', 3)",
      "('Chocolates', 3)",
      "('Chocolates', 4)",
      "('Chocolates', 100)",
    ],
    question: `Given a non-empty string and an int N, return the string made starting
                  with char 0, and then every Nth char of the string. So if N is 3, use char 0, 3, 6,
                   ... and so on. N is 1 or more.`,
  },
  {
    title: 'Warmup-2',
    name: 'stringTimes',
    inputs: [
      "('Hi', 2)",
      "('Hi', 3)",
      "('Hi', 1)",
      "('Hi', 0)",
      "('Hi', 5)",
      "('Oh Boy!', 2)",
      "('x', 4)",
      "('', 4)",
      "('code', 2)",
      "('code', 3)",
    ],
    question: `Given a string and a non-negative int n, return a larger string that is n
        copies of the original string.`,
  }, {
    title: 'Warmup-2',
    name: 'frontTimes',
    inputs: [
      "('Chocolate', 2)",
      "('Chocolate', 3)",
      "('Abc', 3)",
      "('Ab', 4)",
      "('A', 4)",
      "('',4)",
      "('Abc', 0)",
    ],
    question: `Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars,
          or whatever is there if the string is less than length 3. Return n copies of the front.`,
  }, {
    title: 'Warmup-2',
    name: 'countXX',
    inputs: [
      "('abcxx')",
      "('xxx')",
      "('xxxx')",
      "('abc')",
      "('Hello There')",
      "('Hexxo Thxxe')",
      "('')",
      "('Kittens')",
      "('Kittensxxx')",
    ],
    question: `Count the number of 'xx' in the given string. We'll say that overlapping
          is allowed, so 'xxx' contains 2 'xx'.`,
  }, {
    title: 'Warmup-2',
    name: 'doubleX',
    inputs: [
      "('axxbb')",
      "('axaxax')",
      "('xxxxx')",
      "('xaxxx')",
      "('aaaax')",
      "('')",
      "('abc')",
      "('x')",
      "('xx')",
      "('xaxx')",
    ],
    question: `Given a string, Output "TRUE" if the first instance of "x" in the string is
           immediately followed by another "x".`,
  }, {
    title: 'Warmup-2',
    name: 'stringBits',
    inputs: [
      "('Hello')",
      "('Hi')",
      "('Heeololeo')",
      "('HiHiHi')",
      "('')",
      "('Greetings')",
      "('Chocolate')",
      "('pi')",
      "('Hello Kitten')",
      "('hxaxpxpxy')",
    ],
    question: `Given a string, return a new string made of every other char starting
          with the first, so "Hello" yields "Hlo".`,
  }, {
    title: 'Warmup-2',
    name: 'stringSplosion',
    question: 'Given a non-empty string like "Code" return a string like "CCoCodCode".',
    inputs: [], // TODO: write inputs here
  }, {
    title: 'Warmup-2',
    name: 'last2',
    inputs: [
      "('hixxhi')",
      "('xaxxaxaxx')",
      "('axxaaxx')",
      "('xxaxxaxxaxx')",
      "('xaxaxaa')",
      "('xxxx')",
      "('13121312')",
      "('11212')",
      "('13121311')",
      "('hi')",
      "('h')",
      "('')",
    ],
    question: `Given a string, return the count of the number of times that a substring
          length 2 appears in the string and also as the last 2 chars of the string, so
          "hixxxhi" yields 1 (we won't count the end substring).`,
  }, {
    title: 'Warmup-2',
    name: 'arrayCount9',
    inputs: [
      '([1,2,9])',
      '([1,9,9])',
      '([1,9,9,3,9])',
      '([1,2,3])',
      '([])',
      '([4,2,4,3,1])',
      '([9,2,4,3,1])',
    ],
    question: 'Given an array of ints, return the number of 9\'s in the array.',
  }, {
    title: 'Warmup-2',
    name: 'arrayFront9',
    inputs: [
      '([1,2,9,3,4])',
      '([1,2,3,4,9])',
      '([1,2,3,4,5])',
      '([9,2,3])',
      '([1,9,9])',
      '([1,2,3])',
      '([1,9])',
      '([5,5])',
      '([2])',
      '([9])',
      '([])',
      '([3,9,2,3,3])',
    ],
    question: `Given an array of ints, Output "TRUE" if one of the first 4 elements in
          the array is a 9. The array length may be less than 4.`,
  }, {
    title: 'Warmup-2',
    name: 'array123',
    question: `Given an array of ints, Output "TRUE" if the sequence of numbers 1, 2, 3
        appears in the array somewhere.`,
    inputs: [], // TODO
  }, {
    title: 'Warmup-2',
    name: 'stringMatch',
    inputs: [
      "('xxcaazz', 'xxbaaz')",
      "('abc', 'abc')",
      "('abc', 'axc')",
      "('hello', 'he')",
      "('he', 'hello')",
      "('', 'hello')",
      "('aabbccdd', 'abbbxxd')",
      "('aaxxaaxx', 'iaxxai')",
      "('iaxxai', 'aaxxaaxx')",
    ],
    question: `Given 2 strings, a and b, return the number of the positions where they contain the same length 2 substring.
          So "xxcaazz" and "xxbaaz" yields 3, since the "xx" "xx", "aa", and "az" substrings appear in the same place in both strings.`,
  }, {
    title: 'Warmup-2',
    name: 'stringX',
    inputs: [
      "('xxHxix')",
      "('abxxxcd')",
      "('xabxxxcdx')",
      "('xKittenx')",
      "('Hello')",
      "('xx')",
      "('x')",
      "('')",
    ],
    question: `Given a string, return a version where all the "x" have been removed.
            Except an "x" at the very start or end should not be removed.`,
  }, {
    title: 'Warmup-2',
    name: 'altPairs',
    inputs: [
      "('kitten')",
      "('Chocolate')",
      "('CodingHorror')",
      "('yak')",
      "('ya')",
      "('y')",
      "('')",
      "('ThisThatTheOther')",
    ],
    question: `Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ...
            so "kittens" yields "kien".`,
  }, {
    title: 'Warmup-2',
    name: 'stringYak',
    inputs: [
      "('yakpak')",
      "('pakyak')",
      "('yak123ya')",
      "('yak')",
      "('yakxxxyak')",
      "('xxcaazz', 'hiyakHi')",
      "('xxxyakyyyakzzz')",
    ],
    question: `Suppose the string "yak" is unlucky. Given a string, return a version
            where all the "yak" are removed, but the "a" can be any char. The "yak" strings
            will not overlap.`,
  }, {
    title: 'Warmup-2',
    name: 'array667',
    inputs: [
      '([6,6,2])',
      '([6,6,2,6])',
      '([6,7,2,6])',
      '([6,6,2,7,6,7])',
      '([1,6,3])',
      '([6,1])',
      '([])',
      '([3,6,7,6])',
      '([3,6,6,7])',
      '([6,3,6,6])',
      '([6,7,6,6])',
      '([1,2,3,5,6])',
      '([1,2,3,6,6])',
    ],
    question: `Given an array of ints, return the number of times that two 6's
              are next to each other in the array. Also count instances where the second
              "6" is actually a 7.`,
  }, {
    title: 'Warmup-2',
    name: 'noTriples',
    inputs: [
      '([1,1,2,2,1])',
      '([1,1,2,2,2,1])',
      '([1,1,2,2,2,1])',
      '([1,2,1])',
      '([1,1,1])',
      '([1,1])',
      '([1])',
      '([1])',
      '([])',
    ],
    question: `Given an array of ints, we'll say that a triple is a value appearing 3 times
                in a row in the array. Output "TRUE" if the array does not contain any triples.`,
  }, {
    title: 'Warmup-2',
    name: 'has271',
    inputs: [
      '([1,2,7,1])',
      '([1,2,8,1])',
      '([2,7,1])',
      '([3,8,2])',
      '([2,7,3])',
      '([2,7,4])',
      '([2,7,-1])',
      '([2,7,-2])',
      '([4,5,3,8,0])',
      '([2,7,5,10,4])',
      '([2,7,-2,4,9,3])',
      '([2,7,5,10,1])',
      '([2,7,-2,10,2])',
    ],
    question: `Given an array of ints, Output "TRUE" if it contains a 2, 7, 1
                pattern -- a value, followed by the value plus 5, followed by the value
                minus 1. Additionally the 271 counts even if the "1" differs by 2 or less
                from the correct value.`,
  }
];
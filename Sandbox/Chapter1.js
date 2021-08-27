class Chapter1 {
    constructor() {}
    
    runTest(runUnitTests) {
        if(runUnitTests) this.runUnitTests();
        console.log('Question 1');
        let question1TestScenarios = [
            [this.question1('abcdefg'), true],
            [this.question1('aabbccdd'), false],
            [this.question1('abccba'), false]
        ];
        this.checkQuestion(question1TestScenarios);
        console.log('Question 2');
        let question2TestScenarios = [
            [ this.question2('abc', 'cba'), true ],
            [ this.question2('abc', 'ccba'), false ],
            [ this.question2('abc', 'cca'), false ],
            [ this.question2('abcc', 'cbaa'), false ]
        ];
        this.checkQuestion(question2TestScenarios);
        console.log('Question 3');
        let question3TestScenarios = [
            [ this.question3('This Is A Regular Test'), 'This%20Is%20A%20Regular%20Test' ],
            [ this.question3('Space At End    '), 'Space%20At%20End' ],
            [ this.question3('      Space At Beginning'), 'Space%20At%20Beginning' ],
            [ this.question3('Space     In Middle Left'), 'Space%20In%20Middle%20Left' ],
            [ this.question3('Multiple   Long    Spaces    In    Middle'), 'Multiple%20Long%20Spaces%20In%20Middle' ],
            [ this.question3('    Multiple   Long    Spaces    In    Middle    And    Ends   '), 'Multiple%20Long%20Spaces%20In%20Middle%20And%20Ends' ],
        ];
        this.checkQuestion(question3TestScenarios);
        console.log('Question 4');
        let question4TestScenarios = [

            [ this.question4('taco cat'), true ],
            [ this.question4('racecar'), true ],
            [ this.question4('ccaarre'), true ],
            [ this.question4('cact aot'), true ],
            [ this.question4('giraffe'), false ],
            [ this.question4('aaa'), true ],
            [ this.question4('aaabbb'), false ],
            [ this.question4('baba'), true ],
        ];
        this.checkQuestion(question4TestScenarios);
        console.log('Question 5');
        let question5TestScenarios = [
            [ this.question5('pale', 'ple'), true ],
            [ this.question5('pale', 'pales'), true ],
            [ this.question5('pales', 'pale'), true ],
            [ this.question5('pasle', 'pale'), true ],
            [ this.question5('pale', 'bale'), true ],
            [ this.question5('pale', 'bake'), false ],
            [ this.question5('pale', 'ble'), false ],
        ];
        this.checkQuestion(question5TestScenarios);
        console.log('Question 6');
        let question6TestScenarios = [
            [ this.question6('a'), 'a' ],
            [ this.question6('aa'), 'aa' ],
            [ this.question6('aaa'), 'a3' ],
            [ this.question6('aaaab'), 'a4b1' ],
            [ this.question6('hello'), 'hello' ],
            [ this.question6('helllllolll'), 'h1e1l5o1l3' ],
        ];
        this.checkQuestion(question6TestScenarios);
        console.log('Question 7');
        let matrices = [
            [
                [1]
            ],
            [
                [1, 2],
                [3, 4]
            ],
            [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ],
            [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12],
                [13, 14, 15, 16]
            ],
            [
                [1, 2, 3, 4, 5],
                [6, 7, 8, 9, 10],
                [11, 12, 13, 14, 15],
                [16, 17, 18, 19, 20],
                [21, 22, 23, 24, 25],
            ]
        ]
        let expectedMatrices = [
            [
                [1]
            ],
            [
                [3, 1],
                [4, 2]
            ],
            [
                [7, 4, 1],
                [8, 5, 2],
                [9, 6, 3]
            ],
            [
                [13, 9, 5, 1],
                [14, 10, 6, 2],
                [15, 11, 7, 3],
                [16, 12, 8, 4]
            ],
            [
                [21, 16, 11, 6, 1],
                [22, 17, 12, 7, 2],
                [23, 18, 13, 8, 3],
                [24, 19, 14, 9, 4],
                [25, 20, 15, 10, 5],
            ]
        ]
        let testScenarios7 = [
            [this.question7(matrices[0]).toString(), expectedMatrices[0].toString()],
            [this.question7(matrices[1]).toString(), expectedMatrices[1].toString()],
            [this.question7(matrices[2]).toString(), expectedMatrices[2].toString()],
            [this.question7(matrices[3]).toString(), expectedMatrices[3].toString()],
            [this.question7(matrices[4]).toString(), expectedMatrices[4].toString()]
        ];
        this.checkQuestion(testScenarios7);

        console.log('Question 8');
        let question8TestScenarios = [
            [ 
                this.question8([[1, 1], [1, 0]]).toString(), 
                [[1, 0], [0, 0]].toString()
            ],
            [
                this.question8([[1, 1, 1],[1, 0, 1]]).toString(), 
                [[1, 0, 1], [0, 0, 0]].toString()
            ], 
            [
                this.question8([[1, 1, 1],[1, 0, 1], [1, 1, 1]]).toString(), 
                [[1, 0, 1], [0, 0, 0], [1, 0, 1]].toString()
            ]
        ];
        this.checkQuestion(question8TestScenarios);

        console.log('Question 9');
        let testScenarios9 = [
            [ this.question9('waterbottle', 'erbottlewat'), true ],
            [ this.question9('fungus', 'erbottlewat'), false ],
            [ this.question9('bottle', 'erbottlewat'), false ],
            [ this.question9('bottlewater', 'erbottlewat'), true ],
        ]
        this.checkQuestion(testScenarios9);

    }

    runUnitTests(){
        console.log('Unit Tests');
        console.log('question5 - compareEqualLengthStrings');
        let tests = [
            [ this.compareEqualLengthStrings('aa', 'aa'),  0 ],
            [ this.compareEqualLengthStrings('aa', 'ba'),  1 ],
            [ this.compareEqualLengthStrings('aa', 'ab'),  1 ],
            [ this.compareEqualLengthStrings('aa', 'a'),  -1 ],
            [ this.compareEqualLengthStrings('a', 'aa'),  -1 ],
        ];
        this.checkQuestion(tests);
        console.log('question7 - getColumn');
        const matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];
        tests = [
            [this.getColumn(matrix, 2, 0, 2).toString(), [3, 6, 9].toString()],
            [this.getColumn(matrix, 0, 2, 0, true).toString(), [7, 4, 1].toString()],
            [this.getRow(matrix, 0, 0, 2).toString(), [1, 2, 3].toString()],
            [this.getRow(matrix, 2, 2, 0, true).toString(), [9, 8, 7].toString()],
        ];
        this.checkQuestion(tests);
    }

    checkQuestion(tupleArray) {
        let success = [];
        for(let i = 0; i < tupleArray.length; i++){
            if(tupleArray[i][0] === tupleArray[i][1]) success.push('PASS');
            else success.push('FAILURE');
        }
        console.log(success.join('\n'));
        console.log();
    }

    /**
     * Given a string check if all the characters in it are unique
     * @param {string} uniqueString 
     * @returns Boolean whether a string has all unique characters or not
     */
    question1(uniqueString){
        let characters = {};
        for(let i = 0; i < uniqueString.length; i++) {
            if(characters.hasOwnProperty(uniqueString.charAt(i))) return false;
            characters[uniqueString.charAt(i)] = '';
        }
        return true;
    }

    /**
     * Given two strings, determines if they are a permutation of each other.
     * @param {string} stringOne 
     * @param {string} stringTwo 
     * @returns Boolean of whether two strings are a permutation of each other
     */
    question2(stringOne, stringTwo){
        if(stringOne === stringTwo) return true;
        if(stringOne.length !== stringTwo.length) return false;
        let characters = {};
        for(let i = 0; i < stringOne.length; i++) {
            let char = stringOne.charAt(i);
            if(!characters.hasOwnProperty(char)) characters[char] = 0;
            characters[char]++;
        }
        for(let k = 0; k < stringTwo.length; k++) {
            let char = stringTwo.charAt(k);
            if(!characters.hasOwnProperty(char)) return false;
            if(--characters[char] < 0) return false;
            else if(characters[char] === 0) delete characters[char];
        }
        for(const char in characters){
            return false;
        }
        return true;
    }

    /**
     * Given a string replaces spaces with a string to %20
     * @param {string} urlString 
     * @returns A copy of the string where spaces are changed to %20
     */
    question3(urlString){
        let returnString = urlString.slice();
        returnString = returnString.trim();
        returnString = returnString.replace(/\s+/g, '%20');
        return returnString;
    }

    /**
     * Given a string, strips spaces and checks if a palindrome can be created
     * @param {string} palindrome 
     * @returns Boolean of if a palindrome can be created
     */
    question4(palindrome){
        let characters = {};
        let foundOdd = false;
        palindrome = palindrome.toLowerCase();
        palindrome = palindrome.replace(/\s+/g, '');
        for(let i = 0; i < palindrome.length; i++){
            let char = palindrome.charAt(i);
            if(!characters.hasOwnProperty(char)) characters[char] = 0;
            characters[char]++;
        }
        for(const char in characters){
            if(characters[char] % 2){
                if(foundOdd) return false;
                foundOdd = true;
            }
        }
        return true;
    }

    /**
     * Compares two equal length strings and returns the number of differences
     * @param {string} str1 
     * @param {string} str2 
     * @returns Integer
     */
    compareEqualLengthStrings(str1, str2){
        if(str1.length !== str2.length) return -1;
        let difference = 0;
        for(const index in str1) {
            difference = str1.charAt(index) === str2.charAt(index) ? difference : difference + 1;
        }
        return difference;
    }

    /**
     * Given Two Inequal Length Strings, compares if they are similar to only having a
     * single character added or removed
     * @param {string} str1 
     * @param {string} str2 
     * @returns -1 if invalid, or 0 or 1 if valid.
     */
    compareInequalLengthStrings(str1, str2){
        if(str1.length === str2.length) return -1;
        let difference = str1.length - str2.length;
        let largeString = difference > 0 ? str1 : str2;
        let shortString = difference < 0 ? str1 : str2;
        difference = 0;
        let largePointer = 0;
        let shortPointer = 0;
        while(shortPointer < shortString.length){
            while(largeString.charAt(largePointer) !== shortString.charAt(shortPointer)){
                if(difference > 1) return -1;
                largePointer++;
                difference++;
            }
            largePointer++;
            shortPointer++;
        }
        return difference;
    }

    /**
     * Given two strings determine if only one or less of these 3 operations was done on them:
     * Insert a Character
     * Remove a Character
     * Replace a Character
     * @param {string} original 
     * @param {string} altered 
     * @returns valid flag
     */
    question5(original, altered) {
        if(original === altered) return true;
        switch(Math.abs(original.length - altered.length)){
            case 0:
                let replacements = this.compareEqualLengthStrings(original, altered);
                return replacements >= 0 && replacements <= 1 
            case 1:
                let differences = this.compareInequalLengthStrings(original, altered);
                return differences >= 0;
            default:
                return false;
        }
    }

    /**
     * Given a string compress it to the character followed by the number of repeating characters.
     * @param {string} stringToCompress 
     * @returns compressed string
     */
    question6(stringToCompress){
        let characterArray = [];
        let currentIndex = 0;
        let lastIndex = 1;
        while(currentIndex < stringToCompress.length) {
            while(lastIndex < stringToCompress.length && 
                stringToCompress.charAt(lastIndex) === stringToCompress.charAt(currentIndex)) lastIndex++;
            characterArray.push(stringToCompress.charAt(currentIndex), (lastIndex - currentIndex).toString());
            currentIndex = lastIndex;
        }
        if(stringToCompress.length > characterArray.length) return characterArray.join('');
        return stringToCompress;
    }

    /**
     * Given a Matrix of N x N, a start row and an endRow and a column, copies
     * the values in that column of the given length and returns it.
     * @param {2D_Array} matrix 
     * @param {Integer} column 
     * @param {Integer} startRow 
     * @param {Integer} endRow 
     * @param {Boolean} reverse 
     * @returns {Array} A Column with the matrix from the Start Row to End Row
     */
    getColumn(matrix, column, startRow, endRow, reverse){
        let output = [];
        if(reverse)
            for(let row = startRow; row >= endRow; row--)
                output.push(matrix[row][column]);
        else
            for(let row = startRow; row <= endRow; row++)
                output.push(matrix[row][column]);
        return output;
    }

    /**
     * Given a Matrix of N x N, a start column and an end column,
     * copies the values in that row between the included indicies and returns it.
     * @param {2D_Array} matrix 
     * @param {Integer} row 
     * @param {Integer} startColumn 
     * @param {Integer} endColumn 
     * @param {Boolean} reverse 
     * @returns {Array} A Row from the matrix, from the starting column to end column
     */
    getRow(matrix, row, startColumn, endColumn, reverse){
        let output = [];
        if(reverse)
            for(let column = startColumn; column >= endColumn; column--)
                output.push(matrix[row][column]); 
        else
            for(let column = startColumn; column <= endColumn; column++)
                output.push(matrix[row][column]);
        return output;
    }
    
    /**
     * Given a matrix of N x N, rotate it 90 degrees;
     * @param {2D_Array} pixelMatrix 
     * @returns {2D_Array} Copy of the Given Matrix Rotated 90 Degrees
     */
    question7(pixelMatrix){
        let matrix = [];
        let reversed = true;
        for(let index = 0; index < pixelMatrix.length; index++){
            matrix.push(this.getColumn(pixelMatrix, index, pixelMatrix.length - 1, 0, reversed))
        }
        return matrix;
    }
    
    /**
     * Given a Matrix of N x M, wherever a zero is found change its row and Column to zeroes.
     * @param {2D_Array} matrix - Uniform Matrix of N x M Size
     * @returns the modified matrix
     */
    question8(matrix){
        let columns = {};
        let rows = {};
        for(let row = 0; row < matrix.length; row++){
            for(let column = 0; column < matrix[row].length; column++){
                if(matrix[row][column] === 0) {
                    columns[column] = true;
                    rows[row] = true;
                }
            }
        }
        for(const column in columns){
            for(let row = 0; row < matrix.length; row++){

                matrix[row][column] = 0;
            }
        }
        for(const row in rows) {
            matrix[row] = Array(matrix[row].length).fill(0);
        }
        return matrix;
    }
    
    /**
     * Given a Test String, check if a given String can be Rotated Into it
     * Using only one call to includes
     * @param {string} testString 
     * @param {string} rotatedString 
     * @returns {Boolean} Whether a given test string is a rotated version of the rotated string
     */
    question9(testString, rotatedString){
        if(testString.length !== rotatedString.length) return false;
        let duplicatedString = rotatedString + rotatedString;
        return duplicatedString.includes(testString);
    }
}
const chapter1 = new Chapter1();
chapter1.runTest();
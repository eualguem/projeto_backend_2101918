var utils = {
    isEmpty: function (array) {
        return array.length == 0;
    },

    average: function (array) {
        sum = 0;
        for (i = 0; i < array.length; i++) {
            sum = sum + array[i];
        }
        var media = sum / array.length;
        return media;
    },


    min: function (array) {
        var minNumber = array[0];
        for (let i = 0; i < array.length; i++) {
            if (minNumber > array[i]) {
                minNumber = array[i];
            }
        }
        return minNumber;
    },
    max: function (array) {
        var maxNumber = array[0];
        for (let i = 0; i < array.length; i++) {
            if (maxNumber < array[i]) {
                maxNumber = array[i];
            }
        }
        return maxNumber;
    },

    indexof: function (array, value) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] == value)
                return i;
        }
    },

    subarray: function (array, startIndex, endIndex) {
        var sarray = [];
        for (let i = startIndex; i <= endIndex; i++) {
            sarray.push(array[i]);
        }
        return sarray;
    },

    isSameLength: function (array, array2) {
        var s1 = array.length;
        var s2 = array2.length;
        if (s1 == s2)
            return true;
        else
            return false;

    },
    reversearray: function (array) {
        var reversed = [];
        for (i = array.length - 1; i >= 0; i--) {
            reversed.push(array[i]);
        }
        return reversed;
    },
    twoarray: function (array,array2) {
        for (let  i = 0; i < array2.length; i++) {
            array.push(array2[i])
        }
        return array;
        

    }




}


module.exports = utils;

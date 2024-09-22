exports.Reverse = function(string) {
    let start = 0;
    let end = string.length - 1;
    let stringArray = string.split('');

    while (start < end) {
        let temporary = stringArray[start];
        stringArray[start] = stringArray[end];
        stringArray[end] = temporary;

        start++;
        end--;
    }

    return stringArray.join('');
}

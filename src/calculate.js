async function numDuplicates(array) {
    // const result = await externalReques();
    if(!array || !array[0]) {
        return;
    }
    let uniqueElements = {},
        duplicateCount = 0;
    let rowLength = array.length;
    let colLength = array[0].length
    for (let colIndex = 0; colIndex < colLength; colIndex++) {
        let key = '';
        for (let rowIndex = 0; rowIndex < rowLength; rowIndex++) {
            key = key + ',' + String(array[rowIndex][colIndex]);
        }
        if(uniqueElements[key]) {
            duplicateCount++;
        } else {
            uniqueElements[key] = true;
        }
    }
    console.log(duplicateCount);
    return duplicateCount;
} 
export default numDuplicates;
// numDuplicates([
//     [1,1,2,2],
//     ["m",'n','o','p'],
//     ['n','m','p','p'],
//     [1,1,2,2],
// ])
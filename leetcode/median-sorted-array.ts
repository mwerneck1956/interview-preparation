function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const merged = mergeSortedArray(nums1,nums2);

    const mid = Math.floor(merged.length / 2);

    if(merged.length % 2 === 0){
        return merged[mid - 1]
    }

    return (merged[mid - 1] + merged[mid]/2)
};


function mergeSortedArray(nums1 : number[], nums2: number[]) : number[]{
    const merged = [];
    let aIndex = 0, bIndex = 0;

    while(aIndex < nums1.length && bIndex < nums2.length){
        if(nums1[aIndex] > nums2[bIndex]){
            merged.push(nums2[bIndex])
            bIndex++;
        }else{
            merged.push(nums1[aIndex])
            aIndex++;
        }
    }

    return [...merged, ...nums1.slice(aIndex),  ...nums2.slice(bIndex)]
}


const input_a = [1,2];
const input_b = [3,4];


console.log(findMedianSortedArrays(input_a,input_b))

// Naive Solution -> Merge the two Arrays and get the half element
//// === 1-masala ===////

function swap<T>(num1: T, num2: T): [T, T] {
    return [num1 , num2];
}

let [num1, num2] = swap(5, 10);
console.log(num1, num2);


/// === 2-masala === ////

function assertString(input: any): void {
    if (typeof input !== 'string') {
        throw new Error( `${input} => Input must be a string`);
    }else{
        console.log(`${input} => Input is a string`);
    }
}

try {
    assertString('Hello'); 
    assertString(123); 
} catch (err) {
    if (err instanceof Error) {
        console.log(err.message);
    }
}



/// === 3-masala === ////

function quicksort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    const left = arr.filter((el) => el < pivot);
    const right = arr.filter((el) => el > pivot);
    return [...quicksort(left), pivot, ...quicksort(right)];
  }
  
  function mergesort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergesort(arr.slice(0, mid));
    const right = mergesort(arr.slice(mid));
    
    const merge = (left: number[], right: number[]): number[] => {
      const result: number[] = [];
      while (left.length && right.length) {
        result.push(left[0] < right[0] ? left.shift()! : right.shift()!);
      }
      return [...result, ...left, ...right];
    };
    return merge(left, right);
  }
  
  let arr: number[] = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
  
  console.time('Quicksort');
  quicksort(arr);
  console.timeEnd('Quicksort');
  
  console.time('Mergesort');
  mergesort(arr);
  console.timeEnd('Mergesort');
  
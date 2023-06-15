function myEach(arr,func)
{
    
    for(let i=0;i<arr.length;i++)
    {
        func(arr[i]);
    }
}
function myMap(arr,func)
{
    for(let i=0;i<arr.length;i++)
    {
     arr[i]= func(arr[i]);
    }
    return arr;
}
function myFilter(arr,func)
{
    let arr1=[0];
    let j=0;
    for(let i=0;i<arr.length;i++)
    {
        if(func(arr[i]))
        {
            arr1[j]=arr[i];
            j++
        }
    }
    return arr1;
}
function mySome(arr,func)
{
    for(let i=0;i<arr.length;i++)
    {
        if(func(arr[i]))
        {
            return true;
        }
    }
    return false;
}
function myEvery(arr,func)
{
    for(let i=0;i<arr.length;i++)
    {
        if(!func(arr[i]))
        {
            return false;
        }
    }
    return true;
}
function myReduce(arr,func,intiateval)
{
    let sum=intiateval;
    
    for (let i = 0; i < arr.length; i++) {
       sum=func(sum,arr[i]);
    }
    return sum;
}
function includes(arr,elem)
{
    for(let i=0;i<arr.length;i++)
    {
        if(elem==arr[i])
        {
            return true;
        }
    }
    return false;
}
function myIndexOf(arr,elemnt)
{
for (let i = 0; i < arr.length; i++) {
    if(elemnt ==arr[i])
    {
        return i;
    }
}
return -1;
}

function myPush(arr,element)
{
    if(arr.length==0)
    {
        arr[0]=element;
    }
    else{
    arr.length++;
    arr[arr.length-1]=element;
    }
}
function mylastIndexOf(arr,elemnt)
{let index=-1;
for (let i = 0; i < arr.length; i++) {
    if(elemnt ==arr[i])
    {
        index=i;
    }
}
return index;
}
function k(obj){
    for(k1 in obj) {
        console.log(k1);
    }
}
function val(object)
{
    for(val in object)
    {
        console.log(object[val]);
    }
}

console.log("For each arr =[1,2,3]");
let arr=[1,2,3]
myEach(arr,element => console.log(element));

const map=myMap(arr,x => x * 3);
console.log(map);


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const filter=myFilter(words,word => word.length > 6);
console.log(filter);


const array = [1, 5, 3, 1, 5];

const even = (element) => element % 2 === 0;
console.log(mySome(array,even));



const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(myEvery(array1,isBelowThreshold));
// Expected output: true



const array2 = [1, 2, 3, 4];
const intiateval=0;
const rud=myReduce(array2,(accumulator, currentValue) => accumulator + currentValue,0);
console.log(rud);


const pets = ['cat', 'dog', 'bat'];
console.log(includes(pets,'ccat'));


const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(myIndexOf(beasts,'camel'));

const animals = ['pigs', 'goats', 'sheep'];
console.log(animals);



const animals1 = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(mylastIndexOf(animals1,'Dodo'));
// Expected output: 3

console.log(mylastIndexOf(animals1,'Tiger'));
// Expected output: 11

const object1 = {
    a: 'somestring',
    b: 42,
    c: 2}

val(object1);
k(object1);


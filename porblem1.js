function moveZeros (nums) {
    let j=nums.length-1;
    let swap;
     for (let i = 0; i < nums.length; i++) {
         if((nums[i]==0&&nums[j]!=0)&&j>i)
         {swap=nums[i];
          nums[i]=nums[j];
          nums[j]=swap;
          j--;
          console.log(nums);
         }
     }
     
 }
 const arr=[0,1,0,3,12];
 moveZeros(arr);
 

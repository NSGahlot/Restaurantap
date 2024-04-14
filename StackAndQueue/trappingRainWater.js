function trappingRainWater(height) {
    let n = height.length;
    let left = 0;
    let right = n - 1;
    let res = 0;
    let maxLeft = 0;
    let maxRight = 0;

    while (left <= right) {
      if (height[left] <= height[right]) {
        if (height[left] >= maxLeft) maxLeft = height[left];
        else {
          res += maxLeft - height[left];
        }
        left++;
      } 
      else {
        if (height[right] >= maxRight) maxRight = height[right];
        else {
          res += maxRight - height[right];
        }
        right--;
      }
    }
    return res;
};

console.log(trappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
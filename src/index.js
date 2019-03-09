/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
   var result = 0;
   preferences.unshift(0);
   //alert(data);
   for(let i = 1; i < preferences.length; i++){
       let j = preferences[i];
       let k = preferences[j];
       
       result += i == preferences[k];
       //alert(data[k]);
   }
   let res =Math.floor(result/3);
   return res;
}

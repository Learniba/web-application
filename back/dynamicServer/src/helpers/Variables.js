export default {
  excludeDb:['createdAt','deletedAt','updatedAt'],
  excludeAnd(array=[]){
    return this.excludeDb.concat(array);
  },
  merge(array1=[],array2=[]){
    return  [...new Set([...array1 ,...array2])];
  }
}

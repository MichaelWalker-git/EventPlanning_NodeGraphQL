/**
 * Takes in an id, and returns the array without that value.
 * @param targetId
 * @param arrayOfValues
 */
export const findItemByIdAndDelete = (targetId: string, arrayOfValues: any[]) => {
  for (let i = 0; i < arrayOfValues.length; i++) {
    if(arrayOfValues[i].id === targetId){

      return [...arrayOfValues.slice(0, i), ...arrayOfValues.slice(i+1)];
    }
  }
//TODO(miketran): Add error message where value wasn't found.
  return arrayOfValues;
}

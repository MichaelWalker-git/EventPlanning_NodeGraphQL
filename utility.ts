import {Location, Organization, UserEvent} from "./graphql/types";

/**
 * Takes in an id, and returns the array without that value.
 * @param targetId
 * @param arrayOfValues
 */
export const findItemByIdAndDelete = (targetId: string, arrayOfValues: any) => {
  for (let i = 0; i < arrayOfValues.length; i++) {
    const stringified = (arrayOfValues[i].id).toString();
    if(stringified === targetId){
      return {
        newObject: [...arrayOfValues.slice(0, i), ...arrayOfValues.slice(i+1)],
        error: false,
      }
    }
  }
//TODO(miketran): Add error message where value wasn't found.
  return {
    newObject: arrayOfValues,
    error: true,
  }
}

/**
 * Takes in an id, and returns the array without that value.
 * @param targetId
 * @param arrayOfValues
 */
export const findItemByIdAndUpdate = (targetId: string, arrayOfValues: any[], newObj: any) => {
  for (let i = 0; i < arrayOfValues.length; i++) {
    const stringified = typeof arrayOfValues[i].id === "string" ? arrayOfValues[i].id : (arrayOfValues[i].id).toString();

    if(stringified === targetId){
      arrayOfValues[i] = {...arrayOfValues[i], ...newObj};
      return {
        newObject: arrayOfValues,
        error: false,
      }
    }
  }
//TODO(miketran): Add error message where value wasn't found.
  return {
    newObject: arrayOfValues,
    error: true,
  };
}

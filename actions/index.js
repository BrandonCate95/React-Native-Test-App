/*
 * action types
 */

export const ADD_COUNT = 'ADD_COUNT'
export const SUBTRACT_COUNT = 'SUBTRACT_COUNT'

/*
 * action creators
*/

export const addCount = () => ({
  type: ADD_COUNT 
})

export const subtractCount = () => ({
  type: SUBTRACT_COUNT
})
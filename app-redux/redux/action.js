/*
 * action 类型
 */
export const ADD_TODO = 'ADD_TODO';
 
/*
 * action 创建函数
 */

export function addTodo(text) {
  return { type: ADD_TODO, text }
}
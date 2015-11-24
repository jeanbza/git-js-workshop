export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE'

export function changeInputValue(inputValue) {
  return {
    type: CHANGE_INPUT_VALUE,
    inputValue: inputValue
  }
}
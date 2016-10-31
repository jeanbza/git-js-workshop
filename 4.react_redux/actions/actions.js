export const TYPE_SOME_TEXT = 'TYPE_SOME_TEXT'

export function typeSomeText(inputText) {
  return {
    type: TYPE_SOME_TEXT,
    inputText: inputText,
  }
}
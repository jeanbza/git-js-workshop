export const CHANGE_INPUT = 'CHANGE_INPUT'

export function changeInput(text) {
  return {
    type: CHANGE_INPUT,
    text: text
  }
}
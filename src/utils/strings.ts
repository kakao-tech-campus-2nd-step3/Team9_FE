/**
 * 문자열 관련 함수
 */

// 공백 제거 함수
export function eliminateSpaces(str: string): string {
  return str.replace(/\s/g, '');
}

// 공백 제거하고 문자열 길이 세는 함수
export function countNonSpaceChars(str: string): number {
  return eliminateSpaces(str).length;
}

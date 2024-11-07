// 날짜 포맷 함수
export function formatDate(dateStr: string): string {
  const dateObj = new Date(dateStr);

  return `${dateObj.getFullYear()}.${String(dateObj.getMonth() + 1).padStart(2, '0')}.${String(dateObj.getDate()).padStart(2, '0')}`;
  // 2024.00.00 형식으로 반환
}

// 공백 제거 함수
export function eliminateSpaces(str: string): string {
  return str.replace(/\s/g, '');
}

// 공백 제거하고 문자열 길이 세는 함수
export function countNonSpaceChars(str: string): number {
  return eliminateSpaces(str).length;
}

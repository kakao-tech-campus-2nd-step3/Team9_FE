/**
 * 날짜 관련 함수
 */

// ISO 날짜 형식을 2024.00.00 형식으로 반환하는 함수
export function formatDate(dateStr: string): string {
  const dateObj = new Date(dateStr);

  return `${dateObj.getFullYear()}.${String(dateObj.getMonth() + 1).padStart(2, '0')}.${String(dateObj.getDate()).padStart(2, '0')}`;
}

// ISO 날짜 형식을 12:30 PM 형식으로 반환하는 함수
export function formatTimestamp(timestamp: string): string {
  const date = new Date(timestamp);

  let hours = date.getUTCHours();
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  const period = hours <= 12 ? 'A.M.' : 'P.M.';

  // 12시간 형식으로 변경 (0시는 12시로 표시)
  hours = hours % 12 || 12;

  return `${hours}:${minutes} ${period}`;
}

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

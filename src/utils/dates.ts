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

  // KST(UTC+9)으로 변경
  date.setUTCHours(date.getUTCHours() + 9);

  let hours = date.getUTCHours();
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  let period = 'A.M.';

  // 12시인 경우는 P.M.으로 표시
  if (hours >= 12) {
    period = 'P.M.';
    if (hours > 12) {
      hours -= 12; // 오후 1시 이후는 12시간 형식으로 변환
    }
  }

  // 0시는 12시로 표시
  if (hours === 0) {
    hours = 12;
  }

  return `${hours}:${minutes} ${period}`;
}

// 요일 반환
export function getDay(date: Date): string {
  const dayList = ['일', '월', '화', '수', '목', '금', '토'];
  const day = dayList[date.getDay()]; // getDay의 반환값을 인덱스로 해서 요일 찾기

  return day;
}

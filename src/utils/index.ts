export const formatDate = (dateStr: string): string => {
  const dateObj = new Date(dateStr);

  return `${dateObj.getFullYear()}.${String(dateObj.getMonth() + 1).padStart(2, '0')}.${String(dateObj.getDate()).padStart(2, '0')}`;
  // 2024.00.00 형식으로 반환
};

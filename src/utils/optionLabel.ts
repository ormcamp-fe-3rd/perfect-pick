export const optionLabel = (options: Record<string, string>) => {
  const label = Object.entries(options)
    .sort(([keyA], [keyB]) => {
      if (!!keyA && !!keyB) {
        // keyA와 keyB가 모두 truthy인지 확인
        return keyA.localeCompare(keyB);
      }
      return 0; // keyA 또는 keyB가 falsy라면 기본 정렬 순서를 유지
    })
    .filter(([, value]) => value)
    .map(([, value]) => value)
    .join('/');

  return label;
};

const unitPriority: { [key: string]: number } = { MB: 0, GB: 1, TB: 2 };

export default function sortBySize(options: string[]): string[] {
  return options.sort((a, b) => {
    // 용량 정보를 분리하고, 없으면 null 반환
    const aMatch = a.match(/(\d+)(MB|GB|TB)/);
    const bMatch = b.match(/(\d+)(MB|GB|TB)/);

    // 단위가 다르면 우선 단위로 비교, 같은 단위면 숫자로 비교
    if (aMatch && bMatch) {
      const aUnit = unitPriority[aMatch[2] as keyof typeof unitPriority];
      const bUnit = unitPriority[bMatch[2] as keyof typeof unitPriority];

      if (aUnit !== bUnit) return aUnit - bUnit;
      return Number(aMatch[1]) - Number(bMatch[1]);
    }

    // 둘 다 용량이 아니면, 정렬
    if (!aMatch && !bMatch) return a.localeCompare(b);

    // 한쪽만 용량이면, 용량이 앞으로 가도록 정렬
    return aMatch ? -1 : 1;
  });
}

/**
 * * 24.07.03 (Wed) 정호연
 * * <ul> 태그 생성
 * @param li 탭 메뉴들
 * @returns <ul><li></li></ul>
 */
const ul = (li: string) => {
  return `<ul>${li}</ul>`;
};

// console.log(ul('<li><li>'));

export = ul;

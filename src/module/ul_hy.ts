/**
 * * 24.07.03 (Wed) 정호연
 * @param li 탭 메뉴들
 * @returns <ul><li></li></ul>
 */
const ul = (li: string) => {
  return `<ul>${li}</ul>`;
};

// console.log(ul('<li><li>'));

module.exports = ul;

export function transformToQueryParamsFormat(categoryName: string): string {
  if (categoryName.includes('&')) {
    categoryName = categoryName.slice(0, categoryName.indexOf('&') - 1);
  }
  return categoryName.slice(1).toLowerCase();
}

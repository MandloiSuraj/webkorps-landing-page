export function isValidTo(to) {
  return typeof to === 'string' ||
    (to && typeof to === 'object' && typeof to.pathname === 'string');
}
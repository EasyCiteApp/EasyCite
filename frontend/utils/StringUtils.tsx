export function reverse(str: string): string {
  return str.split('').reverse().join('');
}

export function isPalindrome(str: string): boolean {
  return str.split('').reverse().join('') === str;
}

export function areAnagrams(a: string, b: string): boolean {
  return a.split('').sort().join('') === b.split('').sort().join('');
}
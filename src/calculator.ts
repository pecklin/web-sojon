// 단일 객체 내보내기
export function sum(a: number, b:number) {
  return a + b;
}
  
export function sub(a:number, b:number) {
  return a - b;
}
  
export function multiply(a:number, b: number) {
  return a * b;
}
  
export function divide(a:number, b:number) {
  if (b === 0) throw new Error("0으로 숫자를 나눌 수 없습니다.");
  return a / b;
}
  
/*export default {
  sum,
  sub,
  multiply,
  divide
}*/
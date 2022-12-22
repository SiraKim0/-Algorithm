// 풀이

function solution(phone_number) {
  const len = phone_number.length - 4;
  const answer = "*".repeat(len) + phone_number.slice(-4);
  return answer;
}
console.log(solution("54321234"));

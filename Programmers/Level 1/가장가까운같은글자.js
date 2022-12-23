// map을 이용한 풀이
// map.set(key, value) -- map에 새로운 엔트리 추가
// map.get(key) -- map에서 key에 해당하는 value 참조
// map.has(key) -- map에서ㅓ key에 해당하는 value가 존재하는지 boolean 값으로 리턴
// map.size -- map의 엔트리 개수를 리턴

function solution(s) {
  const map = new Map(); //빈 map 생성
  return s.split("").map((k, i) => {
    const answer = map.has(k) ? i - map.get(k) : -1;
    map.set(k, i);
    return answer;
  });
}
console.log(solution("airport"));
console.log(solution("banana"));

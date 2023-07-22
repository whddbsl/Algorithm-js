function solution(hp) {
    let answer = 0;
    let general = Math.floor(hp / 5);
    hp = hp - 5*general
    let soldier = Math.floor(hp / 3);
    hp = hp - 3 * soldier;
    answer = general + soldier + hp;
    return answer;
}
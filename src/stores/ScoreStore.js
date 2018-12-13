import { observable, computed } from 'mobx';

class ScoreStore {
  @observable scores = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];

  @computed
  get totalScore() {
    return this.scores.reduce((acc, num) => acc + num, 0);
  }

  updateScore(index, score) {
    this.scores[index] = score;
  }
}

const scoreStore = new ScoreStore();

export default scoreStore;
export { ScoreStore };

import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const AcurQuestionIdx = atom({
  key: 'curQuestionIdx',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

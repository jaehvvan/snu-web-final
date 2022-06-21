import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const dummy_teams = [
  { id: 0, name: '팀 A', score: 0 },
  { id: 1, name: '팀 B', score: 0 },
  { id: 2, name: '팀 C', score: 0 },
  { id: 3, name: '팀 D', score: 0 },
];

const dummy_musics = [{ id: 'tOtesnkPJeg', timestamp: 1 }];

export const AtomMusics = atom({
  key: 'AtomMusic',
  default: dummy_musics,
  effects_UNSTABLE: [persistAtom],
});

export const AtomTeams = atom({
  key: 'AtomTeams',
  default: dummy_teams,
  effects_UNSTABLE: [persistAtom],
});

export const AtomMusicIdx = atom({
  key: 'AtomMusicIdx',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const AtomUser = atom({
  key: 'AtomUser',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

export const AtomYear = atom({
  key: 'AtomYear',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const AtomCategory = atom({
  key: 'AtomCategory',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const AtomproblemCount = atom({
  key: 'AtomProblemCount',
  default: 5,
  effects_UNSTABLE: [persistAtom],
});

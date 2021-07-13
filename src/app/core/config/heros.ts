import { HERO } from "src/app/models/hero.model";

export const Heros: HERO[] = [
  {
    id: 'h00000001',
    name: '刘备',
    pinyin: 'liubei',
    desc: '',
    level: 1,
    engergy: 150,
    attribute: {
      force: '80.7',
      defend: '94.0',
      intelligence: '100.2',
      speed: '96.7',
      politics: '101.1',
      charm: '106.9'
    },
    growth: {
      force: '1.70',
      defend: '2.00',
      intelligence: '1.90',
      speed: '1.62',
      politics: '2.10',
      charm: '2.50'
    },
    points: {
        active: 0,
        attribute: {
          force: '',
          defend: '',
          intelligence: '',
          speed: '',
          politics: '',
          charm: ''
        }
    },
    main_skill: '',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  }
];
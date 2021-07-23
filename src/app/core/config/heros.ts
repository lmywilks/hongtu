import { HERO, HERO_COUNTRY, HERO_QUALITY, HERO_SEASON, HERO_TYPE } from "src/app/models/hero.model";

export const Heros: HERO[] = [
  {
    id: 'h00000001',
    name: '刘备',
    name_en: 'liubei',
    desc: '',
    desc_en: '',
    level: 1,
    season: HERO_SEASON.s1,
    cost: 8,
    engergy: 150,
    type: [HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.S,
    country: HERO_COUNTRY.SHU,
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
    main_skill: 's00000001',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000002',
    name: '诸葛亮',
    name_en: 'zhugeliang',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.SHU,
    type: [HERO_TYPE.INTELLIGENCE, HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 9,
    engergy: 150,
    attribute: {
      force: '10.0',
      defend: '88.4',
      intelligence: '104.6',
      speed: '134.4',
      politics: '104.6',
      charm: '121.4'
    },
    growth: {
      force: '0.20',
      defend: '1.80',
      intelligence: '3.00',
      speed: '1.80',
      politics: '2.10',
      charm: '2.60'
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
    main_skill: 's00000002',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000003',
    name: '张飞',
    name_en: 'zhangfei',
    desc: '',
    desc_en: '',
    level: 1,
    season: HERO_SEASON.s1,
    cost: 8,
    country: HERO_COUNTRY.SHU,
    type: [HERO_TYPE.FORCE, HERO_TYPE.CONTROL],
    quality: HERO_QUALITY.S,
    engergy: 150,
    attribute: {
      force: '117.6',
      defend: '110.8',
      intelligence: '66.5',
      speed: '111.1',
      politics: '54.1',
      charm: '38.8'
    },
    growth: {
      force: '2.70',
      defend: '2.20',
      intelligence: '1.20',
      speed: '2.50',
      politics: '0.50',
      charm: '0.30'
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
    main_skill: 's00000003',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000004',
    name: '关羽',
    name_en: 'guanyu',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.SHU,
    type: [HERO_TYPE.FORCE, HERO_TYPE.CONTROL],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '123.5',
      defend: '114.5',
      intelligence: '74.8',
      speed: '119.2',
      politics: '44.3',
      charm: '100.4'
    },
    growth: {
      force: '2.70',
      defend: '2.40',
      intelligence: '1.40',
      speed: '1.82',
      politics: '0.40',
      charm: '2.10'
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
    main_skill: 's00000004',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000005',
    name: '赵云',
    name_en: 'zhaoyun',
    country: HERO_COUNTRY.SHU,
    type: [HERO_TYPE.FORCE, HERO_TYPE.SPEED],
    quality: HERO_QUALITY.S,
    desc: '',
    desc_en: '',
    level: 1,
    season: HERO_SEASON.s1,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '123.3',
      defend: '114',
      intelligence: '91.2',
      speed: '132.5',
      politics: '66.6',
      charm: '100.1'
    },
    growth: {
      force: '2.70',
      defend: '2.30',
      intelligence: '1.60',
      speed: '3.00',
      politics: '1.20',
      charm: '1.90'
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
    main_skill: 's00000005',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000006',
    name: '魏延',
    name_en: 'weiyan',
    country: HERO_COUNTRY.SHU,
    type: [HERO_TYPE.FORCE],
    quality: HERO_QUALITY.S,
    desc: '',
    desc_en: '',
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '119.6',
      defend: '108.1',
      intelligence: '73.3',
      speed: '116.3',
      politics: '61.5',
      charm: '68'
    },
    growth: {
      force: '2.40',
      defend: '2.10',
      intelligence: '1.10',
      speed: '1.68',
      politics: '0.80',
      charm: '1.10'
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
    main_skill: 's00000006',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000007',
    name: '黄忠',
    name_en: 'huangzhong',
    country: HERO_COUNTRY.SHU,
    type: [HERO_TYPE.FORCE],
    quality: HERO_QUALITY.S,
    desc: '',
    desc_en: '',
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '123.1',
      defend: '88.4',
      intelligence: '73.8',
      speed: '121',
      politics: '47.4',
      charm: '81.7'
    },
    growth: {
      force: '2.50',
      defend: '1.50',
      intelligence: '1.20',
      speed: '2.06',
      politics: '0.20',
      charm: '1.40'
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
    main_skill: 's00000007',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000008',
    name: '马超',
    name_en: 'machao',
    country: HERO_COUNTRY.SHU,
    type: [HERO_TYPE.FORCE, HERO_TYPE.SPEED],
    quality: HERO_QUALITY.S,
    desc: '',
    desc_en: '',
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '118.0',
      defend: '105.2',
      intelligence: '75.5',
      speed: '121.3',
      politics: '54.5',
      charm: '106.8'
    },
    growth: {
      force: '2.60',
      defend: '2.30',
      intelligence: '1.20',
      speed: '2.85',
      politics: '0.50',
      charm: '2.10'
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
    main_skill: 's00000008',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000009',
    name: '马岱',
    name_en: 'madai',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.SHU,
    type: [HERO_TYPE.FORCE, HERO_TYPE.SPEED],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '104.2',
      defend: '108.8',
      intelligence: '85.5',
      speed: '112.0',
      politics: '86.8',
      charm: '75.7'
    },
    growth: {
      force: '2.20',
      defend: '2.20',
      intelligence: '1.30',
      speed: '2.60',
      politics: '1.50',
      charm: '1.30'
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
    main_skill: 's00000009',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000010',
    name: '姜维',
    name_en: 'jiangwei',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.SHU,
    type: [HERO_TYPE.BOTH, HERO_TYPE.SPEED],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '98.6',
      defend: '84.7',
      intelligence: '105.2',
      speed: '114.9',
      politics: '72.2',
      charm: '99.9'
    },
    growth: {
      force: '2.10',
      defend: '1.60',
      intelligence: '2.30',
      speed: '2.48',
      politics: '1.40',
      charm: '2.10'
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
    main_skill: 's00000010',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000011',
    name: '徐庶',
    name_en: 'xushu',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.SHU,
    type: [HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 6,
    engergy: 150,
    attribute: {
      force: '49.6',
      defend: '82.4',
      intelligence: '108.3',
      speed: '105.9',
      politics: '72.1',
      charm: '76.4'
    },
    growth: {
      force: '0.30',
      defend: '1.30',
      intelligence: '2.10',
      speed: '1.22',
      politics: '1.00',
      charm: '1.30'
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
    main_skill: 's00000011',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000012',
    name: '严颜',
    name_en: 'yanyan',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.SHU,
    type: [HERO_TYPE.DEFEND, HERO_TYPE.CONTROL],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '108.5',
      defend: '109.4',
      intelligence: '85',
      speed: '105',
      politics: '78.3',
      charm: '67.2'
    },
    growth: {
      force: '2.20',
      defend: '2.10',
      intelligence: '1.40',
      speed: '1.20',
      politics: '1.40',
      charm: '1.00'
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
    main_skill: 's00000012',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000013',
    name: '庞统',
    name_en: 'pangtong',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.SHU,
    type: [HERO_TYPE.INTELLIGENCE],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '38.3',
      defend: '82',
      intelligence: '122.5',
      speed: '119.5',
      politics: '104.9',
      charm: '52.2'
    },
    growth: {
      force: '0.30',
      defend: '0.70',
      intelligence: '2.60',
      speed: '1.96',
      politics: '2.10',
      charm: '0.40'
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
    main_skill: 's00000013',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000014',
    name: '马云禄',
    name_en: 'mayunlu',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.SHU,
    type: [HERO_TYPE.FORCE, HERO_TYPE.SPEED],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '101.6',
      defend: '90.1',
      intelligence: '76.6',
      speed: '108.5',
      politics: '52.7',
      charm: '71.2'
    },
    growth: {
      force: '2.10',
      defend: '1.10',
      intelligence: '1.40',
      speed: '2.10',
      politics: '0.60',
      charm: '1.00'
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
    main_skill: 's00000014',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000015',
    name: '张姬',
    name_en: 'zhangji',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.SHU,
    type: [HERO_TYPE.INTELLIGENCE, HERO_TYPE.SPEED],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '65.5',
      defend: '82',
      intelligence: '102.1',
      speed: '102.4',
      politics: '77.4',
      charm: '107.8'
    },
    growth: {
      force: '1.10',
      defend: '1.70',
      intelligence: '1.90',
      speed: '2.00',
      politics: '1.30',
      charm: '2.20'
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
    main_skill: 's00000015',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000016',
    name: '黄月英',
    name_en: 'huangyueying',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.SHU,
    type: [HERO_TYPE.INTELLIGENCE],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 6,
    engergy: 150,
    attribute: {
      force: '66.1',
      defend: '87.0',
      intelligence: '91.0',
      speed: '86.4',
      politics: '73.7',
      charm: '56.5'
    },
    growth: {
      force: '0.80',
      defend: '1.20',
      intelligence: '2.00',
      speed: '1.50',
      politics: '1.20',
      charm: '0.50'
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
    main_skill: 's00000016',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000017',
    name: '糜竺',
    name_en: 'mizhu',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.SHU,
    type: [HERO_TYPE.HEAL],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 6,
    engergy: 150,
    attribute: {
      force: '35.1',
      defend: '64.4',
      intelligence: '110.9',
      speed: '102',
      politics: '103.6',
      charm: '84.4'
    },
    growth: {
      force: '0.30',
      defend: '0.40',
      intelligence: '2.20',
      speed: '1.60',
      politics: '1.90',
      charm: '1.60'
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
    main_skill: 's00000017',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000018',
    name: '甘夫人',
    name_en: 'ganfuren',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.SHU,
    type: [HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 5,
    engergy: 150,
    attribute: {
      force: '51.3',
      defend: '73.8',
      intelligence: '83.2',
      speed: '78.6',
      politics: '62',
      charm: '84.4'
    },
    growth: {
      force: '0.60',
      defend: '0.50',
      intelligence: '1.50',
      speed: '0.30',
      politics: '0.80',
      charm: '1.70'
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
    main_skill: 's00000018',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000019',
    name: '关兴',
    name_en: 'guanxing',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.SHU,
    type: [HERO_TYPE.FORCE],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '102.1',
      defend: '92.5',
      intelligence: '64',
      speed: '96.6',
      politics: '65.2',
      charm: '67.4'
    },
    growth: {
      force: '1.80',
      defend: '2.00',
      intelligence: '1.20',
      speed: '0.96',
      politics: '1.00',
      charm: '1.10'
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
    main_skill: 's00000019',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000020',
    name: '关平',
    name_en: 'guanping',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.SHU,
    type: [HERO_TYPE.FORCE, HERO_TYPE.SPEED],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '107.3',
      defend: '85',
      intelligence: '81.9',
      speed: '110.1',
      politics: '72',
      charm: '69.3'
    },
    growth: {
      force: '2.00',
      defend: '1.80',
      intelligence: '1.40',
      speed: '2.10',
      politics: '1.30',
      charm: '1.30'
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
    main_skill: 's00000020',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000021',
    name: '张苞',
    name_en: 'zhangbao',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.SHU,
    type: [HERO_TYPE.FORCE, HERO_TYPE.SPEED],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '104.1',
      defend: '91.4',
      intelligence: '56.7',
      speed: '109.6',
      politics: '54.8',
      charm: '63.1'
    },
    growth: {
      force: '2.10',
      defend: '1.50',
      intelligence: '1.00',
      speed: '2.39',
      politics: '0.70',
      charm: '0.70'
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
    main_skill: 's00000021',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000022',
    name: 'SP黄月英',
    name_en: 'huangyueying',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.SHU,
    type: [HERO_TYPE.INTELLIGENCE],
    quality: HERO_QUALITY.SP,
    level: 1,
    season: HERO_SEASON.s2,
    cost: 6,
    engergy: 150,
    attribute: {
      force: '67.1',
      defend: '77.8',
      intelligence: '114.9',
      speed: '111.4',
      politics: '79.2',
      charm: '56.8'
    },
    growth: {
      force: '0.80',
      defend: '1.40',
      intelligence: '2.60',
      speed: '1.44',
      politics: '1.60',
      charm: '0.60'
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
    main_skill: 's00000022',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000023',
    name: 'SP马云禄',
    name_en: 'mayunlu',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.SHU,
    type: [HERO_TYPE.FORCE, HERO_TYPE.SPEED],
    quality: HERO_QUALITY.SP,
    level: 1,
    season: HERO_SEASON.s2,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '116.7',
      defend: '106.1',
      intelligence: '79.3',
      speed: '121.1',
      politics: '54',
      charm: '85.6'
    },
    growth: {
      force: '2.40',
      defend: '1.30',
      intelligence: '1.40',
      speed: '2.58',
      politics: '1.40',
      charm: '1.40'
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
    main_skill: 's00000023',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000024',
    name: '关银屏',
    name_en: 'guanyinping',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.SHU,
    type: [HERO_TYPE.FORCE],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s4,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '122.5',
      defend: '107.8',
      intelligence: '74.6',
      speed: '112.8',
      politics: '56.7',
      charm: '94.9'
    },
    growth: {
      force: '2.60',
      defend: '2.20',
      intelligence: '1.50',
      speed: '2.04',
      politics: '1.50',
      charm: '1.90'
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
    main_skill: 's00000024',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000025',
    name: '刘禅',
    name_en: 'liuchan',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.SHU,
    type: [HERO_TYPE.DEFEND, HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s3,
    cost: 6,
    engergy: 150,
    attribute: {
      force: '44.8',
      defend: '115.1',
      intelligence: '79.8',
      speed: '70.2',
      politics: '68.1',
      charm: '99.9'
    },
    growth: {
      force: '0.30',
      defend: '2.50',
      intelligence: '1.40',
      speed: '1.20',
      politics: '1.10',
      charm: '2.10'
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
    main_skill: 's00000025',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000026',
    name: '法正',
    name_en: 'fazheng',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.SHU,
    type: [HERO_TYPE.DEFEND, HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s3,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '66.5',
      defend: '112.0',
      intelligence: '116.7',
      speed: '116.7',
      politics: '101.9',
      charm: '66.2'
    },
    growth: {
      force: '0.80',
      defend: '2.30',
      intelligence: '2.60',
      speed: '1.96',
      politics: '2.00',
      charm: '1.20'
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
    main_skill: 's00000026',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000027',
    name: '简雍',
    name_en: 'jianyong',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.SHU,
    type: [HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s4,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '90.1',
      defend: '86.3',
      intelligence: '98.8',
      speed: '96.8',
      politics: '75.6',
      charm: '93'
    },
    growth: {
      force: '1.70',
      defend: '1.80',
      intelligence: '2.10',
      speed: '1.74',
      politics: '1.50',
      charm: '1.90'
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
    main_skill: 's00000027',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000028',
    name: 'SP赵云',
    name_en: 'zhaoyun',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.SHU,
    type: [HERO_TYPE.FORCE],
    quality: HERO_QUALITY.XP,
    level: 1,
    season: HERO_SEASON.s5,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '125.3',
      defend: '114',
      intelligence: '91.2',
      speed: '120.4',
      politics: '66.6',
      charm: '100.1'
    },
    growth: {
      force: '2.80',
      defend: '2.30',
      intelligence: '1.60',
      speed: '2.70',
      politics: '1.20',
      charm: '1.90'
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
    main_skill: 's00000028',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000029',
    name: '曹操',
    name_en: 'caocao',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.CONTROL],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 9,
    engergy: 150,
    attribute: {
      force: '74.1',
      defend: '100.2',
      intelligence: '114.9',
      speed: '107.4',
      politics: '104.5',
      charm: '112.4'
    },
    growth: {
      force: '1.20',
      defend: '2.00',
      intelligence: '2.30',
      speed: '2.06',
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
    main_skill: 's00000029',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000030',
    name: '司马懿',
    name_en: 'simayi',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.INTELLIGENCE, HERO_TYPE.CONTROL],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 9,
    engergy: 150,
    attribute: {
      force: '57.4',
      defend: '66.2',
      intelligence: '131.5',
      speed: '122.0',
      politics: '116.2',
      charm: '112.4'
    },
    growth: {
      force: '0.80',
      defend: '1.20',
      intelligence: '2.80',
      speed: '2.20',
      politics: '2.60',
      charm: '2.20'
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
    main_skill: 's00000030',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000031',
    name: '曹仁',
    name_en: 'caoren',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.DEFEND],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '92.9',
      defend: '122.7',
      intelligence: '74.5',
      speed: '90.5',
      politics: '61.4',
      charm: '77.1'
    },
    growth: {
      force: '2.00',
      defend: '2.80',
      intelligence: '1.50',
      speed: '2.00',
      politics: '1.10',
      charm: '1.40'
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
    main_skill: 's00000031',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000032',
    name: '夏侯惇',
    name_en: 'xiahoudun',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.FORCE, HERO_TYPE.DEFEND],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '121.9',
      defend: '97.8',
      intelligence: '76.8',
      speed: '117.2',
      politics: '61.0',
      charm: '86.6'
    },
    growth: {
      force: '2.50',
      defend: '2.10',
      intelligence: '1.10',
      speed: '2.34',
      politics: '0.90',
      charm: '1.50'
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
    main_skill: 's00000032',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000033',
    name: '郭嘉',
    name_en: 'guojia',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.CONTROL],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '41.7',
      defend: '73.5',
      intelligence: '126.0',
      speed: '120.1',
      politics: '92.7',
      charm: '127.1'
    },
    growth: {
      force: '0.30',
      defend: '2.10',
      intelligence: '2.70',
      speed: '2.10',
      politics: '1.60',
      charm: '2.70'
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
    main_skill: 's00000033',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000034',
    name: '张辽',
    name_en: 'zhangliao',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.SPEED, HERO_TYPE.CONTROL],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '114.5',
      defend: '115.1',
      intelligence: '80.8',
      speed: '117.3',
      politics: '56.4',
      charm: '74.7'
    },
    growth: {
      force: '2.30',
      defend: '2.30',
      intelligence: '1.30',
      speed: '2.47',
      politics: '0.50',
      charm: '1.40'
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
    main_skill: 's00000034',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000035',
    name: '徐晃',
    name_en: 'xuhuang',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.FORCE, HERO_TYPE.SPEED],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '114.0',
      defend: '101.8',
      intelligence: '79.2',
      speed: '119.8',
      politics: '67.7',
      charm: '74.2'
    },
    growth: {
      force: '2.50',
      defend: '2.30',
      intelligence: '1.40',
      speed: '2.57',
      politics: '1.00',
      charm: '1.10'
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
    main_skill: 's00000035',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000036',
    name: '张郃',
    name_en: 'zhanghe',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.FORCE, HERO_TYPE.SPEED],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '120.1',
      defend: '104.6',
      intelligence: '80.4',
      speed: '128.7',
      politics: '51.3',
      charm: '82.8'
    },
    growth: {
      force: '2.40',
      defend: '2.20',
      intelligence: '1.20',
      speed: '2.70',
      politics: '0.50',
      charm: '1.60'
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
    main_skill: 's00000036',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000037',
    name: '典韦',
    name_en: 'dianwei',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.FORCE, HERO_TYPE.SPEED],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '116.0',
      defend: '100.8',
      intelligence: '56.5',
      speed: '119.1',
      politics: '47.7',
      charm: '59.3'
    },
    growth: {
      force: '2.60',
      defend: '2.20',
      intelligence: '0.60',
      speed: '2.83',
      politics: '0.60',
      charm: '0.80'
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
    main_skill: 's00000037',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000038',
    name: '荀彧',
    name_en: 'xunyu',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.INTELLIGENCE, HERO_TYPE.CONTROL],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '48.0',
      defend: '68.3',
      intelligence: '109.3',
      speed: '108.3',
      politics: '107.9',
      charm: '94.8'
    },
    growth: {
      force: '0.60',
      defend: '0.90',
      intelligence: '2.50',
      speed: '1.42',
      politics: '2.30',
      charm: '1.90'
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
    main_skill: 's00000038',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000039',
    name: '夏侯渊',
    name_en: 'xiahouyuan',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.FORCE],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '112.9',
      defend: '86.7',
      intelligence: '88.4',
      speed: '111.5',
      politics: '47.7',
      charm: '55.5'
    },
    growth: {
      force: '2.50',
      defend: '1.40',
      intelligence: '1.50',
      speed: '1.30',
      politics: '0.60',
      charm: '0.80'
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
    main_skill: 's00000039',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000040',
    name: '庞德',
    name_en: 'pangde',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.FORCE],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '111.7',
      defend: '99.5',
      intelligence: '83.7',
      speed: '104.6',
      politics: '77.0',
      charm: '78.4'
    },
    growth: {
      force: '2.50',
      defend: '2.20',
      intelligence: '1.50',
      speed: '2.22',
      politics: '1.20',
      charm: '1.30'
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
    main_skill: 's00000040',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000041',
    name: '贾诩',
    name_en: 'jiaxu',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.INTELLIGENCE],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '51.2',
      defend: '79.7',
      intelligence: '118.5',
      speed: '114',
      politics: '89.2',
      charm: '87.7'
    },
    growth: {
      force: '0.60',
      defend: '1.40',
      intelligence: '2.80',
      speed: '2.00',
      politics: '1.50',
      charm: '1.80'
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
    main_skill: 's00000041',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000042',
    name: '于禁',
    name_en: 'yujin',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.FORCE, HERO_TYPE.SPEED],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '116.9',
      defend: '100.3',
      intelligence: '70.9',
      speed: '119.1',
      politics: '78.8',
      charm: '67.6'
    },
    growth: {
      force: '2.40',
      defend: '2.00',
      intelligence: '1.20',
      speed: '2.57',
      politics: '1.50',
      charm: '1.10'
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
    main_skill: 's00000042',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000043',
    name: '许褚',
    name_en: 'xuchu',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.FORCE, HERO_TYPE.SPEED],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '115.3',
      defend: '118.0',
      intelligence: '72.2',
      speed: '120.5',
      politics: '72.2',
      charm: '61.2'
    },
    growth: {
      force: '2.70',
      defend: '1.60',
      intelligence: '0.90',
      speed: '2.85',
      politics: '0.60',
      charm: '0.90'
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
    main_skill: 's00000043',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000044',
    name: '乐进',
    name_en: 'yuejin',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.FORCE, HERO_TYPE.SPEED],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '110.4',
      defend: '115.7',
      intelligence: '66.9',
      speed: '113.0',
      politics: '48.6',
      charm: '78.8'
    },
    growth: {
      force: '2.30',
      defend: '1.60',
      intelligence: '1.20',
      speed: '2.58',
      politics: '1.20',
      charm: '1.30'
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
    main_skill: 's00000044',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000045',
    name: '邓艾',
    name_en: 'dengai',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.CONTROL, HERO_TYPE.BOTH],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '97.8',
      defend: '96.0',
      intelligence: '106.1',
      speed: '104.5',
      politics: '42.5',
      charm: '94.6'
    },
    growth: {
      force: '2.20',
      defend: '1.20',
      intelligence: '2.40',
      speed: '1.92',
      politics: '0.40',
      charm: '1.90'
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
    main_skill: 's00000045',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000046',
    name: '曹丕',
    name_en: 'caopi',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.CONTROL],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 6,
    engergy: 150,
    attribute: {
      force: '76.2',
      defend: '67.0',
      intelligence: '109.1',
      speed: '104.7',
      politics: '94.3',
      charm: '97.2'
    },
    growth: {
      force: '1.10',
      defend: '1.20',
      intelligence: '2.20',
      speed: '1.84',
      politics: '2.00',
      charm: '2.10'
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
    main_skill: 's00000046',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000047',
    name: '曹彰',
    name_en: 'caozhang',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.FORCE],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 6,
    engergy: 150,
    attribute: {
      force: '115.7',
      defend: '109.5',
      intelligence: '77.0',
      speed: '111.7',
      politics: '74.2',
      charm: '87.1'
    },
    growth: {
      force: '2.40',
      defend: '1.50',
      intelligence: '1.10',
      speed: '2.00',
      politics: '1.30',
      charm: '1.40'
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
    main_skill: 's00000047',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000048',
    name: '甄姬',
    name_en: 'zhenji',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.CONTROL],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 6,
    engergy: 150,
    attribute: {
      force: '38.8',
      defend: '81.8',
      intelligence: '112',
      speed: '104.4',
      politics: '54.4',
      charm: '125.4'
    },
    growth: {
      force: '0.40',
      defend: '1.40',
      intelligence: '2.40',
      speed: '1.40',
      politics: '0.60',
      charm: '2.60'
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
    main_skill: 's00000048',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000049',
    name: '荀攸',
    name_en: 'xunyou',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '52.8',
      defend: '72.3',
      intelligence: '100.9',
      speed: '94.2',
      politics: '71.0',
      charm: '73.9'
    },
    growth: {
      force: '0.50',
      defend: '0.80',
      intelligence: '2.10',
      speed: '1.30',
      politics: '1.30',
      charm: '1.20'
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
    main_skill: 's00000049',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000050',
    name: '王朗',
    name_en: 'wanglang',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.INTELLIGENCE],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '38.7',
      defend: '65.6',
      intelligence: '106.6',
      speed: '100.9',
      politics: '89.3',
      charm: '63.6'
    },
    growth: {
      force: '0.40',
      defend: '1.00',
      intelligence: '2.10',
      speed: '1.74',
      politics: '1.70',
      charm: '0.90'
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
    main_skill: 's00000050',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000051',
    name: '文鸯',
    name_en: 'wenyang',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.FORCE, HERO_TYPE.CONTROL],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '106.5',
      defend: '103.5',
      intelligence: '70.5',
      speed: '101.7',
      politics: '58.3',
      charm: '106.7'
    },
    growth: {
      force: '2.10',
      defend: '2.20',
      intelligence: '1.10',
      speed: '0.98',
      politics: '0.90',
      charm: '2.00'
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
    main_skill: 's00000051',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000052',
    name: '卞夫人',
    name_en: 'bianfuren',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 6,
    engergy: 150,
    attribute: {
      force: '43.3',
      defend: '56.7',
      intelligence: '89.3',
      speed: '84.8',
      politics: '102.9',
      charm: '89.8'
    },
    growth: {
      force: '0.40',
      defend: '0.20',
      intelligence: '1.80',
      speed: '0.72',
      politics: '1.90',
      charm: '0.80'
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
    main_skill: 's00000052',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000053',
    name: '夏侯尚',
    name_en: 'xiahoushang',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.FORCE],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 6,
    engergy: 150,
    attribute: {
      force: '81.1',
      defend: '86.4',
      intelligence: '64.1',
      speed: '79.9',
      politics: '56.4',
      charm: '63.9'
    },
    growth: {
      force: '1.60',
      defend: '1.50',
      intelligence: '1.10',
      speed: '1.40',
      politics: '0.90',
      charm: '0.90'
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
    main_skill: 's00000053',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000054',
    name: '张春华',
    name_en: 'zhangchunhua',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.CONTROL],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 6,
    engergy: 150,
    attribute: {
      force: '48.9',
      defend: '91.0',
      intelligence: '95.7',
      speed: '88.8',
      politics: '80.1',
      charm: '61.4'
    },
    growth: {
      force: '0.60',
      defend: '1.10',
      intelligence: '1.90',
      speed: '1.22',
      politics: '1.20',
      charm: '1.00'
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
    main_skill: 's00000054',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000055',
    name: '曹洪',
    name_en: 'caohong',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.DEFEND],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 5,
    engergy: 150,
    attribute: {
      force: '98.9',
      defend: '100.9',
      intelligence: '82.1',
      speed: '90.5',
      politics: '54.6',
      charm: '68.5'
    },
    growth: {
      force: '1.90',
      defend: '2.20',
      intelligence: '1.30',
      speed: '1.30',
      politics: '0.70',
      charm: '1.00'
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
    main_skill: 's00000055',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000056',
    name: '夏侯霸',
    name_en: 'xiahouba',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.DEFEND],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 5,
    engergy: 150,
    attribute: {
      force: '76.8',
      defend: '106.8',
      intelligence: '67.2',
      speed: '76.7',
      politics: '74.8',
      charm: '80.3'
    },
    growth: {
      force: '1.20',
      defend: '2.30',
      intelligence: '1.00',
      speed: '0.48',
      politics: '1.40',
      charm: '1.20'
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
    main_skill: 's00000056',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000057',
    name: '郭皇后',
    name_en: 'guohuanghou',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 5,
    engergy: 150,
    attribute: {
      force: '50.0',
      defend: '82.9',
      intelligence: '93.1',
      speed: '89.8',
      politics: '101.8',
      charm: '84.5'
    },
    growth: {
      force: '0.40',
      defend: '1.00',
      intelligence: '1.70',
      speed: '1.50',
      politics: '1.90',
      charm: '1.40'
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
    main_skill: 's00000057',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000058',
    name: '臧霸',
    name_en: 'zangba',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.FORCE, HERO_TYPE.SPEED],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 5,
    engergy: 150,
    attribute: {
      force: '78.5',
      defend: '86.8',
      intelligence: '73.3',
      speed: '80.8',
      politics: '65.9',
      charm: '74.5'
    },
    growth: {
      force: '1.40',
      defend: '1.50',
      intelligence: '1.30',
      speed: '1.60',
      politics: '1.00',
      charm: '1.10'
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
    main_skill: 's00000058',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000059',
    name: '李典',
    name_en: 'lidian',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 5,
    engergy: 150,
    attribute: {
      force: '93.7',
      defend: '89.1',
      intelligence: '78.8',
      speed: '90.8',
      politics: '66.7',
      charm: '58.8'
    },
    growth: {
      force: '1.70',
      defend: '1.60',
      intelligence: '1.40',
      speed: '0.80',
      politics: '1.20',
      charm: '0.78'
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
    main_skill: 's00000059',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000060',
    name: '郝昭',
    name_en: 'haozhao',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.HEAL, HERO_TYPE.BOTH],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s2,
    cost: 9,
    engergy: 150,
    attribute: {
      force: '97.9',
      defend: '111.2',
      intelligence: '102.0',
      speed: '98.6',
      politics: '46.7',
      charm: '72.4'
    },
    growth: {
      force: '2.10',
      defend: '2.50',
      intelligence: '1.90',
      speed: '1.98',
      politics: '0.40',
      charm: '1.00'
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
    main_skill: 's00000060',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000061',
    name: '程昱',
    name_en: 'chengyu',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s2,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '49.8',
      defend: '82.1',
      intelligence: '118.7',
      speed: '98.113.3',
      politics: '101.0',
      charm: '68.5'
    },
    growth: {
      force: '0.30',
      defend: '1.60',
      intelligence: '2.70',
      speed: '2.34',
      politics: '2.00',
      charm: '1.00'
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
    main_skill: 's00000061',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000062',
    name: '曹睿',
    name_en: 'caorui',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s3,
    cost: 6,
    engergy: 150,
    attribute: {
      force: '76.8',
      defend: '76.1',
      intelligence: '103.4',
      speed: '97.0',
      politics: '103.2',
      charm: '93.9'
    },
    growth: {
      force: '1.10',
      defend: '0.50',
      intelligence: '2.00',
      speed: '0.92',
      politics: '2.10',
      charm: '1.90'
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
    main_skill: 's00000062',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000063',
    name: '钟会',
    name_en: 'zhonghui',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.BOTH, HERO_TYPE.SPEED],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s3,
    cost: 9,
    engergy: 150,
    attribute: {
      force: '112.8',
      defend: '108.1',
      intelligence: '108.7',
      speed: '119.0',
      politics: '104.3',
      charm: '74.7'
    },
    growth: {
      force: '2.30',
      defend: '1.70',
      intelligence: '2.50',
      speed: '2.69',
      politics: '2.00',
      charm: '1.50'
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
    main_skill: 's00000063',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000064',
    name: '曹植',
    name_en: 'caozhi',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.INTELLIGENCE],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s4,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '53.1',
      defend: '71.5',
      intelligence: '115.1',
      speed: '105.8',
      politics: '98.1',
      charm: '112.2'
    },
    growth: {
      force: '0.50',
      defend: '1.20',
      intelligence: '2.50',
      speed: '1.54',
      politics: '2.10',
      charm: '2.20'
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
    main_skill: 's00000064',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000065',
    name: 'SP张春华',
    name_en: 'zhangchunhua',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.CONTROL],
    quality: HERO_QUALITY.SP,
    level: 1,
    season: HERO_SEASON.s5,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '62.8',
      defend: '84.2',
      intelligence: '123.9',
      speed: '117.49',
      politics: '82.9',
      charm: '130.2'
    },
    growth: {
      force: '0.80',
      defend: '1.40',
      intelligence: '2.80',
      speed: '2.44',
      politics: '1.40',
      charm: '2.80'
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
    main_skill: 's00000065',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000066',
    name: '司马昭',
    name_en: 'simazhao',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WEI,
    type: [HERO_TYPE.INTELLIGENCE, HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s5,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '54.1',
      defend: '115.8',
      intelligence: '128.0',
      speed: '119.45',
      politics: '99.3',
      charm: '116.1'
    },
    growth: {
      force: '0.40',
      defend: '1.70',
      intelligence: '2.70',
      speed: '2.30',
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
    main_skill: 's00000066',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000067',
    name: '孙权',
    name_en: 'sunquan',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WU,
    type: [HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 9,
    engergy: 150,
    attribute: {
      force: '79.6',
      defend: '99.2',
      intelligence: '101.2',
      speed: '92.2',
      politics: '97.9',
      charm: '101.6'
    },
    growth: {
      force: '1.30',
      defend: '1.20',
      intelligence: '2.30',
      speed: '2.22',
      politics: '2.00',
      charm: '1.90'
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
    main_skill: 's00000067',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000068',
    name: '陆逊',
    name_en: 'luxun',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WU,
    type: [HERO_TYPE.INTELLIGENCE],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 9,
    engergy: 150,
    attribute: {
      force: '41.2',
      defend: '96.3',
      intelligence: '125.0',
      speed: '120.4',
      politics: '106.1',
      charm: '107.6'
    },
    growth: {
      force: '0.30',
      defend: '1.30',
      intelligence: '2.60',
      speed: '2.12',
      politics: '2.00',
      charm: '2.30'
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
    main_skill: 's00000068',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000069',
    name: '孙坚',
    name_en: 'sunjian',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WU,
    type: [HERO_TYPE.DEFEND, HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '97.9',
      defend: '113.0',
      intelligence: '78.3',
      speed: '93.2',
      politics: '83.1',
      charm: '77.0'
    },
    growth: {
      force: '2.00',
      defend: '2.40',
      intelligence: '1.40',
      speed: '0.84',
      politics: '1.30',
      charm: '1.50'
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
    main_skill: 's00000069',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000070',
    name: '孙尚香',
    name_en: 'sunshangxiang',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WU,
    type: [HERO_TYPE.SPEED, HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '110.7',
      defend: '83.5',
      intelligence: '78.0',
      speed: '118.2',
      politics: '68.4',
      charm: '85.8'
    },
    growth: {
      force: '2.50',
      defend: '0.60',
      intelligence: '1.20',
      speed: '2.60',
      politics: '1.20',
      charm: '1.60'
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
    main_skill: 's00000070',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000071',
    name: '周瑜',
    name_en: 'zhouyu',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WU,
    type: [HERO_TYPE.INTELLIGENCE],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '49.7',
      defend: '82.7',
      intelligence: '127.2',
      speed: '117.8',
      politics: '60.9',
      charm: '112.9'
    },
    growth: {
      force: '0.60',
      defend: '1.70',
      intelligence: '2.70',
      speed: '2.02',
      politics: '1.00',
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
    main_skill: 's00000071',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000072',
    name: '黄盖',
    name_en: 'huanggai',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WU,
    type: [HERO_TYPE.DEFEND],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '79.3',
      defend: '127.6',
      intelligence: '96.7',
      speed: '88.2',
      politics: '69.9',
      charm: '79.5'
    },
    growth: {
      force: '1.50',
      defend: '2.70',
      intelligence: '2.00',
      speed: '0.96',
      politics: '1.20',
      charm: '1.30'
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
    main_skill: 's00000072',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000073',
    name: '凌统',
    name_en: 'lengtong',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WU,
    type: [HERO_TYPE.ASSISTENT, HERO_TYPE.BOTH],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '102.0',
      defend: '99.1',
      intelligence: '101.9',
      speed: '94.5',
      politics: '72.5',
      charm: '74.3'
    },
    growth: {
      force: '2.30',
      defend: '1.30',
      intelligence: '2.00',
      speed: '2.10',
      politics: '1.10',
      charm: '1.30'
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
    main_skill: 's00000073',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000074',
    name: '大乔',
    name_en: 'daqiao',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WU,
    type: [HERO_TYPE.CONTROL],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '51.8',
      defend: '84.4',
      intelligence: '104.6',
      speed: '96.4',
      politics: '75.5',
      charm: '109.5'
    },
    growth: {
      force: '0.50',
      defend: '0.80',
      intelligence: '2.10',
      speed: '1.30',
      politics: '1.50',
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
    main_skill: 's00000074',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000075',
    name: '鲁肃',
    name_en: 'lusu',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WU,
    type: [HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '39.4',
      defend: '95.3',
      intelligence: '119.7',
      speed: '117.8',
      politics: '108.2',
      charm: '72.6'
    },
    growth: {
      force: '0.30',
      defend: '1.30',
      intelligence: '2.40',
      speed: '2.28',
      politics: '2.50',
      charm: '1.10'
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
    main_skill: 's00000075',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000076',
    name: '太史慈',
    name_en: 'taishici',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WU,
    type: [HERO_TYPE.INTELLIGENCE],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '115.8',
      defend: '98.6',
      intelligence: '92.6',
      speed: '119.5',
      politics: '46.6',
      charm: '84.0'
    },
    growth: {
      force: '2.70',
      defend: '1.30',
      intelligence: '1.60',
      speed: '2.79',
      politics: '0.40',
      charm: '1.40'
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
    main_skill: 's00000076',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000077',
    name: '甘宁',
    name_en: 'ganning',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WU,
    type: [HERO_TYPE.FORCE],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '122.6',
      defend: '114.1',
      intelligence: '81.1',
      speed: '116.2',
      politics: '50.3',
      charm: '103.9'
    },
    growth: {
      force: '2.70',
      defend: '1.70',
      intelligence: '1.30',
      speed: '1.86',
      politics: '0.30',
      charm: '2.10'
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
    main_skill: 's00000077',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000078',
    name: '孙策',
    name_en: 'sunce',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WU,
    type: [HERO_TYPE.FORCE],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '116.5',
      defend: '118.4',
      intelligence: '80.3',
      speed: '111.1',
      politics: '96.9',
      charm: '107.5'
    },
    growth: {
      force: '2.40',
      defend: '1.60',
      intelligence: '1.20',
      speed: '2.10',
      politics: '1.90',
      charm: '2.10'
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
    main_skill: 's00000078',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000079',
    name: '小乔',
    name_en: 'xiaoqiao',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WU,
    type: [HERO_TYPE.HEAL, HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '92.7',
      defend: '104.3',
      intelligence: '97.3',
      speed: '96.7',
      politics: '74.7',
      charm: '119.6'
    },
    growth: {
      force: '1.60',
      defend: '1.60',
      intelligence: '2.00',
      speed: '1.36',
      politics: '1.40',
      charm: '2.80'
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
    main_skill: 's00000079',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000080',
    name: '吕蒙',
    name_en: 'lvmeng',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WU,
    type: [HERO_TYPE.ASSISTENT, HERO_TYPE.BOTH],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '111.4',
      defend: '102.0',
      intelligence: '100.1',
      speed: '104.6',
      politics: '84.1',
      charm: '85.9'
    },
    growth: {
      force: '2.30',
      defend: '2.30',
      intelligence: '2.10',
      speed: '1.70',
      politics: '1.50',
      charm: '1.40'
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
    main_skill: 's00000080',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000081',
    name: '程普',
    name_en: 'chengpu',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WU,
    type: [HERO_TYPE.BOTH],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 6,
    engergy: 150,
    attribute: {
      force: '110.2',
      defend: '115.1',
      intelligence: '104.4',
      speed: '107.4',
      politics: '75.9',
      charm: '85.0'
    },
    growth: {
      force: '2.10',
      defend: '1.50',
      intelligence: '2.20',
      speed: '1.92',
      politics: '1.20',
      charm: '1.40'
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
    main_skill: 's00000081',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000082',
    name: '韩当',
    name_en: 'handang',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WU,
    type: [HERO_TYPE.FORCE],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 6,
    engergy: 150,
    attribute: {
      force: '116.6',
      defend: '106.5',
      intelligence: '72.9',
      speed: '111.2',
      politics: '83.0',
      charm: '75.0'
    },
    growth: {
      force: '2.30',
      defend: '1.60',
      intelligence: '1.20',
      speed: '1.38',
      politics: '1.60',
      charm: '1.20'
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
    main_skill: 's00000082',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000083',
    name: '吴国太',
    name_en: 'wuguotai',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WU,
    type: [HERO_TYPE.CONTROL],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '46.5',
      defend: '64.6',
      intelligence: '97.0',
      speed: '94.3',
      politics: '64.6',
      charm: '105.8'
    },
    growth: {
      force: '0.60',
      defend: '1.10',
      intelligence: '1.90',
      speed: '1.10',
      politics: '1.10',
      charm: '2.10'
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
    main_skill: 's00000083',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000084',
    name: '丁奉',
    name_en: 'dingfeng',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WU,
    type: [HERO_TYPE.FORCE, HERO_TYPE.CONTROL],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '100.0',
      defend: '88.7',
      intelligence: '78.2',
      speed: '99.2',
      politics: '59.9',
      charm: '70.5'
    },
    growth: {
      force: '2.00',
      defend: '1.20',
      intelligence: '1.40',
      speed: '1.60',
      politics: '0.90',
      charm: '1.30'
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
    main_skill: 's00000084',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000085',
    name: '张昭',
    name_en: 'zhangzhao',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WU,
    type: [HERO_TYPE.CONTROL],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 6,
    engergy: 150,
    attribute: {
      force: '53.0',
      defend: '69.3',
      intelligence: '82.8',
      speed: '78.6',
      politics: '98.3',
      charm: '76.0'
    },
    growth: {
      force: '0.80',
      defend: '0.30',
      intelligence: '1.60',
      speed: '1.50',
      politics: '1.80',
      charm: '1.20'
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
    main_skill: 's00000085',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000086',
    name: '蒋钦',
    name_en: 'jiangqin',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WU,
    type: [HERO_TYPE.FORCE],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 5,
    engergy: 150,
    attribute: {
      force: '93.3',
      defend: '93.6',
      intelligence: '67.2',
      speed: '89.7',
      politics: '58.3',
      charm: '63.8'
    },
    growth: {
      force: '1.70',
      defend: '1.90',
      intelligence: '1.00',
      speed: '1.60',
      politics: '0.90',
      charm: '0.70'
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
    main_skill: 's00000086',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000087',
    name: '周泰',
    name_en: 'zhoutai',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WU,
    type: [HERO_TYPE.DEFEND],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s2,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '93.5',
      defend: '123.6',
      intelligence: '68.9',
      speed: '87.8',
      politics: '56.1',
      charm: '77.1'
    },
    growth: {
      force: '1.70',
      defend: '2.60',
      intelligence: '1.30',
      speed: '0.82',
      politics: '0.90',
      charm: '1.40'
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
    main_skill: 's00000087',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000088',
    name: '陆抗',
    name_en: 'lukang',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WU,
    type: [HERO_TYPE.BOTH, HERO_TYPE.SPEED],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s3,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '107.2',
      defend: '104.2',
      intelligence: '110.9',
      speed: '118.7',
      politics: '86.6',
      charm: '94.4'
    },
    growth: {
      force: '2.20',
      defend: '1.60',
      intelligence: '2.20',
      speed: '2.37',
      politics: '1.50',
      charm: '2.00'
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
    main_skill: 's00000088',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000089',
    name: '步练师',
    name_en: 'bulianshi',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WU,
    type: [HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s3,
    cost: 9,
    engergy: 150,
    attribute: {
      force: '55.2',
      defend: '78.1',
      intelligence: '106.7',
      speed: '105.2',
      politics: '64.2',
      charm: '113.8'
    },
    growth: {
      force: '0.60',
      defend: '1.50',
      intelligence: '2.20',
      speed: '1.88',
      politics: '1.10',
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
    main_skill: 's00000089',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000090',
    name: '徐盛',
    name_en: 'xusheng',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.WU,
    type: [HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s5,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '102.1',
      defend: '122.5',
      intelligence: '101.6',
      speed: '98.08',
      politics: '87.9',
      charm: '103.2'
    },
    growth: {
      force: '2.10',
      defend: '2.60',
      intelligence: '2.10',
      speed: '2.10',
      politics: '1.60',
      charm: '2.00'
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
    main_skill: 's00000090',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000091',
    name: '吕布',
    name_en: 'lvbu',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.FORCE, HERO_TYPE.CONTROL],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 9,
    engergy: 150,
    attribute: {
      force: '137.9',
      defend: '115.8',
      intelligence: '58.2',
      speed: '135.1',
      politics: '68.3',
      charm: '101.1'
    },
    growth: {
      force: '3.00',
      defend: '2.60',
      intelligence: '0.60',
      speed: '2.04',
      politics: '0.90',
      charm: '2.10'
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
    main_skill: 's00000091',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000092',
    name: '董卓',
    name_en: 'dongzhuo',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.DEFEND],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '101.7',
      defend: '120.5',
      intelligence: '101.0',
      speed: '93.4',
      politics: '76.3',
      charm: '76.4'
    },
    growth: {
      force: '1.90',
      defend: '2.70',
      intelligence: '1.90',
      speed: '0.94',
      politics: '1.20',
      charm: '1.10'
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
    main_skill: 's00000092',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000093',
    name: '貂蝉',
    name_en: 'diaochan',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.CONTROL],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '53.2',
      defend: '82.2',
      intelligence: '113.4',
      speed: '112.5',
      politics: '47.6',
      charm: '124.1'
    },
    growth: {
      force: '0.60',
      defend: '0.90',
      intelligence: '2.20',
      speed: '1.12',
      politics: '0.60',
      charm: '2.60'
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
    main_skill: 's00000093',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000094',
    name: '祝融',
    name_en: 'zhurong',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.FORCE, HERO_TYPE.SPEED],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '111.6',
      defend: '66.6',
      intelligence: '87.8',
      speed: '118.0',
      politics: '59.3',
      charm: '71.7'
    },
    growth: {
      force: '2.40',
      defend: '1.20',
      intelligence: '1.70',
      speed: '2.68',
      politics: '0.80',
      charm: '1.10'
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
    main_skill: 's00000094',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000095',
    name: '张角',
    name_en: 'zhangjiao',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.INTELLIGENCE],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '67.2',
      defend: '79.4',
      intelligence: '122.3',
      speed: '117.3',
      politics: '71.2',
      charm: '85.0'
    },
    growth: {
      force: '1.00',
      defend: '1.20',
      intelligence: '2.50',
      speed: '1.58',
      politics: '1.10',
      charm: '1.80'
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
    main_skill: 's00000095',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000096',
    name: '华佗',
    name_en: 'huatuo',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.HEAL, HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '45.1',
      defend: '69.5',
      intelligence: '123.3',
      speed: '112.1',
      politics: '72.9',
      charm: '75.7'
    },
    growth: {
      force: '0.50',
      defend: '1.30',
      intelligence: '2.50',
      speed: '1.18',
      politics: '1.00',
      charm: '1.30'
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
    main_skill: 's00000096',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000097',
    name: '于吉',
    name_en: 'yuji',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.INTELLIGENCE],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '39.8',
      defend: '67.0',
      intelligence: '118.7',
      speed: '117.4',
      politics: '70.2',
      charm: '107.9'
    },
    growth: {
      force: '0.30',
      defend: '1.10',
      intelligence: '2.40',
      speed: '1.36',
      politics: '1.20',
      charm: '2.10'
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
    main_skill: 's00000097',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000098',
    name: '袁绍',
    name_en: 'yuanshao',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '77.3',
      defend: '101.9',
      intelligence: '101.7',
      speed: '92.7',
      politics: '85.1',
      charm: '76.6'
    },
    growth: {
      force: '1.30',
      defend: '2.20',
      intelligence: '1.90',
      speed: '0.98',
      politics: '1.80',
      charm: '1.30'
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
    main_skill: 's00000098',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000099',
    name: '孟获',
    name_en: 'menghuo',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.DEFEND],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '101.0',
      defend: '110.8',
      intelligence: '62.8',
      speed: '97.4',
      politics: '88.3',
      charm: '93.0'
    },
    growth: {
      force: '2.00',
      defend: '2.20',
      intelligence: '0.80',
      speed: '1.48',
      politics: '1.50',
      charm: '2.00'
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
    main_skill: 's00000099',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000100',
    name: '蔡文姬',
    name_en: 'caiwenji',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.HEAL, HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 6,
    engergy: 150,
    attribute: {
      force: '51.6',
      defend: '67.4',
      intelligence: '109.0',
      speed: '102.1',
      politics: '85.8',
      charm: '103.9'
    },
    growth: {
      force: '0.80',
      defend: '0.40',
      intelligence: '2.40',
      speed: '2.20',
      politics: '1.50',
      charm: '2.10'
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
    main_skill: 's00000100',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000101',
    name: '左慈',
    name_en: 'zuoci',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 6,
    engergy: 150,
    attribute: {
      force: '66.0',
      defend: '73.8',
      intelligence: '126.2',
      speed: '121.2',
      politics: '87.8',
      charm: '58.2'
    },
    growth: {
      force: '1.00',
      defend: '0.40',
      intelligence: '2.50',
      speed: '1.34',
      politics: '1.50',
      charm: '0.60'
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
    main_skill: 's00000101',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000102',
    name: '潘凤',
    name_en: 'panfeng',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.FORCE],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '105.2',
      defend: '74.5',
      intelligence: '65.6',
      speed: '96.6',
      politics: '41.4',
      charm: '68.5'
    },
    growth: {
      force: '2.10',
      defend: '0.90',
      intelligence: '0.80',
      speed: '1.30',
      politics: '0.30',
      charm: '1.00'
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
    main_skill: 's00000102',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000103',
    name: '何太后',
    name_en: 'hetaihou',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.INTELLIGENCE, HERO_TYPE.CONTROL],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '57.9',
      defend: '78.6',
      intelligence: '83.2',
      speed: '74.6',
      politics: '90.4',
      charm: '52.5'
    },
    growth: {
      force: '0.90',
      defend: '0.60',
      intelligence: '1.70',
      speed: '1.60',
      politics: '1.70',
      charm: '0.80'
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
    main_skill: 's00000103',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000104',
    name: '朵思',
    name_en: 'duosi',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.INTELLIGENCE],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '68.8',
      defend: '58.9',
      intelligence: '105.4',
      speed: '100.4',
      politics: '80.7',
      charm: '91.3'
    },
    growth: {
      force: '1.20',
      defend: '1.00',
      intelligence: '2.00',
      speed: '1.80',
      politics: '1.40',
      charm: '1.70'
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
    main_skill: 's00000104',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000105',
    name: '李儒',
    name_en: 'liru',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.INTELLIGENCE],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '66.5',
      defend: '79.9',
      intelligence: '108.6',
      speed: '105.9',
      politics: '90.3',
      charm: '73.0'
    },
    growth: {
      force: '0.80',
      defend: '1.30',
      intelligence: '2.20',
      speed: '1.40',
      politics: '1.60',
      charm: '1.00'
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
    main_skill: 's00000105',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000106',
    name: '张梁',
    name_en: 'zhanglian',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.SPEED, HERO_TYPE.CONTROL],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 6,
    engergy: 150,
    attribute: {
      force: '90.4',
      defend: '78.5',
      intelligence: '77.8',
      speed: '99.4',
      politics: '70.0',
      charm: '48.1'
    },
    growth: {
      force: '1.80',
      defend: '1.30',
      intelligence: '1.30',
      speed: '2.00',
      politics: '0.90',
      charm: '0.60'
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
    main_skill: 's00000106',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000107',
    name: '文丑',
    name_en: 'wenchou',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.FORCE],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 6,
    engergy: 150,
    attribute: {
      force: '107.8',
      defend: '78.5',
      intelligence: '60.4',
      speed: '107.2',
      politics: '37.8',
      charm: '55.6'
    },
    growth: {
      force: '2.10',
      defend: '1.00',
      intelligence: '0.60',
      speed: '0.90',
      politics: '0.30',
      charm: '0.90'
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
    main_skill: 's00000107',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000108',
    name: '郭汜',
    name_en: 'guosi',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 5,
    engergy: 150,
    attribute: {
      force: '78.9',
      defend: '73.9',
      intelligence: '68.7',
      speed: '74.1',
      politics: '76.7',
      charm: '45.5'
    },
    growth: {
      force: '1.60',
      defend: '1.10',
      intelligence: '1.30',
      speed: '1.40',
      politics: '1.20',
      charm: '0.40'
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
    main_skill: 's00000108',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000109',
    name: '刘表',
    name_en: 'liubiao',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.INTELLIGENCE],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 5,
    engergy: 150,
    attribute: {
      force: '59.9',
      defend: '71.4',
      intelligence: '88.6',
      speed: '79.1',
      politics: '84.0',
      charm: '91.3'
    },
    growth: {
      force: '0.70',
      defend: '1.00',
      intelligence: '1.60',
      speed: '1.40',
      politics: '1.60',
      charm: '1.90'
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
    main_skill: 's00000109',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000110',
    name: '陈登',
    name_en: 'chendeng',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.INTELLIGENCE, HERO_TYPE.CONTROL],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 6,
    engergy: 150,
    attribute: {
      force: '74.4',
      defend: '80.4',
      intelligence: '96.4',
      speed: '87.4',
      politics: '85.1',
      charm: '58'
    },
    growth: {
      force: '1.30',
      defend: '1.30',
      intelligence: '1.90',
      speed: '1.50',
      politics: '1.50',
      charm: '0.90'
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
    main_skill: 's00000110',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000111',
    name: '华雄',
    name_en: 'huaxiong',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.FORCE, HERO_TYPE.SPEED],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 6,
    engergy: 150,
    attribute: {
      force: '96.6',
      defend: '98.8',
      intelligence: '40.9',
      speed: '103.8',
      politics: '52.3',
      charm: '42.7'
    },
    growth: {
      force: '1.90',
      defend: '1.80',
      intelligence: '0.30',
      speed: '2.10',
      politics: '0.30',
      charm: '0.40'
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
    main_skill: 's00000111',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000112',
    name: '李傕',
    name_en: 'lijue',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.FORCE],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 6,
    engergy: 150,
    attribute: {
      force: '84.6',
      defend: '100.6',
      intelligence: '71.6',
      speed: '84.4',
      politics: '73.0',
      charm: '66.1'
    },
    growth: {
      force: '1.60',
      defend: '1.90',
      intelligence: '1.20',
      speed: '0.50',
      politics: '1.30',
      charm: '1.20'
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
    main_skill: 's00000112',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000113',
    name: '韩遂',
    name_en: 'hansui',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.FORCE],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 6,
    engergy: 150,
    attribute: {
      force: '84.6',
      defend: '87.4',
      intelligence: '68.3',
      speed: '77.1',
      politics: '59.8',
      charm: '56.2'
    },
    growth: {
      force: '1.60',
      defend: '1.50',
      intelligence: '1.10',
      speed: '1.40',
      politics: '0.90',
      charm: '0.90'
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
    main_skill: 's00000113',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000114',
    name: '袁术',
    name_en: 'yuanshu',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 6,
    engergy: 150,
    attribute: {
      force: '72.6',
      defend: '85.8',
      intelligence: '90.9',
      speed: '81.0',
      politics: '69.1',
      charm: '75.2'
    },
    growth: {
      force: '1.20',
      defend: '1.70',
      intelligence: '1.70',
      speed: '1.30',
      politics: '1.30',
      charm: '1.40'
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
    main_skill: 's00000114',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000115',
    name: '张宝',
    name_en: 'zhangbao',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.INTELLIGENCE, HERO_TYPE.SPEED],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 6,
    engergy: 150,
    attribute: {
      force: '66.7',
      defend: '71.7',
      intelligence: '93.1',
      speed: '93.9',
      politics: '66.3',
      charm: '64.7'
    },
    growth: {
      force: '1.20',
      defend: '1.40',
      intelligence: '1.70',
      speed: '1.90',
      politics: '1.10',
      charm: '1.20'
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
    main_skill: 's00000115',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000116',
    name: '颜良',
    name_en: 'yanliang',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.FORCE],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 6,
    engergy: 150,
    attribute: {
      force: '110.9',
      defend: '99.5',
      intelligence: '42.9',
      speed: '101.8',
      politics: '45.7',
      charm: '51.8'
    },
    growth: {
      force: '2.20',
      defend: '1.30',
      intelligence: '0.40',
      speed: '1.20',
      politics: '0.60',
      charm: '0.50'
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
    main_skill: 's00000116',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000117',
    name: '何进',
    name_en: 'hejin',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.HEAL],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 6,
    engergy: 150,
    attribute: {
      force: '84.4',
      defend: '99.6',
      intelligence: '60.8',
      speed: '77.8',
      politics: '56.4',
      charm: '57.3'
    },
    growth: {
      force: '1.70',
      defend: '1.40',
      intelligence: '1.00',
      speed: '0.70',
      politics: '0.90',
      charm: '0.70'
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
    main_skill: 's00000117',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000118',
    name: '张绣',
    name_en: 'zhangxiu',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.FORCE],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 6,
    engergy: 150,
    attribute: {
      force: '100.1',
      defend: '92.8',
      intelligence: '61.4',
      speed: '95.8',
      politics: '58.0',
      charm: '74.8'
    },
    growth: {
      force: '2.10',
      defend: '1.40',
      intelligence: '1.00',
      speed: '1.10',
      politics: '1.00',
      charm: '1.20'
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
    main_skill: 's00000118',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000119',
    name: '付寿',
    name_en: 'fushou',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.INTELLIGENCE],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 5,
    engergy: 150,
    attribute: {
      force: '62.3',
      defend: '68.4',
      intelligence: '94.2',
      speed: '90.4',
      politics: '73.8',
      charm: '53.0'
    },
    growth: {
      force: '0.90',
      defend: '1.30',
      intelligence: '1.70',
      speed: '1.40',
      politics: '1.00',
      charm: '0.70'
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
    main_skill: 's00000119',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000120',
    name: '兀突骨',
    name_en: 'wutugu',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.FORCE],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 5,
    engergy: 150,
    attribute: {
      force: '97.1',
      defend: '81.6',
      intelligence: '60.8',
      speed: '90.2',
      politics: '42.0',
      charm: '56.6'
    },
    growth: {
      force: '1.80',
      defend: '1.10',
      intelligence: '0.70',
      speed: '1.00',
      politics: '0.40',
      charm: '0.80'
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
    main_skill: 's00000120',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000121',
    name: '主公',
    name_en: 'zhugong',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 5,
    engergy: 150,
    attribute: {
      force: '88.6',
      defend: '106.6',
      intelligence: '94.5',
      speed: '91.8',
      politics: '101.2',
      charm: '87.8'
    },
    growth: {
      force: '1.50',
      defend: '2.00',
      intelligence: '1.70',
      speed: '0.50',
      politics: '1.90',
      charm: '1.60'
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
    main_skill: 's00000121',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000122',
    name: '皇甫嵩',
    name_en: 'huangfusong',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.FORCE, HERO_TYPE.SPEED],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 5,
    engergy: 150,
    attribute: {
      force: '96.6',
      defend: '90.3',
      intelligence: '76.0',
      speed: '97.2',
      politics: '70.6',
      charm: '70.6'
    },
    growth: {
      force: '2.00',
      defend: '1.70',
      intelligence: '1.10',
      speed: '2.10',
      politics: '1.10',
      charm: '0.90'
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
    main_skill: 's00000122',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000123',
    name: '徐荣',
    name_en: 'xurong',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.FORCE],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '93.7',
      defend: '85.8',
      intelligence: '72.2',
      speed: '88.1',
      politics: '37.0',
      charm: '72.0'
    },
    growth: {
      force: '1.70',
      defend: '1.50',
      intelligence: '1.20',
      speed: '1.62',
      politics: '0.30',
      charm: '1.30'
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
    main_skill: 's00000123',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000124',
    name: '刘虞',
    name_en: 'liuyu',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 6,
    engergy: 150,
    attribute: {
      force: '63.5',
      defend: '78.5',
      intelligence: '108.0',
      speed: '100.3',
      politics: '102.4',
      charm: '113.1'
    },
    growth: {
      force: '0.80',
      defend: '1.20',
      intelligence: '2.20',
      speed: '1.56',
      politics: '2.20',
      charm: '2.20'
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
    main_skill: 's00000124',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000125',
    name: '朱儶',
    name_en: 'zhuxie',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.BOTH, HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 6,
    engergy: 150,
    attribute: {
      force: '93.2',
      defend: '95.6',
      intelligence: '92.3',
      speed: '85.3',
      politics: '81.6',
      charm: '72.7'
    },
    growth: {
      force: '1.80',
      defend: '1.30',
      intelligence: '1.90',
      speed: '1.54',
      politics: '1.40',
      charm: '1.40'
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
    main_skill: 's00000125',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000126',
    name: '孟优',
    name_en: 'mengyou',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.FORCE, HERO_TYPE.SPEED],
    quality: HERO_QUALITY.A,
    level: 1,
    season: HERO_SEASON.s1,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '101.0',
      defend: '99.4',
      intelligence: '64.6',
      speed: '104.4',
      politics: '44.9',
      charm: '49.2'
    },
    growth: {
      force: '2.30',
      defend: '1.30',
      intelligence: '0.80',
      speed: '2.57',
      politics: '0.60',
      charm: '0.40'
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
    main_skill: 's00000126',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000127',
    name: '公孙瓒',
    name_en: 'gongsunzan',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.FORCE, HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s2,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '107.2',
      defend: '96.8',
      intelligence: '78.0',
      speed: '102.1',
      politics: '57.3',
      charm: '76.9'
    },
    growth: {
      force: '2.30',
      defend: '2.10',
      intelligence: '1.20',
      speed: '1.62',
      politics: '0.90',
      charm: '1.20'
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
    main_skill: 's00000127',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000128',
    name: '马腾',
    name_en: 'mateng',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.SPEED, HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s2,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '119.2',
      defend: '117.4',
      intelligence: '92.0',
      speed: '121.8',
      politics: '58.3',
      charm: '98.7'
    },
    growth: {
      force: '2.40',
      defend: '1.70',
      intelligence: '1.60',
      speed: '2.50',
      politics: '1.00',
      charm: '2.00'
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
    main_skill: 's00000128',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000129',
    name: '陈宫',
    name_en: 'chengong',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.INTELLIGENCE],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s2,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '48.6',
      defend: '84.0',
      intelligence: '116.7',
      speed: '114.1',
      politics: '98.9',
      charm: '84.6'
    },
    growth: {
      force: '0.30',
      defend: '1.60',
      intelligence: '2.40',
      speed: '2.28',
      politics: '1.80',
      charm: '1.50'
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
    main_skill: 's00000129',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000130',
    name: '卢植',
    name_en: 'luzhi',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s2,
    cost: 9,
    engergy: 150,
    attribute: {
      force: '88.2',
      defend: '79.3',
      intelligence: '116.1',
      speed: '106.3',
      politics: '105.4',
      charm: '113.6'
    },
    growth: {
      force: '1.60',
      defend: '1.30',
      intelligence: '2.30',
      speed: '2.10',
      politics: '2.10',
      charm: '2.40'
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
    main_skill: 's00000130',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000131',
    name: '高顺',
    name_en: 'gaoshun',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.CONTROL],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s2,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '96.9',
      defend: '105.7',
      intelligence: '77.1',
      speed: '95.4',
      politics: '64.5',
      charm: '65.7'
    },
    growth: {
      force: '2.00',
      defend: '2.10',
      intelligence: '1.50',
      speed: '1.60',
      politics: '1.10',
      charm: '1.20'
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
    main_skill: 's00000131',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000132',
    name: '张燕',
    name_en: 'zhangyan',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.FORCE],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s3,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '117.4',
      defend: '112.4',
      intelligence: '66.6',
      speed: '117.1',
      politics: '55.0',
      charm: '102.8'
    },
    growth: {
      force: '2.50',
      defend: '2.20',
      intelligence: '0.90',
      speed: '1.42',
      politics: '0.90',
      charm: '1.90'
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
    main_skill: 's00000132',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000133',
    name: '灵帝',
    name_en: 'lingdi',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.DEFEND, HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s4,
    cost: 9,
    engergy: 150,
    attribute: {
      force: '68.9',
      defend: '99.0',
      intelligence: '96.7',
      speed: '95.5',
      politics: '92.8',
      charm: '84.6'
    },
    growth: {
      force: '1.00',
      defend: '2.20',
      intelligence: '1.90',
      speed: '1.58',
      politics: '2.00',
      charm: '1.50'
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
    main_skill: 's00000133',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000134',
    name: '张宁',
    name_en: 'zhangning',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.INTELLIGENCE, HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s4,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '54.8',
      defend: '93.4',
      intelligence: '103.8',
      speed: '98.8',
      politics: '76.3',
      charm: '111.4'
    },
    growth: {
      force: '0.50',
      defend: '2.00',
      intelligence: '2.60',
      speed: '2.40',
      politics: '1.40',
      charm: '2.20'
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
    main_skill: 's00000134',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000135',
    name: '吕玲绮',
    name_en: 'lvlingqi',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.FORCE],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s4,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '114.9',
      defend: '105.6',
      intelligence: '52.7',
      speed: '110.3',
      politics: '60.3',
      charm: '112.8'
    },
    growth: {
      force: '2.60',
      defend: '2.00',
      intelligence: '0.50',
      speed: '1.88',
      politics: '0.90',
      charm: '2.30'
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
    main_skill: 's00000135',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000136',
    name: '高览',
    name_en: 'gaolan',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.FORCE, HERO_TYPE.CONTROL],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s4,
    cost: 8,
    engergy: 150,
    attribute: {
      force: '106.1',
      defend: '106.3',
      intelligence: '77.2',
      speed: '99.8',
      politics: '57.6',
      charm: '57.3'
    },
    growth: {
      force: '2.40',
      defend: '2.20',
      intelligence: '1.40',
      speed: '2.68',
      politics: '0.70',
      charm: '0.80'
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
    main_skill: 's00000136',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000137',
    name: '木鹿',
    name_en: 'mulu',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.INTELLIGENCE, HERO_TYPE.ASSISTENT],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s4,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '57.6',
      defend: '93.9',
      intelligence: '102.5',
      speed: '93.1',
      politics: '42.9',
      charm: '59.7'
    },
    growth: {
      force: '0.60',
      defend: '2.00',
      intelligence: '2.30',
      speed: '1.62',
      politics: '0.40',
      charm: '0.90'
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
    main_skill: 's00000137',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
  {
    id: 'h00000138',
    name: '司马徽',
    name_en: 'simahui',
    desc: '',
    desc_en: '',
    country: HERO_COUNTRY.QUN,
    type: [HERO_TYPE.INTELLIGENCE],
    quality: HERO_QUALITY.S,
    level: 1,
    season: HERO_SEASON.s4,
    cost: 7,
    engergy: 150,
    attribute: {
      force: '74.0',
      defend: '82.4',
      intelligence: '97.7',
      speed: '96.7',
      politics: '88.4',
      charm: '69.3'
    },
    growth: {
      force: '1.20',
      defend: '1.50',
      intelligence: '2.20',
      speed: '1.84',
      politics: '1.80',
      charm: '1.30'
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
    main_skill: 's00000138',
    skill0: '',
    skill1: '',
    skill2: '',
    skins: []
  },
];
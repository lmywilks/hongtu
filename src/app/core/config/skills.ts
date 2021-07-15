import { SKILL, SKILL_ADJUSTMENT, SKILL_CATEGORY, SKILL_EFFECIENT, SKILL_QUALITY, SKILL_STATUS } from "src/app/models/skill.model";

export const Skills: SKILL[] = [
  {
    id: 's00000001',
    name: '昭烈',
    name_en: 'zhaolie',
    desc: '战斗开始前30秒，使我方武将最高的武将武力伤害提高12.50%（25%）（受魅力影响），我方随机2名武将减伤12.50%（25%）（受魅力影响）。',
    desc_en: '',
    category: SKILL_CATEGORY.COMMAND,
    level: 1,
    status: SKILL_STATUS.UNKNOWN,
    effecient: [SKILL_EFFECIENT.BUFF],
    adjustment: [SKILL_ADJUSTMENT.INFANTRY, SKILL_ADJUSTMENT.ARCHER, SKILL_ADJUSTMENT.CAVALRY, SKILL_ADJUSTMENT.PIKEMAN],        
    quality: SKILL_QUALITY.S,
    exchangable: false,
    hero: 'h00000001'    
  },
  {
    id: 's00000002',
    name: '锦囊妙计',
    name_en: 'jinnangmiaoji',
    desc: '提高我方全体武将5%（10%）主动技能施放概率，我方全体武将开场获得1次抵挡（免疫1次主动技能、连击技能伤害），之后每次施放主动技能后15%（30%）概率使自身获得1次抵挡。',
    desc_en: '',
    category: SKILL_CATEGORY.COMMAND,
    level: 1,
    status: SKILL_STATUS.UNKNOWN,
    effecient: [SKILL_EFFECIENT.BUFF],
    adjustment: [SKILL_ADJUSTMENT.INFANTRY, SKILL_ADJUSTMENT.ARCHER, SKILL_ADJUSTMENT.CAVALRY, SKILL_ADJUSTMENT.PIKEMAN],
    quality: SKILL_QUALITY.S,
    exchangable: false,
    hero: 'h00000002'
  },
  {
    id: 's00000003',
    name: '长坂声威',
    name_en: 'changbanshengwei',
    desc: '随机对2名敌方武将造成75%（150%）武力伤害，40%概率对其施加力竭（无法造成伤害），持续10秒，如果目标是骑兵，则施加力竭概率翻倍，技能冷却20秒。',
    desc_en: '',
    category: SKILL_CATEGORY.ACTIVE,
    level: 1,
    status: SKILL_STATUS.UNKNOWN,
    effecient: [SKILL_EFFECIENT.FORCE_MULTIPLE, SKILL_EFFECIENT.CONTROL],
    adjustment: [SKILL_ADJUSTMENT.INFANTRY, SKILL_ADJUSTMENT.ARCHER, SKILL_ADJUSTMENT.CAVALRY, SKILL_ADJUSTMENT.PIKEMAN],
    quality: SKILL_QUALITY.S,
    exchangable: false,
    hero: 'h00000003'
  },
  {
    id: 's00000004',
    name: '千里单骑',
    name_en: 'qianlidanji',
    desc: '对敌方武力最高的2名武将造成75%（150%）武力伤害，并分别有40%（80%）概率对其施加缴械（无法普通攻击），持续10秒，技能冷却20秒。',
    desc_en: '',
    category: SKILL_CATEGORY.ACTIVE,
    level: 1,
    status: SKILL_STATUS.UNKNOWN,
    effecient: [SKILL_EFFECIENT.FORCE_MULTIPLE, SKILL_EFFECIENT.CONTROL],
    adjustment: [SKILL_ADJUSTMENT.INFANTRY, SKILL_ADJUSTMENT.ARCHER, SKILL_ADJUSTMENT.CAVALRY, SKILL_ADJUSTMENT.PIKEMAN],
    quality: SKILL_QUALITY.S,
    exchangable: false,
    hero: 'h00000004'
  },
  {
    id: 's00000005',
    name: '龙胆',
    name_en: 'longdan',
    desc: '使自身免疫缴械，每出发一次连击技能，随机对1名非当前敌方武将造成75%（150%）武力伤害。',
    desc_en: '',
    category: SKILL_CATEGORY.PASSIVE,
    level: 1,
    status: SKILL_STATUS.UNKNOWN,
    effecient: [SKILL_EFFECIENT.BUFF],
    adjustment: [SKILL_ADJUSTMENT.INFANTRY, SKILL_ADJUSTMENT.ARCHER, SKILL_ADJUSTMENT.CAVALRY, SKILL_ADJUSTMENT.PIKEMAN],
    quality: SKILL_QUALITY.S,
    exchangable: false,
    hero: 'h00000005'
  },
  {
    id: 's00000006',
    name: '天相反骨',
    name_en: 'tianxiangfangu',
    desc: '随机对敌方目标（10%概率攻击友方武将）造成4段武力伤害（初始伤害率40%（80%）、10%（20%）递增），每次攻击的目标独立判定，技能冷却20秒。',
    desc_en: '',
    category: SKILL_CATEGORY.ACTIVE,
    level: 1,
    status: SKILL_STATUS.UNKNOWN,
    effecient: [SKILL_EFFECIENT.FORCE_MULTIPLE],
    adjustment: [SKILL_ADJUSTMENT.INFANTRY, SKILL_ADJUSTMENT.ARCHER, SKILL_ADJUSTMENT.CAVALRY, SKILL_ADJUSTMENT.PIKEMAN],
    quality: SKILL_QUALITY.S,
    exchangable: false,
    hero: 'h00000006'
  },
  {
    id: 's00000007',
    name: '定军扬威',
    name_en: 'dingjunyangwei',
    desc: '对1名兵力最低的敌方武将造成75%（150%）的武力伤害，目标每有1个负面状态（上限为2个），则此次伤害提高50%，技能冷却10秒。',
    desc_en: '',
    category: SKILL_CATEGORY.ACTIVE,
    level: 1,
    status: SKILL_STATUS.UNKNOWN,
    effecient: [SKILL_EFFECIENT.FORCE_SINGLE, SKILL_EFFECIENT.BUFF],
    adjustment: [SKILL_ADJUSTMENT.INFANTRY, SKILL_ADJUSTMENT.ARCHER, SKILL_ADJUSTMENT.CAVALRY, SKILL_ADJUSTMENT.PIKEMAN],
    quality: SKILL_QUALITY.S,
    exchangable: false,
    hero: 'h00000007'
  }
];
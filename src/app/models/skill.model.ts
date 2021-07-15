export interface SKILL {
    id: string;
    name: string;
    name_en: string;
    desc: string;
    desc_en: string;
    category: SKILL_CATEGORY;
    level: number;
    status: SKILL_STATUS;
    exchangable: boolean;
    hero?: string;
    effecient: SKILL_EFFECIENT[],
    adjustment: SKILL_ADJUSTMENT[],
    quality: SKILL_QUALITY;
    image?: string;
    metadata?: any;
}

export enum SKILL_QUALITY {
    B = 'B',
    A = 'A',
    S = 'S'
}

export enum SKILL_EFFECIENT {
    INTELLIGENCE_SINGLE = 'skill.effecient.INTELLIGENCE_SINGLE',
    INTELLIGENCE_MULTIPLE = 'skill.effecient.INTELLIGENCE_MULTIPLE',
    FORCE_SINGLE = 'skill.effecient.FORCE_SINGLE',
    FORCE_MULTIPLE = 'skill.effecient.FORCE_MULTIPLE',
    BUFF = 'skill.effecient.BUFF',
    DEBUFF = 'skill.effecient.DEBUFF',
    PROTECTION = 'skill.effecient.PROTECTION',
    HEAL = 'skill.effecient.HEAL',
    CONTROL = 'skill.effecient.CONTROL',
    HOME = 'skill.effecient.HOME'
}

export enum SKILL_STATUS {
    UNKNOWN = 'skill.status.UNKNOWN',
    UNOWNED = 'skill.status.UNOWNED',
    OWNED = 'skill.status.OWNED',
    RESEARCHABLE = 'skill.status.RESEARCHABLE',
    EXCHANGABLE = 'skill.status.EXCHANGABLE'
}

export enum SKILL_CATEGORY {
    COMMAND = 'skill.category.COMMAND',
    PASSIVE = 'skill.category.PASSIVE',
    ACTIVE = 'skill.category.ACTIVE',
    COMBO = 'skill.category.COMBO',
    HOME = 'skill.category.HOME',
    ARRAY = 'skill.category.ARRAY',
    WAR = 'skill.category.WAR'
};

export enum SKILL_ADJUSTMENT {
    INFANTRY = 'skill.adjustment.INFANTRY',    
    ARCHER = 'skill.adjustment.ARCHER',
    PIKEMAN = 'skill.adjustment.PIKEMAN',
    CAVALRY = 'skill.adjustment.CAVALRY'
}
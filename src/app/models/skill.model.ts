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
    INTELLIGENCE_SINGLE = 'type.skill.effecient.INTELLIGENCE_SINGLE',
    INTELLIGENCE_MULTIPLE = 'type.skill.effecient.INTELLIGENCE_MULTIPLE',
    FORCE_SINGLE = 'type.skill.effecient.FORCE_SINGLE',
    FORCE_MULTIPLE = 'type.skill.effecient.FORCE_MULTIPLE',
    BUFF = 'type.skill.effecient.BUFF',
    DEBUFF = 'type.skill.effecient.DEBUFF',
    PROTECTION = 'type.skill.effecient.PROTECTION',
    HEAL = 'type.skill.effecient.HEAL',
    CONTROL = 'type.skill.effecient.CONTROL',
    HOME = 'type.skill.effecient.HOME'
}

export enum SKILL_STATUS {
    UNKNOWN = 'type.skill.status.UNKNOWN',
    UNOWNED = 'type.skill.status.UNOWNED',
    OWNED = 'type.skill.status.OWNED',
    RESEARCHABLE = 'type.skill.status.RESEARCHABLE',
    EXCHANGABLE = 'type.skill.status.EXCHANGABLE'
}

export enum SKILL_CATEGORY {
    MAIN = 'type.skill.category.MAIN',
    COMMAND = 'type.skill.category.COMMAND',
    PASSIVE = 'type.skill.category.PASSIVE',
    ACTIVE = 'type.skill.category.ACTIVE',
    COMBO = 'type.skill.category.COMBO',
    HOME = 'type.skill.category.HOME',
    ARRAY = 'type.skill.category.ARRAY',
    WAR = 'type.skill.category.WAR'
};

export enum SKILL_ADJUSTMENT {
    INFANTRY = 'type.skill.adjustment.INFANTRY',    
    ARCHER = 'type.skill.adjustment.ARCHER',
    PIKEMAN = 'type.skill.adjustment.PIKEMAN',
    CAVALRY = 'type.skill.adjustment.CAVALRY'
}
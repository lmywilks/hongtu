export interface SKILL {
    id: string;
    name: string;
    desc: string;
    category: SKILL_CATEGORY[];
    level: number;
    status: SKILL_STATUS;
    effecient: SKILL_EFFECIENT[],
    basic: number;
    growth: number;
    quality: SKILL_QUALITY;
}

export enum SKILL_QUALITY {
    B,
    A,
    S
}

export enum SKILL_EFFECIENT {
    INTELLIGENCE_SINGLE,
    INTELLIGENCE_MULTIPLE,
    FORCE_SINGLE,
    FORCE_MULTIPLE,
    BUFF,
    DEBUFF,
    PROTECTION,
    HEAL,
    CONTROL,
    HOME
}

export enum SKILL_STATUS {
    UNOWNED,
    OWNED,
    RESEARCHABLE,
    EXCHANGABLE
}

export enum SKILL_CATEGORY {
    COMMAND,
    PASSIVE,
    ACTIVE,
    COMBO,
    HOME,
    ARRAY,
    WAR
};
export interface HERO {
    id: string;
    name: string;
    pinyin: string;
    country: string;
    desc: string;
    level: number;
    engergy: number;
    type: HERO_TYPE[];
    quality: HERO_QUALITY;
    attribute: ATTRIBUTE;
    growth: ATTRIBUTE;
    points: POINT;
    main_skill: string;
    skill0: string;
    skill1: string;
    skill2: string;
    skins: string[];
}

export interface ATTRIBUTE {
    force: string;
    defend: string;
    intelligence: string;
    speed: string;
    politics: string;
    charm: string;
}

export interface POINT {
    active: number;
    attribute: ATTRIBUTE;
}

export interface SKIN {
    id: string;
    hero_id: string;
    images: string;
    is_default: boolean;
}

export enum HERO_QUALITY {
    B,
    A,
    S,
    SP,
    XP
}

export enum HERO_TYPE {
    '武',
    '智',
    '兼',
    '迅',
    '辅',
    '医',
    '盾',
    '控'
}
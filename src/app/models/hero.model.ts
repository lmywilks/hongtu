export interface HERO {
    id: string;
    name: string;
    name_en: string;
    country: HERO_COUNTRY;
    desc: string;
    desc_en: string;
    season: HERO_SEASON;
    cost: number;
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
    B = 'type.hero.quality.b',
    A = 'type.hero.quality.a',
    S = 'type.hero.quality.s',
    SP = 'type.hero.quality.sp',
    XP = 'type.hero.quality.xp'
}

export enum HERO_TYPE {
    FORCE = 'type.hero.type.force',
    INTELLIGENCE = 'type.hero.type.intelligence',
    BOTH = 'type.hero.type.both',
    SPEED = 'type.hero.type.speed',
    ASSISTENT = 'type.hero.type.assistent',
    HEAL = 'type.hero.type.heal',
    DEFEND = 'type.hero.type.defend',
    CONTROL = 'type.hero.type.control'
}

export enum HERO_COUNTRY {
    SHU = 'type.hero.country.shu',
    WEI = 'type.hero.country.wei',
    WU = 'type.hero.country.wu',
    QUN = 'type.hero.country.qun'
}

export enum HERO_SEASON {
    s1 = 'type.hero.season.s1',
    s2 = 'type.hero.season.s2',
    s3 = 'type.hero.season.s3',
    s4 = 'type.hero.season.s4',
    s5 = 'type.hero.season.s5',
    s6 = 'type.hero.season.s6',
    s7 = 'type.hero.season.s7',
    s8 = 'type.hero.season.s8',
    s9 = 'type.hero.season.s9',
    s10 = 'type.hero.season.s10'
}
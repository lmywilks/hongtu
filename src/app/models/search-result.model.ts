import { HERO } from "./hero.model";
import { SKILL } from "./skill.model";

export interface SearchHeroResult {
    heros: HERO[];
    total: number;
}

export interface SearchSkillResult {
    skills: SKILL[];
    total: number;
}
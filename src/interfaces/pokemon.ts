
export interface Species {
  name: string;
  url: string;
}

export interface VersionDetail {
  rarity: number;
  version: Species;
}

export interface GameIndex {
  'game_index': number;
  version: Species;
}

export interface HeldItem {
  item: Species;
  'version_details': VersionDetail[];
}

export interface RedBlue {
  'back_default': string;
  'back_gray': string;
  'back_transparent': string;
  'front_default': string;
  'front_gray': string;
  'front_transparent': string;
}

export interface Crystal {
  'back_default': string;
  'back_shiny': string;
  'back_shiny_transparent': string;
  'back_transparent': string;
  'front_default': string;
  'front_shiny': string;
  'front_shiny_transparent': string;
  'front_transparent': string;
}

export interface Gold {
  'back_default': string;
  'back_shiny': string;
  'front_default': string;
  'front_shiny': string;
  'front_transparent'?: string;
}

export interface DreamWorld {
  'front_default': string;
  'front_female': null;
}

export interface Emerald {
  'front_default': string;
  'front_shiny': string;
}

export interface Home {
  'front_default': string;
  'front_female': null;
  'front_shiny': string;
  'front_shiny_female': null;
}

export interface Ability {
  ability: Species;
  'is_hidden': boolean;
  slot: number;
}

export interface GenerationI {
  'red-blue': RedBlue;
  yellow: RedBlue;
}

export interface GenerationIi {
  crystal: Crystal;
  gold: Gold;
  silver: Gold;
}

export interface GenerationIii {
  emerald: Emerald;
  'firered-leafgreen': Gold;
  'ruby-sapphire': Gold;
}

export interface GenerationVii {
  icons: DreamWorld;
  'ultra-sun-ultra-moon': Home;
}

export interface GenerationViii {
  icons: DreamWorld;
}

export interface OfficialArtwork {
  'front_default': string;
}

export interface Other {
  'dream_world': DreamWorld;
  home: Home;
  'official-artwork': OfficialArtwork;
}

export interface GenerationV {
  // eslint-disable-next-line no-use-before-define
  'black-white': Sprites;
}
export interface GenerationIv {
  // eslint-disable-next-line no-use-before-define
  'diamond-pearl': Sprites;
  // eslint-disable-next-line no-use-before-define
  'heartgold-soulsilver': Sprites;
  // eslint-disable-next-line no-use-before-define
  platinum: Sprites;
}
export interface Versions {
  'generation-i': GenerationI;
  'generation-ii': GenerationIi;
  'generation-iii': GenerationIii;
  'generation-iv': GenerationIv;
  'generation-v': GenerationV;
  'generation-vi': { [key: string]: Home };
  'generation-vii': GenerationVii;
  'generation-viii': GenerationViii;
}
export interface Sprites {
  'back_default': string;
  'back_female': null;
  'back_shiny': string;
  'back_shiny_female': null;
  'front_default': string;
  'front_female': null;
  'front_shiny': string;
  'front_shiny_female': null;
  other?: Other;
  versions?: Versions;
  animated?: Sprites;
}
export interface VersionGroupDetail {
  'level_learned_at': number;
  'move_learn_method': Species;
  'version_group': Species;
}

export interface Move {
  move: Species;
  'version_group_details': VersionGroupDetail[];
}

export interface Stat {
  'base_stat': number;
  effort: number;
  stat: Species;
}

export interface Type {
  slot: number;
  type: Species;
}

export interface Pokemon {
  abilities: Ability[];
  'base_experience': number;
  forms: Species[];
  'game_indices': GameIndex[];
  height: number;
  'held_items': HeldItem[];
  id: number;
  'is_default': boolean;
  'location_area_encounters': string;
  moves: Move[];
  name: string;
  order: number;
  'past_types': any[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

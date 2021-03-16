export interface GroupsModel {
  id ? : string;
  name: any;

  links ? : {
    www: string;
  } | {
    www: string;
  };
  price ? : {
    regular: number;selling: number;
  } | {
    regular: number;selling: number;
  };
  thumbnail ? : {
    size: string;meta: string;alt: string;rel: string;width: number;href: string;height: number;
  } | {
    size: string;meta: string;alt: string;rel: string;width: number;href: string;height: number;
  };
  hero ? : {
    size: string;meta: string;alt: string;rel: string;width: number;href: string;height: number;
  } | {
    size: string;meta: string;alt: string;rel: string;width: number;href: string;height: number;
  };
  images: any;
  swatches ? : any[];
  messages ? : any[];
  flags ? : {
    bopisSuppress: boolean;rank: number;id: string;
  } [] | {
    bopisSuppress: boolean;rank: number;id: string;
  } [];
  reviews ? : {
    recommendationCount: number;likelihood: number;reviewCount: number;averageRating: number;id: string;type: string;
  } | {
    recommendationCount: number;likelihood: number;reviewCount: number;averageRating: number;id: string;type: string;
  };
}

type SearchTerms = "home" | "about" | "cookies" | "help" | "user" | "rules" | "developer" | "author";

type ResultType = "TEXT" | "LINK" | "NAVIGATION";

type IResult = {
   term: SearchTerms;
   type: string;
   label: string;
   link?: string;
   text?: string;
   to?: string;
};

export interface ISearchConfig {
   terms: string[];
   results: Results;
}

export interface Results {
   home: IResult;
   about: IResult;
   cookies: IResult;
   help: IResult;
   user: IResult;
   rules: IResult;
   developer: IResult;
   author: IResult;
}

export { SearchTerms, ResultType, IResult };

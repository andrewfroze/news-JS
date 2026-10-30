type stringOrEmpty = string | null | undefined;

type sourceType = {
    id: string | null,
    name: string
};

type articleType = {
    source: sourceType,
    author: stringOrEmpty,
    title: stringOrEmpty,
    description: stringOrEmpty,
    url: stringOrEmpty,
    urlToImage: stringOrEmpty,
    publishedAt: string,
    content: stringOrEmpty,
  };

type sourceResponseType = {
    status: string,
    sources: sourceType[],
  };

type newsResponseType = {
    status: string,
    totalResults: string | undefined,
    articles: articleType[],
  };

export type { stringOrEmpty, articleType, sourceType, sourceResponseType, newsResponseType }
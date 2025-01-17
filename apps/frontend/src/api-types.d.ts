export type SiteSearchResponse = SiteSearchError | SiteSearchResult
export type SiteSearchError = {
    error: {
        type: string
        message: string
    }
}
export type SiteSearchResult = {
    query: string
    filters: ContentSearchResultFilters
    items: ContentSearchResultItems
    facets: ContentSearchResultFacets
    total: number
}
export type ContentSearchResultFilters = {
    field: string
    value: ( string | number)[]
}[]
export type ContentSearchResultItem = {
    name: string
    url: string
    type?: string[]
    changed?: string
    published?: string
}
export type ContentSearchResultFacet = {
    field: string
    options: {
        value: string | number
        count: number
    }[]
}
export type ContentSearchResultFacets = ContentSearchResultFacet[]
export type ContentSearchResultItems = ContentSearchResultItem[]
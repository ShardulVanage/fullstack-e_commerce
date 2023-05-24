
type Params = {

    id: string
}
type SearchParam = {
    name: string
    unit_amount: number | null
    image: string
    price: number | null
    id: string
    description: string | null
    features: string
}
export type SearchParamType = {
    param: Params
    searchParams: SearchParam

}


import {bestOffersSchema} from "./schemas/schema"

export const Response = {
    bestOffers: [{
        description: "hi",
        variant: "string",
        type: "hi"
    }]
}


const result = bestOffersSchema.safeParse(Response)

console.log(result)
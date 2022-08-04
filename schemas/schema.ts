import * as Zod from "zod";
import {propertyBestOfferSchema} from "./schema1"


export const bestOffersSchema = Zod.object({
  bestOffers: Zod.array(propertyBestOfferSchema),
});


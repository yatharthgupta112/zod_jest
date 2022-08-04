import * as Zod from "zod";


export const propertyBestOfferSchema = Zod.object({
  description: Zod.string(),
  variant: Zod.string(),
  type: Zod.string(),
});

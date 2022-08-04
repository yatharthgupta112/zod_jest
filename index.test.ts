import {Response} from "./index"
import {bestOffersSchema} from "./schemas/schema"

describe("offers", () => {

  it("test1", async () => {
    console.log(Response)
    console.log(bestOffersSchema)
    const result = bestOffersSchema.safeParse(Response)
    console.log(result)
    
    });
  });
  
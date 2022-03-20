// unit tests...

import axios from 'axios';
import { StormGlass } from "@src/clients/stormGlass";

jest.mock("axios");

describe("StormGlass client", () => {

  it("should return the normalized forecast from the StormGlass service", async () => {

    const lat = -33.792726;
    const lng =  151.289824;

    axios.get = jest.fn().mockResolvedValue({});

    const stormGlass = new StormGlass(axios);
    const response = await stormGlass.fetchPoints(lat, lng);

    expect(response).toEqual({});

  });

});
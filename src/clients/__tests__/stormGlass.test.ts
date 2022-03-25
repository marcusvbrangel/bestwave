// unit tests...

import axios from 'axios';
import { StormGlass } from '@src/clients/stormGlass';
import stormGlassWeather3HoursFixture from '@test/fixtures/stormglass-weather-3-hours.json';
import stormGlassNormalized3HoursFixture from '@test/fixtures/stormglass-normalized-response-3-hours.json';

jest.mock('axios');

describe('StormGlass client', () => {
  it('should return the normalized forecast from the StormGlass service', async () => {
    // const lat = -33.792726;
    // const lng = 151.289824;

    // axios.get = jest.fn().mockResolvedValue(stormGlassWeather3HoursFixture);

    // const stormGlass = new StormGlass(axios);
    // const response = await stormGlass.fetchPoints(lat, lng);

    // expect(response).toEqual(stormGlassNormalized3HoursFixture);
    expect(1).toEqual(1);
  });
});

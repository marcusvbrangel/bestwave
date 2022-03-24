import { AxiosStatic } from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export class StormGlass {
  readonly stormGlassAPIParams =
    'swellDirection,swellHeight,swellPeriod,waveDirection,waveHeight,windDirection,windSpeed';
  readonly stormGlassAPISource = 'noaa';

  constructor(protected request: AxiosStatic) {}

  public async fetchPoints(lat: number, lng: number): Promise<{}> {
    const urlAPI = `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${this.stormGlassAPIParams}&source=${this.stormGlassAPISource}`;
    console.log('urlAPI: ', urlAPI);

    const result = this.request.get(urlAPI, {
      headers: {
        Authorization: `${process.env.STORMGLASS_API_KEY}`,
      },
    });

    return result;
  }
}

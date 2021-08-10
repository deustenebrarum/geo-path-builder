import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: "AIzaSyB0D8rs5KJVBzRlSGTu3L8vLnrPwH3yRaw",
  version: "weekly"
});

export let google = await loader.load();
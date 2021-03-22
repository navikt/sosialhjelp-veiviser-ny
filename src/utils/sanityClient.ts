import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import {SanityImageSource} from "@sanity/image-url/lib/types/types";
import {erProd} from "./restUtils";

const client = sanityClient({
    projectId: "hvfvg2j3",
    dataset: erProd() ? "production" : "test",
    useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => {
    return builder.image(source);
};

export default client;

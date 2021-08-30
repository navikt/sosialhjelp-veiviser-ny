import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import {SanityImageSource} from "@sanity/image-url/lib/types/types";

const client = sanityClient({
    projectId: "hvfvg2j3",
    dataset: process.env.SANITY_DATASET ?? "production",
    useCdn: true,
    apiVersion: "2021-08-30",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => {
    return builder.image(source);
};

export default client;

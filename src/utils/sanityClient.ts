import sanityClient from "@sanity/client";
import config from "../../sanity/sanity.json";
import imageUrlBuilder from "@sanity/image-url";
import {SanityImageSource} from "@sanity/image-url/lib/types/types";

const client = sanityClient({
    projectId: "hvfvg2j3",
    dataset: "production",
    useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => {
    return builder.image(source);
};

export default client;

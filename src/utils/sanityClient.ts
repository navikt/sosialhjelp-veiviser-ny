import sanityClient from "@sanity/client";
import config from "../../sanity/sanity.json";

const client = sanityClient({
    projectId: "hvfvg2j3",
    dataset: "production",
    useCdn: true,
});

export default client;

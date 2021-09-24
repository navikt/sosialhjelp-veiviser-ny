import sanityClient from "@sanity/client";
import {createPreviewSubscriptionHook} from "next-sanity";

const config = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: true,
    apiVersion: "2021-08-30",
};

export default sanityClient(config);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

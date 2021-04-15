// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import article from "./article";
import blockContent from "./blockContent/blockContent";
import expandedPanel from "./blockContent/expandedPanel";
import localeString from "./locale/localeString";
import localeBlockContent from "./locale/localeBlockContent";
import localeUrl from "./locale/localeUrl";
import vimeo from "./blockContent/vimeo";
import veilederpanel from "./blockContent/veilederpanel";
import customBlockComponent from "./blockContent/customBlockComponent";
import frontPage from "./frontpage/frontPage";
import alert from "./frontpage/alert";
import linkPanel from "./frontpage/linkPanel";
import linkBoxLine from "./frontpage/linkBoxLine";
import linkBox from "./frontpage/linkBox";
import otherPossibilities from "./otherPossibilities/otherPossibilities";
import jobblystPanel from "./otherPossibilities/jobblystPanel";
import housingPanel from "./otherPossibilities/housingPanel";
import boxContent from "./otherPossibilities/boxContent";
import boxPanel from "./otherPossibilities/boxPanel";
import applicationPage from "./howToApply/applicationPage";
import applyDigitallyPanel from "./howToApply/applyDigitallyPanel";
import applyOfflinePanel from "./howToApply/applyOfflinePanel";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: "default",
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        alert,
        applicationPage,
        applyDigitallyPanel,
        applyOfflinePanel,
        article,
        blockContent,
        boxContent,
        boxPanel,
        customBlockComponent,
        expandedPanel,
        frontPage,
        housingPanel,
        jobblystPanel,
        linkBox,
        linkBoxLine,
        linkPanel,
        localeBlockContent,
        localeUrl,
        localeString,
        otherPossibilities,
        veilederpanel,
        vimeo,
    ]),
});

import S from "@sanity/desk-tool/structure-builder";
import {ArticlePreview} from "./preview/ArticlePreview";
import {FrontpagePreview} from "./preview/FrontpagePreview";

export default () =>
    S.list()
        .title("Innhold")
        .items([
            S.listItem()
                .title("Forside")
                .child(
                    S.editor()
                        .schemaType("frontPage")
                        .documentId("frontPage")
                        .views([
                            S.view.form(),
                            S.view.component(FrontpagePreview).title("Preview"),
                        ])
                ),
            S.listItem()
                .title("Andre muligheter")
                .child(
                    S.editor()
                        .schemaType("otherPossibilities")
                        .documentId("otherPossibilities")
                        .views([
                            S.view.form(),
                            S.view.component(ArticlePreview).title("Preview"),
                        ])
                ),
            S.listItem()
                .title("Slik søker du")
                .child(
                    S.editor()
                        .schemaType("applicationPage")
                        .documentId("applicationPage")
                        .views([
                            S.view.form(),
                            S.view.component(ArticlePreview).title("Preview"),
                        ])
                ),
            S.divider(),
            ...S.documentTypeListItems().filter(
                (listItem) =>
                    ![
                        "frontPage",
                        "otherPossibilities",
                        "applicationPage",
                    ].includes(listItem.getId())
            ),
        ]);

export const getDefaultDocumentNode = ({schemaType}) => {
    switch (schemaType) {
        case "article":
            return S.document().views([
                S.view.form(),
                S.view.component(ArticlePreview).title("Preview"),
            ]);
    }
};

import S from "@sanity/desk-tool/structure-builder";

export default () =>
    S.list()
        .title("Innhold")
        .items([
            S.listItem()
                .title("Forside")
                .child(
                    S.editor().schemaType("frontPage").documentId("frontPage")
                ),
            S.listItem()
                .title("Andre muligheter")
                .child(
                    S.editor()
                        .schemaType("otherPossibilities")
                        .documentId("otherPossibilities")
                ),
            S.divider(),
            ...S.documentTypeListItems().filter(
                (listItem) =>
                    !["frontPage", "otherPossibilities"].includes(
                        listItem.getId()
                    )
            ),
        ]);

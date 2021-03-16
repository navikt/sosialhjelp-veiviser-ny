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
            S.divider(),
            ...S.documentTypeListItems().filter(
                (listItem) => !["frontPage"].includes(listItem.getId())
            ),
        ]);

import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('References')
        .child(
          S.editor()
            .schemaType('references')
            .documentId('references')
        ),
      S.listItem()
        .title('Landing')
        .child(
          S.list()
            .title('Sections')
            .items([
              S.listItem()
                .title('First')
                .child(
                  S.editor()
                    .schemaType('first-section')
                    .documentId('first-section')
                ),
            ])
        ),
    ]);

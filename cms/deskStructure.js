import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Pages')
    .items([
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

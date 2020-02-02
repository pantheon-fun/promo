import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pictures')
        .child(S.documentTypeList('picture').title('Pictures')),
      S.listItem()
        .title('References')
        .child(
          S.editor()
            .schemaType('references')
            .documentId('references')
        ),
      S.divider(),
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
                    .schemaType('firstSection')
                    .documentId('firstSection')
                ),
              S.listItem()
                .title('About us')
                .child(
                  S.editor()
                    .schemaType('aboutUsSection')
                    .documentId('aboutUsSection')
                ),
              S.listItem()
                .title('Games')
                .child(
                  S.editor()
                    .schemaType('gamesSection')
                    .documentId('gamesSection')
                ),
            ])
        ),
    ]);

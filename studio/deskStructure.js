import S from '@sanity/desk-tool/structure-builder';
import { MdSettings, MdExtension, MdFilterVintage, MdLock } from 'react-icons/md';

const hiddenTypes = ['metadata', 'introduction', 'backend', 'frontend'];

export default () =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Metadata')
                .icon(MdSettings)
                .child(S.editor().id('metadata').schemaType('metadata').documentId('metadata')),
            S.listItem()
                .title('Section')
                .icon(MdExtension)
                .child(
                    S.list()
                        .title('Sections')
                        .items([
                            S.listItem()
                                .title('Introduction')
                                .icon(MdFilterVintage)
                                .child(
                                    S.editor()
                                        .id('introduction')
                                        .schemaType('introduction')
                                        .documentId('introduction'),
                                ),
                            S.listItem()
                                .title('Backend')
                                .icon(MdLock)
                                .child(
                                    S.editor()
                                        .id('backend')
                                        .schemaType('backend')
                                        .documentId('backend'),
                                ),
                            S.listItem()
                                .title('Frontend')
                                .icon(MdLock)
                                .child(
                                    S.editor()
                                        .id('frontend')
                                        .schemaType('frontend')
                                        .documentId('frontend'),
                                ),
                        ]),
                ),
            ...S.documentTypeListItems().filter(
                (listItem) => !hiddenTypes.includes(listItem.getId()),
            ),
        ]);

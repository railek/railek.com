import S from '@sanity/desk-tool/structure-builder';
import { MdSettings } from 'react-icons/md';

const hiddenTypes = ['metadata', 'introduction', 'skills', 'projects'];

export default () =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Metadata')
                .icon(MdSettings)
                .child(S.editor().id('metadata').schemaType('metadata').documentId('metadata')),
            ...S.documentTypeListItems().filter(
                (listItem) => !hiddenTypes.includes(listItem.getId()),
            ),
        ]);

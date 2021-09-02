import Widgets from 'flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets';

import LastUsersPosts from './components/LastUsersPosts';

export default function (app) {
    new Widgets()
        .add({
            key: 'LastPostWidget',
            component: LastUsersPosts,
            isDisabled: false,
            isUnique: true,
            placement: 'end',
            position: 1,
        })
        .extend(app, 'justoverclock-last-users-posts');
}

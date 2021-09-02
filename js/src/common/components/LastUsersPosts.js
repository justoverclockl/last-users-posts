/*
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import Widget from 'flarum/extensions/afrux-forum-widgets-core/common/components/Widget';
import app from 'flarum/forum/app';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import Separator from 'flarum/common/components/Separator';
import { truncate } from 'flarum/common/utils/string';

/*  global m */

export default class EventsWidget extends Widget {
    oninit(vnode) {
        super.oninit(vnode);
        this.loading = true;
    }

    oncreate(vnode) {
        const nowDate = new Date().toISOString().slice(0, 10);
        console.log(nowDate);
        // get events object
        const lastpwidget = app.store
            .find('posts', {
                isApproved: true,
                sort: '-createdAt',
                page: { limit: 10 },
            })
            .then((results) => {
                this.post = results;
                console.log(results);
                this.loading = false;
                m.redraw();
            });
    }

    className() {
        return 'lastposts-widget';
    }

    icon() {
        // Widget icon.
        return 'fas fa-edit';
    }

    title() {
        // Widget title.
        return app.translator.trans('justoverclock-last-users-posts.forum.widget-title');
    }

    content() {
        if (this.loading) {
            return <LoadingIndicator />;
        }
        return (
            <div className="last-posts-content">
                <ul className="lastpostwidget fa-ul">
                    {this.post.map((post) => (
                        <p class="lastpostwdg">
                            {truncate(post.content(), 80, 0)}
                            <hr class="sepdotted"/>
                        </p>
                    ))}
                </ul>
            </div>
        );
    }
}

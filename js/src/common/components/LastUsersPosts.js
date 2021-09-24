/*
 * This file is part of Last users posts extension.
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
import { truncate } from 'flarum/common/utils/string';
import Link from "flarum/common/components/Link";
import avatar from "flarum/common/helpers/avatar";
import Tooltip from 'flarum/common/components/Tooltip';

export default class EventsWidget extends Widget {
  oninit(vnode) {
    super.oninit(vnode);
    this.loading = true;
  }

  oncreate(vnode) {
    // settings to limit post number on frontend
    const limitPost = app.forum.attribute('justoverclock-last-users-posts.postLimit') || 10;
    // get posts json
    const lastpwidget = app.store
      .find('posts', {
        sort: '-createdAt',
        include: 'discussion,user',
        page: { limit: limitPost },
        filter: { type: 'comment' },
      })
      .then((results) => {
        this.post = results;
        this.loading = false;
        m.redraw();
      });
  }

  className() {
    // css class for the container
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
    const Charlength = app.forum.attribute('justoverclock-last-users-posts.CharLength') || 80;
    return (
      <div className="last-posts-content">
        <ul className="lastpostwidget fa-ul">
          {this.post.map((post) => {
            return (
              <li class="lastpostwdg">
                <div class="postAvatarWdg"><Tooltip text={post.user().displayName()}>{avatar(post.user())}</Tooltip></div>
                <Link href={app.route.post(post)} className="postlinkwg">
                  {truncate(post.contentHtml().replace(/<\/?[^>]+(>|$)/g, '').replace(/(https?:\/\/\S+(\.png|\.jpg|\.gif))/g, '📷'), Charlength, 0)}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

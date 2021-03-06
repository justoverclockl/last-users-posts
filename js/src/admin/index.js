/*
 * This file is part of Last users posts extension.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/admin/app';
import registerWidget from '../common/registerWidget';

app.initializers.add('justoverclock/last-users-posts', () => {
    registerWidget(app);
    app.extensionData
        .for('justoverclock-last-users-posts')
        .registerSetting({
            setting: 'justoverclock-last-users-posts.postLimitNumber',
            name: 'justoverclock-last-users-posts.postLimitNumber',
            type: 'number',
            label: app.translator.trans('justoverclock-last-users-posts.admin.limit'),
            help: app.translator.trans('justoverclock-last-users-posts.admin.limit-help'),
        })
        .registerSetting({
            setting: 'justoverclock-last-users-posts.CharLength',
            name: 'justoverclock-last-users-posts.CharLength',
            type: 'number',
            label: app.translator.trans('justoverclock-last-users-posts.admin.charlength'),
            help: app.translator.trans('justoverclock-last-users-posts.admin.charlength-help'),
        });
});

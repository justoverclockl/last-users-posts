import app from 'flarum/forum/app';
import registerWidget from '../common/registerWidget';

app.initializers.add('justoverclock/last-users-posts', () => {
    registerWidget(app);
});

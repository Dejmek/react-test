module.exports = {
    extends: 'airbnb',
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'no-tabs': 'off',
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'jsx-a11y/label-has-for': 0,
        'jsx-a11y/label-has-associated-control': [
            2,
            {
                controlComponents: ['Input'],
            },
        ],
    },
};

module.exports = {
    plugins: [
        'stylelint-scss'
    ],
    extends: [
        'stylelint-config-recommended-scss',
        'stylelint-config-recommended-vue/scss',
        'stylelint-config-prettier'
    ],
    rules: {
        'no-descending-specificity': null,
        'scss/comment-no-empty': null,
        'scss/operator-no-newline-after': null
    }
}

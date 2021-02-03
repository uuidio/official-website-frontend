module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 打印
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 调试
        eqeqeq: ['off'], // 单双引号
        camelcase: 0,// 驼峰命名法
        indent: [1, 4], //代码缩进空格
        'spaced-comment': 0,//注释风格不要有空格什么的
        'comma-dangle': [0, 'never'],// 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
        'comma-spacing': [0, { before: false, after: true }],// 控制逗号前后的空格
        semi: [0, 'always'],//语句强制分号结尾
    }
}

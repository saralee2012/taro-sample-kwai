module.exports = {
  presets: [
    ['taro', {
      framework: 'react',
      ts: false
    }],
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ]
  ]
}

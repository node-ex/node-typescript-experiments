const plugins = [
  '@babel/proposal-class-properties',
  '@babel/proposal-object-rest-spread',
  [
    'babel-plugin-relative-path-import', {
      paths: [
        {
          rootPathPrefix: '@@',
          rootPathSuffix: '.',
        },
        {
          rootPathPrefix: '@',
          rootPathSuffix: './src',
        },
      ],
    },
  ],
];

if (process.env.NODE_ENV === 'production') {
  plugins.push('transform-remove-console');
}

module.exports = {
  presets: [
    '@babel/env',
    '@babel/typescript',
  ],
  plugins,
  sourceMaps: 'inline',
  retainLines: true,
};

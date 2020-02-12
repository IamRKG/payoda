module.exports = {
  name: 'feedback-management',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/feedback-management',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

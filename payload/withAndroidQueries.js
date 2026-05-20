const { withAndroidManifest } = require('@expo/config-plugins');

module.exports = function withAndroidQueries(config) {
  return withAndroidManifest(config, (config) => {
    const manifest = config.modResults;
    if (!manifest.manifest.queries) {
      manifest.manifest.queries = [];
    }
    manifest.manifest.queries.push(
      {
        intent: [
          {
            action: [{ $: { 'android:name': 'android.intent.action.VIEW' } }],
            data: [{ $: { 'android:scheme': 'bit' } }],
          },
        ],
      },
      {
        intent: [
          {
            action: [{ $: { 'android:name': 'android.intent.action.VIEW' } }],
            data: [{ $: { 'android:scheme': 'payboxapp' } }],
          },
        ],
      },
      {
        package: [{ $: { 'android:name': 'com.bnhp.payments.paymentsapp' } }],
      },
      {
        package: [{ $: { 'android:name': 'com.paybox.app' } }],
      }
    );
    return config;
  });
};

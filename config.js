// ============================================================
// Jenkins Dashboard Configuration
// Edit this file to configure everything — no UI settings.
// ============================================================

// Jenkins connection
const JENKINS_CONFIG = {
  // Base URL of your Jenkins instance (no trailing slash)
  baseUrl: 'https://jenkins.yourcompany.com',

  // Basic Auth credentials in "username:api-token" format.
  // Leave empty ('') if your Jenkins allows anonymous read access.
  apiToken: '',

  // Auto-refresh interval in seconds
  refreshInterval: 60,
};

const PRODUCTS = [
  { id: 'aspen', name: 'Aspen' },
  { id: 'aspen-plus', name: 'Aspen+' },
];

const ENV_GROUPS = [
  {
    name: 'Stream 1',
    label: 'Core',
    envs: [
      { id: 'dev01', name: 'DEV01' },
      { id: 'test01', name: 'TEST01' },
      { id: 'tt01', name: 'TT01' },
    ]
  },
  {
    name: 'Stream 2',
    label: 'Extended',
    envs: [
      { id: 'dev02', name: 'DEV02' },
      { id: 'test02', name: 'TEST02' },
      { id: 'tt02', name: 'TT02' },
      { id: 'reg', name: 'REG' },
      { id: 'perf', name: 'PERF' },
      { id: 'training-dev', name: 'TRAINING-DEV' },
    ]
  },
  {
    name: 'Stream 3',
    label: 'Integration',
    envs: [
      { id: 'dev03', name: 'DEV03' },
      { id: 'test03', name: 'TEST03' },
      { id: 'tt03', name: 'TT03' },
      { id: 'sit', name: 'SIT' },
    ]
  },
  {
    name: 'Stream 4',
    label: 'Staging',
    envs: [
      { id: 'dev04', name: 'DEV04' },
      { id: 'test04', name: 'TEST04' },
      { id: 'tt04', name: 'TT04' },
    ]
  }
];

// ============================================================
// Pipeline paths — one per product per environment.
// Each value is the Jenkins job path relative to baseUrl,
// e.g. 'job/aspen/job/deploy-dev01'.
// Leave as '' (empty) if an env has no pipeline yet — it will
// show as "No Pipeline" on the dashboard.
// ============================================================
const PIPELINES = {
  'aspen': {
    // Stream 1
    'dev01':        'job/aspen/job/deploy-dev01',
    'test01':       'job/aspen/job/deploy-test01',
    'tt01':         'job/aspen/job/deploy-tt01',
    // Stream 2
    'dev02':        'job/aspen/job/deploy-dev02',
    'test02':       'job/aspen/job/deploy-test02',
    'tt02':         'job/aspen/job/deploy-tt02',
    'reg':          'job/aspen/job/deploy-reg',
    'perf':         'job/aspen/job/deploy-perf',
    'training-dev': 'job/aspen/job/deploy-training-dev',
    // Stream 3
    'dev03':        'job/aspen/job/deploy-dev03',
    'test03':       'job/aspen/job/deploy-test03',
    'tt03':         'job/aspen/job/deploy-tt03',
    'sit':          'job/aspen/job/deploy-sit',
    // Stream 4
    'dev04':        'job/aspen/job/deploy-dev04',
    'test04':       'job/aspen/job/deploy-test04',
    'tt04':         'job/aspen/job/deploy-tt04',
  },
  'aspen-plus': {
    // Stream 1
    'dev01':        'job/aspen-plus/job/deploy-dev01',
    'test01':       'job/aspen-plus/job/deploy-test01',
    'tt01':         'job/aspen-plus/job/deploy-tt01',
    // Stream 2
    'dev02':        'job/aspen-plus/job/deploy-dev02',
    'test02':       'job/aspen-plus/job/deploy-test02',
    'tt02':         'job/aspen-plus/job/deploy-tt02',
    'reg':          'job/aspen-plus/job/deploy-reg',
    'perf':         'job/aspen-plus/job/deploy-perf',
    'training-dev': 'job/aspen-plus/job/deploy-training-dev',
    // Stream 3
    'dev03':        'job/aspen-plus/job/deploy-dev03',
    'test03':       'job/aspen-plus/job/deploy-test03',
    'tt03':         'job/aspen-plus/job/deploy-tt03',
    'sit':          'job/aspen-plus/job/deploy-sit',
    // Stream 4
    'dev04':        'job/aspen-plus/job/deploy-dev04',
    'test04':       'job/aspen-plus/job/deploy-test04',
    'tt04':         'job/aspen-plus/job/deploy-tt04',
  },
};

// ---- helpers used by the dashboard (do not edit) ----
function envKey(productId, envId) {
  return `${productId}:${envId}`;
}

function getPipeline(productId, envId) {
  return (PIPELINES[productId] && PIPELINES[productId][envId]) || '';
}

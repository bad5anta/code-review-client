const code = [
  {
    block: [
      {
        lines: [
          { content: '         </span>',
            type: 'd2h-cntx',
            oldNumber: 6,
            newNumber: 6 },
          { content: '       </h4>',
            type: 'd2h-cntx',
            oldNumber: 7,
            newNumber: 7 },
          { content: '       <h6 class="card-subtitle mb-2 text-muted">Created {{date}}</h6>',
            type: 'd2h-cntx',
            oldNumber: 8,
            newNumber: 8 },
          { content: '+      <p><b-badge>{{item.technology}}</b-badge></p>',
            type: 'd2h-ins',
            oldNumber: null,
            newNumber: 9 },
          { content: '       <b-button :to="cardLink" variant="primary" v-if="item.status === \'done\'">View diff</b-button>',
            type: 'd2h-cntx',
            oldNumber: 9,
            newNumber: 10 },
          { content: '       <b-button :to="cardLink" variant="primary" v-if="item.status === \'new\'">Add review</b-button>',
            type: 'd2h-cntx',
            oldNumber: 10,
            newNumber: 11 },
          { content: '     </b-card>',
            type: 'd2h-cntx',
            oldNumber: 11,
            newNumber: 12 },
        ],
        oldStartLine: '6',
        oldStartLine2: null,
        newStartLine: '6',
        header: '@@ -6,6 +6,7 @@' },
    ],
    deletedLines: 0,
    addedLines: 1,
    isGitDiff: true,
    checksumBefore: 'b0a395a',
    checksumAfter: '243887f',
    mode: '100644',
    oldName: 'src/components/DiffCard/index.vue',
    language: 'vue',
    newName: 'src/components/DiffCard/index.vue',
    isCombined: false,
  },
];

export default [
  {
    id: 1,
    changes: code,
    comments: [
      {
        position: null, // will define format later
        text: '', // comment text
      },
    ],
    createdAt: Date.now(),
    author: null, // USER included or id
    reviewer: null, // USER included or id
    status: 'done', // Also can be 'done'
    technology: 'ReactJS', // Any
  },
  {
    id: 2,
    changes: code,
    comments: [
      {
        position: null, // will define format later
        text: '', // comment text
      },
    ],
    createdAt: Date.now(),
    author: null, // USER included or id
    reviewer: null, // USER included or id
    status: 'new', // Also can be 'done'
    technology: 'ReactJS', // Any
  },
  {
    id: 3,
    changes: code,
    comments: [
      {
        position: null, // will define format later
        text: '', // comment text
      },
    ],
    createdAt: Date.now(),
    author: null, // USER included or id
    reviewer: null, // USER included or id
    status: 'new', // Also can be 'done'
    technology: 'ReactJS', // Any
  },
  {
    id: 4,
    changes: code,
    comments: [
      {
        position: null, // will define format later
        text: '', // comment text
      },
    ],
    createdAt: Date.now(),
    author: null, // USER included or id
    reviewer: null, // USER included or id
    status: 'new', // Also can be 'done'
    technology: 'ReactJS', // Any
  },
];

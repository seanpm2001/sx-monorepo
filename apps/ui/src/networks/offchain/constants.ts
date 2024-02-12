const SNAPSHOT_STRATEGIES = [
  'cap-voting-power',
  'izumi-veizi',
  'eco-voting-power',
  'forta-shares',
  'across-staked-acx',
  'ethermon-erc721',
  'etherorcs-combo-balanceof',
  'recusal-list',
  'landdao-token-tiers',
  'giveth-balancer-balance',
  'giveth-gnosis-balance-v2',
  'nouns-rfp-power',
  'anti-whale',
  'balancer',
  'balancer-smart-pool',
  'lit-dao-governance',
  'balance-in-vdfyn-vault',
  'erc20-received',
  'contract-call',
  'defiplaza',
  'dfyn-staked-in-farms',
  'dfyn-staked-in-vaults',
  'dps-nft-strategy',
  'dps-nft-strategy-nova',
  'ens-domains-owned',
  'ens-reverse-record',
  'ens-10k-club',
  'ens-all-club-digits',
  'governor-delegator',
  'erc20-balance-of',
  'erc20-balance-of-at',
  'erc20-votes',
  'erc20-votes-with-override',
  'erc721-multi-registry-weighted',
  'erc20-balance-of-fixed-total',
  'erc20-balance-of-cv',
  'erc20-balance-of-coeff',
  'erc20-with-balance',
  'erc20-balance-of-delegation',
  'erc20-balance-of-with-delegation',
  'erc20-balance-of-quadratic-delegation',
  'erc20-balance-of-top-holders',
  'erc20-balance-of-weighted',
  'erc20-balance-of-indexed',
  'erc20-price',
  'ethalend-balance-of',
  'balance-of-with-min',
  'balance-of-with-thresholds',
  'thresholds',
  'eth-balance',
  'eth-with-balance',
  'eth-wallet-age',
  'maker-ds-chief',
  'erc721',
  'erc721-enumerable',
  'erc721-with-multiplier',
  'erc721-with-tokenid',
  'erc721-with-tokenid-range-weights',
  'erc721-with-tokenid-range-weights-simple',
  'erc721-with-tokenid-weighted',
  'erc721-with-metadata',
  'erc721-with-metadata-by-ownerof',
  'erc721-multi-registry',
  'erc1155-balance-of',
  'erc1155-balance-of-cv',
  'prepo-vesting',
  'multichain',
  'gooddollar-multichain',
  'uni',
  'frax-finance',
  'yearn-vault',
  'moloch',
  'masterchef',
  'sushiswap',
  'uniswap',
  'faraland-staking',
  'flashstake',
  'pancake',
  'pancake-profile',
  'synthetix',
  'aelin-council',
  'ctoken',
  'staked-uniswap',
  'xdai-easy-staking',
  'xdai-posdao-staking',
  'xdai-stake-holders',
  'xdai-stake-delegation',
  'defidollar',
  'aavegotchi',
  'aavegotchi-agip',
  'mithcash',
  'stablexswap',
  'dittomoney',
  'staked-keep',
  'staked-daomaker',
  'balancer-unipool',
  'typhoon',
  'delegation',
  'delegation-with-cap',
  'delegation-with-overrides',
  'with-delegation',
  'ticket',
  'work',
  'ticket-validity',
  'validation',
  'opium',
  'ocean-marketplace',
  'the-graph-balance',
  'the-graph-delegation',
  'the-graph-indexing',
  'whitelist',
  'whitelist-weighted',
  'tokenlon',
  'pob-hash',
  'comp-like-votes',
  'governor-alpha',
  'pagination',
  'ruler-staked-lp',
  'xcover',
  'niu-staked',
  'mushrooms',
  'curio-cards-erc20-weighted',
  'ren-nodes',
  'reverse-voting-escrow',
  'multisig-owners',
  'tranche-staking',
  'pepemon',
  'erc1155-all-balances-of',
  'erc1155-with-multiplier',
  'saffron-finance',
  'saffron-finance-v2',
  'tranche-staking-lp',
  'masterchef-pool-balance',
  'masterchef-pool-balance-price',
  'api',
  'api-post',
  'api-v2',
  'api-v2-override',
  'xseen',
  'moloch-all',
  'moloch-loot',
  'hopr-uni-lp-farm',
  'apescape',
  'liftkitchen',
  'decentraland-estate-size',
  'decentraland-wearable-rarity',
  'decentraland-rental-lessors',
  'brightid',
  'inverse-xinv',
  'modefi',
  'iotex-staked-balance',
  'xrc20-balance-of',
  'spookyswap',
  'glide',
  'rnbw-balance',
  'celer-sgn-delegation',
  'infinityprotocol-liquidity-pools',
  'aave-governance-power',
  'cake',
  'aks',
  'ogn',
  'oolongswap',
  'impossible-finance',
  'immutable-x',
  'zrx-voting-power',
  'tomb-finance',
  'tranche-staking-slice',
  'unipool-univ2-lp',
  'unipool-xsushi',
  'taraxa-delegation',
  'poap',
  'poap-with-weight',
  'poap-with-weight-v2',
  'uniswap-v3',
  'uniswap-v3-staking',
  'l2-deversifi',
  'vested-deversifi',
  'biswap',
  'honeyswap',
  'egl-vote',
  'mcn-farm',
  'meebitsdao',
  'crucible-erc20-balance-of',
  'erc20-token-and-lp-weighted',
  'erc20-token-and-single-lp-weighted',
  'crucible-erc20-token-and-lp-weighted',
  'has-rock',
  'flexa-capacity-staking',
  'sunrisegaming-univ2-lp',
  'sunrisegaming-staking',
  'single-staking-autocompound-balanceof',
  'single-staking-pools-balanceof',
  'hopr-stake-and-balance-qv',
  'hopr-bridged-balance',
  'occ-stake-of',
  'holds-tokens',
  'loot-character-guilds',
  'comp-like-votes-inclusive',
  'mstable',
  'hashes-voting',
  'hashflow-vehft',
  'aavegotchi-wagmi-guild',
  'polis-balance',
  'mutant-cats-stakers-and-holders',
  'razor-network-voting',
  'mcb-balance-from-graph',
  'digitalax-genesis-contribution',
  'digitalax-lp-stakers',
  'digitalax-mona-stakers-matic',
  'digitalax-lp-stakers-matic',
  'colony-reputation',
  'digitalax-mona-quickswap',
  'galaxy-nft-with-score',
  'galxe-loyalty-points',
  'gatenet-total-staked',
  'vesper',
  'thales',
  'tech-quadratic-ranked-choice',
  'bsc-mvb',
  'coinswap',
  'dgenesis',
  'vote-power-and-share',
  'math',
  'push-voting-power',
  'staked-psp-balance',
  'erc20-balance-of-contract-multiplier',
  'juicebox',
  'snet-farmers',
  'snet-stakers',
  'snet-liquidity-providers',
  'unstackedtoadz-and-stackedtoadz-stakers',
  'ocean-dao-brightid',
  'membership',
  'lydia-gov-vault',
  'darkforest-score',
  'orange-reputation-based-voting',
  'orange-reputation-nft-based-voting',
  'squid-dao',
  'botto-dao',
  'genart',
  'path-balance-staked-and-locked',
  'balancer-poolid',
  'staked-balancer',
  'staked-uniswap-modifiable',
  'erc1155-balance-of-ids',
  'erc1155-balance-of-ids-weighted',
  'erc1155-weighted-by-id',
  'stakers-and-holders',
  'banksy-dao',
  'spacey2025',
  'sandman-dao',
  've-balance-of-at',
  've-ribbon',
  've-ribbon-voting-power',
  'chubbykaijudao',
  'revest',
  'staking-claimed-unclaimed',
  'gysr-staking-balance',
  'gysr-lp-staking-balance',
  'wanakafarm-staking',
  'starsharks',
  'printer-financial',
  'ethercats-founders-series',
  'potion',
  'minotaur-money',
  'conv-finance',
  'sd-boost',
  'wanakafarm-land-ingame',
  'starcatchers-top-window',
  'gno',
  'gno-vote-weight',
  'masterchef-pool-balance-no-rewarddebt',
  'proof-of-humanity',
  'sybil-protection',
  'samurailegends-generals-balance',
  'dogs-unchained',
  'umami-voting',
  'liquidity-token-provide',
  'gamium-voting',
  'citydao-square-root',
  'rowdy-roos',
  'hedgey',
  'hedgey-delegate',
  've-balance-of-at-nft',
  'genzees-from-subgraph',
  'position-governance-power',
  'credit-lp',
  'helix',
  'aura-vault-balance-of-single-asset',
  'rocketpool-node-operator',
  'rocketpool-node-operator-v2',
  'rocketpool-node-operator-v3',
  'earthfund-child-dao-staking-balance',
  'sd-boost-twavp',
  'unipilot-vault-pilot-balance',
  'balance-of-with-linear-vesting-power',
  'linear-vesting-power',
  'lrc-l2-subgraph-balance-of',
  'lrc-l2-nft-balance-of',
  'lrc-lp-subgraph-balance-of',
  'lrc-nft-search-mult',
  'bancor-pool-token-underlying-balance',
  'balance-of-subgraph',
  'wagdie-subgraph',
  'erc721-pair-weights',
  'harmony-staking',
  'erc3525-flexible-voucher',
  'orca-pod',
  'metropolis-pod',
  'proxyprotocol-erc721-balance-of',
  'posichain-staking',
  'posichain-total-balance',
  'arrow-vesting',
  'tutellus-protocol',
  'fight-club',
  'tpro-staking',
  'safe-vested',
  'otterspace-badges',
  'synthetic-nouns-with-claimer',
  'echelon-wallet-prime-and-cached-key',
  'nation3-votes-with-delegations',
  'nation3-passport-coop-with-delegations',
  'erc20-tokens-per-uni',
  'bancor-standard-rewards-underlying-balance',
  'sd-vote-boost',
  'sd-vote-boost-twavp',
  'spreadsheet',
  'offchain-delegation',
  'ninechronicles-staked-and-dcc',
  'rep3-badges',
  'marsecosystem',
  'ari10-staking-locked',
  'skale-delegation-weighted',
  'reliquary',
  'jpegd-locked-jpeg-of',
  'lodestar-vesting',
  'lodestar-staked-lp',
  'battlefly-vgfly-and-staked-gfly',
  'nexon-army-nft',
  'moonbeam-free-balance',
  'stakedotlink-vesting',
  'psp-in-sepsp2-balance',
  'pdn-balances-and-vests',
  'lqty-proxy-stakers',
  'rdnt-capital-voting',
  'staked-defi-balance',
  'degenzoo-erc721-animals-weighted',
  'zunami-pool-gauge-aggregated-balance-of',
  'erc721-collateral-held',
  'starlay-ve-balance-of-locker-id',
  'winr-staking',
  'spaceid',
  'delegate-registry-v2',
  'hats-protocol-single-vote-per-org',
  'karma-discord-roles',
  'seedify-cumulative-voting-power-hodl-staking-farming',
  'staked-morekudasai',
  'sablier-v1-deposit',
  'sablier-v2',
  'gelato-staking',
  'erc4626-assets-of',
  'friend-tech',
  'sd-vote-boost-twavp-v2',
  'sd-vote-boost-twavp-v3',
  'sd-vote-boost-twavp-vsdtoken',
  'sd-vote-boost-twavp-balanceof',
  'moonbase',
  'dss-vest-unpaid',
  'dss-vest-balance-and-unpaid',
  'eoa-balance-and-staking-pools',
  'station-score-if-badge',
  'station-constant-if-badge',
  'mangrove-station-qv-scaled-to-mgv',
  'floki',
  'hats-protocol-hat-id',
  'hats-protocol-hat-ids',
  'bubblegum-kids',
  'clipper-staked-sail',
  'plearn',
  'snote',
  'streamr',
  'aavegotchi-agip-17',
  'aavegotchi-agip-37-gltr-staked-lp',
  'aavegotchi-agip-37-wap-ghst',
  'agave',
  'arrakis-finance',
  'ctsi-staking-pool',
  'cyberkongz-v2',
  'dextf-staked-in-vaults',
  'genomesdao',
  'goldfinch-membership',
  'goldfinch-voting-power',
  'h2o',
  'hopr-staking-by-season',
  'hopr-staking-s2',
  'ilv',
  'meebitsdao-delegation',
  'modefi-staking',
  'orbs-network-delegation',
  'planet-finance-v2',
  'rari-fuse',
  'synthetix-non-quadratic_1',
  'synthetix-quadratic',
  'synthetix-quadratic_1',
  'synthetix_1',
  'total-axion-shares',
  'unipool-same-token',
  'vendor-v2-borrower-collateral-balance-of',
  'volt-voting-power',
  'xdai-stakers-and-holders'
];

export const DEFAULT_AUTHENTICATOR = 'OffchainAuthenticator';
export const SUPPORTED_AUTHENTICATORS = {
  [DEFAULT_AUTHENTICATOR]: true
};
export const CONTRACT_SUPPORTED_AUTHENTICATORS = {};
export const SUPPORTED_STRATEGIES = Object.fromEntries(
  SNAPSHOT_STRATEGIES.map(name => [name, true])
);
export const SUPPORTED_EXECUTORS = {};
export const RELAYER_AUTHENTICATORS = {};
export const AUTHS = {};
export const PROPOSAL_VALIDATIONS = {};
export const STRATEGIES = Object.fromEntries(SNAPSHOT_STRATEGIES.map(name => [name, name]));
export const EXECUTORS = {};
export const EDITOR_AUTHENTICATORS = [];
export const EDITOR_PROPOSAL_VALIDATIONS = [];
export const EDITOR_VOTING_STRATEGIES = [];
export const EDITOR_PROPOSAL_VALIDATION_VOTING_STRATEGIES = [];
export const EDITOR_EXECUTION_STRATEGIES = [];

// Balances data
const balancesData = [
    { coin: 'USDC (Perps)', totalBalance: '300,036,515.12 USDC', availableBalance: '299,928,374.50 USDC', usdcValue: '$300,036,515.12', pnl: '', roe: '', contract: '' },
];

// Open Orders data
const openOrdersData = [
    { time: '07/01/2026 - 22:11:22', type: 'Limit', coin: 'BTC', direction: 'Long', size: '0.03571', originalSize: '0.03571', orderValue: '3,252.00 USDC', price: '91,067', reduceOnly: 'No', trigger: 'N/A', tpsl: '--' },
    { time: '07/01/2026 - 22:11:22', type: 'Limit', coin: 'CFX', direction: 'Long', size: '21,870', originalSize: '21,870', orderValue: '1,712.31 USDC', price: '0.078295', reduceOnly: 'No', trigger: 'N/A', tpsl: '--' },
    { time: '07/01/2026 - 22:11:22', type: 'Limit', coin: 'PNUT', direction: 'Short', size: '18,437.1', originalSize: '18,437.1', orderValue: '1,642.19 USDC', price: '0.08907', reduceOnly: 'No', trigger: 'N/A', tpsl: '--' },
    { time: '07/01/2026 - 22:11:22', type: 'Limit', coin: 'EIGEN', direction: 'Short', size: '3,865.33', originalSize: '3,865.33', orderValue: '1,582.85 USDC', price: '0.4095', reduceOnly: 'No', trigger: 'N/A', tpsl: '--' },
    { time: '07/01/2026 - 22:11:22', type: 'Limit', coin: 'BTC', direction: 'Long', size: '0.01711', originalSize: '0.01711', orderValue: '1,559.27 USDC', price: '91,132', reduceOnly: 'No', trigger: 'N/A', tpsl: '--' },
    { time: '07/01/2026 - 22:11:22', type: 'Limit', coin: 'EIGEN', direction: 'Short', size: '3,792.88', originalSize: '3,792.88', orderValue: '1,553.18 USDC', price: '0.4095', reduceOnly: 'No', trigger: 'N/A', tpsl: '--' },
    { time: '07/01/2026 - 22:11:22', type: 'Limit', coin: 'CFX', direction: 'Short', size: '19,650', originalSize: '19,650', orderValue: '1,539.95 USDC', price: '0.078369', reduceOnly: 'No', trigger: 'N/A', tpsl: '--' },
    { time: '07/01/2026 - 22:11:22', type: 'Limit', coin: 'CFX', direction: 'Short', size: '19,567', originalSize: '19,567', orderValue: '1,533.04 USDC', price: '0.078348', reduceOnly: 'No', trigger: 'N/A', tpsl: '--' },
    { time: '07/01/2026 - 22:11:22', type: 'Limit', coin: 'PNUT', direction: 'Short', size: '17,163.0', originalSize: '17,163.0', orderValue: '1,530.77 USDC', price: '0.08919', reduceOnly: 'No', trigger: 'N/A', tpsl: '--' },
    { time: '07/01/2026 - 22:11:22', type: 'Limit', coin: 'W', direction: 'Long', size: '40,754.3', originalSize: '40,754.3', orderValue: '1,527.88 USDC', price: '0.03749', reduceOnly: 'No', trigger: 'N/A', tpsl: '--' },
    { time: '07/01/2026 - 22:11:22', type: 'Limit', coin: 'kFLOKI', direction: 'Long', size: '27,247', originalSize: '27,247', orderValue: '1,513.57 USDC', price: '0.055550', reduceOnly: 'No', trigger: 'N/A', tpsl: '--' },
    { time: '07/01/2026 - 22:11:22', type: 'Limit', coin: 'CFX', direction: 'Long', size: '19,117', originalSize: '19,117', orderValue: '1,496.34 USDC', price: '0.078273', reduceOnly: 'No', trigger: 'N/A', tpsl: '--' },
    { time: '07/01/2026 - 22:11:22', type: 'Limit', coin: 'MOODENG', direction: 'Short', size: '17,641', originalSize: '17,641', orderValue: '1,485.39 USDC', price: '0.084201', reduceOnly: 'No', trigger: 'N/A', tpsl: '--' },
];

// Trade History data
const tradeHistoryData = [
    { time: '07/01/2026 - 22:11:50', coin: 'LINK', direction: 'Open Short', price: '13.372', size: '2.9 LINK', tradeValue: '38.78 USDC', fee: '0.00 USDC', closedPnl: '0.00 USDC' },
    { time: '07/01/2026 - 22:11:50', coin: 'IP', direction: 'Close Long', price: '2.0139', size: '21.6 IP', tradeValue: '43.50 USDC', fee: '0.00 USDC', closedPnl: '-0.04 USDC' },
    { time: '07/01/2026 - 22:11:49', coin: 'BOME', direction: 'Open Long', price: '0.000781', size: '19,737 BOME', tradeValue: '15.41 USDC', fee: '0.00 USDC', closedPnl: '0.00 USDC' },
    { time: '07/01/2026 - 22:11:49', coin: 'IOTA', direction: 'Close Short', price: '0.10708', size: '174 IOTA', tradeValue: '18.63 USDC', fee: '0.00 USDC', closedPnl: '-0.16 USDC' },
    { time: '07/01/2026 - 22:11:49', coin: 'SUI', direction: 'Close Long', price: '1.8131', size: '204.3 SUI', tradeValue: '370.42 USDC', fee: '0.00 USDC', closedPnl: '-10.23 USDC' },
    { time: '07/01/2026 - 22:11:49', coin: 'HYPE', direction: 'Open Short', price: '26.738', size: '4.15 HYPE', tradeValue: '110.96 USDC', fee: '0.00 USDC', closedPnl: '0.00 USDC' },
    { time: '07/01/2026 - 22:11:48', coin: 'VVV', direction: 'Open Short', price: '2.0161', size: '8.12 VVV', tradeValue: '16.37 USDC', fee: '0.00 USDC', closedPnl: '0.00 USDC' },
    { time: '07/01/2026 - 22:11:48', coin: 'STRK', direction: 'Open Short', price: '0.08724', size: '182.8 STRK', tradeValue: '15.95 USDC', fee: '0.00 USDC', closedPnl: '0.00 USDC' },
    { time: '07/01/2026 - 22:11:48', coin: 'USUAL', direction: 'Open Short', price: '0.02780', size: '702.1 USUAL', tradeValue: '19.52 USDC', fee: '0.00 USDC', closedPnl: '0.00 USDC' },
    { time: '07/01/2026 - 22:11:48', coin: 'MOVE', direction: 'Open Short', price: '0.037138', size: '462 MOVE', tradeValue: '17.16 USDC', fee: '0.00 USDC', closedPnl: '0.00 USDC' },
    { time: '07/01/2026 - 22:11:47', coin: 'ZRO', direction: 'Open Short', price: '1.4045', size: '14.1 ZRO', tradeValue: '19.80 USDC', fee: '0.00 USDC', closedPnl: '0.00 USDC' },
    { time: '07/01/2026 - 22:11:47', coin: 'STBL', direction: 'Close Long', price: '0.060265', size: '304 STBL', tradeValue: '18.32 USDC', fee: '0.00 USDC', closedPnl: '-1.47 USDC' },
    { time: '07/01/2026 - 22:11:47', coin: 'APE', direction: 'Close Long', price: '0.21805', size: '79.5 APE', tradeValue: '17.33 USDC', fee: '0.00 USDC', closedPnl: '-0.01 USDC' },
];

// Funding History data
const fundingHistoryData = [
    { time: '07/01/2026 - 22:00:00', coin: 'STABLE', size: '4,870,109 STABLE', side: 'Long', payment: '-$0.8626', rate: '0.0013%' },
    { time: '07/01/2026 - 22:00:00', coin: 'AERO', size: '228,702 AERO', side: 'Long', payment: '-$1.5972', rate: '0.0013%' },
    { time: '07/01/2026 - 22:00:00', coin: 'ICP', size: '11,800.5 ICP', side: 'Short', payment: '$0.4790', rate: '0.0013%' },
    { time: '07/01/2026 - 22:00:00', coin: 'CC', size: '1,541,955 CC', side: 'Long', payment: '-$2.6117', rate: '0.0013%' },
    { time: '07/01/2026 - 22:00:00', coin: 'MET', size: '166,299 MET', side: 'Long', payment: '-$0.5696', rate: '0.0013%' },
    { time: '07/01/2026 - 22:00:00', coin: 'MON', size: '4,001,271 MON', side: 'Long', payment: '-$1.3541', rate: '0.0013%' },
    { time: '07/01/2026 - 22:00:00', coin: 'ZEC', size: '226.50 ZEC', side: 'Long', payment: '-$1.3497', rate: '0.0013%' },
    { time: '07/01/2026 - 22:00:00', coin: '2Z', size: '533,608 2Z', side: 'Long', payment: '$0.3292', rate: '-0.0005%' },
    { time: '07/01/2026 - 22:00:00', coin: 'APEX', size: '190,920 APEX', side: 'Long', payment: '-$1.1155', rate: '0.0013%' },
    { time: '07/01/2026 - 22:00:00', coin: 'HEMI', size: '7,659,399 HEMI', side: 'Long', payment: '-$1.7425', rate: '0.0013%' },
    { time: '07/01/2026 - 22:00:00', coin: '0G', size: '97,286 0G', side: 'Long', payment: '$29.4253', rate: '-0.0314%' },
    { time: '07/01/2026 - 22:00:00', coin: 'STBL', size: '2,824,603 STBL', side: 'Long', payment: '-$2.1139', rate: '0.0013%' },
    { time: '07/01/2026 - 22:00:00', coin: 'AVNT', size: '149,011 AVNT', side: 'Long', payment: '$17.9840', rate: '-0.0368%' },
];

// Order History data
const orderHistoryData = [
    { time: '07/01/2026 - 21:51:57', type: 'Limit', coin: 'ETH', direction: 'Long', size: '0.2766', filledSize: '--', orderValue: '867.86 USDC', price: '3,137.6', reduceOnly: 'No', trigger: 'N/A', tpsl: '--', status: 'Rejected', orderId: '289085411312' },
    { time: '07/01/2026 - 21:51:57', type: 'Limit', coin: 'GMX', direction: 'Short', size: '125.99', filledSize: '--', orderValue: '1,065.54 USDC', price: '8.4573', reduceOnly: 'No', trigger: 'N/A', tpsl: '--', status: 'Canceled', orderId: '289085405276' },
    { time: '07/01/2026 - 21:51:57', type: 'Limit', coin: 'GMX', direction: 'Short', size: '64.27', filledSize: '--', orderValue: '543.42 USDC', price: '8.4553', reduceOnly: 'No', trigger: 'N/A', tpsl: '--', status: 'Canceled', orderId: '289085405275' },
    { time: '07/01/2026 - 21:51:57', type: 'Limit', coin: 'GMX', direction: 'Long', size: '1.97', filledSize: '--', orderValue: '16.67 USDC', price: '8.4594', reduceOnly: 'No', trigger: 'N/A', tpsl: '--', status: 'Rejected', orderId: '289085411311' },
    { time: '07/01/2026 - 21:51:57', type: 'Limit', coin: 'HYPE', direction: 'Long', size: '61.20', filledSize: '--', orderValue: '1,639.30 USDC', price: '26.786', reduceOnly: 'No', trigger: 'N/A', tpsl: '--', status: 'Canceled', orderId: '289085349651' },
    { time: '07/01/2026 - 21:51:57', type: 'Limit', coin: 'HYPE', direction: 'Long', size: '32.71', filledSize: '--', orderValue: '876.79 USDC', price: '26.805', reduceOnly: 'No', trigger: 'N/A', tpsl: '--', status: 'Canceled', orderId: '289085396850' },
    { time: '07/01/2026 - 21:51:57', type: 'Limit', coin: 'HYPE', direction: 'Long', size: '64.36', filledSize: '--', orderValue: '1,724.78 USDC', price: '26.799', reduceOnly: 'No', trigger: 'N/A', tpsl: '--', status: 'Canceled', orderId: '289085396851' },
    { time: '07/01/2026 - 21:51:57', type: 'Limit', coin: 'HYPE', direction: 'Long', size: '30.05', filledSize: '--', orderValue: '805.40 USDC', price: '26.802', reduceOnly: 'No', trigger: 'N/A', tpsl: '--', status: 'Canceled', orderId: '289085405204' },
    { time: '07/01/2026 - 21:51:57', type: 'Limit', coin: 'TON', direction: 'Short', size: '386.4', filledSize: '--', orderValue: '723.57 USDC', price: '1.8726', reduceOnly: 'No', trigger: 'N/A', tpsl: '--', status: 'Canceled', orderId: '289085405228' },
    { time: '07/01/2026 - 21:51:57', type: 'Limit', coin: 'kPEPE', direction: 'Short', size: '69,831', filledSize: '--', orderValue: '462.42 USDC', price: '0.006622', reduceOnly: 'No', trigger: 'N/A', tpsl: '--', status: 'Canceled', orderId: '289085405214' },
    { time: '07/01/2026 - 21:51:57', type: 'Limit', coin: 'ETH', direction: 'Short', size: '0.5389', filledSize: '--', orderValue: '1,691.07 USDC', price: '3,138.0', reduceOnly: 'No', trigger: 'N/A', tpsl: '--', status: 'Canceled', orderId: '289085405192' },
    { time: '07/01/2026 - 21:51:57', type: 'Limit', coin: 'ZETA', direction: 'Short', size: '8,335.1', filledSize: '--', orderValue: '641.64 USDC', price: '0.07698', reduceOnly: 'No', trigger: 'N/A', tpsl: '--', status: 'Canceled', orderId: '289085405179' },
    { time: '07/01/2026 - 21:51:57', type: 'Limit', coin: 'kFLOKI', direction: 'Long', size: '25,873', filledSize: '--', orderValue: '1,427.26 USDC', price: '0.055164', reduceOnly: 'No', trigger: 'N/A', tpsl: '--', status: 'Open', orderId: '289085410508' },
];

// Deposits and Withdrawals data
const depositsData = [
    { time: '07/01/2026 - 22:07:45', status: 'Completed', action: 'Vault Deposit', source: 'Perps', destination: 'Perps', valueChange: '20.7 USDC', fee: '--', isDeposit: true },
    { time: '07/01/2026 - 22:03:07', status: 'Completed', action: 'Vault Deposit', source: 'Perps', destination: 'Perps', valueChange: '150 USDC', fee: '--', isDeposit: true },
    { time: '07/01/2026 - 21:55:06', status: 'Completed', action: 'Vault Withdrawal', source: 'Perps', destination: 'Perps', valueChange: '-100 USDC', fee: '--', isDeposit: false },
    { time: '07/01/2026 - 21:50:50', status: 'Completed', action: 'Vault Deposit', source: 'Perps', destination: 'Perps', valueChange: '150 USDC', fee: '--', isDeposit: true },
    { time: '07/01/2026 - 21:31:05', status: 'Completed', action: 'Vault Withdrawal', source: 'Perps', destination: 'Perps', valueChange: '-136.035272 USDC', fee: '--', isDeposit: false },
    { time: '07/01/2026 - 21:15:58', status: 'Completed', action: 'Vault Withdrawal', source: 'Perps', destination: 'Perps', valueChange: '-1,005 USDC', fee: '--', isDeposit: false },
    { time: '07/01/2026 - 21:00:34', status: 'Completed', action: 'Vault Withdrawal', source: 'Perps', destination: 'Perps', valueChange: '-99.303864 USDC', fee: '--', isDeposit: false },
    { time: '07/01/2026 - 20:57:42', status: 'Completed', action: 'Vault Withdrawal', source: 'Perps', destination: 'Perps', valueChange: '-499.999999 USDC', fee: '--', isDeposit: false },
    { time: '07/01/2026 - 20:55:35', status: 'Completed', action: 'Vault Withdrawal', source: 'Perps', destination: 'Perps', valueChange: '-1,160.434665 USDC', fee: '--', isDeposit: false },
    { time: '07/01/2026 - 20:35:32', status: 'Completed', action: 'Vault Withdrawal', source: 'Perps', destination: 'Perps', valueChange: '-99.012879 USDC', fee: '--', isDeposit: false },
    { time: '07/01/2026 - 20:29:26', status: 'Completed', action: 'Vault Withdrawal', source: 'Perps', destination: 'Perps', valueChange: '-1,346.260368 USDC', fee: '--', isDeposit: false },
    { time: '07/01/2026 - 20:14:04', status: 'Completed', action: 'Vault Deposit', source: 'Perps', destination: 'Perps', valueChange: '1,749.19 USDC', fee: '--', isDeposit: true },
    { time: '07/01/2026 - 20:14:04', status: 'Completed', action: 'Vault Deposit', source: 'Perps', destination: 'Perps', valueChange: '1,749.19 USDC', fee: '--', isDeposit: true },
];

// Position data matching Hyperliquid
const positionsData = [
    { coin: 'HMSTR', leverage: '20x', size: '344,642,003 HMSTR', positionValue: '83,058.72 USDC', entryPrice: '0.000246', markPrice: '0.000241', pnl: '+$1,723.21', roe: '+40.7%', liqPrice: '0.25428', margin: '$4,152.94 (Cross)', funding: '$366.70', pnlPositive: true, fundingPositive: true },
    { coin: 'PENDLE', leverage: '20x', size: '18,589 PENDLE', positionValue: '40,345.57 USDC', entryPrice: '2.2320', markPrice: '2.1704', pnl: '+$1,144.54', roe: '+55.2%', liqPrice: '4,712.0', margin: '$2,017.28 (Cross)', funding: '$252.64', pnlPositive: true, fundingPositive: true },
    { coin: 'MEME', leverage: '20x', size: '33,274,066 MEME', positionValue: '39,629.41 USDC', entryPrice: '0.001187', markPrice: '0.001191', pnl: '-$133.10', roe: '-6.7%', liqPrice: '2.6324', margin: '$1,981.47 (Cross)', funding: '$23.63', pnlPositive: false, fundingPositive: true },
    { coin: 'kLUNC', leverage: '20x', size: '909,077 kLUNC', positionValue: '39,174.86 USDC', entryPrice: '0.044268', markPrice: '0.043093', pnl: '-$1,068.17', roe: '-53.1%', liqPrice: 'N/A', margin: '$1,958.74 (Cross)', funding: '$100.01', pnlPositive: false, fundingPositive: true },
    { coin: 'INIT', leverage: '20x', size: '421,765 INIT', positionValue: '38,972.77 USDC', entryPrice: '0.096220', markPrice: '0.092404', pnl: '+$1,609.46', roe: '+79.3%', liqPrice: '207.68', margin: '$1,948.64 (Cross)', funding: '-$49.31', pnlPositive: true, fundingPositive: false },
    { coin: 'PROMPT', leverage: '20x', size: '628,608 PROMPT', positionValue: '38,192.34 USDC', entryPrice: '0.062948', markPrice: '0.060757', pnl: '+$1,377.28', roe: '+69.6%', liqPrice: '139.34', margin: '$1,909.62 (Cross)', funding: '$489.66', pnlPositive: true, fundingPositive: true },
    { coin: 'STABLE', leverage: '20x', size: '2,680,203 STABLE', positionValue: '38,024.04 USDC', entryPrice: '0.014861', markPrice: '0.014187', pnl: '-$1,806.46', roe: '-90.7%', liqPrice: 'N/A', margin: '$1,901.20 (Cross)', funding: '-$797.59', pnlPositive: false, fundingPositive: false },
    { coin: 'RESOLV', leverage: '20x', size: '491,377 RESOLV', positionValue: '36,740.26 USDC', entryPrice: '0.080229', markPrice: '0.074770', pnl: '+$2,682.43', roe: '+136.1%', liqPrice: '178.25', margin: '$1,837.01 (Cross)', funding: '-$2,607.19', pnlPositive: true, fundingPositive: false },
    { coin: 'CHILLGUY', leverage: '20x', size: '1,497,950 CHILLGUY', positionValue: '35,675.18 USDC', entryPrice: '0.024783', markPrice: '0.023816', pnl: '+$1,448.52', roe: '+78.0%', liqPrice: '58.471', margin: '$1,783.76 (Cross)', funding: '$3.88', pnlPositive: true, fundingPositive: true },
    { coin: 'PUMP', leverage: '20x', size: '15,083,914 PUMP', positionValue: '35,341.61 USDC', entryPrice: '0.002368', markPrice: '0.002343', pnl: '+$377.10', roe: '+21.1%', liqPrice: '5.8066', margin: '$1,767.08 (Cross)', funding: '$254.48', pnlPositive: true, fundingPositive: true },
    { coin: 'DYDX', leverage: '20x', size: '178,239.0 DYDX', positionValue: '34,874.24 USDC', entryPrice: '0.19079', markPrice: '0.19566', pnl: '-$868.02', roe: '-51.1%', liqPrice: '491.40', margin: '$1,743.71 (Cross)', funding: '$655.77', pnlPositive: false, fundingPositive: true },
    { coin: 'BTC', leverage: '20x', size: '0.36337 BTC', positionValue: '33,114.27 USDC', entryPrice: '92,118', markPrice: '91,131', pnl: '+$358.50', roe: '+21.4%', liqPrice: '241,033,745', margin: '$1,655.71 (Cross)', funding: '$94.04', pnlPositive: true, fundingPositive: true },
    { coin: 'KAS', leverage: '20x', size: '657,955 KAS', positionValue: '32,333.22 USDC', entryPrice: '0.049647', markPrice: '0.049142', pnl: '+$332.27', roe: '+20.3%', liqPrice: '133.11', margin: '$1,616.66 (Cross)', funding: '$168.46', pnlPositive: true, fundingPositive: true },
    { coin: 'ME', leverage: '20x', size: '142,186.9 ME', positionValue: '31,367.85 USDC', entryPrice: '0.22505', markPrice: '0.22061', pnl: '+$631.31', roe: '+39.5%', liqPrice: '615.97', margin: '$1,568.39 (Cross)', funding: '$207.37', pnlPositive: true, fundingPositive: true },
];

// Populate positions table
function populatePositionsTable() {
    const tbody = document.getElementById('positions-body');
    tbody.innerHTML = positionsData.map(pos => `
        <tr>
            <td>
                <div class="coin-cell">
                    <span class="coin-name">${pos.coin}</span>
                    <span class="coin-leverage">${pos.leverage}</span>
                </div>
            </td>
            <td>
                <span class="size-primary">${pos.size}</span>
            </td>
            <td>${pos.positionValue}</td>
            <td>${pos.entryPrice}</td>
            <td>${pos.markPrice}</td>
            <td class="${pos.pnlPositive ? 'pnl-positive' : 'pnl-negative'}">
                ${pos.pnl} (${pos.roe})
            </td>
            <td>${pos.liqPrice}</td>
            <td>${pos.margin}</td>
            <td class="${pos.fundingPositive ? 'funding-positive' : 'funding-negative'}">${pos.funding}</td>
        </tr>
    `).join('');
}

// Populate balances table
function populateBalancesTable() {
    const tbody = document.getElementById('balances-body');
    tbody.innerHTML = balancesData.map(b => `
        <tr>
            <td><span class="coin-name">${b.coin}</span></td>
            <td>${b.totalBalance}</td>
            <td><a href="#" class="cyan-link">${b.availableBalance}</a></td>
            <td>${b.usdcValue}</td>
            <td>${b.pnl}</td>
            <td>${b.contract}</td>
        </tr>
    `).join('');
}

// Populate open orders table
function populateOpenOrdersTable() {
    const tbody = document.getElementById('openorders-body');
    tbody.innerHTML = openOrdersData.map(o => `
        <tr>
            <td>${o.time}</td>
            <td>${o.type}</td>
            <td><span class="coin-name">${o.coin}</span></td>
            <td class="${o.direction === 'Long' ? 'direction-long' : 'direction-short'}">${o.direction}</td>
            <td>${o.size}</td>
            <td>${o.originalSize}</td>
            <td>${o.orderValue}</td>
            <td>${o.price}</td>
            <td>${o.reduceOnly}</td>
            <td>${o.trigger}</td>
            <td>${o.tpsl}</td>
        </tr>
    `).join('');
}

// Populate trade history table
function populateTradeHistoryTable() {
    const tbody = document.getElementById('tradehistory-body');
    tbody.innerHTML = tradeHistoryData.map(t => `
        <tr>
            <td>${t.time}</td>
            <td><span class="coin-name">${t.coin}</span></td>
            <td class="${t.direction.includes('Long') ? 'direction-long' : 'direction-short'}">${t.direction}</td>
            <td>${t.price}</td>
            <td>${t.size}</td>
            <td>${t.tradeValue}</td>
            <td>${t.fee}</td>
            <td class="${t.closedPnl.includes('-') ? 'pnl-negative' : ''}">${t.closedPnl}</td>
        </tr>
    `).join('');
}

// Populate funding history table
function populateFundingHistoryTable() {
    const tbody = document.getElementById('fundinghistory-body');
    tbody.innerHTML = fundingHistoryData.map(f => `
        <tr>
            <td>${f.time}</td>
            <td><span class="coin-name">${f.coin}</span></td>
            <td>${f.size}</td>
            <td class="${f.side === 'Long' ? 'direction-long' : 'direction-short'}">${f.side}</td>
            <td class="${f.payment.includes('-') ? 'pnl-negative' : 'pnl-positive'}">${f.payment}</td>
            <td>${f.rate}</td>
        </tr>
    `).join('');
}

// Populate order history table
function populateOrderHistoryTable() {
    const tbody = document.getElementById('orderhistory-body');
    tbody.innerHTML = orderHistoryData.map(o => `
        <tr>
            <td>${o.time}</td>
            <td>${o.type}</td>
            <td><span class="coin-name">${o.coin}</span></td>
            <td class="${o.direction === 'Long' ? 'direction-long' : 'direction-short'}">${o.direction}</td>
            <td>${o.size}</td>
            <td>${o.filledSize}</td>
            <td>${o.orderValue}</td>
            <td>${o.price}</td>
            <td>${o.reduceOnly}</td>
            <td>${o.trigger}</td>
            <td>${o.tpsl}</td>
            <td class="${o.status === 'Canceled' ? 'status-canceled' : o.status === 'Rejected' ? 'status-rejected' : 'status-open'}">${o.status}</td>
            <td>${o.orderId}</td>
        </tr>
    `).join('');
}

// Populate deposits table
function populateDepositsTable() {
    const tbody = document.getElementById('deposits-body');
    tbody.innerHTML = depositsData.map(d => `
        <tr>
            <td>${d.time} <a href="#" class="external-icon">↗</a></td>
            <td>${d.status}</td>
            <td>${d.action}</td>
            <td>${d.source}</td>
            <td>${d.destination}</td>
            <td class="${d.isDeposit ? 'pnl-positive' : 'pnl-negative'}">${d.valueChange}</td>
            <td>${d.fee}</td>
        </tr>
    `).join('');
}

// Draw deposits/withdrawals chart
function drawDepositsChart() {
    const container = document.getElementById('deposits-chart');
    const data = [
        { date: '21 Jan', deposit: 350, withdraw: 0 },
        { date: '22 Jan', deposit: 280, withdraw: 120 },
        { date: '23 Jan', deposit: 0, withdraw: 180 },
        { date: '24 Jan', deposit: 150, withdraw: 200 },
        { date: '25 Jan', deposit: 420, withdraw: 90 },
    ];
    
    const maxValue = Math.max(...data.map(d => Math.max(d.deposit, d.withdraw)));
    const barWidth = 30;
    const gap = 60;
    const chartHeight = 180;
    
    let svg = `<svg width="100%" height="${chartHeight + 40}" viewBox="0 0 450 ${chartHeight + 40}">`;
    
    // Grid lines
    for (let i = 0; i <= 4; i++) {
        const y = (chartHeight / 4) * i + 10;
        svg += `<line x1="40" y1="${y}" x2="430" y2="${y}" stroke="#1e293b" stroke-width="1"/>`;
    }
    
    // Y-axis labels
    svg += `<text x="30" y="15" fill="#64748b" font-size="11" text-anchor="end">$600</text>`;
    svg += `<text x="30" y="${chartHeight / 2 + 10}" fill="#64748b" font-size="11" text-anchor="end">$0</text>`;
    svg += `<text x="30" y="${chartHeight + 5}" fill="#64748b" font-size="11" text-anchor="end">-$600</text>`;
    
    // Bars
    data.forEach((d, i) => {
        const x = 60 + i * (barWidth * 2 + gap);
        const depositHeight = (d.deposit / 600) * (chartHeight / 2);
        const withdrawHeight = (d.withdraw / 600) * (chartHeight / 2);
        
        // Deposit bar (above zero line)
        if (d.deposit > 0) {
            svg += `<rect x="${x}" y="${chartHeight / 2 + 10 - depositHeight}" width="${barWidth}" height="${depositHeight}" fill="#00d4ff" rx="3"/>`;
        }
        
        // Withdraw bar (below zero line)
        if (d.withdraw > 0) {
            svg += `<rect x="${x + barWidth + 5}" y="${chartHeight / 2 + 10}" width="${barWidth}" height="${withdrawHeight}" fill="#ff36ab" rx="3"/>`;
        }
        
        // Date label
        svg += `<text x="${x + barWidth}" y="${chartHeight + 30}" fill="#64748b" font-size="11" text-anchor="middle">${d.date}</text>`;
    });
    
    svg += '</svg>';
    container.innerHTML = svg;
}

// Draw PNL chart
function drawPNLChart() {
    const container = document.getElementById('pnl-chart');
    const chartHeight = 180;
    const chartWidth = 500;
    
    // Simulated PNL data points
    const points = [
        { x: 0, y: 120000 },
        { x: 40, y: 115000 },
        { x: 80, y: 125000 },
        { x: 120, y: 110000 },
        { x: 160, y: 95000 },
        { x: 200, y: 85000 },
        { x: 240, y: 75000 },
        { x: 280, y: -25000 },
        { x: 320, y: -45000 },
        { x: 360, y: -35000 },
        { x: 400, y: 60000 },
        { x: 440, y: 100000 },
        { x: 480, y: 120000 },
    ];
    
    const minY = -60000;
    const maxY = 120000;
    const range = maxY - minY;
    
    const scaleY = (val) => chartHeight - ((val - minY) / range) * chartHeight + 20;
    const scaleX = (val) => (val / 480) * (chartWidth - 60) + 40;
    
    let pathD = `M ${scaleX(points[0].x)} ${scaleY(points[0].y)}`;
    points.slice(1).forEach(p => {
        pathD += ` L ${scaleX(p.x)} ${scaleY(p.y)}`;
    });
    
    // Area fill
    let areaD = pathD + ` L ${scaleX(480)} ${scaleY(0)} L ${scaleX(0)} ${scaleY(0)} Z`;
    
    let svg = `<svg width="100%" height="${chartHeight + 40}" viewBox="0 0 ${chartWidth} ${chartHeight + 50}">`;
    
    // Gradient
    svg += `
        <defs>
            <linearGradient id="pnlGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#00d4ff;stop-opacity:0.3"/>
                <stop offset="50%" style="stop-color:#00d4ff;stop-opacity:0.1"/>
                <stop offset="100%" style="stop-color:#ff36ab;stop-opacity:0.3"/>
            </linearGradient>
        </defs>
    `;
    
    // Grid lines
    for (let i = 0; i <= 4; i++) {
        const y = (chartHeight / 4) * i + 20;
        svg += `<line x1="40" y1="${y}" x2="${chartWidth - 10}" y2="${y}" stroke="#1e293b" stroke-width="1"/>`;
    }
    
    // Zero line
    const zeroY = scaleY(0);
    svg += `<line x1="40" y1="${zeroY}" x2="${chartWidth - 10}" y2="${zeroY}" stroke="#2d3a4f" stroke-width="1" stroke-dasharray="4"/>`;
    
    // Y-axis labels
    svg += `<text x="35" y="25" fill="#64748b" font-size="10" text-anchor="end">120,000</text>`;
    svg += `<text x="35" y="${chartHeight / 4 + 20}" fill="#64748b" font-size="10" text-anchor="end">60,000</text>`;
    svg += `<text x="35" y="${zeroY + 4}" fill="#64748b" font-size="10" text-anchor="end">0</text>`;
    svg += `<text x="35" y="${chartHeight + 15}" fill="#64748b" font-size="10" text-anchor="end">-60,000</text>`;
    
    // Area
    svg += `<path d="${areaD}" fill="url(#pnlGradient)" opacity="0.5"/>`;
    
    // Line
    svg += `<path d="${pathD}" fill="none" stroke="#00d4ff" stroke-width="2"/>`;
    
    // Points
    points.forEach(p => {
        const color = p.y >= 0 ? '#00d4ff' : '#ff36ab';
        svg += `<circle cx="${scaleX(p.x)}" cy="${scaleY(p.y)}" r="3" fill="${color}"/>`;
    });
    
    svg += '</svg>';
    container.innerHTML = svg;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Populate all tables
    populatePositionsTable();
    populateBalancesTable();
    populateOpenOrdersTable();
    populateTradeHistoryTable();
    populateFundingHistoryTable();
    populateOrderHistoryTable();
    populateDepositsTable();
    
    // Draw charts
    drawDepositsChart();
    drawPNLChart();
    
    // Main tab switching (Overview / Metrics / About)
    document.querySelectorAll('.tabs .tab').forEach(tab => {
        tab.addEventListener('click', function() {
            // Update tab buttons
            document.querySelectorAll('.tabs .tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Update tab content
            const tabName = this.getAttribute('data-tab');
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(tabName + '-tab').classList.add('active');
        });
    });
    
    // Subtab switching (Balances, Positions, Open Orders, etc.)
    document.querySelectorAll('.pos-tab[data-subtab]').forEach(tab => {
        tab.addEventListener('click', function() {
            // Update subtab buttons
            document.querySelectorAll('.pos-tab[data-subtab]').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Update subtab content
            const subtabName = this.getAttribute('data-subtab');
            document.querySelectorAll('.subtab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(subtabName + '-subtab').classList.add('active');
        });
    });
    
    // Chart tab interactions
    document.querySelectorAll('.chart-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const siblings = this.parentElement.querySelectorAll('.chart-tab');
            siblings.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// Animated number formatting
function formatNumber(num) {
    return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(num);
}

// Copy to clipboard function
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Show toast or feedback
        console.log('Copied:', text);
    });
}


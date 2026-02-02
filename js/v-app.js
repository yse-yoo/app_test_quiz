const mainContainer = document.getElementById('v-model-main');
const detailPanel = document.getElementById('detail-panel');

function init() {
    // 1-3段目：開発工程、線、テスト工程のペア
    for (let i = 0; i < 3; i++) {
        const dev = vModelFlow[i];
        const test = vModelFlow[6 - i]; // 7, 6, 5番目に対応

        const row = document.createElement('div');
        row.className = "grid grid-cols-11 gap-4 items-center";

        // 左：開発工程
        const devCol = document.createElement('div');
        devCol.className = "col-span-4";
        devCol.appendChild(createBtn(`${dev.id}. ${dev.title}`, dev.color, () => showDetail(dev)));

        // 中：対応線
        const lineCol = document.createElement('div');
        lineCol.className = "col-span-3 flex justify-center";
        lineCol.innerHTML = '<div class="v-line w-full"></div>';

        // 右：テスト工程
        const testCol = document.createElement('div');
        testCol.className = "col-span-4";
        testCol.appendChild(createBtn(`${test.id}. ${test.title}`, test.color, () => showDetail(test)));

        row.appendChild(devCol);
        row.appendChild(lineCol);
        row.appendChild(testCol);
        mainContainer.appendChild(row);
    }

    // 最下段（4段目）：コーディング（中央配置）
    const coding = vModelFlow[3];
    const bottomRow = document.createElement('div');
    bottomRow.className = "grid grid-cols-11 gap-4 items-center";
    
    bottomRow.innerHTML = `
        <div class="col-span-4"></div>
        <div class="col-span-3">
            ${createBtnHTML(`${coding.id}. ${coding.title}`, coding.color)}
        </div>
        <div class="col-span-4"></div>
    `;
    mainContainer.appendChild(bottomRow);

    // HTML文字列からボタンにイベントを付与
    const codingBtn = mainContainer.querySelector(`.${coding.color}`);
    codingBtn.onclick = () => showDetail(coding);
}

function createBtn(text, color, onClick) {
    const btn = document.createElement('button');
    btn.className = `w-full p-5 text-left text-white font-bold rounded-xl shadow-md transform transition hover:scale-105 active:scale-95 ${color}`;
    btn.innerText = text;
    btn.onclick = onClick;
    return btn;
}

// 最下段用のHTML文字列生成ヘルパー
function createBtnHTML(text, color) {
    return `<button class="w-full p-5 text-center text-white font-bold rounded-xl shadow-md transform transition hover:scale-105 active:scale-95 ${color}">${text}</button>`;
}

function showDetail(step) {
    detailPanel.classList.remove('opacity-0', 'translate-y-4');
    detailPanel.classList.add('opacity-100', 'translate-y-0');
    
    document.getElementById('detail-badge').innerText = `STEP ${step.id}`;
    document.getElementById('detail-badge').className = `px-3 py-1 rounded-full text-xs font-bold uppercase text-white ${step.color}`;
    document.getElementById('detail-title').innerText = step.title;
    document.getElementById('detail-desc').innerText = step.desc;

    const pair = vModelFlow.find(s => s.id === step.pairId);
    let relationText = "";
    if (step.id < 4) relationText = `↔️ 対応: この成果物を、後の「${pair.id}. ${pair.title}」で検証します。`;
    else if (step.id > 4) relationText = `↔️ 対応: このテストは、過去の「${pair.id}. ${pair.title}」を基準に行います。`;
    else relationText = "V字の折り返し地点です。ここから検証（テスト）工程に入ります。";

    document.getElementById('detail-relation').innerText = relationText;
}

init();
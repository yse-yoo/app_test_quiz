const vModelFlow = [
    { id: 1, type: 'dev', title: "要件定義", color: "bg-blue-600", desc: "顧客の要望をまとめ、システムが『何をするか』を決めます。", pairId: 7 },
    { id: 2, type: 'dev', title: "基本設計", color: "bg-indigo-500", desc: "画面や機能、外部連携などユーザーに見える部分を設計します。", pairId: 6 },
    { id: 3, type: 'dev', title: "詳細設計", color: "bg-violet-500", desc: "プログラム内部の処理ロジックやデータ構造を設計します。", pairId: 5 },
    { id: 4, type: 'dev', title: "コーディング", color: "bg-slate-700", desc: "設計書に基づき、実際にソースコードを記述します。V字の頂点です。", pairId: 4 },
    { id: 5, type: 'test', title: "単体テスト", color: "bg-violet-500", desc: "最小単位のモジュールが詳細設計通りに動くか検証します。", pairId: 3 },
    { id: 6, type: 'test', title: "結合・システムテスト", color: "bg-indigo-500", desc: "機能連携や全体動作が基本設計通りか検証します。", pairId: 2 },
    { id: 7, type: 'test', title: "受入テスト", color: "bg-blue-600", desc: "最終的にユーザーが要件定義通りに使えるか確認します。", pairId: 1 }
];
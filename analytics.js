// 分析詳細ページ表示
function showAnalyticsDetail(type) {
    if (type === 'total-users') {
        showPage('total-users-detail-page');
    } else if (type === 'task-analysis') {
        showPage('task-analysis-detail-page');
        renderTaskAnalysisChart(); // グラフをレンダリング
    }
    // 他の分析ページもここに追加
}

// Chart.js インスタンス用変数
let taskAnalysisChartInstance = null;

// タスク分析グラフをレンダリング
function renderTaskAnalysisChart() {
    const ctx = document.getElementById('taskAnalysisChart').getContext('2d');
    if (taskAnalysisChartInstance) taskAnalysisChartInstance.destroy(); // 既存があれば破棄

    taskAnalysisChartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['課題', 'バイト', 'サークル', '友人', '家族'],
            datasets: [{
                data: [26, 24, 19, 16, 15], // 仮データ
                backgroundColor: ['#4CAF50', '#2196F3', '#E91E63', '#FFC107', '#F44336']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'right' }, title: { display: true, text: 'タスク分析' } }
        }
    });
}

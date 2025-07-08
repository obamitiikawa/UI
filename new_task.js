// 閉じるボタン
document.getElementById('close-new-task').addEventListener('click', () => {
    showPage('calendar-page'); // カレンダーページへ戻る
});

// 保存ボタン
document.getElementById('save-task-btn').addEventListener('click', () => {
    const taskName = document.getElementById('new-task-name').value;
    const allDay = document.getElementById('all-day-toggle').checked;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    if (!taskName) {
        alert('タスク名を入力してください。');
        return;
    }
    console.log({ taskName, allDay, startDate, endDate });
    alert('タスクが保存されました！');
    showPage('calendar-page'); // 保存後カレンダーページに戻る
});

// 初期日付を設定
document.addEventListener('DOMContentLoaded', () => {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('start-date').value = today;
    document.getElementById('end-date').value = today;
});

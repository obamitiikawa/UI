let currentDate = new Date(); // 現在の月

function renderCalendar() {
    const calendarGrid = document.querySelector('.calendar-grid');
    // 曜日表示の下の要素をクリア (7は曜日の数)
    while (calendarGrid.children.length > 7) {
        calendarGrid.removeChild(calendarGrid.lastChild);
    }

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const startDayOfWeek = firstDayOfMonth.getDay(); // 0=日, 1=月...
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // 日付を生成
    for (let i = 0; i < startDayOfWeek; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('calendar-day', 'text-gray-400');
        calendarGrid.appendChild(dayDiv); // 前月の日付は空で表示
    }
    for (let i = 1; i <= daysInMonth; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('calendar-day', 'bg-gray-200', 'p-2', 'rounded-lg');
        dayDiv.textContent = i;
        // 今日の日付のハイライト (簡略化)
        const today = new Date();
        if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            dayDiv.classList.add('border-2', 'border-red-500');
        }
        calendarGrid.appendChild(dayDiv);
    }

    // 月表示を更新
    document.getElementById('current-month-year').textContent = currentDate.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long' });
}

// 前月ボタン
document.getElementById('prev-month').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

// 次月ボタン
document.getElementById('next-month').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// 初期レンダリング
document.addEventListener('DOMContentLoaded', renderCalendar);

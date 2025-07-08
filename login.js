// ページ切り替え関数 (共通)
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// ログインボタンのイベントリスナー
document.getElementById('login-btn').addEventListener('click', () => {
    const id = document.getElementById('login-id').value;
    const password = document.getElementById('login-password').value;
    if (id === 'user' && password === 'password') {
        alert('ログイン成功！');
        showPage('calendar-page'); // カレンダーページへ遷移
    } else {
        alert('IDまたはパスワードが間違っています。');
    }
});

// 新規会員登録ボタンのイベントリスナー
document.getElementById('register-link-btn').addEventListener('click', () => {
    showPage('register-page'); // 登録ページへ遷移
});

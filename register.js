// 登録ボタンのイベントリスナー
document.getElementById('register-btn').addEventListener('click', () => {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    if (password !== confirmPassword) {
        alert('パスワードが一致しません。');
        return;
    }
    alert('登録成功！ログインしてください。');
    showPage('login-page'); // ログインページへ戻る
});

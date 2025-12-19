<script>
/* ========= 全局状态 ========= */
window.APP = {
  loggedIn: false,       // 是否登录
  wallet: 1234.50,       // 当前余额（假数据）
};

/* ========= 工具函数 ========= */
function formatRM(amount) {
  return 'RM ' + amount.toFixed(2);
}

/* ========= 更新 Wallet ========= */
function renderWallet() {
  const el = document.querySelectorAll('.wallet-balance');
  el.forEach(e => {
    e.innerText = APP.loggedIn ? formatRM(APP.wallet) : '--';
  });
}

/* ========= 登录 / 登出 ========= */
function loginMock() {
  APP.loggedIn = true;
  renderWallet();
  alert('登录成功（模拟）');
}

function logoutMock() {
  APP.loggedIn = false;
  renderWallet();
  alert('已登出');
}

document.addEventListener('DOMContentLoaded', renderWallet);
</script>

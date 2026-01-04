window.initLobby = function () {

  /* ---------- 游戏数据 ---------- */
  const games = {
    baccarat:{ name:"百家乐", rooms:[
      { type:"gold", title:"黄金房", pool:"RM 28,900", status:"下注中" },
      { type:"diamond", title:"钻石房", pool:"RM 120,000", status:"合庄中" },
      { type:"custom", title:"自建房间", desc:"邀请好友 · 房间码进入 · 自定义限额" }
    ]},

    sicbo:{ name:"骰宝", rooms:[
      { type:"gold", title:"黄金房", pool:"RM 9,200", status:"下注中" },
      { type:"diamond", title:"钻石房", pool:"RM 61,000", status:"合庄中" },
      { type:"custom", title:"自建房间", desc:"私人房 · 房间码加入" }
    ]},

    niuniu:{ name:"牛牛", rooms:[
      { type:"gold", title:"黄金房", pool:"RM 18,400", status:"下注中" },
      { type:"diamond", title:"钻石房", pool:"RM 87,000", status:"合庄中" },
      { type:"custom", title:"自建房间", desc:"好友局 · 自定义限额" }
    ]},

    sangong:{ name:"三公", rooms:[
      { type:"gold", title:"黄金房", pool:"RM 12,600", status:"下注中" },
      { type:"diamond", title:"钻石房", pool:"RM 53,000", status:"合庄中" },
      { type:"custom", title:"自建房间", desc:"邀请房 · ROOM CODE" }
    ]},

    blackjack:{ name:"21点", rooms:[
      { type:"gold", title:"黄金房", pool:"RM 15,800", status:"下注中" },
      { type:"diamond", title:"钻石房", pool:"RM 74,500", status:"合庄中" },
      { type:"custom", title:"自建房间", desc:"自建桌 · 自定义下注上限" }
    ]}
  };


  /* ---------- 渲染房间 ---------- */
  function renderRooms(game){
    const box = document.getElementById("roomContainer");
    if(!box) return;

    box.innerHTML = "";

    game.rooms.forEach(r => {

      if(r.type === "custom"){
        box.innerHTML += `
          <div class="room-card-v2">
            <div class="room-meta">
              <div class="room-title">${game.name} · ${r.title}</div>
              <div class="badge-glow badge-yellow">自定义房</div>
            </div>

            <div class="room-pool">
              <div class="pool-label">${r.desc}</div>
            </div>

            <div class="fee-note">平台佣金 4.5% · 自动扣除</div>

            <button class="enter-btn-ghost" onclick="navigate('create-room.html')">
              创建房间（生成 CODE）
            </button>
          </div>
        `;
        return;
      }

      box.innerHTML += `
        <div class="room-card-v2">

          <div class="room-meta">
            <div class="room-title">${game.name} · ${r.title}</div>
            <div class="badge-glow ${r.status==='下注中'?'badge-green':'badge-yellow'}">
              ${r.status}
            </div>
          </div>

          <div class="room-pool">
            <div class="pool-label">庄家池金额</div>
            <div class="pool-amount">${r.pool}</div>
          </div>

          <div class="fee-note">平台抽佣 4.5%（系统结算）</div>

          <button class="enter-btn-main" onclick="navigate('room.html')">
            进入房间
          </button>

        </div>
      `;
    });
  }


  /* ---------- tab 切换 ---------- */
  function switchGame(tab){

    document.querySelectorAll(".game-tab")
      .forEach(t => t.classList.remove("active"));

    tab.classList.add("active");

    const key = tab.dataset.game;
    renderRooms(games[key]);
  }


  /* ---------- 防止重复绑定事件 ---------- */
  document.querySelectorAll(".game-tab").forEach(tab=>{
    tab.replaceWith(tab.cloneNode(true));
  });

  document.querySelectorAll(".game-tab").forEach(tab=>{
    tab.addEventListener("click", ()=>switchGame(tab));
  });


  /* ---------- 默认进 百家乐 ---------- */
  const firstTab = document.querySelector(".game-tab[data-game='baccarat']");
  if(firstTab){
    firstTab.classList.add("active");
    renderRooms(games.baccarat);
  }

  console.log("✔ Lobby initialized");
};

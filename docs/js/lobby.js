window.initLobby = function() {

  // 原本 init 逻辑放这里
  // 保留 renderRooms / switchGame / games 等

  const firstTab = document.querySelector(".game-tab[data-game='baccarat']");
  if(firstTab){
    firstTab.classList.add("active");
    renderRooms(games.baccarat);
  }
};

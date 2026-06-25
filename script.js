(function () {
  let lastRightClickCard = null;

  function isRightClick(e) {
    return e.button === 2 || e.buttons === 2;
  }

  function findCard(target) {
    return target.closest(".card[data-id], .listItem[data-id]");
  }

  function findMenuButton(card) {
    if (!card) return null;

    return (
      card.querySelector('button[data-action="menu"]') ||
      card.querySelector('.itemAction[data-action="menu"]') ||
      card.querySelector('button[title*="More"]') ||
      card.querySelector('button[aria-label*="More"]') ||
      card.querySelector('button[title*="Options"]') ||
      card.querySelector('button[aria-label*="Options"]') ||
      card.querySelector('button[title*="Więcej"]') ||
      card.querySelector('button[aria-label*="Więcej"]') ||
      card.querySelector(".cardOverflowButton") ||
      card.querySelector(".btnMore") ||
      card.querySelector(".btnMoreCommands")
    );
  }

  function handleMouseEvent(e) {
    if (!isRightClick(e)) return;

    // Shift + RMB -> native browser menu
    if (e.shiftKey) {
      lastRightClickCard = null;
      e.stopPropagation();
      e.stopImmediatePropagation();
      return;
    }

    // Ctrl + RMB -> Jellyfin Multi Select
    if (e.ctrlKey) {
      lastRightClickCard = null;
      return;
    }

    const card = findCard(e.target);
    const menuButton = findMenuButton(card);

    // Background / slider empty area -> native browser menu
    if (!card || !menuButton) {
      lastRightClickCard = null;
      e.stopPropagation();
      e.stopImmediatePropagation();
      return;
    }

    // Real card -> block Jellyfin Multi Select
    lastRightClickCard = card;

    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
  }

  ["pointerdown", "mousedown", "pointerup", "mouseup"].forEach(type => {
    document.addEventListener(type, handleMouseEvent, true);
  });

  document.addEventListener("contextmenu", function (e) {
    if (e.shiftKey) {
      lastRightClickCard = null;
      e.stopPropagation();
      e.stopImmediatePropagation();
      return;
    }

    if (e.ctrlKey) {
      lastRightClickCard = null;
      return;
    }

    const card = lastRightClickCard || findCard(e.target);
    const menuButton = findMenuButton(card);

    // Background / empty slider area -> native browser menu
    if (!card || !menuButton) {
      lastRightClickCard = null;
      e.stopPropagation();
      e.stopImmediatePropagation();
      return;
    }

    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    menuButton.click();
    lastRightClickCard = null;
  }, true);
})();

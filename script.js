(function () {
  let lastRightClickTarget = null;

  function isRightClick(e) {
    return e.button === 2 || e.buttons === 2;
  }

  function isIgnored(target) {
    return target.closest(
      ".editorsChoiceContainer, .editorsChoiceItemBanner, .splide"
    );
  }

  function findContainer(target) {
    return target.closest(
      ".card, .listItem, .detailPageWrapperContainer, .detailPagePrimaryContainer, .itemDetailPage, .page"
    );
  }

  function findMenuButton(container) {
    if (!container) return null;

    return (
      container.querySelector('button[title*="More"]') ||
      container.querySelector('button[aria-label*="More"]') ||
      container.querySelector('button[title*="Options"]') ||
      container.querySelector('button[aria-label*="Options"]') ||
      container.querySelector('button[title*="Więcej"]') ||
      container.querySelector('button[aria-label*="Więcej"]') ||
      container.querySelector(".cardOverflowButton") ||
      container.querySelector(".btnMore") ||
      container.querySelector(".btnMoreCommands") ||
      container.querySelector(".itemAction[data-action='menu']") ||
      container.querySelector("button[data-action='menu']")
    );
  }

  function blockJellyfinRightClick(e) {
    if (!isRightClick(e)) return;
    if (e.ctrlKey) return;
    if (isIgnored(e.target)) return;

    const container = findContainer(e.target);
    if (!container) return;

    lastRightClickTarget = e.target;

    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
  }

  ["pointerdown", "mousedown", "pointerup", "mouseup"].forEach(type => {
    document.addEventListener(type, blockJellyfinRightClick, true);
  });

  document.addEventListener("contextmenu", function (e) {
    if (e.ctrlKey) return;
    if (isIgnored(e.target)) return;

    const target = lastRightClickTarget || e.target;
    const container = findContainer(target);
    if (!container) return;

    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    let menuButton = findMenuButton(container);

    if (!menuButton) {
      menuButton =
        document.querySelector('button[title*="More"]') ||
        document.querySelector('button[aria-label*="More"]') ||
        document.querySelector('button[title*="Options"]') ||
        document.querySelector('button[aria-label*="Options"]') ||
        document.querySelector('button[title*="Więcej"]') ||
        document.querySelector('button[aria-label*="Więcej"]') ||
        document.querySelector(".btnMoreCommands");
    }

    if (menuButton) {
      menuButton.click();
    } else {
      console.log("Context menu button not found for:", container);
    }

    lastRightClickTarget = null;
  }, true);
})();

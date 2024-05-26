const root = document.documentElement;
const dropdownTitleIcon = document.querySelector(".dropdown-title-icon");
const dropdownTitle = document.querySelector(".dropdown-title");
const dropdownList = document.querySelector(".dropdown-list");
const mainButton = document.querySelector(".main-button");
const floatingIcon = document.querySelector(".floating-icon");


const icons = ["cn", "us"]

const listItems = ["简体中文", "english"];

const iconTemplate = (path) => {
    return `
    <span class="fi fi-${path}"></span>
  `;
};

const listItemTemplate = (text, translateValue) => {
    return `
    <li class="dropdown-list-item">
      <button class="dropdown-button list-button" data-translate-value="${translateValue}%">
        <span class="text-truncate">${text}</span>
      </button>
    </li>
  `;
};

const renderListItems = () => {
    dropdownList.innerHTML += listItems
        .map((item, index) => {
            return listItemTemplate(item, 100 * index);
        })
        .join("");
};

renderListItems();

const setDropdownProps = (deg, ht, opacity) => {
    root.style.setProperty("--rotate-arrow", deg !== 0 ? deg + "deg" : 0);
    root.style.setProperty("--dropdown-height", ht !== 0 ? ht + "rem" : 0);
    root.style.setProperty("--list-opacity", opacity);
};

mainButton.addEventListener("click", () => {
    const listWrapperSizes = 3.5; // margins, paddings & borders
    const dropdownOpenHeight = 4.6 * listItems.length + listWrapperSizes;
    const currDropdownHeight =
        root.style.getPropertyValue("--dropdown-height") || "0";

    currDropdownHeight === "0"
        ? setDropdownProps(180, dropdownOpenHeight, 1)
        : setDropdownProps(0, 0, 0);
});

dropdownList.addEventListener("mouseover", (e) => {
    const translateValue = e.target.dataset.translateValue;
    root.style.setProperty("--translate-value", translateValue);
});

dropdownList.addEventListener("click", (e) => {
    const clickedItemText = e.target.innerText.toLowerCase().trim();
    const idx = listItems.findIndex(value => value === clickedItemText)
    const clickedItemIcon = icons[idx];

    dropdownTitleIcon.innerHTML = iconTemplate(clickedItemIcon);
    dropdownTitle.innerHTML = clickedItemText;
    setDropdownProps(0, 0, 0);
    switchLanguage(clickedItemIcon)
});

dropdownList.addEventListener("mousemove", (e) => {
    const iconSize = root.style.getPropertyValue("--floating-icon-size") || 0;
    const x = e.clientX - dropdownList.getBoundingClientRect().x;
    const y = e.clientY - dropdownList.getBoundingClientRect().y;
    const targetText = e.target.innerText.toLowerCase().trim();
    const idx = listItems.findIndex(value => value === targetText)
    const hoverItemText = icons[idx];

    floatingIcon.innerHTML = iconTemplate(hoverItemText);
    root.style.setProperty("--floating-icon-left", x - iconSize / 2 + "px");
    root.style.setProperty("--floating-icon-top", y - iconSize / 2 + "px");
});


function switchLanguage(language) {
    var lc
    if (language === 'cn'){
        console.log('cn')
        lc = 'cn'

    }
    if (language === 'us'){
        console.log('us')
        lc = 'us'
    }

    var url = window.location.href;
    var urlObj = new URL(url);
    var searchParams = new URLSearchParams(urlObj.search);

    // 如果当前 URL 中已存在该参数，则更新参数值
    if (searchParams.has('lc')) {
        searchParams.set('lc', lc);
    } else {
        // 否则添加新的参数
        searchParams.append('lc', lc);
    }

    // 构建新的 URL
    var newUrl = urlObj.origin + urlObj.pathname + '?' + searchParams.toString();

    // 保留哈希值
    if (urlObj.hash) {
        newUrl += urlObj.hash;
    }

    // 跳转到新的 URL
    window.location.href = newUrl;
}
const getLocalStorageData = () => {
    const LocalStorageItems = localStorage.getItem("shopping-cart");
    const items = LocalStorageItems ? JSON.parse(LocalStorageItems) : {};
    return items;
}

const addTodb = (id) => {
    const localStorageItems = getLocalStorageData();
    if (id in localStorageItems) {
        localStorageItems[id] = localStorageItems[id] + 1;
    } else {
        localStorageItems[id] = 1;
    }

    localStorage.setItem("shopping-cart", JSON.stringify(localStorageItems));
}

const removeFromDb = (id) => {
    const localStorageItems = getLocalStorageData();
    delete localStorageItems[id];
    localStorage.setItem("shopping-cart", JSON.stringify(localStorageItems));
}

const clearCart = () => {
    localStorage.removeItem("shopping-cart");
}

export { addTodb, removeFromDb, clearCart, getLocalStorageData };


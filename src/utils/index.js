
export const getInitials = (name) => {
    const words = name.split(' ');
    return words.length > 1
        ? words[0].charAt(0).toUpperCase() + words[1].charAt(0).toUpperCase()
        : name.charAt(0).toUppercase();
}

export const handleKeyNavigation = (e, pokemons, setFocusIndex) => {
    if (e.key === 'ArrowDown')
        setFocusIndex((prevIndex) => (prevIndex === null ? 0 : Math.min(prevIndex + 1, pokemons.length - 1)));
    else if (e.key === 'ArrowUp')
        setFocusIndex((prevIndex) => (prevIndex === null ? 0 : Math.max(prevIndex - 1, 0)));
}

export const addShortcutFocusListener = (searchInputRef) => {
    const handleShortcutFocus = (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === '/') {
            e.preventDefault();
            searchInputRef.current?.querySelector('input')?.focus();
        }
    };

    window.addEventListener('keydown', handleShortcutFocus);
    return () => {
        window.removeEventListener('keydown', handleShortcutFocus);
    };
};
type AppStore = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

let isDarkMode = true;

export const useAppStore = (() => {
  const state: AppStore = {
    isDarkMode,
    toggleTheme: () => {
      isDarkMode = !isDarkMode;
      state.isDarkMode = isDarkMode;
    },
  };

  return state;
})();

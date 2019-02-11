const key = 'todomvc';

export function loadState() {
  const serializedState = localStorage.getItem(key);

  if (serializedState) {
    try {
      const state = JSON.parse(serializedState);
      return state;
    } catch (error) {
      return undefined;
    }
  }

  return undefined;
}

export function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    return;
  }
}

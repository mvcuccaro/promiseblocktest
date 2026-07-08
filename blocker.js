function createRef(initialValue) {
  return {
    get current() {
      return initialValue;
    },
    set current(newValue) {
      initialValue = newValue;
    }
  };
}

const blocker = createRef(Promise.resolve(true));

export const useBlocker = () => {
    return {
        blocker
    };
}

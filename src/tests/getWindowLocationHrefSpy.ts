// @ts-nocheck
const getWindowLocationHrefSpy = (): jest.Mock => {
    const getHrefSpy = jest.fn();
    delete window.location;
    window.location = {};
    
    Object.defineProperty(window.location, 'href', {
      set: getHrefSpy,
    });

    return getHrefSpy;
};

export default getWindowLocationHrefSpy;
  
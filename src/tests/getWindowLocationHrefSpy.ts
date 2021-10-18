// @ts-nocheck
const getWindowLocationHrefSpy = (): jest.Mock => {
    const mockCallBack = jest.fn();
    delete window.location;
    window.location = {};
    
    Object.defineProperty(window.location, 'href', {
      set: mockCallBack,
    });

    return mockCallBack;
};

export default getWindowLocationHrefSpy;
  
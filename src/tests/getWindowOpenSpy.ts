const getWindowOpenSpy = (): jest.Mock => {
  const mockCallBack = jest.fn();
  window.open = mockCallBack;

  return mockCallBack;
};

export default getWindowOpenSpy;

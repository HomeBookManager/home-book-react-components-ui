function timer(delay: number, callback: () => void = () => {}): void {
  let remaining = delay;
  let running;
  let started;
  let timeoutHandler;

  this.start = function (): void {
    running = true;
    started = new Date();
    timeoutHandler = setTimeout(callback, remaining);
  };

  this.pause = function (): void {
    running = false;
    remaining -= new Date().getTime() - started;

    clearTimeout(timeoutHandler);
  };

  this.getTimeLeft = function (): number {
    return (remaining -= new Date().getTime() - started);
  };

  this.getStateRunning = function (): boolean {
    return running;
  };
}

export default timer;

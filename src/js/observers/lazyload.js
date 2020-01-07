import { loadCalculator, observeCalculator, getCalculator } from '../handlers/calculatorHandler';
import { loadSchedule, observeSchedule, getSchedule } from '../handlers/scheduleHandler';

export const activateLazyloadObserver = () => {
  const options = {
    rootMargin: '20% 0px 75% 0px',
  };

  const lazyloadObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        switch (entry.target) {
          case getCalculator():
            loadCalculator();
            break;
          case getSchedule():
            loadSchedule();
            break;
          default:
            throw new Error('lazyloadObserver error');
        }

        observer.unobserve(entry.target);
      }
    });
  }, options);

  observeCalculator(lazyloadObserver);
  observeSchedule(lazyloadObserver);
};

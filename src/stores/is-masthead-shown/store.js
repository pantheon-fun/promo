import { createStore, createEvent } from 'effector';
import noop from 'lodash/noop';
import { initSmoothScroll } from 'smooth-smooth-scroll';

const SMOOTH_SCROLL_CORRECTION = 3;

let removeSmoothScroll = noop;

export const addMastheadEl = createEvent();
export const mastheadElStore = createStore(null).on(addMastheadEl, (state, mastheadEl) => {
  return mastheadEl || undefined;
});

mastheadElStore.watch((mastheadEl) => {
  if (!mastheadEl) {
    return;
  }

  removeSmoothScroll();
  removeSmoothScroll = initSmoothScroll({
    offsetTop: mastheadEl.offsetHeight - SMOOTH_SCROLL_CORRECTION,
  });
});

export const addForbiddenMastheadZoneObserver = createEvent();
export const forbiddenMastheadZoneObserverStore = createStore(null).on(
  addForbiddenMastheadZoneObserver,
  (state, forbiddenMastheadZoneObserver) => {
    return forbiddenMastheadZoneObserver || undefined;
  }
);

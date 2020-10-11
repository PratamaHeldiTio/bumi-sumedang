import 'regenerator-runtime';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';
import { skipWaiting, clientsClaim } from 'workbox-core';

skipWaiting();
clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  new RegExp('https://fonts.googleapis.com/css2?family=Bangers&family=Oleo+Script:wght@700&family=Roboto&display=swap'),

  new CacheFirst({
    cacheName: 'font-online',
  }),
);

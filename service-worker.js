/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "55b8e5ab4895c62f0158623adb3a9e47"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "api/index.html",
    "revision": "e4c76026d7291a13b67327622da5e5d3"
  },
  {
    "url": "assets/css/0.styles.911252ba.css",
    "revision": "8e24183069336fbd53e00cd4bbbea44a"
  },
  {
    "url": "assets/img/image-1.fa09ac82.png",
    "revision": "fa09ac821f54b24c5afd0a80c1df96ef"
  },
  {
    "url": "assets/img/image-11.6ab4f2d1.png",
    "revision": "6ab4f2d10fefe9a2b44ca47aed3a7eea"
  },
  {
    "url": "assets/img/image-13.86a48f2e.png",
    "revision": "86a48f2e8391fe1fb90d6b7c107de9ca"
  },
  {
    "url": "assets/img/image-15.fcfad098.png",
    "revision": "fcfad098b990f1f3ba79e09feb9f6bd1"
  },
  {
    "url": "assets/img/image-16.2eda1221.png",
    "revision": "2eda12211fbc3699e9fb28a74371e237"
  },
  {
    "url": "assets/img/image-18.c8642115.png",
    "revision": "c86421159f7425bdaa22f0f1935538c8"
  },
  {
    "url": "assets/img/image-2.f359ccf4.png",
    "revision": "f359ccf4f02ffc498fe5aed93989632f"
  },
  {
    "url": "assets/img/image-3.9f5479ae.png",
    "revision": "9f5479ae84c3349bcb1f3a890d557f70"
  },
  {
    "url": "assets/img/image-4.ac6ffe0d.png",
    "revision": "ac6ffe0d0719db4073ff9913f7822ce0"
  },
  {
    "url": "assets/img/image-5.fb9c7397.png",
    "revision": "fb9c73971a3947211d80b1394e45bfec"
  },
  {
    "url": "assets/img/image-6.120b1530.png",
    "revision": "120b15301bc3d6b48f3d5fb5a48b9188"
  },
  {
    "url": "assets/img/image-7.1a9a2156.png",
    "revision": "1a9a215621e097c6282e7796a55d1a82"
  },
  {
    "url": "assets/img/image-8.2676b2d2.png",
    "revision": "2676b2d2d3e4ca8eeca7a861ebbd7836"
  },
  {
    "url": "assets/img/image-9.b7d312d3.png",
    "revision": "b7d312d3e9aab42593f842c1f449406d"
  },
  {
    "url": "assets/img/image.0760b51e.png",
    "revision": "0760b51e60897601941a8ac0b3433c5a"
  },
  {
    "url": "assets/img/Relation.235c8aaa.svg",
    "revision": "235c8aaa4816a3294299154ff94df419"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9eb44c6a.js",
    "revision": "44db35830af40d8bd2d9dacc1174ec4b"
  },
  {
    "url": "assets/js/11.8d7b0955.js",
    "revision": "0da935f7fafac9706f05fd559134a1f6"
  },
  {
    "url": "assets/js/12.8b3989c9.js",
    "revision": "094d84dcd7a54248b2c2496e6f02e83a"
  },
  {
    "url": "assets/js/13.23eea25f.js",
    "revision": "7c7e3aff5f286f642eeff3b608e2aa17"
  },
  {
    "url": "assets/js/14.fe3a2b70.js",
    "revision": "5c6e0423742aa3d4945620b49146caa7"
  },
  {
    "url": "assets/js/15.b7908572.js",
    "revision": "0ed28c370b2a7ecd055eab6857581491"
  },
  {
    "url": "assets/js/16.a4036440.js",
    "revision": "b91384cb0704921f38f898e61bf9bc89"
  },
  {
    "url": "assets/js/17.86af6b46.js",
    "revision": "57e7fcb1fade55dc09064ce2d57547da"
  },
  {
    "url": "assets/js/18.8eb2893b.js",
    "revision": "8c732ce3c69291dbb5292e4ab35fa6dd"
  },
  {
    "url": "assets/js/19.931e6ea6.js",
    "revision": "c061c0150758c235d0b904558396df4e"
  },
  {
    "url": "assets/js/2.3a13130b.js",
    "revision": "239c810fc753ab8fdce72c934051487e"
  },
  {
    "url": "assets/js/20.1a60a383.js",
    "revision": "3ee161d19d68536ed562080640c1b9a7"
  },
  {
    "url": "assets/js/21.72c9fa88.js",
    "revision": "b9de6e7a2efafc4edac7a87fbbf9e36e"
  },
  {
    "url": "assets/js/22.bb2a7eaa.js",
    "revision": "f91ff676b6d926637c32066b36181fbe"
  },
  {
    "url": "assets/js/23.d9a6a387.js",
    "revision": "0350711ce0297d409f0ee3faacc669ad"
  },
  {
    "url": "assets/js/24.5609c093.js",
    "revision": "81661c83e616afbc68c4f2f2cfbd57e7"
  },
  {
    "url": "assets/js/25.22bc5cb8.js",
    "revision": "06d309f33fb04615ac05aaf7ab534eca"
  },
  {
    "url": "assets/js/27.9171e162.js",
    "revision": "fbebe0117f97831df78aed14954149e8"
  },
  {
    "url": "assets/js/3.7d896496.js",
    "revision": "2d20b1d27fd7bfa83ea5c508295a4059"
  },
  {
    "url": "assets/js/4.b8eae0c5.js",
    "revision": "657aca1a23fc0d6b50d93c19051ddfa9"
  },
  {
    "url": "assets/js/5.302481ad.js",
    "revision": "9736317f8836bbf652bfa024822e8834"
  },
  {
    "url": "assets/js/6.8c881885.js",
    "revision": "da131f895e919d65b38cf60854a72e3d"
  },
  {
    "url": "assets/js/7.18ace0d5.js",
    "revision": "ea665aa20f3d5c0f3e789ef05afa3238"
  },
  {
    "url": "assets/js/8.0ca4461f.js",
    "revision": "8fb133c72faf846b36e13d7d881397c6"
  },
  {
    "url": "assets/js/9.1a777691.js",
    "revision": "8ca283ee66b8eb94455e92b8a6bfe98f"
  },
  {
    "url": "assets/js/app.1afd78eb.js",
    "revision": "017af78f55bd0c512d49184225cf3a69"
  },
  {
    "url": "conclusion/index.html",
    "revision": "a5685c5af18679c5c728ad69ecdf8b36"
  },
  {
    "url": "design/index.html",
    "revision": "8a60a875ec471871537f54f325e9084d"
  },
  {
    "url": "index.html",
    "revision": "7e1c869d6d63db0c85c5ebded489e478"
  },
  {
    "url": "intro/index.html",
    "revision": "fbd5b9260a0974e43e0ff64035a3f122"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "7655feecd2caefc94e5680935f13e6e4"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "d392190218a9da1226b23227c963fe72"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "5be0438eb53849ede06c713c7c405df3"
  },
  {
    "url": "software/index.html",
    "revision": "26a06a14e1b9e9cc21754c1f575ae1c7"
  },
  {
    "url": "test/index.html",
    "revision": "16a9405dc9a2437433df52d69c58f429"
  },
  {
    "url": "use cases/index.html",
    "revision": "34d3cbf7fa252998a73320aa3b6fe2d2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "9058c914d81df4331b510ccd2370071a",
".git/config": "f2069a47c8c813031d02a8546cee3dc5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b2eb53fde91ee18f7fd3fc55eb97d93d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "128410b02c4b947b4cfaa985cd239ac6",
".git/logs/refs/heads/master": "128410b02c4b947b4cfaa985cd239ac6",
".git/logs/refs/remotes/origin/master": "df627d488ebc16c743a6d9dc5dd294f1",
".git/objects/02/ae2e360db76b4f1b9f1ff709f3d68fc60ff590": "61dd053758af011e09cc211e67434d4d",
".git/objects/09/7884c052cf78cfbfdc3ba4f1508fd4774404f0": "2350b91d3865b4ebf948f2f032bb92b9",
".git/objects/0c/ae6e6bc844405f800e689f1d694ac6e53bf021": "91024e771431cd09de78ce708535b979",
".git/objects/0c/f3206a665d3a2747416ff3b95f7fd8da44fcb3": "5a65741b8f209162d67b5e43dd3c32bf",
".git/objects/15/13b41d9fadd1140dcdab9faf24cddf371d90fa": "b54433d3cf23d6ddd5d7e7f1c47e2841",
".git/objects/1a/193372eeb3d5779b00da455642c0b8e2ce3594": "41baf9c3f8a30f6f8ba0ed1022b70670",
".git/objects/26/0247354afd841210300bc3cb7aff346832398f": "48be7814d908c6aed9da247e1f43a828",
".git/objects/27/046548917d38f5b42d883947410095722b407f": "22cbfdfe6b1e66a149e0a3f52c282c51",
".git/objects/29/141bf44e9a00d047909b3f7ceece221fb014f7": "e4e004d546d96db5b3aa8621c741ca89",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/38/341b12f22fd166cb70c61e77a7a4d0d96b8fc0": "ce7e0b4f21ff8cdf48f515238ddafc6c",
".git/objects/3e/5b54b9ff9e23ebe3049fe0c37445cf9634a982": "757c04bf36bdb592802f16fc73b7be42",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/51/de17d921f9f27a9a5f2f5993c76ab978d554e9": "c4f7ffba7132ae6fe82d24b655393d32",
".git/objects/51/e80affd9669a316104823a8f120fc83aa0fe3c": "eab409d091f0c506c5137b68c5d5847f",
".git/objects/52/d164fe3739dc080b209694d5b0d26b3fe96638": "61633c93cefb62da26863a2a11d85359",
".git/objects/58/1680955f8b5b26b4272c792c23d8347ce49847": "6c6f3f62c05986a7a603b65735d0a5c9",
".git/objects/70/02a74652b67888f2f7b89f99e9781460aec6a9": "fa537964759a0a563d6cb8f6bbaff1c8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/53fb76f095e89d164189a0d9db97f338a4712d": "99f3ea1ba04b3a0c08ffe3f51826ef98",
".git/objects/7e/eae264c9d65b2d916f60a8dd657dd101f344e0": "5ca2af866c0de371e5b3e05c2c30443e",
".git/objects/82/4569c3c62965fee2b03b669b04fb4832c1c850": "174844840e8caa2c48f8aa7cd7951f08",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/a69293cd50a7855196d36389f533c15ea1c790": "36282976cef571f1dc851e3e1c357b44",
".git/objects/9a/4a393d5065c6051a416dde497bd3e6c8cdf5be": "d8022ed0eab36acf1506300f2e41d19b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/05578a4a889d9dff555034fab5424bd7828a7a": "07dae83ee8d68e9bae13b68a49ecd63a",
".git/objects/b2/c1c522181b0f4a79ead7b75fa32a5d69ec581f": "75b0de7c988591cc91ee7055e44892bb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/7118bcfe5971b1a8ef1007b8ac32eb2505589d": "ca2fc40305225c48c092f8cf36d397bc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/df2fe603a36d79b433700f28bafbf63fb66ae2": "3d0aa28309182102439908f9baafb809",
".git/objects/c8/4661493cceed0640013ae4a608257391bfd32a": "176bc6aeeac23a7464f859cc4c0c1bbc",
".git/objects/c9/6ee8ee76bf1b47aeed1cc0944615910ba629a3": "a5c6b4a8604215d7302624a79e42e188",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/d0ec890158d20a439e5ea12e1e7ac7e5213e89": "d8a72b9a83728b486924cb78ab70e02f",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/refs/heads/master": "d39f58c70277b63d804a3b1614653f67",
".git/refs/remotes/origin/master": "d39f58c70277b63d804a3b1614653f67",
"assets/AssetManifest.json": "ebb605a55634072f5e87e10876e8beac",
"assets/assets/icons8-github-48.png": "dc96f5b99dff3acbd46ae054a1052ae8",
"assets/assets/icons8-github-50.png": "7303fcf0bbe2ecccc0877ff2e6ce7a28",
"assets/assets/icons8-instagram-48.png": "b17d99ac2b6dfe78563b73a1b12a057b",
"assets/assets/icons8-instagram-50.png": "16853ea5972c26a9ca359e8e61ff8c65",
"assets/assets/icons8-instagram-circle-50.png": "5457ac662bd7b92fd8000bfeaaf0c56a",
"assets/assets/icons8-twitter-48.png": "9cfeee7054b3f11667985e56a6e5e7db",
"assets/assets/icons8-twitter-50.png": "5c6c13198774f17d4f2a5ab1ed097638",
"assets/assets/icons8-twitter-circled-50.png": "e557bac0ef586232faab8cd63d03643e",
"assets/assets/me-2020-centered.png": "bc6add6a95c9cdaad72e2fc76f4ab43b",
"assets/assets/me-2020.png": "388b81408344adfe28aa2aa33ec0e543",
"assets/FontManifest.json": "9aa6ea3da6f5a2ddd9a3fa0a10eb3892",
"assets/fonts/Arvo-Bold.ttf": "ab1dabbd8ffd289a5c35cb151879e987",
"assets/fonts/Arvo-BoldItalic.ttf": "a53d4514f91e2a95842412c4d3954dd0",
"assets/fonts/Arvo-Italic.ttf": "4d7f205bc8a4a7e98c219a1427999533",
"assets/fonts/Arvo-Regular.ttf": "afb50701726581f5f817faab8f7cf1b7",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "cb4c3fb257d325fa1071941430d3d04f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "724003de5a3e5d2e504e7186567048ea",
"/": "724003de5a3e5d2e504e7186567048ea",
"main.dart.js": "7d6205ab3ce14d46577cca7688cc501c",
"manifest.json": "e5770cc63dae30a89b7f044a5361b684",
"version.json": "aa0c9cf12e5c9127ee0dadd6bad1f138"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

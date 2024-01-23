<div align="center">
  <img width="600" src="public/ubn.jpeg" alt="Spotube Logo">

An open source, connect four games<br />
playing to the algorithm and using local data<br />
best connect four game

By the way i did this game for my education😉

<a href="https://spotube.netlify.app"><img alt="Visit the website" height="56" src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy/documentation/website_vector.svg"></a>-----------------------
<a href="https://discord.gg/uJ94vxB6vg"><img alt="Discord Server" height="56" src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy/social/discord-plural_vector.svg"></a>----------

<a href="https://patreon.com/krtirtho"><img alt="Support me on Patron" height="56" src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy/donate/patreon-singular_vector.svg"></a>----------------------
<a href="https://www.buymeacoffee.com/krtirtho"><img alt="Buy me a Coffee" height="56" src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy/donate/buymeacoffee-singular_vector.svg"></a>-----------

<a href="https://opencollective.com/spotube"><img src="https://opencollective.com/spotube/donate/button.png?color=blue" alt="Donate to our Open Collective" height="45"></a>-----------

---

![Spotube Desktop](public/Screenshot from 2024-01-23 20-17-11.png)

![Spotube Mobile](assets/mobile-screenshots/combined.png)

</div>

## 🌃 Features

- 🚫 No ads, thanks to the use of public & free Spotify and YT Music APIs¹
- ⬇️ Downloadable tracks
- 🖥️ 📱 Cross-platform support
- 🪶 Small size & less data usage
- 🕵️ Anonymous/guest login
- 🕒 Time synced lyrics
- ✋ No telemetry, diagnostics or user data collection
- 🚀 Native performance
- 📖 Open source/libre software
- 🔉 Playback control is done locally, not on the server

**¹** It is still **recommended** to support the creators by watching/liking/subscribing to the artists' YouTube channels or liking their tracks on Spotify (or purchasing a Spotify Premium subscription too).

### ❌ Unsupported features

- 🗣️ **Spotify Shows & Podcasts:** Shows and Podcasts can <ins>**never be supported**</ins> because the audio tracks are _only_ available on Spotify and accessing them would require Spotify Premium.
- 🎧 **Spotify Listen Along:** [Coming soon!](https://github.com/KRTirtho/spotube/issues/8)

## 📜 ⬇️ Installation guide

New releases usually appear after 3-4 months.<br />
This handy table lists all methods you can use to install Spotube:

<table>
  <tr>
    <th>Platform</th>
    <th>Package/Installation Method</th>
  </tr>
  <tr>
    <td>Windows</td>
    <td>
      <a href="https://github.com/KRTirtho/spotube/releases/latest/download/Spotube-windows-x86_64-setup.exe">
        <img width="220" alt="Windows Download" src="https://get.todoist.help/hc/article_attachments/4403191721234/WindowsButton.svg">
      </a>
  </tr>
  <tr>
    <td>MacOS</td>
    <td>
      <a href="https://github.com/KRTirtho/spotube/releases/latest/download/Spotube-macos-universal.dmg">
        <img width="220" alt="MacOS Download" src="https://reachify.io/wp-content/uploads/2018/09/mac-download-button-1.png">
      </a>
    </td>
  </tr>
  <tr>
    <td>Android</td>
    <td>
      <a href="https://play.google.com/store/apps/details?id=oss.krtirtho.spotube">
        <img width="220" alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png">
      </a>
      <br>
      <a href="https://github.com/KRTirtho/spotube/releases/latest/download/Spotube-android-all-arch.apk">
        <img width="220" alt="APK download" src="https://user-images.githubusercontent.com/114044633/223920025-83687de0-e463-4c5d-8122-e06e4bb7d40c.png">
      </a>
      <br/>
      <a href="https://f-droid.org/packages/oss.krtirtho.spotube">
        <img width="220" alt="Download from F-Droid" src="https://user-images.githubusercontent.com/61944859/174589876-bace24c0-b3fd-4c4a-bdb4-6fa82b5853ec.png">
      </a>
    </td>
  </tr>
  <tr>
    <td>Flatpak</td>
    <td>
      <p><code>flatpak install com.github.KRTirtho.Spotube</code></p>
      <a href="https://flathub.org/apps/details/com.github.KRTirtho.Spotube">
        <img width="220" alt="Download on Flathub" src="https://flathub.org/assets/badges/flathub-badge-en.png">
      </a>
    </td>
  </tr>
  <tr>
    <td>AppImage</td>
    <td>
      <a href="https://github.com/KRTirtho/spotube/releases/latest/download/Spotube-linux-x86_64.AppImage">
        <img width="220" alt="Download AppImage" src="https://user-images.githubusercontent.com/61944859/169455015-13385466-8901-48fe-ba90-b62d58b0be64.png">
      </a>
      <p><b>Note:</b> <a href="https://github.com/TheAssassin/AppImageLauncher">AppimageLauncher</a> is required!</p>
    </td>
  </tr>
  <tr>
    <td>Debian/Ubuntu</td>
    <td>
      <a href="https://github.com/KRTirtho/spotube/releases/latest/download/Spotube-linux-x86_64.deb">
        <img width="220" alt="Debian/Ubuntu Download" src="https://user-images.githubusercontent.com/61944859/169097994-e92aff78-fd75-4c93-b6e4-f072a4b5a7ed.png">
      </a>
      <p>Then run: <code>sudo apt install ./Spotube-linux-x86_64.deb</code></p>
    </td>
  </tr>
  <tr>
    <td>Arch/Manjaro</td>
    <td>
      <p>With pamac: <code>sudo pamac install spotube-bin</code></p>
      <p>With yay: <code>yay -Sy spotube-bin</code></p>
    </td>
  </tr>
  <tr>
    <td>Fedora/OpenSuse</td>
    <td>
      <a href="https://github.com/KRTirtho/spotube/releases/latest/download/Spotube-linux-x86_64.rpm">
        <img width="220" alt="Fedora/OpenSuse Download" src="https://user-images.githubusercontent.com/61944859/223638350-5926b9da-04d6-4edd-931d-ad533e4ff058.png">
      </a>
      <p>For Fedora: <code>sudo dnf install ./Spotube-linux-x86_64.rpm</code></p>
      <p>For OpenSuse: <code>sudo zypper in ./Spotube-linux-x86_64.rpm</code></p>
    </td>
  </tr>
  <tr>
    <td>Linux (tarball)</td>
    <td>
      <a href="https://github.com/KRTirtho/spotube/releases/latest">
        <img width="220" alt="Tarball Download" src="https://user-images.githubusercontent.com/61944859/169456985-e0ba1fd4-10e8-4cc0-ab94-337acc6e0295.png">
      </a>
    </td>
  </tr>
  <tr>
    <td>Windows - <a href="https://chocolatey.org">Chocolatey</a></td>
    <td>
      <p><code>choco install spotube</code></p>
    </td>
  </tr>
  <tr>
    <td>Windows - <a href="https://scoop.sh">Scoop</a></td>
    <td>
      <p><code>scoop bucket add extras</code></p>
      <p><code>scoop install spotube</code></p>
    </td>
  </tr>
  <tr>
    <td>Windows - <a href="https://github.com/microsoft/winget-cli">WinGet</a></td>
    <td>
      <p><code>winget install --id KRTirtho.Spotube</code></p>
    </td>
  </tr>
</table>

### 🔄 Nightly Builds

Grab the latest nightly builds of Spotube [from the GitHub Releases](https://github.com/KRTirtho/spotube/releases/tag/nightly).

## 🕳️ Building from source

<a href="https://github.com/KRTirtho/spotube/actions"><img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/KRTirtho/spotube/spotube-release-binary.yml?+label=Build%20Status"></a>

You can compile Spotube's source code by [following these instructions](CONTRIBUTION.md#your-first-code-contribution).

## 👥 The Spotube team

- [Kingkor Roy Tirtho](https://github.com/KRTirtho) - The Founder, Maintainer and Lead Developer
- [RaptaG](https://github.com/RaptaG) - The GitHub Moderator and Community Manager
- [Owen Connor](https://github.com/owencz1998) - The Cool Discord Moderator
- [Meenbeese](https://github.com/meenbeese) - The Android Developer
- [Piotr Rogowski](https://github.com/karniv00l) - The MacOS Developer
- [Rusty Apple](https://github.com/RustyApple) - The Mysterious Unknown Guy

## 💼 License

Spotube is open source and licensed under the [BSD-4-Clause](/LICENSE) License.

If you are concerned, you can [read the reason of choosing this license](https://dev.to/krtirtho/choosing-open-source-license-wisely-1m3p).

<details>
  <summary>
    <h2><code>[Click to show]</code> 🙏 Services/Package/Plugin Credits</h2>
  </summary>

### Services
1. [Flutter](https://flutter.dev) - Flutter transforms the app development process. Build, test, and deploy beautiful mobile, web, desktop, and embedded apps from a single codebase
1. [Spotify API](https://developer.spotify.com/documentation/web-api) - The Spotify Web API is a RESTful API that provides access to Spotify data
1. [Piped](https://piped-docs.kavin.rocks/) - Piped is a privacy friendly alternative YouTube frontend, which is efficient and scalable by design.
1. [YouTube](https://youtube.com/) - YouTube is an American online video-sharing platform headquartered in San Bruno, California. Three former PayPal employees—Chad Hurley, Steve Chen, and Jawed Karim—created the service in February 2005
1. [JioSaavn](https://www.jiosaavn.com) - JioSaavn is an Indian online music streaming service and a digital distributor of Bollywood, English and other regional Indian music across the world. Since it was founded in 2007 as Saavn, the company has acquired rights to over 5 crore (50 million) music tracks in 15 languages
1. [Linux](https://www.linux.org) - Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. Linux is typically packaged in a Linux distribution
1. [AUR](https://aur.archlinux.org) - AUR stands for Arch User Repository. It is a community-driven repository for Arch-based Linux distributions users
1. [Flatpak](https://flatpak.org) - Flatpak is a utility for software deployment and package management for Linux
1. [SponsorBlock](https://sponsor.ajay.app) - SponsorBlock is an open-source crowdsourced browser extension and open API for skipping sponsor segments in YouTube videos.
1. [Inno Setup](https://jrsoftware.org/isinfo.php) - Inno Setup is a free installer for Windows programs by Jordan Russell and Martijn Laan
1. [F-Droid](https://f-droid.org) - F-Droid is an installable catalogue of FOSS (Free and Open Source Software) applications for the Android platform. The client makes it easy to browse, install, and keep track of updates on your device
1. [LastFM](https://last.fm) - Last.fm is a music streaming and discovery platform that helps users discover and share new music. It tracks users' music listening habits across many devices and platforms. 

### Dependencies
1. [args](https://pub.dev/packages/args) - Library for defining parsers for parsing raw command-line arguments into a set of options and values using GNU and POSIX style options.
1. [async](https://pub.dev/packages/async) - Utility functions and classes related to the 'dart:async' library.
1. [audio_service](https://pub.dev/packages/audio_service) - Flutter plugin to play audio in the background while the screen is off.
1. [audio_session](https://github.com/ryanheise/audio_session) - Sets the iOS audio session category and Android audio attributes for your app, and manages your app's audio focus, mixing and ducking behaviour.
1. [auto_size_text](https://github.com/leisim/auto_size_text) - Flutter widget that automatically resizes text to fit perfectly within its bounds.
1. [buttons_tabbar](https://afonsoraposo.com) - A Flutter package that implements a TabBar where each label is a toggle button.
1. [cached_network_image](https://github.com/Baseflow/flutter_cached_network_image) - Flutter library to load and cache network images. Can also be used with placeholder and error widgets.
1. [catcher_2](https://github.com/ThexXTURBOXx/catcher_2) - Plugin for error catching which provides multiple handlers for dealing with errors when they are not caught by the developer.   
1. [collection](https://pub.dev/packages/collection) - Collections and utilities functions and classes related to collections.
1. [cupertino_icons](https://pub.dev/packages/cupertino_icons) - Default icons asset for Cupertino widgets based on Apple styled icons
1. [curved_navigation_bar](https://github.com/rafalbednarczuk/curved_navigation_bar) - Stunning Animating Curved Shape Navigation Bar. Adjustable color, background color, animation curve, animation duration.
1. [dbus](https://github.com/canonical/dbus.dart) - A native Dart implementation of the D-Bus message bus client. This package allows Dart applications to directly access services on the Linux desktop.
1. [device_info_plus](https://plus.fluttercommunity.dev/) - Flutter plugin providing detailed information about the device (make, model, etc.), and Android or iOS version the app is running on.
1. [device_preview](https://github.com/aloisdeniel/flutter_device_preview) - Approximate how your Flutter app looks and performs on another device.
1. [dio](https://github.com/cfug/dio) - A powerful HTTP networking package,supports Interceptors,Aborting and canceling a request,Custom adapters, Transformers, etc.
1. [disable_battery_optimization](https://github.com/pvsvamsi/Disable-Battery-Optimizations) - Flutter plugin to check and disable battery optimizations. Also shows custom steps to disable the optimizations in devices like mi, xiaomi, samsung, oppo, huawei, oneplus etc
1. [duration](https://github.com/desktop-dart/duration) - Utilities to make working with 'Duration's easier. Formats duration in human readable form and also parses duration in human readable form to Dart's Duration.
1. [envied](https://github.com/petercinibulk/envied) - Explicitly reads environment variables into a dart file from a .env file for more security and faster start up times.
1. [file_selector](https://pub.dev/packages/file_selector) - Flutter plugin for opening and saving files, or selecting directories, using native file selection UI.
1. [fl_query](https://fl-query.krtirtho.dev) - Asynchronous data caching, refetching & invalidation library for Flutter
1. [fl_query_hooks](https://fl-query.krtirtho.dev) - Elite flutter_hooks compatible library for fl_query, the Asynchronous data caching, refetching & invalidation library for Flutter      
1. [fl_query_devtools](https://fl-query.krtirtho.dev) - Devtools support for Fl-Query
1. [fluentui_system_icons](https://github.com/microsoft/fluentui-system-icons/tree/main) - Fluent UI System Icons are a collection of familiar, friendly and modern icons from Microsoft.   
1. [flutter_cache_manager](https://github.com/Baseflow/flutter_cache_manager/tree/develop/flutter_cache_manager) - Generic cache manager for flutter. Saves web files on the storages of the device and saves the cache info using sqflite.
1. [flutter_displaymode](https://github.com/ajinasokan/flutter_displaymode) - A Flutter plugin to set display mode (resolution, refresh rate) on Android platform. Allows to enable high refresh rate on supported devices.
1. [flutter_feather_icons](https://github.com/muj-programmer/flutter_feather_icons) - Feather is a collection of simply beautiful open source icons. Each icon is designed on a 24x24 grid with an emphasis on simplicity, consistency and usability.
1. [flutter_hooks](https://github.com/rrousselGit/flutter_hooks) - A flutter implementation of React hooks. It adds a new kind of widget with enhanced code reuse.
1. [flutter_inappwebview](https://inappwebview.dev/) - A Flutter plugin that allows you to add an inline webview, to use an headless webview, and to open an in-app browser window.
1. [flutter_native_splash](https://pub.dev/packages/flutter_native_splash) - Customize Flutter's default white native splash screen with background color and splash image. Supports dark mode, full screen, and more.
1. [flutter_riverpod](https://riverpod.dev) - A simple way to access state from anywhere in your application while robust and testable.
1. [flutter_secure_storage](https://pub.dev/packages/flutter_secure_storage) - Flutter Secure Storage provides API to store data in secure storage. Keychain is used in iOS, KeyStore based solution is used in Android.
1. [flutter_svg](https://pub.dev/packages/flutter_svg) - An SVG rendering and widget library for Flutter, which allows painting and displaying Scalable Vector Graphics 1.1 files.
1. [form_validator](https://github.com/TheMisir/form-validator) - Simplest form validation library for flutter's form field widgets
1. [fuzzywuzzy](https://github.com/sphericalkat/dart-fuzzywuzzy) - An implementation of the popular fuzzywuzzy package in Dart, to suit all your fuzzy string matching/searching needs!     
1. [google_fonts](https://pub.dev/packages/google_fonts) - A Flutter package to use fonts from fonts.google.com. Supports HTTP fetching, caching, and asset bundling.
1. [go_router](https://pub.dev/packages/go_router) - A declarative router for Flutter based on Navigation 2 supporting deep linking, data-driven routes and more
1. [hive](https://github.com/hivedb/hive/tree/master/hive) - Lightweight and blazing fast key-value database written in pure Dart. Strongly encrypted using AES-256.
1. [hive_flutter](https://github.com/hivedb/hive/tree/master/hive_flutter) - Extension for Hive. Makes it easier to use Hive in Flutter apps.
1. [hooks_riverpod](https://riverpod.dev) - A simple way to access state from anywhere in your application while robust and testable.
1. [html](https://pub.dev/packages/html) - APIs for parsing and manipulating HTML content outside the browser.
1. [http](https://pub.dev/packages/http) - A composable, multi-platform, Future-based API for HTTP requests.
1. [image_picker](https://pub.dev/packages/image_picker) - Flutter plugin for selecting images from the Android and iOS image library, and taking new pictures with the camera.
1. [intl](https://pub.dev/packages/intl) - Contains code to deal with internationalized/localized messages, date and number formatting and parsing, bi-directional text, and other internationalization issues.
1. [introduction_screen](https://github.com/pyozer/introduction_screen) - Introduction/Onboarding package for flutter app with some customizations possibilities
1. [json_annotation](https://pub.dev/packages/json_annotation) - Classes and helper functions that support JSON code generation via the `json_serializable` package.
1. [logger](https://pub.dev/packages/logger) - Small, easy to use and extensible logger which prints beautiful logs.
1. [media_kit](https://github.com/media-kit/media-kit) - A cross-platform video player & audio player for Flutter & Dart. Performant, stable, feature-proof & modular.
1. [media_kit_libs_audio](https://github.com/media-kit/media-kit.git) - package:media_kit audio (only) playback native libraries for all platforms.
1. [metadata_god](https://github.com/KRTirtho/metadata_god) - Plugin for retrieving and writing audio tags/metadata from audio files
1. [mime](https://pub.dev/packages/mime) - Utilities for handling media (MIME) types, including determining a type from a file extension and file contents.
1. [package_info_plus](https://plus.fluttercommunity.dev/) - Flutter plugin for querying information about the application package, such as CFBundleVersion on iOS or versionCode on Android.
1. [palette_generator](https://pub.dev/packages/palette_generator) - Flutter package for generating palette colors from a source image.
1. [path](https://pub.dev/packages/path) - A string-based path manipulation library. All of the path operations you know and love, with solid support for Windows, POSIX (Linux and Mac OS X), and the web.
1. [path_provider](https://pub.dev/packages/path_provider) - Flutter plugin for getting commonly used locations on host platform file systems, such as the temp and app data directories.   
1. [permission_handler](https://pub.dev/packages/permission_handler) - Permission plugin for Flutter. This plugin provides a cross-platform (iOS, Android) API to request and check permissions.
1. [piped_client](https://github.com/KRTirtho/piped_client) - API Client for piped.video
1. [popover](https://github.com/minikin/popover) - A popover is a transient view that appears above other content onscreen when you tap a control or in an area.
1. [scroll_to_index](https://github.com/quire-io/scroll-to-index) - Scroll to a specific child of any scrollable widget in Flutter
1. [shared_preferences](https://pub.dev/packages/shared_preferences) - Flutter plugin for reading and writing simple key-value pairs. Wraps NSUserDefaults on iOS and SharedPreferences on Android.
1. [sidebarx](https://github.com/Frezyx/sidebarx) - flutter multiplatform navigation sidebar / side navigationbar / drawer widget
1. [skeleton_text](https://github.com/101Loop/Skeleton-Text) - A package that provides an easy way to add skeleton text loading animation in Flutter project. This project is a part of 101Loop community.
1. [smtc_windows](https://github.com/KRTirtho/smtc_windows) - Windows `SystemMediaTransportControls` implementation for Flutter giving access to Windows OS Media Control applet.
1. [spotify](https://github.com/rinukkusu/spotify-dart) - An incomplete dart library for interfacing with the Spotify Web API.
1. [stroke_text](https://github.com/MohamedAbd0/stroke_text) - A Simple Flutter plugin for applying stroke (border) style to a text widget
1. [system_theme](https://pub.dev/packages/system_theme) - A plugin to get the current system theme info. Supports Android, Web, Windows, Linux and macOS
1. [titlebar_buttons](https://github.com/gtk-flutter/titlebar_buttons) - A package which provides most of the titlebar buttons from windows, linux and macos.
1. [url_launcher](https://pub.dev/packages/url_launcher) - Flutter plugin for launching a URL. Supports web, phone, SMS, and email schemes.
1. [uuid](https://pub.dev/packages/uuid) - RFC4122 (v1, v4, v5, v6, v7, v8) UUID Generator and Parser for Dart
1. [version](https://github.com/dartninja/version) - Provides a simple class for parsing and comparing semantic versions as defined by http://semver.org/
1. [visibility_detector](https://pub.dev/packages/visibility_detector) - A widget that detects the visibility of its child and notifies a callback.
1. [window_manager](https://github.com/leanflutter/window_manager) - This plugin allows Flutter desktop apps to resizing and repositioning the window.
1. [youtube_explode_dart](https://github.com/Hexer10/youtube_explode_dart) - A port in dart of the youtube explode library. Supports several API functions without the need of Youtube API Key.
1. [simple_icons](https://teavelopment.com/) - The Simple Icon pack available as Flutter Icons. Provides over 1500 Free SVG icons for popular brands.
1. [audio_service_mpris](https://github.com/bdrazhzhov/audio-service-mpris) - audio_service platform interface supporting Media Player Remote Interfacing Specification.
1. [file_picker](https://github.com/miguelpruivo/plugins_flutter_file_picker) - A package that allows you to use a native file explorer to pick single or multiple absolute file paths, with extension filtering support.
1. [jiosaavn](https://github.com/KRTirtho/jiosaavn) - Unofficial API client for jiosaavn.com
1. [very_good_infinite_list](https://github.com/VeryGoodOpenSource/very_good_infinite_list) - A library for easily displaying paginated data, created by Very Good Ventures. Great for activity feeds, news feeds, and more.
1. [gap](https://github.com/letsar/gap) - Flutter widgets for easily adding gaps inside Flex widgets such as Columns and Rows or scrolling views.
1. [sliver_tools](https://github.com/Kavantix) - A set of useful sliver tools that are missing from the flutter framework
1. [html_unescape](https://github.com/filiph/html_unescape) - A small library for un-escaping HTML. Supports all Named Character References, Decimal Character References and Hexadecimal Character References.
1. [wikipedia_api](https://github.com/KRTirtho/wikipedia_api) - Wikipedia API for dart and flutter
1. [skeletonizer](https://github.com/Milad-Akarie/skeletonizer) - Converts already built widgets into skeleton loaders with no extra effort.
1. [app_links](https://github.com/llfbandit/app_links) - Android App Links, Deep Links, iOs Universal Links and Custom URL schemes handler for Flutter (desktop included).
1. [win32_registry](https://win32.pub) - A package that provides a friendly Dart API for accessing the Windows Registry.
1. [flutter_sharing_intent](https://github.com/bhagat-techind/flutter_sharing_intent.git) - A flutter plugin that allow flutter apps to receive photos, videos, text, urls or any other file types from another app.
1. [build_runner](https://pub.dev/packages/build_runner) - A build system for Dart code generation and modular compilation.
1. [envied_generator](https://github.com/petercinibulk/envied) - Generator for the Envied package. See https://pub.dev/packages/envied.
1. [flutter_distributor](https://distributor.leanflutter.org) - A complete tool for packaging and publishing your Flutter apps.
1. [flutter_gen_runner](https://github.com/FlutterGen/flutter_gen) - The Flutter code generator for your assets, fonts, colors, … — Get rid of all String-based APIs.
1. [flutter_launcher_icons](https://github.com/fluttercommunity/flutter_launcher_icons) - A package which simplifies the task of updating your Flutter app's launcher icon.
1. [flutter_lints](https://pub.dev/packages/flutter_lints) - Recommended lints for Flutter apps, packages, and plugins to encourage good coding practices.
1. [hive_generator](https://github.com/hivedb/hive/tree/master/hive_generator) - Extension for Hive. Automatically generates TypeAdapters to store any class.
1. [json_serializable](https://pub.dev/packages/json_serializable) - Automatically generate code for converting to and from JSON by annotating Dart classes.
1. [pub_api_client](https://github.com/leoafarias/pub_api_client) - An API Client for Pub to interact with public package information.
1. [pubspec_parse](https://pub.dev/packages/pubspec_parse) - Simple package for parsing pubspec.yaml files with a type-safe API and rich error reporting.
1. [flutter_desktop_tools](https://github.com/KRTirtho/flutter_desktop_tools) - Essential collection of tools for flutter desktop app development
1. [scrobblenaut](https://github.com/Nebulino/Scrobblenaut) - A deadly simple LastFM API Wrapper for Dart. So deadly simple that it's gonna hit the mark.
1. [window_size](https://github.com/google/flutter-desktop-embedding.git) - Allows resizing and repositioning the window containing Flutter.
1. [draggable_scrollbar](https://github.com/fluttercommunity/flutter-draggable-scrollbar) - A scrollbar that can be dragged for quickly navigation through a vertical list. Additional option is showing label next to scrollthumb with information about current item.
1. [dart_discord_rpc](https://github.com/alexmercerind/dart_discord_rpc) - Discord Rich Presence for Flutter & Dart apps & games.
</details>

<div align="center"><h4>© Copyright Spotube 2024</h4></div>

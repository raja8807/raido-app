/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[9].use[4]!./src/components/screens/home/sections/download/download.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[9].use[4]!./src/components/screens/home/sections/download/download.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".download_downloadSection__OHLXE {\\n  background-color: #f3cc0d;\\n  min-height: 100vh;\\n  padding-bottom: 50px;\\n}\\n.download_downloadSection__OHLXE .download_left__qMPvp {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 20px;\\n  padding-bottom: 50px;\\n}\\n.download_downloadSection__OHLXE .download_left__qMPvp h3 {\\n  font-size: 20px;\\n}\\n@media (max-width: 767px) {\\n  .download_downloadSection__OHLXE .download_left__qMPvp {\\n    text-align: center;\\n  }\\n}\\n@media (min-width: 768px) {\\n  .download_downloadSection__OHLXE {\\n    padding-bottom: 0px;\\n  }\\n  .download_downloadSection__OHLXE .download_imgs__U2Y5_ img {\\n    margin-top: -100px;\\n  }\\n}\\n.download_downloadSection__OHLXE .download_imgs__U2Y5_ {\\n  position: relative;\\n  height: 550px;\\n}\\n.download_downloadSection__OHLXE .download_imgs__U2Y5_ img {\\n  position: absolute;\\n  height: 550px;\\n}\\n.download_downloadSection__OHLXE .download_imgs__U2Y5_ img.download_img__CZyey {\\n  left: 100px;\\n}\\n.download_downloadSection__OHLXE .download_imgs__U2Y5_ img.download_blob__cU7EP {\\n  left: -20px;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/components/screens/home/sections/download/download.module.scss\",\"webpack://src/styles/scss/_variables.scss\",\"webpack://../../NOD%20Projects/raido-app/src/components/screens/home/sections/download/download.module.scss\",\"webpack://src/styles/scss/_media_queries.scss\"],\"names\":[],\"mappings\":\"AACA;EACE,yBCDO;EDEP,iBAAA;EACA,oBAAA;AEAF;AFEE;EACI,aAAA;EACA,sBAAA;EACA,SAAA;EACA,oBAAA;AEAN;AFEM;EACE,eAAA;AEAR;ACoCI;EH3CF;IAWI,kBAAA;EEAJ;AACF;ACQI;EHzBJ;IAsBI,mBAAA;EEDF;EFGI;IACE,kBAAA;EEDN;AACF;AFKE;EACE,kBAAA;EACA,aAAA;AEHJ;AFKI;EACE,kBAAA;EACA,aAAA;AEHN;AFKM;EACE,WAAA;AEHR;AFMM;EACE,WAAA;AEJR\",\"sourcesContent\":[\"@import \\\"_variables.scss\\\";@import \\\"_mixins.scss\\\";@import \\\"_media_queries.scss\\\";\\n.downloadSection {\\r\\n  background-color: $color_2;\\r\\n  min-height: 100vh;\\r\\n  padding-bottom: 50px;\\r\\n  \\r\\n  .left {\\r\\n      display: flex;\\r\\n      flex-direction: column;\\r\\n      gap: 20px;\\r\\n      padding-bottom: 50px;\\r\\n\\r\\n      h3{\\r\\n        font-size: 20px;\\r\\n      }\\r\\n\\r\\n    @include respond-below(md) {\\r\\n      text-align: center;\\r\\n\\r\\n    }\\r\\n  }\\r\\n\\r\\n  @include respond-above(md) {\\r\\n    padding-bottom: 0px;\\r\\n    .imgs {\\r\\n      img {\\r\\n        margin-top: -100px;\\r\\n      }\\r\\n    }\\r\\n  }\\r\\n\\r\\n  .imgs {\\r\\n    position: relative;\\r\\n    height: 550px;\\r\\n\\r\\n    img {\\r\\n      position: absolute;\\r\\n      height: 550px;\\r\\n\\r\\n      &.img {\\r\\n        left: 100px;\\r\\n      }\\r\\n\\r\\n      &.blob{\\r\\n        left: -20px;\\r\\n      }\\r\\n    }\\r\\n  }\\r\\n}\\r\\n\",\"$color_1:#0076cd;\\r\\n$color_2:#f3cc0d;\",\".downloadSection {\\n  background-color: #f3cc0d;\\n  min-height: 100vh;\\n  padding-bottom: 50px;\\n}\\n.downloadSection .left {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 20px;\\n  padding-bottom: 50px;\\n}\\n.downloadSection .left h3 {\\n  font-size: 20px;\\n}\\n@media (max-width: 767px) {\\n  .downloadSection .left {\\n    text-align: center;\\n  }\\n}\\n@media (min-width: 768px) {\\n  .downloadSection {\\n    padding-bottom: 0px;\\n  }\\n  .downloadSection .imgs img {\\n    margin-top: -100px;\\n  }\\n}\\n.downloadSection .imgs {\\n  position: relative;\\n  height: 550px;\\n}\\n.downloadSection .imgs img {\\n  position: absolute;\\n  height: 550px;\\n}\\n.downloadSection .imgs img.img {\\n  left: 100px;\\n}\\n.downloadSection .imgs img.blob {\\n  left: -20px;\\n}\",\"//\\r\\n//  MEDIA QUERIES\\r\\n//––––––––––––––––––––––––––––––––––––––––––––––––––\\r\\n\\r\\n// A map of breakpoints.\\r\\n$breakpoints: (\\r\\n  xs: 0,\\r\\n  sm: 576px,\\r\\n  md: 768px,\\r\\n  lg: 992px,\\r\\n  xl: 1200px,\\r\\n  xxl: 1400px,\\r\\n);\\r\\n\\r\\n//\\r\\n//  RESPOND ABOVE\\r\\n//––––––––––––––––––––––––––––––––––––––––––––––––––\\r\\n\\r\\n// @include respond-above(sm) {}\\r\\n@mixin respond-above($breakpoint) {\\r\\n  // If the breakpoint exists in the map.\\r\\n  @if map-has-key($breakpoints, $breakpoint) {\\r\\n    // Get the breakpoint value.\\r\\n    $breakpoint-value: map-get($breakpoints, $breakpoint);\\r\\n\\r\\n    // Write the media query.\\r\\n    @media (min-width: $breakpoint-value) {\\r\\n      @content;\\r\\n    }\\r\\n\\r\\n    // If the breakpoint doesn't exist in the map.\\r\\n  } @else {\\r\\n    // Log a warning.\\r\\n    @warn 'Invalid breakpoint: #{$breakpoint}.';\\r\\n  }\\r\\n}\\r\\n\\r\\n//\\r\\n//  RESPOND BELOW\\r\\n//––––––––––––––––––––––––––––––––––––––––––––––––––\\r\\n\\r\\n// @include respond-below(sm) {}\\r\\n@mixin respond-below($breakpoint) {\\r\\n  // If the breakpoint exists in the map.\\r\\n  @if map-has-key($breakpoints, $breakpoint) {\\r\\n    // Get the breakpoint value.\\r\\n    $breakpoint-value: map-get($breakpoints, $breakpoint);\\r\\n\\r\\n    // Write the media query.\\r\\n    @media (max-width: ($breakpoint-value - 1)) {\\r\\n      @content;\\r\\n    }\\r\\n\\r\\n    // If the breakpoint doesn't exist in the map.\\r\\n  } @else {\\r\\n    // Log a warning.\\r\\n    @warn 'Invalid breakpoint: #{$breakpoint}.';\\r\\n  }\\r\\n}\\r\\n\\r\\n//\\r\\n//  RESPOND BETWEEN\\r\\n//––––––––––––––––––––––––––––––––––––––––––––––––––\\r\\n\\r\\n// @include respond-between(sm, md) {}\\r\\n@mixin respond-between($lower, $upper) {\\r\\n  // If both the lower and upper breakpoints exist in the map.\\r\\n  @if map-has-key($breakpoints, $lower) and map-has-key($breakpoints, $upper) {\\r\\n    // Get the lower and upper breakpoints.\\r\\n    $lower-breakpoint: map-get($breakpoints, $lower);\\r\\n    $upper-breakpoint: map-get($breakpoints, $upper);\\r\\n\\r\\n    // Write the media query.\\r\\n    @media (min-width: $lower-breakpoint) and (max-width: ($upper-breakpoint - 1)) {\\r\\n      @content;\\r\\n    }\\r\\n\\r\\n    // If one or both of the breakpoints don't exist.\\r\\n  } @else {\\r\\n    // If lower breakpoint is invalid.\\r\\n    @if (map-has-key($breakpoints, $lower) == false) {\\r\\n      // Log a warning.\\r\\n      @warn 'Your lower breakpoint was invalid: #{$lower}.';\\r\\n    }\\r\\n\\r\\n    // If upper breakpoint is invalid.\\r\\n    @if (map-has-key($breakpoints, $upper) == false) {\\r\\n      // Log a warning.\\r\\n      @warn 'Your upper breakpoint was invalid: #{$upper}.';\\r\\n    }\\r\\n  }\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"downloadSection\": \"download_downloadSection__OHLXE\",\n\t\"left\": \"download_left__qMPvp\",\n\t\"imgs\": \"download_imgs__U2Y5_\",\n\t\"img\": \"download_img__CZyey\",\n\t\"blob\": \"download_blob__cU7EP\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzldLnVzZVs0XSEuL3NyYy9jb21wb25lbnRzL3NjcmVlbnMvaG9tZS9zZWN0aW9ucy9kb3dubG9hZC9kb3dubG9hZC5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLGtMQUE4RjtBQUN4STtBQUNBO0FBQ0EsNEVBQTRFLDhCQUE4QixzQkFBc0IseUJBQXlCLEdBQUcsMERBQTBELGtCQUFrQiwyQkFBMkIsY0FBYyx5QkFBeUIsR0FBRyw2REFBNkQsb0JBQW9CLEdBQUcsNkJBQTZCLDREQUE0RCx5QkFBeUIsS0FBSyxHQUFHLDZCQUE2QixzQ0FBc0MsMEJBQTBCLEtBQUssZ0VBQWdFLHlCQUF5QixLQUFLLEdBQUcsMERBQTBELHVCQUF1QixrQkFBa0IsR0FBRyw4REFBOEQsdUJBQXVCLGtCQUFrQixHQUFHLGtGQUFrRixnQkFBZ0IsR0FBRyxtRkFBbUYsZ0JBQWdCLEdBQUcsT0FBTyw2VUFBNlUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLE1BQU0sV0FBVyxLQUFLLEtBQUssS0FBSyxNQUFNLFlBQVksS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUscURBQXFELHlCQUF5QixnQ0FBZ0Msb0JBQW9CLGlDQUFpQyx3QkFBd0IsMkJBQTJCLG1CQUFtQix3QkFBd0IsaUNBQWlDLG9CQUFvQiwrQkFBK0IsaUJBQWlCLDRCQUE0QixXQUFXLHdDQUF3Qyw2QkFBNkIsYUFBYSxPQUFPLHNDQUFzQyw0QkFBNEIsZUFBZSxlQUFlLCtCQUErQixXQUFXLFNBQVMsT0FBTyxpQkFBaUIsMkJBQTJCLHNCQUFzQixpQkFBaUIsNkJBQTZCLHdCQUF3QixxQkFBcUIsd0JBQXdCLFdBQVcscUJBQXFCLHdCQUF3QixXQUFXLFNBQVMsT0FBTyxLQUFLLHdCQUF3QixxQkFBcUIscUJBQXFCLDhCQUE4QixzQkFBc0IseUJBQXlCLEdBQUcsMEJBQTBCLGtCQUFrQiwyQkFBMkIsY0FBYyx5QkFBeUIsR0FBRyw2QkFBNkIsb0JBQW9CLEdBQUcsNkJBQTZCLDRCQUE0Qix5QkFBeUIsS0FBSyxHQUFHLDZCQUE2QixzQkFBc0IsMEJBQTBCLEtBQUssZ0NBQWdDLHlCQUF5QixLQUFLLEdBQUcsMEJBQTBCLHVCQUF1QixrQkFBa0IsR0FBRyw4QkFBOEIsdUJBQXVCLGtCQUFrQixHQUFHLGtDQUFrQyxnQkFBZ0IsR0FBRyxtQ0FBbUMsZ0JBQWdCLEdBQUcsME9BQTBPLCtIQUErSCx1Q0FBdUMsK0ZBQStGLGtHQUFrRyxvRkFBb0YsbUJBQW1CLFNBQVMsa0VBQWtFLE9BQU8sOERBQThELFlBQVksR0FBRyxPQUFPLEtBQUssK0hBQStILHVDQUF1QywrRkFBK0Ysa0dBQWtHLDBGQUEwRixtQkFBbUIsU0FBUyxrRUFBa0UsT0FBTyw4REFBOEQsWUFBWSxHQUFHLE9BQU8sS0FBSyx1SUFBdUksNENBQTRDLHFKQUFxSix3R0FBd0cseURBQXlELDZIQUE2SCxtQkFBbUIsU0FBUyxxRUFBcUUsT0FBTyxvR0FBb0csaUZBQWlGLE9BQU8sR0FBRyxTQUFTLHdHQUF3RyxpRkFBaUYsT0FBTyxHQUFHLFNBQVMsT0FBTyxLQUFLLHVCQUF1QjtBQUN0K0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NjcmVlbnMvaG9tZS9zZWN0aW9ucy9kb3dubG9hZC9kb3dubG9hZC5tb2R1bGUuc2Nzcz9jMmMxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZG93bmxvYWRfZG93bmxvYWRTZWN0aW9uX19PSExYRSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNjYzBkO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXG59XFxuLmRvd25sb2FkX2Rvd25sb2FkU2VjdGlvbl9fT0hMWEUgLmRvd25sb2FkX2xlZnRfX3FNUHZwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxufVxcbi5kb3dubG9hZF9kb3dubG9hZFNlY3Rpb25fX09ITFhFIC5kb3dubG9hZF9sZWZ0X19xTVB2cCBoMyB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmRvd25sb2FkX2Rvd25sb2FkU2VjdGlvbl9fT0hMWEUgLmRvd25sb2FkX2xlZnRfX3FNUHZwIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5kb3dubG9hZF9kb3dubG9hZFNlY3Rpb25fX09ITFhFIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcXG4gIH1cXG4gIC5kb3dubG9hZF9kb3dubG9hZFNlY3Rpb25fX09ITFhFIC5kb3dubG9hZF9pbWdzX19VMlk1XyBpbWcge1xcbiAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XFxuICB9XFxufVxcbi5kb3dubG9hZF9kb3dubG9hZFNlY3Rpb25fX09ITFhFIC5kb3dubG9hZF9pbWdzX19VMlk1XyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDU1MHB4O1xcbn1cXG4uZG93bmxvYWRfZG93bmxvYWRTZWN0aW9uX19PSExYRSAuZG93bmxvYWRfaW1nc19fVTJZNV8gaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogNTUwcHg7XFxufVxcbi5kb3dubG9hZF9kb3dubG9hZFNlY3Rpb25fX09ITFhFIC5kb3dubG9hZF9pbWdzX19VMlk1XyBpbWcuZG93bmxvYWRfaW1nX19DWnlleSB7XFxuICBsZWZ0OiAxMDBweDtcXG59XFxuLmRvd25sb2FkX2Rvd25sb2FkU2VjdGlvbl9fT0hMWEUgLmRvd25sb2FkX2ltZ3NfX1UyWTVfIGltZy5kb3dubG9hZF9ibG9iX19jVTdFUCB7XFxuICBsZWZ0OiAtMjBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9jb21wb25lbnRzL3NjcmVlbnMvaG9tZS9zZWN0aW9ucy9kb3dubG9hZC9kb3dubG9hZC5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zdHlsZXMvc2Nzcy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi9OT0QlMjBQcm9qZWN0cy9yYWlkby1hcHAvc3JjL2NvbXBvbmVudHMvc2NyZWVucy9ob21lL3NlY3Rpb25zL2Rvd25sb2FkL2Rvd25sb2FkLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9zY3NzL19tZWRpYV9xdWVyaWVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSx5QkNETztFREVQLGlCQUFBO0VBQ0Esb0JBQUE7QUVBRjtBRkVFO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0FFQU47QUZFTTtFQUNFLGVBQUE7QUVBUjtBQ29DSTtFSDNDRjtJQVdJLGtCQUFBO0VFQUo7QUFDRjtBQ1FJO0VIekJKO0lBc0JJLG1CQUFBO0VFREY7RUZHSTtJQUNFLGtCQUFBO0VFRE47QUFDRjtBRktFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FFSEo7QUZLSTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBRUhOO0FGS007RUFDRSxXQUFBO0FFSFI7QUZNTTtFQUNFLFdBQUE7QUVKUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCJfdmFyaWFibGVzLnNjc3NcXFwiO0BpbXBvcnQgXFxcIl9taXhpbnMuc2Nzc1xcXCI7QGltcG9ydCBcXFwiX21lZGlhX3F1ZXJpZXMuc2Nzc1xcXCI7XFxuLmRvd25sb2FkU2VjdGlvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfMjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxyXFxuICBcXHJcXG4gIC5sZWZ0IHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgZ2FwOiAyMHB4O1xcclxcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcclxcblxcclxcbiAgICAgIGgze1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgQGluY2x1ZGUgcmVzcG9uZC1iZWxvdyhtZCkge1xcclxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgQGluY2x1ZGUgcmVzcG9uZC1hYm92ZShtZCkge1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xcclxcbiAgICAuaW1ncyB7XFxyXFxuICAgICAgaW1nIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IC0xMDBweDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pbWdzIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBoZWlnaHQ6IDU1MHB4O1xcclxcblxcclxcbiAgICBpbWcge1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICBoZWlnaHQ6IDU1MHB4O1xcclxcblxcclxcbiAgICAgICYuaW1nIHtcXHJcXG4gICAgICAgIGxlZnQ6IDEwMHB4O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAmLmJsb2J7XFxyXFxuICAgICAgICBsZWZ0OiAtMjBweDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCIkY29sb3JfMTojMDA3NmNkO1xcclxcbiRjb2xvcl8yOiNmM2NjMGQ7XCIsXCIuZG93bmxvYWRTZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2NjMGQ7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcbn1cXG4uZG93bmxvYWRTZWN0aW9uIC5sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxufVxcbi5kb3dubG9hZFNlY3Rpb24gLmxlZnQgaDMge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5kb3dubG9hZFNlY3Rpb24gLmxlZnQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmRvd25sb2FkU2VjdGlvbiB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XFxuICB9XFxuICAuZG93bmxvYWRTZWN0aW9uIC5pbWdzIGltZyB7XFxuICAgIG1hcmdpbi10b3A6IC0xMDBweDtcXG4gIH1cXG59XFxuLmRvd25sb2FkU2VjdGlvbiAuaW1ncyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDU1MHB4O1xcbn1cXG4uZG93bmxvYWRTZWN0aW9uIC5pbWdzIGltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDU1MHB4O1xcbn1cXG4uZG93bmxvYWRTZWN0aW9uIC5pbWdzIGltZy5pbWcge1xcbiAgbGVmdDogMTAwcHg7XFxufVxcbi5kb3dubG9hZFNlY3Rpb24gLmltZ3MgaW1nLmJsb2Ige1xcbiAgbGVmdDogLTIwcHg7XFxufVwiLFwiLy9cXHJcXG4vLyAgTUVESUEgUVVFUklFU1xcclxcbi8v4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTXFxyXFxuXFxyXFxuLy8gQSBtYXAgb2YgYnJlYWtwb2ludHMuXFxyXFxuJGJyZWFrcG9pbnRzOiAoXFxyXFxuICB4czogMCxcXHJcXG4gIHNtOiA1NzZweCxcXHJcXG4gIG1kOiA3NjhweCxcXHJcXG4gIGxnOiA5OTJweCxcXHJcXG4gIHhsOiAxMjAwcHgsXFxyXFxuICB4eGw6IDE0MDBweCxcXHJcXG4pO1xcclxcblxcclxcbi8vXFxyXFxuLy8gIFJFU1BPTkQgQUJPVkVcXHJcXG4vL+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk1xcclxcblxcclxcbi8vIEBpbmNsdWRlIHJlc3BvbmQtYWJvdmUoc20pIHt9XFxyXFxuQG1peGluIHJlc3BvbmQtYWJvdmUoJGJyZWFrcG9pbnQpIHtcXHJcXG4gIC8vIElmIHRoZSBicmVha3BvaW50IGV4aXN0cyBpbiB0aGUgbWFwLlxcclxcbiAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpIHtcXHJcXG4gICAgLy8gR2V0IHRoZSBicmVha3BvaW50IHZhbHVlLlxcclxcbiAgICAkYnJlYWtwb2ludC12YWx1ZTogbWFwLWdldCgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KTtcXHJcXG5cXHJcXG4gICAgLy8gV3JpdGUgdGhlIG1lZGlhIHF1ZXJ5LlxcclxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtdmFsdWUpIHtcXHJcXG4gICAgICBAY29udGVudDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvLyBJZiB0aGUgYnJlYWtwb2ludCBkb2Vzbid0IGV4aXN0IGluIHRoZSBtYXAuXFxyXFxuICB9IEBlbHNlIHtcXHJcXG4gICAgLy8gTG9nIGEgd2FybmluZy5cXHJcXG4gICAgQHdhcm4gJ0ludmFsaWQgYnJlYWtwb2ludDogI3skYnJlYWtwb2ludH0uJztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLy9cXHJcXG4vLyAgUkVTUE9ORCBCRUxPV1xcclxcbi8v4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTXFxyXFxuXFxyXFxuLy8gQGluY2x1ZGUgcmVzcG9uZC1iZWxvdyhzbSkge31cXHJcXG5AbWl4aW4gcmVzcG9uZC1iZWxvdygkYnJlYWtwb2ludCkge1xcclxcbiAgLy8gSWYgdGhlIGJyZWFrcG9pbnQgZXhpc3RzIGluIHRoZSBtYXAuXFxyXFxuICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkge1xcclxcbiAgICAvLyBHZXQgdGhlIGJyZWFrcG9pbnQgdmFsdWUuXFxyXFxuICAgICRicmVha3BvaW50LXZhbHVlOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpO1xcclxcblxcclxcbiAgICAvLyBXcml0ZSB0aGUgbWVkaWEgcXVlcnkuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAoJGJyZWFrcG9pbnQtdmFsdWUgLSAxKSkge1xcclxcbiAgICAgIEBjb250ZW50O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8vIElmIHRoZSBicmVha3BvaW50IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIG1hcC5cXHJcXG4gIH0gQGVsc2Uge1xcclxcbiAgICAvLyBMb2cgYSB3YXJuaW5nLlxcclxcbiAgICBAd2FybiAnSW52YWxpZCBicmVha3BvaW50OiAjeyRicmVha3BvaW50fS4nO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vL1xcclxcbi8vICBSRVNQT05EIEJFVFdFRU5cXHJcXG4vL+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk1xcclxcblxcclxcbi8vIEBpbmNsdWRlIHJlc3BvbmQtYmV0d2VlbihzbSwgbWQpIHt9XFxyXFxuQG1peGluIHJlc3BvbmQtYmV0d2VlbigkbG93ZXIsICR1cHBlcikge1xcclxcbiAgLy8gSWYgYm90aCB0aGUgbG93ZXIgYW5kIHVwcGVyIGJyZWFrcG9pbnRzIGV4aXN0IGluIHRoZSBtYXAuXFxyXFxuICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkbG93ZXIpIGFuZCBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR1cHBlcikge1xcclxcbiAgICAvLyBHZXQgdGhlIGxvd2VyIGFuZCB1cHBlciBicmVha3BvaW50cy5cXHJcXG4gICAgJGxvd2VyLWJyZWFrcG9pbnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbG93ZXIpO1xcclxcbiAgICAkdXBwZXItYnJlYWtwb2ludDogbWFwLWdldCgkYnJlYWtwb2ludHMsICR1cHBlcik7XFxyXFxuXFxyXFxuICAgIC8vIFdyaXRlIHRoZSBtZWRpYSBxdWVyeS5cXHJcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRsb3dlci1icmVha3BvaW50KSBhbmQgKG1heC13aWR0aDogKCR1cHBlci1icmVha3BvaW50IC0gMSkpIHtcXHJcXG4gICAgICBAY29udGVudDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvLyBJZiBvbmUgb3IgYm90aCBvZiB0aGUgYnJlYWtwb2ludHMgZG9uJ3QgZXhpc3QuXFxyXFxuICB9IEBlbHNlIHtcXHJcXG4gICAgLy8gSWYgbG93ZXIgYnJlYWtwb2ludCBpcyBpbnZhbGlkLlxcclxcbiAgICBAaWYgKG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGxvd2VyKSA9PSBmYWxzZSkge1xcclxcbiAgICAgIC8vIExvZyBhIHdhcm5pbmcuXFxyXFxuICAgICAgQHdhcm4gJ1lvdXIgbG93ZXIgYnJlYWtwb2ludCB3YXMgaW52YWxpZDogI3skbG93ZXJ9Lic7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLy8gSWYgdXBwZXIgYnJlYWtwb2ludCBpcyBpbnZhbGlkLlxcclxcbiAgICBAaWYgKG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHVwcGVyKSA9PSBmYWxzZSkge1xcclxcbiAgICAgIC8vIExvZyBhIHdhcm5pbmcuXFxyXFxuICAgICAgQHdhcm4gJ1lvdXIgdXBwZXIgYnJlYWtwb2ludCB3YXMgaW52YWxpZDogI3skdXBwZXJ9Lic7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiZG93bmxvYWRTZWN0aW9uXCI6IFwiZG93bmxvYWRfZG93bmxvYWRTZWN0aW9uX19PSExYRVwiLFxuXHRcImxlZnRcIjogXCJkb3dubG9hZF9sZWZ0X19xTVB2cFwiLFxuXHRcImltZ3NcIjogXCJkb3dubG9hZF9pbWdzX19VMlk1X1wiLFxuXHRcImltZ1wiOiBcImRvd25sb2FkX2ltZ19fQ1p5ZXlcIixcblx0XCJibG9iXCI6IFwiZG93bmxvYWRfYmxvYl9fY1U3RVBcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[9].use[4]!./src/components/screens/home/sections/download/download.module.scss\n"));

/***/ })

});
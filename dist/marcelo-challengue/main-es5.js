function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_text_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/text.service */
    "./src/app/services/text.service.ts");
    /* harmony import */


    var _services_annotation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/annotation.service */
    "./src/app/services/annotation.service.ts");
    /* harmony import */


    var _entities_container_entities_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./entities-container/entities-container.component */
    "./src/app/entities-container/entities-container.component.ts");
    /* harmony import */


    var _texts_container_texts_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./texts-container/texts-container.component */
    "./src/app/texts-container/texts-container.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(_textService, _annotationService) {
        _classCallCheck(this, AppComponent);

        this._textService = _textService;
        this._annotationService = _annotationService;
        this.title = 'MarceloChallengue';
        this.textsLength = 0;
        this.textSelection = null;
        this.currentTextIndex = 0;
        this.postingAnnotation = false;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.textsLength = this._textService.getTexts().length;
        }
        /**
         * Sends a JSON Object wich contains the data of the text selected to the Annotation Service.
         */

      }, {
        key: "postAnnotation",
        value: function postAnnotation() {
          var _this = this;

          if (this.textSelection !== null) {
            this.postingAnnotation = true;

            this._annotationService.postAnnotation(JSON.parse(JSON.stringify(this.textSelection)));

            this.textSelection = null;
            setTimeout(function () {
              return _this.postingAnnotation = false;
            }, 500);
          }
        }
        /**
         * Moves forward to the next text included in the array of the Text Service.
         */

      }, {
        key: "nextTextIndex",
        value: function nextTextIndex() {
          if (this.currentTextIndex < this.textsLength - 1) {
            this.currentTextIndex += 1;
          }
        }
        /**
         * Moves back to the next text included in the array of the Text Service.
         */

      }, {
        key: "previousTextIndex",
        value: function previousTextIndex() {
          if (this.currentTextIndex > 0) {
            this.currentTextIndex -= 1;
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_text_service__WEBPACK_IMPORTED_MODULE_1__["TextService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_annotation_service__WEBPACK_IMPORTED_MODULE_2__["AnnotationService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 13,
      vars: 6,
      consts: [[1, "main-container"], [3, "textIndex", "sendSelectedText"], ["mat-raised-button", "", "color", "success", 3, "disabled", "click", "mouseup"], ["mat-raised-button", "", "color", "navigator", 3, "disabled", "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-entities-container");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-texts-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sendSelectedText", function AppComponent_Template_app_texts_container_sendSelectedText_2_listener($event) {
            return ctx.textSelection = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_4_listener() {
            return ctx.postAnnotation();
          })("mouseup", function AppComponent_Template_button_mouseup_4_listener() {
            return ctx.nextTextIndex();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "done");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_7_listener() {
            return ctx.nextTextIndex();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_10_listener() {
            return ctx.previousTextIndex();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "keyboard_return");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.postingAnnotation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("textIndex", ctx.currentTextIndex);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.textSelection === null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.currentTextIndex === ctx.textsLength - 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.currentTextIndex === 0);
        }
      },
      directives: [_entities_container_entities_container_component__WEBPACK_IMPORTED_MODULE_3__["EntitiesContainerComponent"], _texts_container_texts_container_component__WEBPACK_IMPORTED_MODULE_4__["TextsContainerComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]],
      styles: [".main-container[_ngcontent-%COMP%] {\n  border: 2px solid transparent;\n}\n.main-container.active[_ngcontent-%COMP%] {\n  border: 2px solid #4ce470;\n  transition: border 500ms ease-out;\n}\nfooter[_ngcontent-%COMP%] {\n  position: absolute;\n  text-align: center;\n  bottom: 10%;\n  width: 100%;\n}\nfooter[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\n  color: #ffffff;\n  border-radius: 0px;\n  height: 4em;\n  width: 4em;\n  margin: 0 2px;\n}\nfooter[_ngcontent-%COMP%]   .mat-button-base.mat-success[_ngcontent-%COMP%] {\n  background-color: #16be3e;\n}\nfooter[_ngcontent-%COMP%]   .mat-button-base.mat-success[_ngcontent-%COMP%]:hover {\n  background-color: #01d12b;\n}\nfooter[_ngcontent-%COMP%]   .mat-button-base.mat-success[_ngcontent-%COMP%]:disabled {\n  background: #77a777;\n}\nfooter[_ngcontent-%COMP%]   .mat-button-base.mat-navigator[_ngcontent-%COMP%] {\n  background-color: #6e6d6d;\n}\nfooter[_ngcontent-%COMP%]   .mat-button-base.mat-navigator[_ngcontent-%COMP%]:hover {\n  background-color: #5f5f5f;\n}\nfooter[_ngcontent-%COMP%]   .mat-button-base.mat-navigator[_ngcontent-%COMP%]:disabled {\n  background: #b4b4b4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJjZWxvYWd1aWxlcmEvU2l0ZXMvbWFyY2Vsby1jaGFsbGVuZ2Uvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0FDQ0o7QURBSTtFQUNJLHlCQUFBO0VBSUEsaUNBQUE7QUNFUjtBREVBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDQ0o7QURBSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQ0VSO0FERFE7RUFDSSx5QkFBQTtBQ0daO0FERlk7RUFDSSx5QkFBQTtBQ0loQjtBREZZO0VBQ0ksbUJBQUE7QUNJaEI7QUREUTtFQUNJLHlCQUFBO0FDR1o7QURGWTtFQUNJLHlCQUFBO0FDSWhCO0FERlk7RUFDSSxtQkFBQTtBQ0loQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lcntcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAmLmFjdGl2ZXtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzRjZTQ3MDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uIDogYm9yZGVyIDUwMG1zIGVhc2Utb3V0O1xuICAgICAgICAtbW96LXRyYW5zaXRpb24gOiBib3JkZXIgNTAwbXMgZWFzZS1vdXQ7XG4gICAgICAgIC1vLXRyYW5zaXRpb24gOiBib3JkZXIgNTAwbXMgZWFzZS1vdXQ7XG4gICAgICAgIHRyYW5zaXRpb24gOiBib3JkZXIgNTAwbXMgZWFzZS1vdXQ7XG4gICAgfVxufVxuXG5mb290ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm90dG9tOiAxMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLm1hdC1idXR0b24tYmFzZSB7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgIGhlaWdodDogNGVtO1xuICAgICAgICB3aWR0aDogNGVtO1xuICAgICAgICBtYXJnaW46IDAgMnB4O1xuICAgICAgICAmLm1hdC1zdWNjZXNze1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE2YmUzZTtcbiAgICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAxZDEyYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3N2E3Nzc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5tYXQtbmF2aWdhdG9ye1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzZlNmQ2ZDtcbiAgICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVmNWY1ZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiNGI0YjQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLm1haW4tY29udGFpbmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4ubWFpbi1jb250YWluZXIuYWN0aXZlIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzRjZTQ3MDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXIgNTAwbXMgZWFzZS1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYm9yZGVyIDUwMG1zIGVhc2Utb3V0O1xuICAtby10cmFuc2l0aW9uOiBib3JkZXIgNTAwbXMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IGJvcmRlciA1MDBtcyBlYXNlLW91dDtcbn1cblxuZm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvdHRvbTogMTAlO1xuICB3aWR0aDogMTAwJTtcbn1cbmZvb3RlciAubWF0LWJ1dHRvbi1iYXNlIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgaGVpZ2h0OiA0ZW07XG4gIHdpZHRoOiA0ZW07XG4gIG1hcmdpbjogMCAycHg7XG59XG5mb290ZXIgLm1hdC1idXR0b24tYmFzZS5tYXQtc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNmJlM2U7XG59XG5mb290ZXIgLm1hdC1idXR0b24tYmFzZS5tYXQtc3VjY2Vzczpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMWQxMmI7XG59XG5mb290ZXIgLm1hdC1idXR0b24tYmFzZS5tYXQtc3VjY2VzczpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICM3N2E3Nzc7XG59XG5mb290ZXIgLm1hdC1idXR0b24tYmFzZS5tYXQtbmF2aWdhdG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZlNmQ2ZDtcbn1cbmZvb3RlciAubWF0LWJ1dHRvbi1iYXNlLm1hdC1uYXZpZ2F0b3I6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY1ZjVmO1xufVxuZm9vdGVyIC5tYXQtYnV0dG9uLWJhc2UubWF0LW5hdmlnYXRvcjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICNiNGI0YjQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _services_text_service__WEBPACK_IMPORTED_MODULE_1__["TextService"]
        }, {
          type: _services_annotation_service__WEBPACK_IMPORTED_MODULE_2__["AnnotationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _entities_container_entities_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./entities-container/entities-container.component */
    "./src/app/entities-container/entities-container.component.ts");
    /* harmony import */


    var _texts_container_texts_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./texts-container/texts-container.component */
    "./src/app/texts-container/texts-container.component.ts");
    /* harmony import */


    var _services_entity_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/entity.service */
    "./src/app/services/entity.service.ts");
    /* harmony import */


    var _services_text_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/text.service */
    "./src/app/services/text.service.ts");
    /* harmony import */


    var _services_annotation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/annotation.service */
    "./src/app/services/annotation.service.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./material */
    "./src/app/material.ts");
    /* harmony import */


    var _selection_container_selection_container_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./selection-container/selection-container.component */
    "./src/app/selection-container/selection-container.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_entity_service__WEBPACK_IMPORTED_MODULE_5__["EntityService"], _services_text_service__WEBPACK_IMPORTED_MODULE_6__["TextService"], _services_annotation_service__WEBPACK_IMPORTED_MODULE_7__["AnnotationService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _material__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _entities_container_entities_container_component__WEBPACK_IMPORTED_MODULE_3__["EntitiesContainerComponent"], _texts_container_texts_container_component__WEBPACK_IMPORTED_MODULE_4__["TextsContainerComponent"], _selection_container_selection_container_component__WEBPACK_IMPORTED_MODULE_10__["SelectionContainerComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _material__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _entities_container_entities_container_component__WEBPACK_IMPORTED_MODULE_3__["EntitiesContainerComponent"], _texts_container_texts_container_component__WEBPACK_IMPORTED_MODULE_4__["TextsContainerComponent"], _selection_container_selection_container_component__WEBPACK_IMPORTED_MODULE_10__["SelectionContainerComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _material__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"]],
          providers: [_services_entity_service__WEBPACK_IMPORTED_MODULE_5__["EntityService"], _services_text_service__WEBPACK_IMPORTED_MODULE_6__["TextService"], _services_annotation_service__WEBPACK_IMPORTED_MODULE_7__["AnnotationService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/entities-container/entities-container.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/entities-container/entities-container.component.ts ***!
    \********************************************************************/

  /*! exports provided: EntitiesContainerComponent */

  /***/
  function srcAppEntitiesContainerEntitiesContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntitiesContainerComponent", function () {
      return EntitiesContainerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_entity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/entity.service */
    "./src/app/services/entity.service.ts");
    /* harmony import */


    var _services_emit_entity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/emit-entity.service */
    "./src/app/services/emit-entity.service.ts");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EntitiesContainerComponent_mat_button_toggle_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-button-toggle", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntitiesContainerComponent_mat_button_toggle_1_Template_mat_button_toggle_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var entity_r1 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.sendEntity(entity_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var entity_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", entity_r1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entity_r1, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
      }
    }

    var EntitiesContainerComponent = /*#__PURE__*/function () {
      function EntitiesContainerComponent(_entityService, _emitEntity) {
        _classCallCheck(this, EntitiesContainerComponent);

        this._entityService = _entityService;
        this._emitEntity = _emitEntity;
        this.entities = [];
      }
      /**
       * Sends the entity selected to the Entity service
       * This is received by the text container component
       */


      _createClass(EntitiesContainerComponent, [{
        key: "sendEntity",
        value: function sendEntity(entity) {
          this._emitEntity.emitEntity(entity);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.entities = this._entityService.getEntities();
        }
      }]);

      return EntitiesContainerComponent;
    }();

    EntitiesContainerComponent.ɵfac = function EntitiesContainerComponent_Factory(t) {
      return new (t || EntitiesContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_entity_service__WEBPACK_IMPORTED_MODULE_1__["EntityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_emit_entity_service__WEBPACK_IMPORTED_MODULE_2__["EmitEntityService"]));
    };

    EntitiesContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EntitiesContainerComponent,
      selectors: [["app-entities-container"]],
      decls: 2,
      vars: 1,
      consts: [["name", "entitiesGroup", "aria-label", "Entities Group", "value", "PERSON", 1, "entities-group"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"]],
      template: function EntitiesContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-button-toggle-group", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EntitiesContainerComponent_mat_button_toggle_1_Template, 4, 3, "mat-button-toggle", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.entities);
        }
      },
      directives: [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggle"]],
      styles: [".mat-button-toggle-group {\n  background-color: #4f23b6;\n  border-radius: 0 !important;\n  padding: 1em;\n  flex-wrap: wrap;\n}\n .mat-button-toggle-group .mat-button-toggle {\n  background-color: #4f23b6;\n  margin: 0.4em;\n  border: 2px solid #ffffff !important;\n  border-radius: 2px;\n}\n .mat-button-toggle-group .mat-button-toggle .mat-button-toggle-button .mat-button-toggle-label-content {\n  color: #ffffff;\n  line-height: 1.5;\n  padding: 0.2em 0.4em;\n}\n .mat-button-toggle-group .mat-button-toggle .mat-button-toggle-button .mat-button-toggle-label-content span {\n  font-size: 10px;\n  vertical-align: inherit;\n}\n .mat-button-toggle-group .mat-button-toggle-checked {\n  background-color: #ffffff;\n}\n .mat-button-toggle-group .mat-button-toggle-checked .mat-button-toggle-button .mat-button-toggle-label-content {\n  color: #4f23b6;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJjZWxvYWd1aWxlcmEvU2l0ZXMvbWFyY2Vsby1jaGFsbGVuZ2Uvc3JjL2FwcC9lbnRpdGllcy1jb250YWluZXIvZW50aXRpZXMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lbnRpdGllcy1jb250YWluZXIvZW50aXRpZXMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0o7QURBSTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUNFUjtBREFZO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNFaEI7QUREZ0I7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7QUNHcEI7QURFSTtFQUNJLHlCQUFBO0FDQVI7QURFWTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ0FoQiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzLWNvbnRhaW5lci9lbnRpdGllcy1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRmMjNiNjtcbiAgICBib3JkZXItcmFkaXVzOiAwIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZjIzYjY7XG4gICAgICAgIG1hcmdpbjogMC40ZW07XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmYhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIC5tYXQtYnV0dG9uLXRvZ2dsZS1idXR0b24ge1xuICAgICAgICAgICAgLm1hdC1idXR0b24tdG9nZ2xlLWxhYmVsLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC4yZW0gMC40ZW07XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgLm1hdC1idXR0b24tdG9nZ2xlLWJ1dHRvbiB7XG4gICAgICAgICAgICAubWF0LWJ1dHRvbi10b2dnbGUtbGFiZWwtY29udGVudCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0ZjIzYjY7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiOjpuZy1kZWVwLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmMjNiNjtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbjo6bmctZGVlcC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCAubWF0LWJ1dHRvbi10b2dnbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGYyM2I2O1xuICBtYXJnaW46IDAuNGVtO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbjo6bmctZGVlcC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCAubWF0LWJ1dHRvbi10b2dnbGUgLm1hdC1idXR0b24tdG9nZ2xlLWJ1dHRvbiAubWF0LWJ1dHRvbi10b2dnbGUtbGFiZWwtY29udGVudCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBwYWRkaW5nOiAwLjJlbSAwLjRlbTtcbn1cbjo6bmctZGVlcC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCAubWF0LWJ1dHRvbi10b2dnbGUgLm1hdC1idXR0b24tdG9nZ2xlLWJ1dHRvbiAubWF0LWJ1dHRvbi10b2dnbGUtbGFiZWwtY29udGVudCBzcGFuIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdDtcbn1cbjo6bmctZGVlcC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCAubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG46Om5nLWRlZXAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAgLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQgLm1hdC1idXR0b24tdG9nZ2xlLWJ1dHRvbiAubWF0LWJ1dHRvbi10b2dnbGUtbGFiZWwtY29udGVudCB7XG4gIGNvbG9yOiAjNGYyM2I2O1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntitiesContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-entities-container',
          templateUrl: './entities-container.component.html',
          styleUrls: ['./entities-container.component.scss']
        }]
      }], function () {
        return [{
          type: _services_entity_service__WEBPACK_IMPORTED_MODULE_1__["EntityService"]
        }, {
          type: _services_emit_entity_service__WEBPACK_IMPORTED_MODULE_2__["EmitEntityService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/material.ts":
  /*!*****************************!*\
    !*** ./src/app/material.ts ***!
    \*****************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [[_angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"]], _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MaterialModule, {
        imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"]],
        exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"]],
          exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/selection-container/selection-container.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/selection-container/selection-container.component.ts ***!
    \**********************************************************************/

  /*! exports provided: SelectionContainerComponent */

  /***/
  function srcAppSelectionContainerSelectionContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectionContainerComponent", function () {
      return SelectionContainerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_deselect_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/deselect.service */
    "./src/app/services/deselect.service.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var SelectionContainerComponent = /*#__PURE__*/function () {
      function SelectionContainerComponent(_deselect) {
        _classCallCheck(this, SelectionContainerComponent);

        this._deselect = _deselect;
        this.removeSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * Emits the action to restore the text
       */


      _createClass(SelectionContainerComponent, [{
        key: "deselectText",
        value: function deselectText() {
          this._deselect.emitAction(true);
        }
      }]);

      return SelectionContainerComponent;
    }();

    SelectionContainerComponent.ɵfac = function SelectionContainerComponent_Factory(t) {
      return new (t || SelectionContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_deselect_service__WEBPACK_IMPORTED_MODULE_1__["DeselectService"]));
    };

    SelectionContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SelectionContainerComponent,
      selectors: [["app-selection-container"]],
      outputs: {
        removeSelection: "removeSelection"
      },
      decls: 7,
      vars: 2,
      consts: [[1, "selection-container"], ["matChipRemove", "", 3, "click"], [1, "selection-entity"]],
      template: function SelectionContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectionContainerComponent_Template_mat_icon_click_1_listener() {
            return ctx.deselectText();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.innerText, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.entity);
        }
      },
      directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]],
      styles: [".selection-container[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #eceb87;\n  margin: 0.4em;\n  padding: 0 0.4em;\n  font-weight: bolder;\n}\n.selection-container[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  font-size: 12px;\n  top: -7px;\n  left: -7px;\n  cursor: pointer;\n}\n.selection-container[_ngcontent-%COMP%]:hover   .mat-icon[_ngcontent-%COMP%] {\n  display: block;\n}\n.selection-container[_ngcontent-%COMP%]   .selection-entity[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 10px;\n  font-weight: bold;\n  color: #8634d3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJjZWxvYWd1aWxlcmEvU2l0ZXMvbWFyY2Vsby1jaGFsbGVuZ2Uvc3JjL2FwcC9zZWxlY3Rpb24tY29udGFpbmVyL3NlbGVjdGlvbi1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlbGVjdGlvbi1jb250YWluZXIvc2VsZWN0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQUk7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDRVI7QURDUTtFQUNJLGNBQUE7QUNDWjtBREVJO0VBQ0ksdUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9zZWxlY3Rpb24tY29udGFpbmVyL3NlbGVjdGlvbi1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0aW9uLWNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWI4NztcbiAgICBtYXJnaW46IDAuNGVtO1xuICAgIHBhZGRpbmc6IDAgMC40ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAubWF0LWljb257XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB0b3A6IC03cHg7XG4gICAgICAgIGxlZnQ6IC03cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICAgIC5tYXQtaWNvbntcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5zZWxlY3Rpb24tZW50aXR5e1xuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6ICM4NjM0ZDM7XG4gICAgfVxufSIsIi5zZWxlY3Rpb24tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlYjg3O1xuICBtYXJnaW46IDAuNGVtO1xuICBwYWRkaW5nOiAwIDAuNGVtO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuLnNlbGVjdGlvbi1jb250YWluZXIgLm1hdC1pY29uIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRvcDogLTdweDtcbiAgbGVmdDogLTdweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNlbGVjdGlvbi1jb250YWluZXI6aG92ZXIgLm1hdC1pY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uc2VsZWN0aW9uLWNvbnRhaW5lciAuc2VsZWN0aW9uLWVudGl0eSB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzg2MzRkMztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectionContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-selection-container',
          templateUrl: './selection-container.component.html',
          styleUrls: ['./selection-container.component.scss']
        }]
      }], function () {
        return [{
          type: _services_deselect_service__WEBPACK_IMPORTED_MODULE_1__["DeselectService"]
        }];
      }, {
        removeSelection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/annotation.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/annotation.service.ts ***!
    \************************************************/

  /*! exports provided: AnnotationService */

  /***/
  function srcAppServicesAnnotationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnnotationService", function () {
      return AnnotationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AnnotationService = /*#__PURE__*/function () {
      function AnnotationService() {
        _classCallCheck(this, AnnotationService);

        this.annotationData = new Array();
        this.observableAnnotations = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
      }
      /**
       * Simulates the getter of Annotations
       * @returns JSON
       */


      _createClass(AnnotationService, [{
        key: "getAnnotations",
        value: function getAnnotations() {
          return this.observableAnnotations.asObservable();
        }
        /**
         * Pushs the new annotation data into the annotationData Array
         * Simulates the posting method to a serve (console.log)
         */

      }, {
        key: "postAnnotation",
        value: function postAnnotation(newAnnotation) {
          this.annotationData.push(newAnnotation);
          this.observableAnnotations.next(Object.assign({}, this.annotationData));
          console.log("Annotation Data", this.annotationData);
        }
      }]);

      return AnnotationService;
    }();

    AnnotationService.ɵfac = function AnnotationService_Factory(t) {
      return new (t || AnnotationService)();
    };

    AnnotationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AnnotationService,
      factory: AnnotationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnnotationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/deselect.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/deselect.service.ts ***!
    \**********************************************/

  /*! exports provided: DeselectService */

  /***/
  function srcAppServicesDeselectServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeselectService", function () {
      return DeselectService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var DeselectService = /*#__PURE__*/function () {
      function DeselectService() {
        _classCallCheck(this, DeselectService);

        this._actionSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.action$ = this._actionSource.asObservable();
      }
      /**
      * Emits the action observed
      */


      _createClass(DeselectService, [{
        key: "emitAction",
        value: function emitAction(action) {
          this._actionSource.next(action);
        }
      }]);

      return DeselectService;
    }();

    DeselectService.ɵfac = function DeselectService_Factory(t) {
      return new (t || DeselectService)();
    };

    DeselectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DeselectService,
      factory: DeselectService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeselectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/emit-entity.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/emit-entity.service.ts ***!
    \*************************************************/

  /*! exports provided: EmitEntityService */

  /***/
  function srcAppServicesEmitEntityServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmitEntityService", function () {
      return EmitEntityService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var EmitEntityService = /*#__PURE__*/function () {
      function EmitEntityService() {
        _classCallCheck(this, EmitEntityService);

        this._entitySource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.entity$ = this._entitySource.asObservable();
      }
      /**
      * Emits the Entity observed
      */


      _createClass(EmitEntityService, [{
        key: "emitEntity",
        value: function emitEntity(entity) {
          this._entitySource.next(entity);
        }
      }]);

      return EmitEntityService;
    }();

    EmitEntityService.ɵfac = function EmitEntityService_Factory(t) {
      return new (t || EmitEntityService)();
    };

    EmitEntityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EmitEntityService,
      factory: EmitEntityService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmitEntityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/entity.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/entity.service.ts ***!
    \********************************************/

  /*! exports provided: EntityService */

  /***/
  function srcAppServicesEntityServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntityService", function () {
      return EntityService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EntityService = /*#__PURE__*/function () {
      function EntityService() {
        _classCallCheck(this, EntityService);
      }
      /**
       * Simulates the getter of Entities
       * @returns Array
       */


      _createClass(EntityService, [{
        key: "getEntities",
        value: function getEntities() {
          return ['ORG', 'PRODUCT', 'DATE', 'GPE', 'EVENT', 'TIME', 'LOC', 'PERSON'];
        }
      }]);

      return EntityService;
    }();

    EntityService.ɵfac = function EntityService_Factory(t) {
      return new (t || EntityService)();
    };

    EntityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EntityService,
      factory: EntityService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/text.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/text.service.ts ***!
    \******************************************/

  /*! exports provided: TextService */

  /***/
  function srcAppServicesTextServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextService", function () {
      return TextService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TextService = /*#__PURE__*/function () {
      function TextService() {
        _classCallCheck(this, TextService);
      }
      /**
       * Simulates the getter of Texts
       * @returns Array
       */


      _createClass(TextService, [{
        key: "getTexts",
        value: function getTexts() {
          return [{
            'text': "Steve Jobs: He Brought the Show to Business",
            'source': 'The New York Times',
            'doc_id': 0
          }, {
            'text': "Silicon Valley's Youth Problem",
            'source': 'The New York Times',
            'doc_id': 0
          }];
        }
      }]);

      return TextService;
    }();

    TextService.ɵfac = function TextService_Factory(t) {
      return new (t || TextService)();
    };

    TextService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TextService,
      factory: TextService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/texts-container/texts-container.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/texts-container/texts-container.component.ts ***!
    \**************************************************************/

  /*! exports provided: TextsContainerComponent */

  /***/
  function srcAppTextsContainerTextsContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextsContainerComponent", function () {
      return TextsContainerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _selection_container_selection_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../selection-container/selection-container.component */
    "./src/app/selection-container/selection-container.component.ts");
    /* harmony import */


    var _services_text_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/text.service */
    "./src/app/services/text.service.ts");
    /* harmony import */


    var _services_emit_entity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/emit-entity.service */
    "./src/app/services/emit-entity.service.ts");
    /* harmony import */


    var _services_deselect_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/deselect.service */
    "./src/app/services/deselect.service.ts");

    var TextsContainerComponent = /*#__PURE__*/function () {
      function TextsContainerComponent(_textService, _emitEntityService, _deselectService, renderer, injector, cfr, applicationRef) {
        _classCallCheck(this, TextsContainerComponent);

        this._textService = _textService;
        this._emitEntityService = _emitEntityService;
        this._deselectService = _deselectService;
        this.renderer = renderer;
        this.injector = injector;
        this.cfr = cfr;
        this.applicationRef = applicationRef;
        this.selectedText = {};
        this.texts = [];
        this.currentText = {
          'text': "",
          'source': '',
          'doc_id': null
        };
        this.currentEntity = "PERSON";
        this.changes = [];
        this.activeSelection = false;
        this.sendSelectedText = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(TextsContainerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.texts = this._textService.getTexts();
          this.textContainer = document.querySelector('div.texts-container');
          this.currentText = this.texts[0];
          this.textContainer.textContent = this.currentText.text;

          this._emitEntityService.entity$.subscribe(function (entity) {
            _this2.currentEntity = entity;
          });

          this._deselectService.action$.subscribe(function (action) {
            if (action) {
              _this2.deselect();
            }
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.deselect();
          this.currentText = this.texts[this.textIndex];
          this.currentText ? this.textContainer.textContent = this.currentText.text : null;
        }
        /**
         * Gets the selection of the text container
         * Generates a wrapper whichs contains the text of the selection and also the current Entity
         */

      }, {
        key: "highlightSelection",
        value: function highlightSelection() {
          if (!this.activeSelection) {
            var caretPosition = window.getSelection().getRangeAt(0);
            var range = document.createRange();
            range.setStart(caretPosition.commonAncestorContainer, caretPosition.startOffset);
            range.setEnd(caretPosition.commonAncestorContainer, caretPosition.endOffset);
            this.selectedText = {
              'docId': this.currentText.doc_id,
              'annotations': [{
                'type': this.currentEntity,
                'offset': {
                  'start_char': range.startOffset,
                  'end_char': range.endOffset
                }
              }]
            };
            this.emitTextSelection();
            var wrap = this.renderer.createElement("wrapper-container");
            var factory = this.cfr.resolveComponentFactory(_selection_container_selection_container_component__WEBPACK_IMPORTED_MODULE_1__["SelectionContainerComponent"]);
            var cmp = factory.create(this.injector, [], wrap);
            this.applicationRef.attachView(cmp.hostView);
            var contents = range.extractContents();
            cmp.instance.innerText = contents.textContent;
            cmp.instance.entity = this.currentEntity;
            this.changes.push({
              range: range,
              content: contents.cloneNode(true)
            });
            range.insertNode(wrap);
            caretPosition.setStart(range.endContainer, range.endOffset);
            caretPosition.setEnd(caretPosition.endContainer, caretPosition.endOffset);
          }
        }
        /**
         * Restores de selection to the initial state of the text.
         */

      }, {
        key: "deselect",
        value: function deselect() {
          if (this.activeSelection) {
            var action = this.changes.pop();
            var range = action.range;
            var node = range.extractContents();
            range.insertNode(action.content);
            this.activeSelection = false;
            this.selectedText = {};
            this.currentText ? this.textContainer.textContent = this.currentText.text : null;
          }
        }
        /**
         * Sends the selection as an object to the parent
         */

      }, {
        key: "emitTextSelection",
        value: function emitTextSelection() {
          this.activeSelection = true;
          this.sendSelectedText.emit(this.selectedText);
        }
      }]);

      return TextsContainerComponent;
    }();

    TextsContainerComponent.ɵfac = function TextsContainerComponent_Factory(t) {
      return new (t || TextsContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_text_service__WEBPACK_IMPORTED_MODULE_2__["TextService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_emit_entity_service__WEBPACK_IMPORTED_MODULE_3__["EmitEntityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_deselect_service__WEBPACK_IMPORTED_MODULE_4__["DeselectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]));
    };

    TextsContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TextsContainerComponent,
      selectors: [["app-texts-container"]],
      inputs: {
        textIndex: "textIndex"
      },
      outputs: {
        sendSelectedText: "sendSelectedText"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 5,
      vars: 1,
      consts: [[1, "texts-container", 3, "mouseup"], [1, "source-container"]],
      template: function TextsContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseup", function TextsContainerComponent_Template_div_mouseup_0_listener() {
            return ctx.highlightSelection();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "SOURCE: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentText.source, "\n");
        }
      },
      styles: [".texts-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  padding: 1em 0.6em;\n  height: 7em;\n}\n\n.source-container[_ngcontent-%COMP%] {\n  font-size: 10px;\n  text-align: right;\n}\n\n.source-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJjZWxvYWd1aWxlcmEvU2l0ZXMvbWFyY2Vsby1jaGFsbGVuZ2Uvc3JjL2FwcC90ZXh0cy1jb250YWluZXIvdGV4dHMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90ZXh0cy1jb250YWluZXIvdGV4dHMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEREk7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0FDR1IiLCJmaWxlIjoic3JjL2FwcC90ZXh0cy1jb250YWluZXIvdGV4dHMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRzLWNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgcGFkZGluZzogMWVtIDAuNmVtO1xuICAgIGhlaWdodDogN2VtO1xufVxuLnNvdXJjZS1jb250YWluZXJ7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHNwYW57XG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIH1cbn0iLCIudGV4dHMtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgcGFkZGluZzogMWVtIDAuNmVtO1xuICBoZWlnaHQ6IDdlbTtcbn1cblxuLnNvdXJjZS1jb250YWluZXIge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnNvdXJjZS1jb250YWluZXIgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextsContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-texts-container',
          templateUrl: './texts-container.component.html',
          styleUrls: ['./texts-container.component.scss']
        }]
      }], function () {
        return [{
          type: _services_text_service__WEBPACK_IMPORTED_MODULE_2__["TextService"]
        }, {
          type: _services_emit_entity_service__WEBPACK_IMPORTED_MODULE_3__["EmitEntityService"]
        }, {
          type: _services_deselect_service__WEBPACK_IMPORTED_MODULE_4__["DeselectService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
        }];
      }, {
        sendSelectedText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        textIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/marceloaguilera/Sites/marcelo-challenge/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
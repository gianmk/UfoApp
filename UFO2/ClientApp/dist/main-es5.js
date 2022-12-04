function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<body>\r\n  <app-nav-menu></app-nav-menu>\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</body>\r\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\r\n<div class=\"intro\">\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <h2>Welcome to The UFO Hub!</h2><br>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-8\">\r\n            Here you can register your UFO observations and read about other people strange experiences.\r\n            Did you encounter visit from another planet, or maybe you only had a little to much of the waccy baccy?\r\n            Do aliens exists or are we all alone? All we know is, that the truth is out there.\r\n            Please, have a look around our page and don't forget to register.<br><br> Always remember: “space is big. You just won't believe how vastly, hugely, mind-bogglingly big it is. I mean, you may think it's a long way down the road to the chemist's, but that's just peanuts to space.”\r\n            ― Douglas Adams\r\n        </div>\r\n        <div class=\"col\">\r\n            <img class=\"img\" src=\"/assets/ufo2.svg\">\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"gradient1\"></div>\r\n\r\n<input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"searchText\" autocomplete=\"on\" placeholder=\" Search UFO sightings\">\r\n<br />\r\n<div fxLayout=\"row wrap\">\r\n    <mat-card class=\"listcard\" *ngFor=\"let Ufo of Ufoer| filter:searchText | paginate: { itemsPerPage: 5, currentPage: p }\" [routerLink]=\"['/editUfo', Ufo.id]\" fxLayoutGap=\"20px\">\r\n\r\n\r\n        <mat-card-header>\r\n            <mat-card-title>Ufo Sighting</mat-card-title>\r\n            <mat-card-subtitle> Seen at {{Ufo.country}}, {{Ufo.state}}, {{Ufo.location}} </mat-card-subtitle>\r\n            <mat-card-subtitle> Date and Time : {{Ufo.date_time}}, {{Ufo.time}} </mat-card-subtitle>\r\n        </mat-card-header>\r\n        <br />\r\n        <mat-card-content>\r\n            <p><strong>Shape:</strong> {{Ufo.shape}}</p>\r\n            <p><strong>Duration:</strong> {{Ufo.duration}}</p>\r\n            <p><strong>Description:</strong> {{Ufo.text}} </p>\r\n\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n            \r\n            <button mat-button [routerLink]=\"['/comment', Ufo.id]\">{{ Ufo.commentcount }}<mat-icon class=\"icon-comment\">comment</mat-icon> </button>\r\n\r\n        </mat-card-actions>\r\n\r\n\r\n    </mat-card>\r\n</div>\r\n<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n\r\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
    \****************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavMenuNavMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<header>\r\n  <nav\r\n    class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-0\"\r\n  >\r\n      <div class=\"container\">\r\n\r\n          <a class=\"navbar-brand logo\" [routerLink]=\"['/']\">\r\n              <img src=\"/assets/alien.svg\" width=\"40px\" height=\"40px\" alt=\"Logo\" class=\"icon\">\r\n              The UFO Hub\r\n          </a>\r\n\r\n          <button class=\"navbar-toggler\"\r\n                  type=\"button\"\r\n                  data-toggle=\"collapse\"\r\n                  data-target=\".navbar-collapse\"\r\n                  aria-label=\"Toggle navigation\"\r\n                  [attr.aria-expanded]=\"isExpanded\"\r\n                  (click)=\"toggle()\">\r\n              <span class=\"navbar-toggler-icon\"></span>\r\n          </button>\r\n          <div class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\r\n               [ngClass]=\"{ show: isExpanded }\">\r\n              <ul class=\"navbar-nav flex-grow\">\r\n\r\n\r\n                  <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n\r\n                      <button _ngcontent-serverapp-c1=\"\" class=\"btn btn-danger btn-sm report my-2 my-sm-0 animated tada slow\" [routerLink]=\"['/regUfo']\" type=\"button\" tabindex=\"0\">Register sighting</button>\r\n\r\n                  </li> &nbsp;&nbsp;\r\n\r\n                  <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n\r\n                    <button _ngcontent-serverapp-c1=\"\" class=\"btn btn-danger btn-sm report my-2 my-sm-0 animated tada slow\" [routerLink]=\"['/overview']\" type=\"button\" tabindex=\"0\">Overview</button>\r\n\r\n                  </li> &nbsp;&nbsp;\r\n\r\n                  <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n                      <button _ngcontent-serverapp-c1=\"\" class=\"btn btn-success btn-sm report my-2 my-sm-0 animated tada slow\" [routerLink]=\"['/login']\" type=\"button\" tabindex=\"0\">Login</button>\r\n\r\n                  </li>\r\n               \r\n                  <li class=\"nav-item\">\r\n                      <div *ngIf=\"userLoggedIn\">\r\n                          <a class=\"nav-link\" href=\"/\"> EX TRUE </a>\r\n                      </div>\r\n                  </li>\r\n          \r\n          </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n\r\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/comments/comments.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/comments/comments.component.html ***!
    \**********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCommentsCommentsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\r\n<form #f=ngForm (ngSubmit)=\" f.form.valid\">\r\n    <h2>Leave a Comment</h2>\r\n\r\n    <textarea class=\"form-control\" rows=\"5\" [(ngModel)]=\"newComment.Comments\" placeholder=\"Your Comment\" name=\"comment\" id=\"comment\" #comment='ngModel' required> </textarea>\r\n\r\n    <div *ngIf=\"comment.invalid && (comment.dirty || comment.touched)\"\r\n         class=\"alert alert-danger\">\r\n\r\n        <div *ngIf=\"comment.errors?.required\">\r\n            Comment cannot be empty.\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n    <br />\r\n    <div class=\"form-group\">\r\n        <button type=\"submit\" class=\"btn btn-success btn-md pull-right\" [disabled]=\"!f.valid\" (click)='addComment();'>Comment</button>\r\n\r\n    </div>\r\n    <br />\r\n    <hr />\r\n\r\n</form>\r\n\r\n<div fxLayout=\"row wrap\">\r\n    <mat-card class=\"listcard\" *ngFor=\"let comment of allComments | paginate: { itemsPerPage: 5, currentPage: p }\" fxLayoutGap=\"20px\">\r\n        <br />\r\n        <mat-card-content>\r\n            <p>{{ comment.comment }} </p>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n            <button mat-button (click)=\"likeComment(comment.id)\">{{ comment.likes }}<mat-icon class=\"icon-primary\">thumb_up</mat-icon></button>\r\n            <button mat-button (click)=\"dislikeComment(comment.id)\">{{ comment.dislikes }}<mat-icon class=\"icon-primary\">thumb_down</mat-icon></button>\r\n            <button mat-button (click)=\"deleteComment(comment.id)\"> <mat-icon class=\"icon-primary\">delete_outline</mat-icon></button>\r\n        </mat-card-actions>\r\n\r\n\r\n    </mat-card>\r\n</div>\r\n<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n\r\n\r\n\r\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-ufo/edit-ufo.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-ufo/edit-ufo.component.html ***!
    \**********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEditUfoEditUfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<h1>Edit UFO Observation </h1>\r\n<br/>\r\n<div class=\"map\">\r\n\r\n    <iframe \r\n            frameborder=\"0\" style=\"border:0\"\r\n            referrerpolicy=\"no-referrer-when-downgrade\"\r\n            allowfullscreen\r\n            [src]=\"('https://www.google.com/maps/embed/v1/place?key=AIzaSyCj_kCutHo0A7LljtdhPh7lmrq8itELt7g&q='+\r\n        maplocation) | safe\"\r\n            class=\"shadow-lg ng-star-inserted\" id=\"map\">\r\n    </iframe>\r\n</div>\r\n<div class=\"editform\">\r\n    <form #f=ngForm (ngSubmit)=\" f.form.valid\">\r\n\r\n\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"country\">Country</label>\r\n            <select class=\"form-control\" name=\"Country\" id=\"Country\" (change)=\"getStates($event)\" title=\"Country\" [(ngModel)]=\"editUfo.country\" #country='ngModel' pattern=\"[0-9a-zA-Z������. ()-]{1,50}\" required>\r\n                <option>{{editUfo.country}}</option>\r\n                <option [ngValue]=\"null\">Please select Country</option>\r\n                <option *ngFor=\"let countries of countries\" [value]=\"countries.name\">{{countries.name}} </option>\r\n            </select>\r\n        </div>\r\n\r\n        <div *ngIf=\"country.invalid && (country.dirty || country.touched)\"\r\n             class=\"alert alert-danger\">\r\n\r\n            <div *ngIf=\"country.errors?.required\">\r\n                Country is required. Please select a country\r\n            </div>\r\n            <div *ngIf=\"country.errors?.pattern\">\r\n                Please select a valid Country.\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"type\">State</label>\r\n            <select class=\"form-control\" id=\"type\" (change)=\"noStates($event.target.value)\" [(ngModel)]=\"editUfo.state\" #state='ngModel' [ngModelOptions]=\"{standalone: true}\" pattern=\"[0-9a-zA-Z������., ()-]{1,50}\" required>\r\n                <option [ngValue]=\"null\">Please select State</option>\r\n                <option>{{editUfo.state}}</option>\r\n                <option *ngFor=\"let state of states\" [value]=\"state.name\">{{state.name}} </option>\r\n                <option>No states available, write in state</option>\r\n            </select>\r\n            <div *ngIf=\"state.invalid && (state.dirty || state.touched)\"\r\n                 class=\"alert alert-danger\">\r\n\r\n                <div *ngIf=\"state.errors?.required\">\r\n                    State is required. Please select a state\r\n                </div>\r\n                <div *ngIf=\"state.errors?.pattern\">\r\n                    Please select a valid State.\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\" *ngIf=\"newState\" [innerHtml]=\"newState | safeHtml\"> </div>\r\n\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"location\">Location of sightings</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"location\" name=\"location\" [(ngModel)]=\"editUfo.location\" #location='ngModel' pattern=\"[0-9a-zA-Z������. \\-]{1,50}\" required>\r\n\r\n            <div *ngIf=\"location.invalid && (location.dirty || location.touched)\"\r\n                 class=\"alert alert-danger\">\r\n\r\n                <div *ngIf=\"location.errors?.required\">\r\n                    Required. Please type in location of the sightning\r\n                </div>\r\n                <div *ngIf=\"shape.errors?.pattern\">\r\n                    Wrong input.\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"date\">Date</label>\r\n            <input type=\"date\" class=\"form-control\" id=\"date_time\" name=\"date\" [(ngModel)]=\"editUfo.date_time\" #date='ngModel' pattern=\"[0-9a-zA-Z������. \\ .:-]{1,50}\" required>\r\n\r\n            <div *ngIf=\"date.invalid && (date.dirty || date.touched)\"\r\n                 class=\"alert alert-danger\">\r\n\r\n                <div *ngIf=\"date.errors?.required\">\r\n                    Required. Please put correct date & time\r\n                </div>\r\n                <div *ngIf=\"date.errors?.pattern\">\r\n                    Please write in a valid date & time.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"Time\">Time</label>\r\n            <input type=\"time\" class=\"form-control\" id=\"Time\" name=\"time\" [(ngModel)]=\"editUfo.time\" #time='ngModel' pattern=\"[0-9. \\ .:-]{1,50}\" required>\r\n\r\n            <div *ngIf=\"time.invalid && (time.dirty || time.touched)\"\r\n                 class=\"alert alert-danger\">\r\n\r\n                <div *ngIf=\"time.errors?.required\">\r\n                    Required. Please put correct time\r\n                </div>\r\n                <div *ngIf=\"time.errors?.pattern\">\r\n                    Please write in a valid time.\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"Shape\">Shape</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"shape\" name=\"shape\" [(ngModel)]=\"editUfo.shape\" #shape='ngModel' pattern=\"[a-zA-Z������. \\-]{1,50}\" required>\r\n\r\n            <div *ngIf=\"shape.invalid && (shape.dirty || shape.touched)\"\r\n                 class=\"alert alert-danger\">\r\n\r\n                <div *ngIf=\"shape.errors?.required\">\r\n                    Required. Please type in the shape of Ufo\r\n                </div>\r\n                <div *ngIf=\"shape.errors?.pattern\">\r\n                    Wrong input. Numbers not allowed.\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"duration\">Duration</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"duration\" name=\"duration\" [(ngModel)]=\"editUfo.duration\" #duration='ngModel' pattern=\"[0-9a-zA-Z������. \\ .:-]{1,50}\" required>\r\n\r\n            <div *ngIf=\"duration.invalid && (duration.dirty || duration.touched)\"\r\n                 class=\"alert alert-danger\">\r\n\r\n                <div *ngIf=\"duration.errors?.required\">\r\n                    Required. Please type in the duration of sighting\r\n                </div>\r\n                <div *ngIf=\"shape.errors?.pattern\">\r\n                    Wrong input.\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"summary\">Description</label>\r\n            <textarea class=\"form-control\" rows=\"5\" [(ngModel)]=\"editUfo.text\" name=\"summary\" id=\"summary\" placeholder=\"Description of the incident\" #summary='ngModel' required></textarea>\r\n\r\n            <div *ngIf=\"summary.invalid && (summary.dirty || summary.touched)\"\r\n                 class=\"alert alert-danger\">\r\n\r\n                <div *ngIf=\"summary.errors?.required\">\r\n                    Required. Please type in the duration of sighting\r\n                </div>\r\n\r\n\r\n            </div>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!f.valid\" (click)=\"updateUfo()\">Update</button> &nbsp;&nbsp;\r\n        <button class=\"btn btn-danger\" (click)=\"deleteUfo(editUfo.id)\">Delete</button>\r\n\r\n    </form>\r\n    </div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/linechart/linechart.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/linechart/linechart.component.html ***!
    \************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLinechartLinechartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<google-chart \r\n    [type]=\"chart\"\r\n    [data]=\"data\"\r\n    [title]=\"title\"\r\n    [columnNames]=\"myColumnNames\"\r\n></google-chart>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loginAndRegister/logreg.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loginAndRegister/logreg.html ***!
    \******************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginAndRegisterLogregHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\r\n<div class=\"container\">\r\n    <div class=\"p-2 bd-highlight bak\">\r\n        <div class=\"headline\">\r\n            <h1>Welcome!</h1>\r\n        </div>\r\n    </div>\r\n    <div class=\"logregcont\">\r\n            <app-loginform class=\"lform\"></app-loginform>\r\n            <hr class=\"hr hr-blurry\" />\r\n            <app-registerform></app-registerform>\r\n    </div>\r\n</div>\r\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loginform/login.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loginform/login.html ***!
    \**********************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginformLoginHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<form [formGroup]=\"loginskjema\" \r\n(ngSubmit)=\"login()\">\r\n    <div class=\"form-group\">\r\n        <h2>Login</h2>\r\n        <label for=\"uname\">Username</label>\r\n        <input class=\"form-control\" formControlName=\"username\" id=\"uname\" />\r\n        <small id=\"uname\" class=\"text-danger\"\r\n               [hidden]=\"loginskjema.controls.username.valid || (loginskjema.controls.username.pristine && !submitted)\">\r\n            Enter password, minimum 6 characters.\r\n        </small>\r\n\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"pass\">Password</label>\r\n        <input type=\"password\" class=\"form-control\" formControlName=\"password\" id=\"pass\" />\r\n        <small id=\"pass\" class=\"text-danger\"\r\n        [hidden]=\"loginskjema.controls.password.valid || (loginskjema.controls.password.pristine && !submitted)\">\r\n            Enter password, minimum 6 characters.\r\n        </small>\r\n\r\n    </div>\r\n    <div class=\"form-group\">\r\n    <button type=\"submit\" class=\"btn btn-outline-primary\">Login</button><br>\r\n   \r\n    </div>\r\n    <div id=\"lout\">\r\n        <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"logout()\">Log out</button>\r\n    </div>\r\n </form>\r\n\r\n\r\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.component.html ***!
    \************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMapMapComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\r\n<google-chart \r\n    [type]=\"chart\"\r\n    [data]=\"kartdata\"\r\n    [title]=\"title\"\r\n    [columnNames]=\"myColumnNames\"\r\n></google-chart>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/overview/overview.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/overview/overview.component.html ***!
    \**********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOverviewOverviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\r\n<div class=\"cont\">\r\n        <div class=\"row\">\r\n        <div class=\"col\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <app-map></app-map>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col\">\r\n\r\n            <ul class=\"list-group\">\r\n                <li class=\"list-group-item\">{{numberOfObs}} registered UFO observations</li>\r\n                <li class=\"list-group-item\">Most recent observation is {{mostRecent}}</li>\r\n                <li class=\"list-group-item\">The country with most observations is {{topCountry}}</li>\r\n            </ul>\r\n\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <app-linechart [APIdata]=\"data\" ></app-linechart>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col\">\r\n            <div class=\"card\">\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register-ufo/register-ufo.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register-ufo/register-ufo.component.html ***!
    \******************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRegisterUfoRegisterUfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<form #f=ngForm (ngSubmit)=\" f.form.valid\">\r\n\r\n\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"country\">Country</label>\r\n        <select class=\"form-control\" name=\"country\" id=\"country\" (change)=\"getStates($event)\" title=\"country\" [(ngModel)]=\"newUfo.country\" #country='ngModel' pattern=\"[0-9a-zA-Z������. ()-]{1,50}\" required>\r\n            <option [ngValue]=\"null\">Please select Country</option>\r\n            <option *ngFor=\"let countries of countries\" [value]=\"countries.name\">{{countries.name}} </option>\r\n        </select>\r\n    </div>\r\n\r\n    <div *ngIf=\"country.invalid && (country.dirty || country.touched)\"\r\n         class=\"alert alert-danger\">\r\n\r\n        <div *ngIf=\"country.errors?.required\">\r\n            Country is required. Please select a country\r\n        </div>\r\n        <div *ngIf=\"country.errors?.pattern\">\r\n            Please select a valid Country.\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"type\">State</label>\r\n        <select class=\"form-control\" id=\"type\" (change)=\"noStates($event.target.value)\" [(ngModel)]=\"newUfo.state\" #state='ngModel' [ngModelOptions]=\"{standalone: true}\" pattern=\"[0-9a-zA-Z������., ()-]{1,50}\" required>\r\n            <option [ngValue]=\"null\">Please select State</option>\r\n            <option *ngFor=\"let state of states\" [value]=\"state.name\">{{state.name}} </option>\r\n            <option>No states available, write in state</option>\r\n        </select>\r\n        <div *ngIf=\"state.invalid && (state.dirty || state.touched)\"\r\n             class=\"alert alert-danger\">\r\n\r\n            <div *ngIf=\"state.errors?.required\">\r\n                State is required. Please select a state\r\n            </div>\r\n            <div *ngIf=\"state.errors?.pattern\">\r\n                Please select a valid State.\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"Location\">Location of sighting</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"location\" name=\"location\" [(ngModel)]=\"newUfo.location\" #location='ngModel' pattern=\"[0-9a-zA-Z������. \\-]{1,50}\" required>\r\n\r\n        <div *ngIf=\"location.invalid && (location.dirty || location.touched)\"\r\n             class=\"alert alert-danger\">\r\n\r\n            <div *ngIf=\"shape.errors?.required\">\r\n                Required. please report the location of sighting.\r\n            </div>\r\n            <div *ngIf=\"shape.errors?.pattern\">\r\n                Wrong input.\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\" *ngIf=\"newState\" [innerHtml]=\"newState | safeHtml\"> </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"date\">Date</label>\r\n        <input type=\"date\" class=\"form-control\" id=\"date_time\" name=\"date\" [(ngModel)]=\"newUfo.date_time\" #date='ngModel' pattern=\"[0-9a-zA-Z������. \\ .:-]{1,50}\" required>\r\n\r\n        <div *ngIf=\"date.invalid && (date.dirty || date.touched)\"\r\n             class=\"alert alert-danger\">\r\n\r\n            <div *ngIf=\"date.errors?.required\">\r\n                Required. Please put correct date & time\r\n            </div>\r\n            <div *ngIf=\"date.errors?.pattern\">\r\n                Please write in a valid date & time.\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"Time\">Time</label>\r\n        <input type=\"time\" class=\"form-control\" id=\"Time\" name=\"time\" [(ngModel)]=\"newUfo.time\" #time='ngModel' pattern=\"[0-9. \\ .:-]{1,50}\" required>\r\n\r\n        <div *ngIf=\"time.invalid && (time.dirty || time.touched)\"\r\n             class=\"alert alert-danger\">\r\n\r\n            <div *ngIf=\"time.errors?.required\">\r\n                Required. Please put correct time\r\n            </div>\r\n            <div *ngIf=\"time.errors?.pattern\">\r\n                Please write in a valid time.\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"Shape\">Shape</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"shape\" name=\"shape\" [(ngModel)]=\"newUfo.shape\" #shape='ngModel' pattern=\"[a-zA-Z������. \\-]{1,50}\" required>\r\n\r\n        <div *ngIf=\"shape.invalid && (shape.dirty || shape.touched)\"\r\n             class=\"alert alert-danger\">\r\n\r\n            <div *ngIf=\"shape.errors?.required\">\r\n                Required. Please type in the shape of Ufo\r\n            </div>\r\n            <div *ngIf=\"shape.errors?.pattern\">\r\n                Wrong input. Numbers not allowed.\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"duration\">Duration</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"duration\" name=\"duration\" [(ngModel)]=\"newUfo.duration\" #duration='ngModel' pattern=\"[0-9a-zA-Z������. \\ .:-]{1,50}\" required>\r\n\r\n        <div *ngIf=\"duration.invalid && (duration.dirty || duration.touched)\"\r\n             class=\"alert alert-danger\">\r\n\r\n            <div *ngIf=\"duration.errors?.required\">\r\n                Required. Please type in the duration of sighting\r\n            </div>\r\n            <div *ngIf=\"shape.errors?.pattern\">\r\n                Wrong input.\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"summary\">Description</label>\r\n        <textarea class=\"form-control\" rows=\"5\" [(ngModel)]=\"newUfo.text\" name=\"summary\" id=\"summary\" placeholder=\"Description of the incident\" #summary='ngModel' required></textarea>\r\n\r\n        <div *ngIf=\"summary.invalid && (summary.dirty || summary.touched)\"\r\n             class=\"alert alert-danger\">\r\n\r\n            <div *ngIf=\"summary.errors?.required\">\r\n                Required. Please type in the duration of sighting\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"form-group\">\r\n        <button type=\"submit\" class=\"btn btn-success btn-lg btn-block\" [disabled]=\"!f.valid\" (click)=\"regUfo()\">Register</button>\r\n\r\n    </div>\r\n\r\n</form>\r\n\r\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registerform/register.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registerform/register.html ***!
    \****************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRegisterformRegisterHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div></div>\r\n<form [formGroup]=\"registerskjema\"\r\n      (ngSubmit)=\"register()\">\r\n    <div class=\"form-group\"></div>\r\n    <div class=\"form-group\">\r\n        <h2>Register</h2>\r\n        <label for=\"uname\">Username</label>\r\n        <input class=\"form-control\" formControlName=\"regUsername\" id=\"reguname\" />\r\n        <small id=\"uname\" class=\"text-danger\"\r\n               [hidden]=\"registerskjema.controls.regUsername.valid || (registerskjema.controls.regUsername.pristine && !submitted)\">\r\n            Enter username, minium 6 characters\r\n        </small>\r\n\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"pass\">Password</label>\r\n        <input type=\"password\" class=\"form-control\" formControlName=\"regPassword\" id=\"regpass\" />\r\n        <small id=\"pass\" class=\"text-danger\"\r\n               [hidden]=\"registerskjema.controls.regPassword.valid || (registerskjema.controls.regPassword.pristine && !submitted)\"  >\r\n             Enter password, minimum 6 characters\r\n        </small>\r\n        <span [ngClass]=\"(status == 1) ? 'text-success' : 'text-danger'\"> {{feedback}} </span>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-outline-primary\" [disabled]=\"!registerskjema.valid\">Register</button>\r\n   \r\n</form>\r\n\r\n";

    /***/
  },

  /***/"./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/
  /*! no static exports found */
  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

    /***/
  },

  /***/"./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/
  /*! exports provided: AppRoutingModule */
  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _app_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../app/home/home.component */"./src/app/home/home.component.ts");
    /* harmony import */
    var _app_pages_edit_ufo_edit_ufo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../app/pages/edit-ufo/edit-ufo.component */"./src/app/pages/edit-ufo/edit-ufo.component.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _app_pages_register_ufo_register_ufo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../app/pages/register-ufo/register-ufo.component */"./src/app/pages/register-ufo/register-ufo.component.ts");
    /* harmony import */
    var src_app_pages_comments_comments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! src/app/pages/comments/comments.component */"./src/app/pages/comments/comments.component.ts");
    /* harmony import */
    var _pages_loginAndRegister_logAndReg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./pages/loginAndRegister/logAndReg */"./src/app/pages/loginAndRegister/logAndReg.ts");
    /* harmony import */
    var _pages_overview_overview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./pages/overview/overview.component */"./src/app/pages/overview/overview.component.ts");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var routes = [{
      path: '',
      component: _app_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
      pathMatch: 'full'
    }, {
      path: 'editUfo/:id',
      component: _app_pages_edit_ufo_edit_ufo_component__WEBPACK_IMPORTED_MODULE_2__["EditUfoComponent"]
    }, {
      path: 'home',
      component: _app_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    }, {
      path: 'regUfo',
      component: _app_pages_register_ufo_register_ufo_component__WEBPACK_IMPORTED_MODULE_4__["RegisterUfoComponent"]
    }, {
      path: 'comment/:id',
      component: src_app_pages_comments_comments_component__WEBPACK_IMPORTED_MODULE_5__["CommentsComponent"]
    }, {
      path: 'overview',
      component: _pages_overview_overview_component__WEBPACK_IMPORTED_MODULE_7__["OverviewComponent"]
    }, {
      path: 'login',
      component: _pages_loginAndRegister_logAndReg__WEBPACK_IMPORTED_MODULE_6__["LoginAndRegister"]
    }];
    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });
    AppRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], AppRoutingModule);

    /***/
  },

  /***/"./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
  /*! exports provided: AppComponent, SafePipe */
  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SafePipe", function () {
      return SafePipe;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);
      this.title = 'The UFO hub';
    });
    AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-root',
      template: __importDefault(__webpack_require__( /*! raw-loader!./app.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"]
    })], AppComponent);
    var SafePipe = /*#__PURE__*/function () {
      function SafePipe(sanitizer) {
        _classCallCheck(this, SafePipe);
        this.sanitizer = sanitizer;
      }
      _createClass(SafePipe, [{
        key: "transform",
        value: function transform(url) {
          return this.sanitizer.bypassSecurityTrustResourceUrl(url);
        }
      }]);
      return SafePipe;
    }();
    SafePipe.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
      }];
    };
    SafePipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
      name: 'safe'
    }), __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])], SafePipe);

    /***/
  },

  /***/"./src/app/app.module.ts":
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
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ngx-pagination */"./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */
    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ng2-search-filter */"./node_modules/ng2-search-filter/ng2-search-filter.js");
    /* harmony import */
    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @ng-bootstrap/ng-bootstrap */"./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./app.component */"./src/app/app.component.ts");
    /* harmony import */
    var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./nav-menu/nav-menu.component */"./src/app/nav-menu/nav-menu.component.ts");
    /* harmony import */
    var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./home/home.component */"./src/app/home/home.component.ts");
    /* harmony import */
    var _app_pages_edit_ufo_edit_ufo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ../app/pages/edit-ufo/edit-ufo.component */"./src/app/pages/edit-ufo/edit-ufo.component.ts");
    /* harmony import */
    var _pages_register_ufo_register_ufo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ./pages/register-ufo/register-ufo.component */"./src/app/pages/register-ufo/register-ufo.component.ts");
    /* harmony import */
    var _pages_comments_comments_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! ./pages/comments/comments.component */"./src/app/pages/comments/comments.component.ts");
    /* harmony import */
    var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! ./app-routing.module */"./src/app/app-routing.module.ts");
    /* harmony import */
    var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! ngx-toastr */"./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */
    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! @angular/platform-browser/animations */"./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */
    var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! @angular/material */"./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */
    var _pages_loginform_login__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! ./pages/loginform/login */"./src/app/pages/loginform/login.ts");
    /* harmony import */
    var _pages_registerform_register__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__( /*! ./pages/registerform/register */"./src/app/pages/registerform/register.ts");
    /* harmony import */
    var _pages_loginAndRegister_logAndReg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__( /*! ./pages/loginAndRegister/logAndReg */"./src/app/pages/loginAndRegister/logAndReg.ts");
    /* harmony import */
    var angular_google_charts__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__( /*! angular-google-charts */"./node_modules/angular-google-charts/fesm2015/angular-google-charts.js");
    /* harmony import */
    var _pages_map_map_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__( /*! ./pages/map/map.component */"./src/app/pages/map/map.component.ts");
    /* harmony import */
    var _pages_linechart_linechart_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__( /*! ./pages/linechart/linechart.component */"./src/app/pages/linechart/linechart.component.ts");
    /* harmony import */
    var _pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__( /*! ./pipe */"./src/app/pipe.ts");
    /* harmony import */
    var _angular_material_card__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__( /*! @angular/material/card */"./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */
    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__( /*! ngx-google-places-autocomplete */"./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
    /* harmony import */
    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_26__);
    /* harmony import */
    var _pages_overview_overview_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__( /*! ./pages/overview/overview.component */"./src/app/pages/overview/overview.component.ts");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });
    AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_9__["NavMenuComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _app_pages_edit_ufo_edit_ufo_component__WEBPACK_IMPORTED_MODULE_11__["EditUfoComponent"], _pages_register_ufo_register_ufo_component__WEBPACK_IMPORTED_MODULE_12__["RegisterUfoComponent"], _pages_comments_comments_component__WEBPACK_IMPORTED_MODULE_13__["CommentsComponent"], _pages_loginAndRegister_logAndReg__WEBPACK_IMPORTED_MODULE_20__["LoginAndRegister"], _pages_linechart_linechart_component__WEBPACK_IMPORTED_MODULE_23__["LinechartComponent"], _pages_loginform_login__WEBPACK_IMPORTED_MODULE_18__["LoginForm"], _pages_map_map_component__WEBPACK_IMPORTED_MODULE_22__["MapComponent"], _pages_registerform_register__WEBPACK_IMPORTED_MODULE_19__["RegisterForm"], _pages_linechart_linechart_component__WEBPACK_IMPORTED_MODULE_23__["LinechartComponent"], _pages_registerform_register__WEBPACK_IMPORTED_MODULE_19__["RegisterForm"], _pipe__WEBPACK_IMPORTED_MODULE_24__["SafeHtml"], _app_component__WEBPACK_IMPORTED_MODULE_8__["SafePipe"], _pages_overview_overview_component__WEBPACK_IMPORTED_MODULE_27__["OverviewComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({
        appId: 'ng-cli-universal'
      }), _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__["Ng2SearchPipeModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"], angular_google_charts__WEBPACK_IMPORTED_MODULE_21__["GoogleChartsModule"].forRoot('', 'current'), _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_25__["MatCardModule"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_26__["GooglePlaceModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
        pathMatch: 'full'
      }]), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);

    /***/
  },

  /***/"./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/
  /*! exports provided: default */
  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".intro {\r\n    background-color: darkslateblue;\r\n    color: white;\r\n    padding: 60px 30px 30px 40px;\r\n    font-size: 16px;\r\n}\r\n\r\n.gradient1 {\r\n    background-image: linear-gradient(darkslateblue, white);\r\n    height: 20px;\r\n}\r\n\r\n.search-ufo {\r\n    padding: 30px;\r\n}\r\n\r\n.img {\r\n    max-height: 250px;\r\n}\r\n\r\n.headline {\r\n    padding-left: 30px;\r\n}\r\n\r\nclickable {\r\n    cursor: pointer;\r\n}\r\n\r\n.listcard {\r\n    margin-bottom: 20px;\r\n    background: #283048; /* fallback for old browsers */ /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to right, #859398, #283048); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n\r\n}\r\n\r\nmat-card:hover {\r\n    transform: translateY(-5px);\r\n    box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.mat-button:hover {\r\n    background-color: #50C878;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksdURBQXVEO0lBQ3ZELFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUIsRUFBRSw4QkFBOEIsRUFDYywrQkFBK0I7SUFDaEcsdURBQXVELEVBQUUscUVBQXFFOztBQUVsSTs7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnRybyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVibHVlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogNjBweCAzMHB4IDMwcHggNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmdyYWRpZW50MSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoZGFya3NsYXRlYmx1ZSwgd2hpdGUpO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLXVmbyB7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG4uaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG59XHJcblxyXG4uaGVhZGxpbmUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG59XHJcbmNsaWNrYWJsZSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmxpc3RjYXJkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjgzMDQ4OyAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzg1OTM5OCwgIzI4MzA0OCk7IC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM4NTkzOTgsICMyODMwNDgpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcblxyXG59XHJcbm1hdC1jYXJkOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbn1cclxuXHJcbi5tYXQtYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MEM4Nzg7XHJcbn1cclxuXHJcblxyXG4iXX0= */";

    /***/
  },

  /***/"./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/
  /*! exports provided: HomeComponent */
  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ngx-toastr */"./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(http, router, toastr) {
        _classCallCheck(this, HomeComponent);
        this.http = http;
        this.router = router;
        this.toastr = toastr;
      }
      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUfoList();
        }
      }, {
        key: "getUfoList",
        value: function getUfoList() {
          var _this = this;
          this.http.get('api/ufo/GetUfoList').subscribe(function (data) {
            _this.Ufoer = data;
          }, function (error) {
            return console.log(error);
          });
        }
      }]);
      return HomeComponent;
    }();
    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }];
    };
    HomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-home',
      template: __importDefault(__webpack_require__( /*! raw-loader!./home.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./home.component.css */"./src/app/home/home.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])], HomeComponent);

    /***/
  },

  /***/"./src/app/models/User.ts":
  /*!********************************!*\
    !*** ./src/app/models/User.ts ***!
    \********************************/
  /*! exports provided: User */
  /***/
  function srcAppModelsUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var User = /*#__PURE__*/_createClass(function User() {
      _classCallCheck(this, User);
    });
    /***/
  },
  /***/"./src/app/nav-menu/nav-menu.component.css":
  /*!*************************************************!*\
    !*** ./src/app/nav-menu/nav-menu.component.css ***!
    \*************************************************/
  /*! exports provided: default */
  /***/
  function srcAppNavMenuNavMenuComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "@font-face {\r\n  font-family: stars;\r\n  src: url(\"/assets/fonts/Starcruiser-Ewe4.otf\") format(\"opentype\");\r\n}\r\n\r\na.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.container {\r\n  padding-left: 30px;\r\n  padding-right: 30px;\r\n}\r\n\r\n#nav {\r\n  margin: 0px;\r\n  background-color: aquamarine;\r\n}\r\n\r\n.starlogo {\r\n  font-family: stars;\r\n}\r\n\r\n.logo{\r\n  padding-bottom: 0px;\r\n  height: 50px;\r\n  font-family: stars;\r\n}\r\n\r\n.icon {\r\n  padding: 0px;\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixpRUFBaUU7QUFDbkU7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSw4Q0FBOEM7QUFDaEQiLCJmaWxlIjoic3JjL2FwcC9uYXYtbWVudS9uYXYtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IHN0YXJzO1xyXG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9TdGFyY3J1aXNlci1Fd2U0Lm90ZlwiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcclxufVxyXG5cclxuYS5uYXZiYXItYnJhbmQge1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIGh0bWwge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbiNuYXYge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XHJcbn1cclxuXHJcbi5zdGFybG9nbyB7XHJcbiAgZm9udC1mYW1pbHk6IHN0YXJzO1xyXG59XHJcblxyXG4ubG9nb3tcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBmb250LWZhbWlseTogc3RhcnM7XHJcbn1cclxuLmljb24ge1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG4uYm94LXNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogMCAuMjVyZW0gLjc1cmVtIHJnYmEoMCwgMCwgMCwgLjA1KTtcclxufVxyXG4iXX0= */";

    /***/
  },

  /***/"./src/app/nav-menu/nav-menu.component.ts":
  /*!************************************************!*\
    !*** ./src/app/nav-menu/nav-menu.component.ts ***!
    \************************************************/
  /*! exports provided: NavMenuComponent */
  /***/
  function srcAppNavMenuNavMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function () {
      return NavMenuComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var NavMenuComponent = /*#__PURE__*/function () {
      function NavMenuComponent() {
        _classCallCheck(this, NavMenuComponent);
        this.isExpanded = false;
      }
      _createClass(NavMenuComponent, [{
        key: "collapse",
        value: function collapse() {
          this.isExpanded = false;
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.isExpanded = !this.isExpanded;
        }
      }]);
      return NavMenuComponent;
    }();
    NavMenuComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-nav-menu',
      template: __importDefault(__webpack_require__( /*! raw-loader!./nav-menu.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./nav-menu.component.css */"./src/app/nav-menu/nav-menu.component.css"))["default"]]
    })], NavMenuComponent);

    /***/
  },

  /***/"./src/app/pages/comments/comments.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/pages/comments/comments.component.css ***!
    \*******************************************************/
  /*! exports provided: default */
  /***/
  function srcAppPagesCommentsCommentsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "clickable {\r\n    cursor: pointer;\r\n}\r\n\r\n.listcard {\r\n    margin-bottom: 5px;\r\n    background: #141E30; /* fallback for old browsers */ /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to bottom, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tbWVudHMvY29tbWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CLEVBQUUsOEJBQThCLEVBQ2UsK0JBQStCO0lBQ2pHLHdEQUF3RCxFQUFFLHFFQUFxRTtBQUNuSSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1lbnRzL2NvbW1lbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjbGlja2FibGUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubGlzdGNhcmQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzE0MUUzMDsgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMjQzQjU1LCAjMTQxRTMwKTsgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyNDNCNTUsICMxNDFFMzApOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcbn1cclxuXHJcbiJdfQ== */";

    /***/
  },

  /***/"./src/app/pages/comments/comments.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/comments/comments.component.ts ***!
    \******************************************************/
  /*! exports provided: CommentsComponent */
  /***/
  function srcAppPagesCommentsCommentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CommentsComponent", function () {
      return CommentsComponent;
    });
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ngx-toastr */"./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var CommentsComponent = /*#__PURE__*/function () {
      function CommentsComponent(http, route, router, toastr, formBuilder) {
        _classCallCheck(this, CommentsComponent);
        this.http = http;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.newComment = {
          Id: 0,
          Comments: '',
          UfoId: 0,
          Likes: 0,
          Dislikes: 0
        };
      }
      _createClass(CommentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;
          this.route.paramMap.subscribe(function (param) {
            _this2.ufoId = param.get('id');
          });
          this.getComments(this.ufoId);
        }
      }, {
        key: "getComments",
        value: function getComments(id) {
          var _this3 = this;
          this.http.get('api/Comment/GetComment/' + id).subscribe(function (response) {
            _this3.allComments = response;
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "deleteComment",
        value: function deleteComment(id) {
          var _this4 = this;
          if (confirm("are you sure to delete?")) {
            this.http["delete"]("api/Comment/DeleteComment/" + id).subscribe(function (response) {
              _this4.data = response;
              _this4.message = _this4.data.message;
              if (_this4.message == "comment deleted") {
                _this4.getComments(_this4.ufoId);
                _this4.toastr.success("Comment deleted");
              } else {
                _this4.toastr.error("error");
              }
            }, function (error) {
              console.log(error);
              if (error.status === 401) _this4.toastr.error("Unauthorized, please log in");else _this4.toastr.error("error");
            });
          }
        }
      }, {
        key: "addComment",
        value: function addComment() {
          var _this5 = this;
          this.newComment.UfoId = this.ufoId;
          this.http.post('api/Comment/RegComment', this.newComment).subscribe(function (response) {
            _this5.data = response;
            _this5.message = _this5.data.message;
            if (_this5.message == "comment added") {
              _this5.getComments(_this5.ufoId);
              _this5.toastr.success("Comment added");
              _this5.newComment.Comments = "";
            } else {
              _this5.toastr.error("error");
            }
          }, function (error) {
            console.log(error);
            if (error.status === 401) _this5.toastr.error("Unauthorized, please log in");else _this5.toastr.error("error");
          });
        }
      }, {
        key: "likeComment",
        value: function likeComment(id) {
          var _this6 = this;
          this.http.get("api/Comment/LikeComment/" + id).subscribe(function (response) {
            _this6.data = response;
            _this6.message = _this6.data.message;
            if (_this6.message == "like ok") {
              _this6.getComments(_this6.ufoId);
            } else {
              _this6.toastr.error("error");
            }
          }, function (error) {
            console.log(error);
            if (error.status === 401) _this6.toastr.error("Unauthorized, please log in");else _this6.toastr.error("error");
          });
        }
      }, {
        key: "dislikeComment",
        value: function dislikeComment(id) {
          var _this7 = this;
          this.http.get("api/comment/DislikeComment/" + id).subscribe(function (response) {
            _this7.data = response;
            _this7.message = _this7.data.message;
            if (_this7.message == "dislike ok") {
              _this7.getComments(_this7.ufoId);
            } else {
              _this7.toastr.error("error");
            }
          }, function (error) {
            console.log(error);
            if (error.status === 401) _this7.toastr.error("Unauthorized, please log in");else _this7.toastr.error("error");
          });
        }
      }]);
      return CommentsComponent;
    }();
    CommentsComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };
    CommentsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-comments',
      template: __importDefault(__webpack_require__( /*! raw-loader!./comments.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/comments/comments.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./comments.component.css */"./src/app/pages/comments/comments.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])], CommentsComponent);

    /***/
  },

  /***/"./src/app/pages/edit-ufo/edit-ufo.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/pages/edit-ufo/edit-ufo.component.css ***!
    \*******************************************************/
  /*! exports provided: default */
  /***/
  function srcAppPagesEditUfoEditUfoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".map {\r\n    width: 25%;\r\n    margin-right: 2%;\r\n    float: left;\r\n    position: relative;\r\n    padding-bottom: 75%;\r\n    overflow: hidden;\r\n}\r\n    \r\n\r\n\r\n.map iframe {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 60%;\r\n}\r\n    \r\n\r\n\r\n.editform {\r\n    width: 42%;\r\n    float: left;\r\n}\r\n    \r\n\r\n\r\n.clearfix {\r\n    clear: both\r\n}\r\n    \r\n\r\n\r\nh1 {\r\n    color: #999999;\r\n    font-family: arial, sans-serif;\r\n    font-size: 36px;\r\n    font-weight: bold;\r\n    margin-top: 2px;\r\n    margin-bottom: 1px;\r\n    text-align:center;\r\n}\r\n\r\n\r\n\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdC11Zm8vZWRpdC11Zm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOzs7O0FBSUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsV0FBVztBQUNmOzs7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmOzs7O0FBRUE7SUFDSTtBQUNKOzs7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lZGl0LXVmby9lZGl0LXVmby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcCB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDc1JTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuICAgIFxyXG5cclxuXHJcbi5tYXAgaWZyYW1lIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjAlO1xyXG59XHJcblxyXG4uZWRpdGZvcm0ge1xyXG4gICAgd2lkdGg6IDQyJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uY2xlYXJmaXgge1xyXG4gICAgY2xlYXI6IGJvdGhcclxufVxyXG5oMSB7XHJcbiAgICBjb2xvcjogIzk5OTk5OTtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuICJdfQ== */";

    /***/
  },

  /***/"./src/app/pages/edit-ufo/edit-ufo.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/edit-ufo/edit-ufo.component.ts ***!
    \******************************************************/
  /*! exports provided: EditUfoComponent */
  /***/
  function srcAppPagesEditUfoEditUfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "EditUfoComponent", function () {
      return EditUfoComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ngx-toastr */"./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var EditUfoComponent = /*#__PURE__*/function () {
      function EditUfoComponent(http, router, route, toastr) {
        _classCallCheck(this, EditUfoComponent);
        this.http = http;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.editUfo = {
          id: 0,
          date_time: "",
          country: ' ',
          state: ' ',
          shape: ' ',
          duration: ' ',
          text: '',
          location: "",
          time: ""
        };
      }
      _createClass(EditUfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;
          var id = this.route.snapshot.paramMap.get('id');
          if (id) {
            this.http.get("api/ufo/GetUfo/" + id).subscribe(function (data) {
              _this8.editUfo = data;
              _this8.location = data;
              _this8.maplocation = _this8.location.location;
            });
          }
          this.getCountries();
        }
      }, {
        key: "noStates",
        value: function noStates(state) {
          this.chosenState = state;
          if (state === 'No states available, write in state') {
            this.newState = '<label for="State" style="color: black">State</label> <input type="text" class="form-control" id="State" name="State" [(ngModel)]="State" style="color: black"/>';
          } else {
            this.newState = "";
          }
        }
      }, {
        key: "updateUfo",
        value: function updateUfo() {
          var _this9 = this;
          if (confirm("You are about to make changes, please confirm")) {
            if (this.chosenState === 'No states available, write in state') {
              this.chosenState = document.getElementById('State').value;
            }
            this.editUfo.state = this.chosenState;
            this.http.put("api/ufo/editUfo", this.editUfo).subscribe(function (response) {
              _this9.data = response;
              _this9.message = _this9.data.message;
              if (_this9.message == "Updated") {
                _this9.router.navigate(['home']);
                _this9.toastr.success("Updated");
              } else {
                _this9.toastr.error("error");
              }
            }, function (error) {
              console.log(error);
              if (error.status === 401) _this9.toastr.error("Unauthorized, please log in");else _this9.toastr.error("error");
            });
          }
        }
      }, {
        key: "getCountries",
        value: function getCountries() {
          var _this10 = this;
          this.http.get('api/Cascasding/GetCountries').subscribe(function (data) {
            _this10.countries = data;
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "getStates",
        value: function getStates(event) {
          var _this11 = this;
          this.http.get('api/Cascasding/GetStates/' + event.target.value).subscribe(function (res) {
            _this11.states = res;
          });
        }
      }, {
        key: "deleteUfo",
        value: function deleteUfo(id) {
          var _this12 = this;
          this.id = this.editUfo.id;
          if (confirm('Are you sure to delete?')) {
            this.http["delete"]("api/ufo/deleteUFo/" + id).subscribe(function (response) {
              _this12.data = response;
              _this12.message = _this12.data.message;
              if (_this12.message == "Deleted") {
                _this12.toastr.success("Deleted");
                _this12.router.navigate(['home']);
              } else {
                _this12.toastr.error("error");
              }
            }, function (error) {
              console.log(error);
              if (error.status === 401) _this12.toastr.error("Unauthorized, please log in");else _this12.toastr.error("error");
            });
          }
        }
      }]);
      return EditUfoComponent;
    }();
    EditUfoComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }];
    };
    EditUfoComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-edit-ufo',
      template: __importDefault(__webpack_require__( /*! raw-loader!./edit-ufo.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-ufo/edit-ufo.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./edit-ufo.component.css */"./src/app/pages/edit-ufo/edit-ufo.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])], EditUfoComponent);

    /***/
  },

  /***/"./src/app/pages/linechart/linechart.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/pages/linechart/linechart.component.css ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppPagesLinechartLinechartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpbmVjaGFydC9saW5lY2hhcnQuY29tcG9uZW50LmNzcyJ9 */";

    /***/
  },

  /***/"./src/app/pages/linechart/linechart.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/linechart/linechart.component.ts ***!
    \********************************************************/
  /*! exports provided: LinechartComponent */
  /***/
  function srcAppPagesLinechartLinechartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LinechartComponent", function () {
      return LinechartComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var LinechartComponent = /*#__PURE__*/function () {
      function LinechartComponent() {
        _classCallCheck(this, LinechartComponent);
        this._Ufoer = [];
        this.chart = 'LineChart';
        this.data = [];
        this.title = "Number of observations per year";
        this.myColumnNames = ["OBS", "Date"];
      }
      _createClass(LinechartComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.data = changes.APIdata.currentValue;
        }
      }]);
      return LinechartComponent;
    }();
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Array)], LinechartComponent.prototype, "APIdata", void 0);
    LinechartComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-linechart',
      template: __importDefault(__webpack_require__( /*! raw-loader!./linechart.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/linechart/linechart.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./linechart.component.css */"./src/app/pages/linechart/linechart.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], LinechartComponent);

    /***/
  },

  /***/"./src/app/pages/loginAndRegister/logAndReg.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/loginAndRegister/logAndReg.ts ***!
    \*****************************************************/
  /*! exports provided: LoginAndRegister */
  /***/
  function srcAppPagesLoginAndRegisterLogAndRegTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LoginAndRegister", function () {
      return LoginAndRegister;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var LoginAndRegister = /*#__PURE__*/_createClass(function LoginAndRegister() {
      _classCallCheck(this, LoginAndRegister);
    });
    LoginAndRegister = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      template: __importDefault(__webpack_require__( /*! raw-loader!./logreg.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loginAndRegister/logreg.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./logreg.css */"./src/app/pages/loginAndRegister/logreg.css"))["default"]]
    })], LoginAndRegister);

    /***/
  },

  /***/"./src/app/pages/loginAndRegister/logreg.css":
  /*!***************************************************!*\
    !*** ./src/app/pages/loginAndRegister/logreg.css ***!
    \***************************************************/
  /*! exports provided: default */
  /***/
  function srcAppPagesLoginAndRegisterLogregCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Poppins', sans-serif\r\n}\r\n\r\n.btn-outline-primary {\r\n    margin: 5px;\r\n}\r\n\r\n.container {\r\n    margin: auto;\r\n    width: 500px;\r\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n    border: 15px;\r\n    border-radius: 15px;\r\n}\r\n\r\n.lform {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.logregcont {\r\n    padding: 15px;\r\n}\r\n\r\n.btn {\r\n    padding: 5px;\r\n    margin: 10px;\r\n}\r\n\r\n.bak {\r\n    display: flex;\r\n    background-image: url(\"https://images.unsplash.com/photo-1628449140870-a2370de23f20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80\");\r\n    width: 100%;\r\n    height: 200px;\r\n    color: white;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW5BbmRSZWdpc3Rlci9sb2dyZWcuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLDJDQUEyQztJQUMzQyxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNMQUFzTDtJQUN0TCxXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW5BbmRSZWdpc3Rlci9sb2dyZWcuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmXHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1wcmltYXJ5IHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XHJcbiAgICBib3JkZXI6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4ubGZvcm0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmxvZ3JlZ2NvbnQge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5iYWsge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjI4NDQ5MTQwODcwLWEyMzcwZGUyM2YyMD9peGxpYj1yYi00LjAuMyZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9Njg3JnE9ODBcIik7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiJdfQ== */";

    /***/
  },

  /***/"./src/app/pages/loginform/login.css":
  /*!*******************************************!*\
    !*** ./src/app/pages/loginform/login.css ***!
    \*******************************************/
  /*! exports provided: default */
  /***/
  function srcAppPagesLoginformLoginCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "#lout {\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW5mb3JtL2xvZ2luLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luZm9ybS9sb2dpbi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG91dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */";

    /***/
  },

  /***/"./src/app/pages/loginform/login.ts":
  /*!******************************************!*\
    !*** ./src/app/pages/loginform/login.ts ***!
    \******************************************/
  /*! exports provided: LoginForm */
  /***/
  function srcAppPagesLoginformLoginTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LoginForm", function () {
      return LoginForm;
    });
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ngx-toastr */"./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */
    var _models_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../../models/User */"./src/app/models/User.ts");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var LoginForm = /*#__PURE__*/function () {
      function LoginForm(http, fb, router, toastr) {
        _classCallCheck(this, LoginForm);
        this.http = http;
        this.fb = fb;
        this.router = router;
        this.toastr = toastr;
        this.userLoggedIn = false;
        this.loginValidering = {
          id: [""],
          username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[0-9a-zA-ZæøåÆØÅ. \-]{6,30}")])],
          password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[0-9a-zA-ZæøåÆØÅ. \-]{6,30}")])]
        };
        this.loginskjema = fb.group(this.loginValidering);
      }
      _createClass(LoginForm, [{
        key: "login",
        value: function login() {
          var _this13 = this;
          var user = new _models_User__WEBPACK_IMPORTED_MODULE_5__["User"]();
          user.username = this.loginskjema.value.username;
          user.password = this.loginskjema.value.password;
          this.http.post("api/User/LoggIn/", user).subscribe(function (res) {
            _this13.data = res;
            _this13.message = _this13.data.message;
            if (_this13.message == "logged in") {
              _this13.router.navigate(['/']);
              _this13.userLoggedIn === true;
              _this13.toastr.success("You are logged in");
            } else {
              _this13.toastr.error("Error, please check that username and password is correct");
            }
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this14 = this;
          if (confirm('You are about to log out')) {
            this.http.get("api/User/logout/").subscribe(function (ok) {
              return _this14.router.navigate(['/']) && _this14.userLoggedIn === false && _this14.toastr.success(" You are logged out");
            }), function (e) {
              return console.log(e);
            };
          }
        }
      }]);
      return LoginForm;
    }();
    LoginForm.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };
    LoginForm = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-loginform',
      template: __importDefault(__webpack_require__( /*! raw-loader!./login.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loginform/login.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./login.css */"./src/app/pages/loginform/login.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])], LoginForm);
    ;

    /***/
  },

  /***/"./src/app/pages/map/map.component.css":
  /*!*********************************************!*\
    !*** ./src/app/pages/map/map.component.css ***!
    \*********************************************/
  /*! exports provided: default */
  /***/
  function srcAppPagesMapMapComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "body {\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYXAvbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxufVxyXG4iXX0= */";

    /***/
  },

  /***/"./src/app/pages/map/map.component.ts":
  /*!********************************************!*\
    !*** ./src/app/pages/map/map.component.ts ***!
    \********************************************/
  /*! exports provided: MapComponent */
  /***/
  function srcAppPagesMapMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "MapComponent", function () {
      return MapComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var MapComponent = /*#__PURE__*/function () {
      function MapComponent(http) {
        _classCallCheck(this, MapComponent);
        this.http = http;
        this.kartdata = [];
        this.myColumnNames = ['City', 'Sightings'];
        this.title = "UFO map";
        this.chart = 'GeoChart';
      }
      _createClass(MapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;
          var kdat = [];
          this.http.get('api/ufo/MapData').subscribe(function (data) {
            data.map(function (x) {
              return kdat.push(Object.values(x));
            });
            _this15.kartdata = kdat;
          });
        }
      }]);
      return MapComponent;
    }();
    MapComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };
    MapComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-map',
      template: __importDefault(__webpack_require__( /*! raw-loader!./map.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./map.component.css */"./src/app/pages/map/map.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], MapComponent);

    /***/
  },

  /***/"./src/app/pages/overview/overview.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/pages/overview/overview.component.css ***!
    \*******************************************************/
  /*! exports provided: default */
  /***/
  function srcAppPagesOverviewOverviewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".cont {\r\n    padding-top: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3ZlcnZpZXcvb3ZlcnZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxufSJdfQ== */";

    /***/
  },

  /***/"./src/app/pages/overview/overview.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/overview/overview.component.ts ***!
    \******************************************************/
  /*! exports provided: OverviewComponent */
  /***/
  function srcAppPagesOverviewOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "OverviewComponent", function () {
      return OverviewComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var OverviewComponent = /*#__PURE__*/function () {
      function OverviewComponent(http) {
        _classCallCheck(this, OverviewComponent);
        this.http = http;
        this.data = [];
      }
      _createClass(OverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;
          this.http.get('api/ufo/GetUfoList').subscribe(function (data) {
            if (data) _this16.formatData(data);
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "formatData",
        value: function formatData(ufo) {
          // Maps dates and removes undefined and removes item if beginning of year is not 19 or 20.
          var dates = ufo.map(function (u) {
            return u.date_time;
          }).filter(function (u) {
            if ((u !== null || u === 'undefined') && (u.slice(0, 2) === "19" || u.slice(0, 2) === "20")) {
              return u;
            }
          });
          // Turns time of observations into date of observation
          var years = dates.map(function (u) {
            return u.slice(0, 10);
          });
          years.sort();
          this.mostRecent = years[years.length - 1];
          this.numberOfObs = ufo.length;
          var formatdata = [];
          // Turns time of observations into year of observation
          var year = years.map(function (u) {
            return u.slice(0, 4);
          });
          // Counts number of observations pr year
          var number = 1;
          for (var _i = 0; _i < year.length; _i++) {
            if (year[_i] === year[_i + 1]) {
              number++;
            } else {
              formatdata.push([year[_i], number]);
              number = 1;
            }
          }
          this.data = formatdata;
          var mf = 1;
          var m = 0;
          // Counts top country
          // Algorithm is taken from https://www.w3resource.com/javascript-exercises/javascript-array-exercise-8.php
          for (var i = 0; i < ufo.length; i++) {
            for (var j = i; j < ufo.length; j++) {
              if (ufo[i].country == ufo[j].country) m++;
              if (mf < m) {
                mf = m;
                this.topCountry = ufo[i].country;
              }
            }
            m = 0;
          }
        }
      }]);
      return OverviewComponent;
    }();
    OverviewComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };
    OverviewComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-overview',
      template: __importDefault(__webpack_require__( /*! raw-loader!./overview.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/overview/overview.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./overview.component.css */"./src/app/pages/overview/overview.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], OverviewComponent);

    /***/
  },

  /***/"./src/app/pages/register-ufo/register-ufo.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/pages/register-ufo/register-ufo.component.css ***!
    \***************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppPagesRegisterUfoRegisterUfoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyLXVmby9yZWdpc3Rlci11Zm8uY29tcG9uZW50LmNzcyJ9 */";

    /***/
  },

  /***/"./src/app/pages/register-ufo/register-ufo.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/register-ufo/register-ufo.component.ts ***!
    \**************************************************************/
  /*! exports provided: RegisterUfoComponent */
  /***/
  function srcAppPagesRegisterUfoRegisterUfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RegisterUfoComponent", function () {
      return RegisterUfoComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ngx-toastr */"./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var RegisterUfoComponent = /*#__PURE__*/function () {
      function RegisterUfoComponent(http, router, toastr, fb) {
        _classCallCheck(this, RegisterUfoComponent);
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.fb = fb;
        this.newUfo = {
          id: 0,
          date_time: ' ',
          text: '',
          country: '',
          state: ' ',
          duration: ' ',
          shape: '',
          location: "",
          time: ""
        };
      }
      _createClass(RegisterUfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCountries();
        }
      }, {
        key: "noStates",
        value: function noStates(state) {
          this.chosenState = state;
          if (state === 'No states available, write in state') {
            this.newState = '<label for="State" style="color: black">State</label> <input type="text" class="form-control" id="State" name="State" [(ngModel)]="State" style="color: black"/>';
          } else {
            this.newState = "";
          }
        }
      }, {
        key: "regUfo",
        value: function regUfo() {
          var _this17 = this;
          if (confirm(' confirm Register Ufo?')) {
            if (this.chosenState === 'No states available, write in state') {
              this.chosenState = document.getElementById('State').value;
            }
            this.newUfo.state = this.chosenState;
            this.http.post("api/ufo/regUfo", this.newUfo).subscribe(function (res) {
              _this17.data = res;
              _this17.message = _this17.data.message;
              if (_this17.message == "sighting added") {
                _this17.router.navigate(['home']);
                _this17.toastr.success(_this17.message);
              } else {
                _this17.toastr.error("error");
              }
            }, function (error) {
              console.log(error);
              if (error.status === 401) _this17.toastr.error("Unauthorized, please log in");else _this17.toastr.error("error");
            });
          }
        }
      }, {
        key: "getCountries",
        value: function getCountries() {
          var _this18 = this;
          this.http.get('api/Cascasding/GetCountries').subscribe(function (data) {
            _this18.countries = data;
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "getStates",
        value: function getStates(event) {
          var _this19 = this;
          this.http.get('api/Cascasding/GetStates/' + event.target.value).subscribe(function (res) {
            _this19.states = res;
          });
        }
      }]);
      return RegisterUfoComponent;
    }();
    RegisterUfoComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };
    RegisterUfoComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-register-ufo',
      template: __importDefault(__webpack_require__( /*! raw-loader!./register-ufo.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register-ufo/register-ufo.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./register-ufo.component.css */"./src/app/pages/register-ufo/register-ufo.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])], RegisterUfoComponent);

    /***/
  },

  /***/"./src/app/pages/registerform/register.css":
  /*!*************************************************!*\
    !*** ./src/app/pages/registerform/register.css ***!
    \*************************************************/
  /*! exports provided: default */
  /***/
  function srcAppPagesRegisterformRegisterCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyZm9ybS9yZWdpc3Rlci5jc3MifQ== */";

    /***/
  },

  /***/"./src/app/pages/registerform/register.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/registerform/register.ts ***!
    \************************************************/
  /*! exports provided: RegisterForm */
  /***/
  function srcAppPagesRegisterformRegisterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RegisterForm", function () {
      return RegisterForm;
    });
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ngx-toastr */"./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */
    var _models_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../../models/User */"./src/app/models/User.ts");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var RegisterForm = /*#__PURE__*/function () {
      function RegisterForm(http, fb, router, toastr) {
        _classCallCheck(this, RegisterForm);
        this.http = http;
        this.fb = fb;
        this.router = router;
        this.toastr = toastr;
        this.feedback = "";
        this.registerValidering = {
          id: [""],
          regUsername: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[0-9a-zA-ZøæåØÆÅ\\-. ]{6,30}")])],
          regPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[0-9a-zA-ZøæåØÆÅ\\-. ]{6,30}")])]
        };
        this.registerskjema = fb.group(this.registerValidering);
      }
      _createClass(RegisterForm, [{
        key: "register",
        value: function register() {
          var _this20 = this;
          var user = new _models_User__WEBPACK_IMPORTED_MODULE_5__["User"]();
          user.username = this.registerskjema.value.regUsername;
          user.password = this.registerskjema.value.regPassword;
          this.http.post("api/User/AddUser/", user).subscribe(function (ok) {
            _this20.data = ok;
            _this20.status = _this20.data.status;
            if (_this20.status == "1") {
              _this20.feedback = "";
              _this20.feedback = "registration success, please log in";
            } else {
              _this20.feedback = "Username is taken";
            }
          }, function (error) {
            return console.log(error);
          });
        }
      }]);
      return RegisterForm;
    }();
    RegisterForm.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };
    RegisterForm = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registerform',
      template: __importDefault(__webpack_require__( /*! raw-loader!./register.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registerform/register.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./register.css */"./src/app/pages/registerform/register.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])], RegisterForm);

    /***/
  },

  /***/"./src/app/pipe.ts":
  /*!*************************!*\
    !*** ./src/app/pipe.ts ***!
    \*************************/
  /*! exports provided: SafeHtml */
  /***/
  function srcAppPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SafeHtml", function () {
      return SafeHtml;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    // https://stackoverflow.com/questions/37076867/in-rc-1-some-styles-cant-be-added-using-binding-syntax/37076868#37076868 
    var SafeHtml = /*#__PURE__*/function () {
      function SafeHtml(sanitizer) {
        _classCallCheck(this, SafeHtml);
        this.sanitizer = sanitizer;
      }
      _createClass(SafeHtml, [{
        key: "transform",
        value: function transform(html) {
          if (html == '<label for="State" style="color: black">State</label> <input type="text" class="form-control" id="State" name="State" [(ngModel)]="State" style="color: black"/>') {
            return this.sanitizer.bypassSecurityTrustHtml(html);
          }
          //return this.sanitizer.bypassSecurityTrustStyle(html);
          //return this.sanitizer.bypassSecurityTrustHtml(html);
          // return this.sanitizer.bypassSecurityTrustScript(html);
          // return this.sanitizer.bypassSecurityTrustUrl(html);
          // return this.sanitizer.bypassSecurityTrustResourceUrl(html);
        }
      }]);
      return SafeHtml;
    }();
    SafeHtml.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
      }];
    };
    SafeHtml = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
      name: 'safeHtml'
    }), __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])], SafeHtml);

    /***/
  },

  /***/"./src/environments/environment.ts":
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
    });
    // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var environment = {
      production: false
    };
    /*
     * In development mode, to ignore zone related error stack frames such as
     * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
     * import the following file, but please comment it out in production mode
     * because it will have performance impact when throw error
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/"./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! exports provided: getBaseUrl */
  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "getBaseUrl", function () {
      return getBaseUrl;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/platform-browser-dynamic */"./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./app/app.module */"./src/app/app.module.ts");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./environments/environment */"./src/environments/environment.ts");
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    function getBaseUrl() {
      return document.getElementsByTagName('base')[0].href;
    }
    var providers = [{
      provide: 'BASE_URL',
      useFactory: getBaseUrl,
      deps: []
    }];
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });

    /***/
  },

  /***/0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__( /*! C:\Users\gianm\source\repos\UFOapp-oppgave2\UFO2\ClientApp\src\main.ts */"./src/main.ts");

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
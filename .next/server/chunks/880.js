"use strict";
exports.id = 880;
exports.ids = [880];
exports.modules = {

/***/ 880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class APIService {
  constructor() {
    this.baseUrl = 'https://api.goda-ai.com'; // this.baseUrl = 'http://localhost:8080';
  }

  async fetchData(path, jwtToken = null) {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    if (jwtToken) {
      requestOptions.headers['Authorization'] = `Bearer ${jwtToken}`;
    }

    const url = `${this.baseUrl}/${path}`;

    try {
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return response.json();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error;
    }
  }

  async postData(path, data, jwtToken = null) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    if (jwtToken) {
      requestOptions.headers['Authorization'] = `Bearer ${jwtToken}`;
    }

    const url = `${this.baseUrl}/${path}`;

    try {
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return response.json();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error;
    }
  }

  async postData1(path, data, jwtToken = null) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    if (jwtToken) {
      requestOptions.headers['Authorization'] = `Bearer ${jwtToken}`;
    }

    const url = `${this.baseUrl}/${path}`;

    try {
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return "ok";
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error;
    }
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (APIService);

/***/ })

};
;
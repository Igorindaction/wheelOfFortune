"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var delay = function delay(ms) {
  return new Promise(function (r) {
    return setTimeout(function () {
      return r();
    }, ms);
  });
};

var url = 'https://jsonplaceholder.typicode.com/todos';

function fetchAsyncToDos() {
  return _fetchAsyncToDos.apply(this, arguments);
}

function _fetchAsyncToDos() {
  _fetchAsyncToDos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('fetching toDos');
            _context.prev = 1;
            _context.next = 4;
            return delay(2000);

          case 4:
            _context.next = 6;
            return fetch(url);

          case 6:
            response = _context.sent;
            _context.next = 9;
            return response.json();

          case 9:
            data = _context.sent;
            console.log('data:', data);
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](1);
            console.error(_context.t0);

          case 16:
            _context.prev = 16;
            console.log('операция прошла успешно');
            return _context.finish(16);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 13, 16, 19]]);
  }));
  return _fetchAsyncToDos.apply(this, arguments);
}

fetchAsyncToDos();
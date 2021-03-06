'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var todo = function todo(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) return state;else return Object.assign({}, state, {
        completed: !state.completed
      });
    // {
    //   ...todo,
    //   completed: !todo.completed
    // }
    default:
      return state;
  } // switch
};

var todos = function todos() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case 'ADD_TODO':
      return [].concat(_toConsumableArray(state), [todo(undefined, action)]);
    case 'TOGGLE_TODO':
      return state.map(function (t) {
        return todo(t, action);
      });
    default:
      return state;
  }
};

var visibilityFilter = function visibilityFilter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'SHOW_ALL';
  var action = arguments[1];

  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

//*************

var _Redux = Redux,
    combineReducers = _Redux.combineReducers;

var todoApp = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter
});

var _Redux2 = Redux,
    createStore = _Redux2.createStore;

var store = createStore(todoApp);

//*************

var _React = React,
    Component = _React.Component;


var nextTodoId = 0;

var TodoApp = function (_Component) {
  _inherits(TodoApp, _Component);

  function TodoApp() {
    _classCallCheck(this, TodoApp);

    return _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).apply(this, arguments));
  }

  _createClass(TodoApp, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        null,
        React.createElement('input', { ref: function ref(node) {
            _this2.input = node;
          } }),
        React.createElement(
          'button',
          { onClick: function onClick() {
              store.dispatch({
                type: 'ADD_TODO',
                text: _this2.input.value,
                id: nextTodoId++
              });
              _this2.input.value = '';
            } },
          'Add Todo'
        ),
        React.createElement(
          'ul',
          null,
          this.props.todos.map(function (todo) {
            return React.createElement(
              'li',
              { key: todo.id },
              todo.text
            );
          })
        )
      );
    }
  }]);

  return TodoApp;
}(Component);

var render = function render() {
  ReactDOM.render(React.createElement(TodoApp, {
    todos: store.getState().todos
  }), document.getElementById('root'));
};

store.subscribe(render);
render();
//# sourceMappingURL=C:\Users\Rox and Kevin\Documents\Programming\ZZZ Learning\darr\index.js.map
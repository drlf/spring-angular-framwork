(function () {
  'use strict';
  angular
    .module('com.module.books')
    .config(function ($stateProvider) {
    	console.log('books config......');
      $stateProvider
        .state('app.books', {
          abstract: true,
          url: '/books',
          templateUrl: 'modules/books/views/main.html'
        })
        .state('app.books.list', {
          url: '',
          templateUrl: 'modules/books/views/list.html',
          controllerAs: 'ctrl',
          controller: function (books) {
            this.books = books;
          },
          resolve: {
            books: function (BookService) {
              console.log('resolving book....');
              return BookService.find();
            }
          }
        })
        .state('app.books.add', {
          url: '/add',
          templateUrl: 'modules/books/views/form.html',
          controllerAs: 'ctrl',
          controller: function ($state, BookService, book) {
            this.book = book;
            this.formFields = BookService.getFormFields('add');
            this.formOptions = {};
            this.submit = function () {
              BookService.upsert(this.book).then(function () {
                $state.go('^.list');
              }).catch(function (err) {
                console.log(err);
              });
            };
          },
          resolve: {
            book: function () {
              return {};
            }
          }
        })
        .state('app.books.edit', {
          url: '/edit/:id',
          templateUrl: 'modules/books/views/form.html',
          controllerAs: 'ctrl',
          controller: function ($state, BookService, book) {
            this.book = book;
            this.formFields = BookService.getFormFields('edit');
            this.formOptions = {};
            this.submit = function () {
		        this.book.props='name';
		        this.book.$updatePart().then(function () {
		          $state.go('^.list');
		        });
            };
          },
          resolve: {
            book: function ($stateParams, BookService) {
              return BookService.findById($stateParams.id);
            }
          }
        })
        .state('app.books.view', {
          url: '/view/:id',
          templateUrl: 'modules/books/views/view.html',
          controllerAs: 'ctrl',
          controller: function (book) {
            this.book = book;
          },
          resolve: {
            book: function ($stateParams, BookService) {
              return BookService.findById($stateParams.id);
            }
          }
        })
        .state('app.books.delete', {
          url: '/:id/delete',
          template: '',
          controller: function ($stateParams, $state, BookService) {
            BookService.delete($stateParams.id, function () {
              $state.go('^.list');
            }, function () {
              $state.go('^.list');
            });
          }
        });
    });

})();

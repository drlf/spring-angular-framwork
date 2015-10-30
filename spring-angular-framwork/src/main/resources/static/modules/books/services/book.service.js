(function () {
  'use strict';
  angular
    .module('com.module.books')
    .service('BookService', function ($state, CoreService, Book, gettextCatalog) {

      this.find = function () {
        return Book.query().$promise;
      };

      this.findById = function (id) {
        return Book.get({
          id: id
        }).$promise;
      };

      this.upsert = function (book) {
        return Book.save(book).$promise
          .then(function () {
            CoreService.toastSuccess(
              gettextCatalog.getString('Book saved'),
              gettextCatalog.getString('Your book is safe with us!')
            );
          })
          .catch(function (err) {
            CoreService.toastError(
              gettextCatalog.getString('Error saving book '),
              gettextCatalog.getString('This book could no be saved: ' + err)
            );
          }
        );
      };

      this.delete = function (id, successCb, cancelCb) {
        CoreService.confirm(
          gettextCatalog.getString('Are you sure?'),
          gettextCatalog.getString('Deleting this cannot be undone'),
          function () {
            Book.delete({id: id}, function () {
              CoreService.toastSuccess(
                gettextCatalog.getString('Book deleted'),
                gettextCatalog.getString('Your book is deleted!'));
              successCb();
            }, function (err) {
              CoreService.toastError(
                gettextCatalog.getString('Error deleting book'),
                gettextCatalog.getString('Your book is not deleted! ') + err);
              cancelCb();
            });
          },
          function () {
            cancelCb();
          }
        );
      };


      this.getFormFields = function (formType) {
        var form = [
          {
            key: 'name',
            type: 'input',
            templateOptions: {
              label: 'Bookname',
              required: true
            }
          },
          {
            key: 'sid',
            type: 'input',
            templateOptions: {
              label: 'sid',
              required: true
            }
          }
        ];
        return form;
      };

    });

})();

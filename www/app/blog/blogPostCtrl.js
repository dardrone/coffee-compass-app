(function () {
  'use strict';

  angular
    .module('blog')
    .controller('blogPostCtrl', blogPostCtrl);

  blogPostCtrl.$inject = ['coffeeCompassApi','$stateParams'];

  /* @ngInject */
  function blogPostCtrl(coffeeCompassApi,$stateParams) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = 'blogPostCtrl';
    vm.postId = $stateParams.id;
    vm.blogPost = [];

    vm.loadPost = function () {
      coffeeCompassApi.getRecentBlogPosts(false).then(function (data) {
        vm.BlogPost = _.find(data.posts, {id: parseInt(vm.postId)});
      }).finally(function () {
        $scope.$broadcast('scroll.refreshComplete');
      });
    }

    activate();

    ////////////////


    function activate() {
      vm.loadPost();
    }

  }
})();
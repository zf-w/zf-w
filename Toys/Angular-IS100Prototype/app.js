(function () {
    "use strict";

    angular.module("App", [])
    .controller("Controller", Controller)
    .controller("NavbarController", Navbar)
    .service('Service', Service);

    function Service() {
        var service = this;
        var postsList = [];
        var post = {
            title : "Lorem",
            likes : 0,
            content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        };
        for (var i = 0; i < 5; i++) {
            postsList.push(Object.create(post));
        }
        service.pageState = [1];
        service.current = ["Read"];

        service.getList = function () {
            return postsList;
        }

        service.addPosts = function (title, content) {
            var newObj = Object.create(post);
            newObj.title = title;
            newObj.content = content;
            postsList.unshift(newObj);
        }

        service.toProfile = function () {
            service.pageState[0] = 0;
            service.current[0] = "Profile";
        }
        service.toIndex = function () {
            service.pageState[0] = 1;
            service.current[0] = "Read";
        }
        service.toPost = function () {
            service.pageState[0] = 2;
            service.current[0] = "Post";
        }
        service.toFind = function () {
            service.pageState[0] = 3;
            service.current[0] = "Find";
        }
        service.toStudy = function () {
            service.pageState[0] = 4;
            service.current[0] = "Study";
        }
    }

    Navbar.$inject = ['Service'];
    function Navbar (service) {
        var nav = this;
        nav.current = service.current;
        nav.pageState = service.pageState;
        nav.toProfile = function () {
            service.toProfile();
        }
        nav.toIndex = function () {
            service.toIndex();
        }
        nav.toPost = function () {
            service.toPost();
        }
        nav.toFind = function () {
            service.toFind();
        }
        nav.toStudy = function () {
            service.toStudy();
        }
    }
    
    Controller.$inject = ['Service'];
    function Controller(Service) {
        var ctrl = this;
        ctrl.title = "";
        ctrl.content = "";
        ctrl.postsList = Service.getList();
        ctrl.friendList = ['a', 'b', 'c'];
        ctrl.studyList = ['a', 'b', 'c', 'd'];
        ctrl.pageState = Service.pageState;

        ctrl.valid = false;

        ctrl.check = function () {
            if (ctrl.title.length > 3 && ctrl.content.length > 10) {
                ctrl.valid = true;
                return true;
            } else {
                ctrl.valid = false;
                return false;
            }
        }
        ctrl.like = function (index) {
            ctrl.postsList[index].likes++;
        }
        ctrl.addPosts = function () {
            Service.addPosts(ctrl.title, ctrl.content);
            Service.toIndex();
            ctrl.title = "";
            ctrl.content = "";
            ctrl.valid = false;
        }
    }
})();

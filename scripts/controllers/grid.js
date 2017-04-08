'use strict';
angular.module('mainApp', ['ngRoute', 'ngTouch', 'ui.grid', 'ui.grid.resizeColumns',
    'ui.grid.moveColumns',
    'ui.grid.pinning', 'ui.grid.grouping',
    'ui.grid.pagination', 'ui.grid.selection', 'ui.grid.exporter', 'ui.grid.importer'])

    .controller('grdContrl', ['$scope', '$http', '$q', function ($scope, $http, $q) {

        $scope.gridOptions = {
            saveFocus: false,
            saveScroll: true,
            saveGroupingExpandedStates: true,
            enableFiltering: true,
            enableGridMenu: true
        };

        $scope.gridOptions.columnDefs = [
            { name: 'RollNo', field: 'id'  },
            { name: 'Name of the Student', field: 'name' },
            { name: 'Gender', field: 'gender' },
            { name: 'Date Of Birth', field: 'dob' },
            { name: 'Location', field: 'city'  },
        ];

        var canceler = $q.defer();
        $http.get('data/stud.json', { timeout: canceler.promise })
            .success(function (data) {
                $scope.gridOptions.data = data;
            });

        $scope.$on('$destroy', function () {
            canceler.resolve();
        });
    }])

    .controller('grdMasters', ['$scope', '$rootScope', '$http', '$q', '$mdDialog', function ($scope, $rootScope, $http, $q, $mdDialog)
    {
        var vm = this;

        $scope.gridMasters = {
            enableRowSelection: true,
            enableRowHeaderSelection: false,
            multiSelect: false,
            enableSorting: true,
            enableFiltering: false,
            enableGridMenu: true,
            onRegisterApi: function (gridApi) {
                $scope.gridApi = gridApi;
            },
            appScopeProvider: {
                onDblClick: function (row)
                {
                    vm.entity = angular.copy(row.entity);

                    $scope.mas_type = [{ "id": 2, "typeid": 0, "t_title": null, "title": "Institution", "desc": "Institution", "isactive": false, "active": "Yes" }];

                   // $scope.mas_type = vm.entity.id;
                    $scope.mas_title = vm.entity.title;
                    $scope.mas_desc = vm.entity.desc;
                    $scope.mas_remarks = vm.entity.desc;
                    $scope.mas_isactive = vm.entity.active=='Yes' ? true : false;

                    $mdDialog.show({
                        parent: angular.element(document.body),
                        templateUrl: 'views/pages/EditMaster.html',
                        controller: function Ct() { console.log(vm.entity);},
                        scope: $scope.$new(),
                        clickOutsideToClose: false
                    })
                }
            },
            rowTemplate: "<div ng-dblclick=\"grid.appScope.onDblClick(row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell ></div>"
        };

        $scope.gridMasters.columnDefs = [
            { name: 'S.No', field: 'id', groupable: false, enableCellEdit: false },
            { name: 'Type', field: 't_title', groupable: true, enableCellEdit: false },
            { name: 'Title', field: 'title', groupable: false, enableCellEdit: false },
            { name: 'Description', field: 'desc', groupable: false, enableCellEdit: false},
            { name: 'Active', field: 'active', groupable: false, enableCellEdit: false }
        ];

        $scope.loadmasters = function () {
            var canceler = $q.defer();
            $http.get('/api/MasType/1/1', { timeout: canceler.promise })
                .success(function (data) {
                    $scope.gridMasters.data = data;
                });
            $scope.$on('$destroy', function () {
                canceler.resolve();
            });
        };

        $scope.loadmasters();

        $rootScope.$on('reloadmasters', function () {
            $scope.loadmasters();
        });
    }])


    .controller('ImportCon', ['$scope', '$http', '$interval', '$q', function ($scope, $http, $interval, $q) {
        $scope.data = [];
        $scope.gridOptions =
            {
                saveFocus: false,
                saveScroll: true,
                saveGroupingExpandedStates: true,
                enableFiltering: true,
                enableGridMenu: true,
                importerDataAddCallback: function (grid, newObjects) {
                    $scope.data = $scope.data.concat(newObjects);
                },
                onRegisterApi: function (gridApi) {
                    $scope.gridApi = gridApi;
                    gridApi.rowEdit.on.saveRow($scope, $scope.saveRow);
                },
                data: 'data'
            };

        $scope.state = {};

        $scope.saveState = function () {
            $scope.state = $scope.gridApi.saveState.save();
        };

        $scope.restoreState = function () {
            $scope.gridApi.saveState.restore($scope, $scope.state);
        };

        $scope.saveRow = function (rowEntity) {
            var promise = $q.defer();
            $scope.gridApi.rowEdit.setSavePromise(rowEntity, promise.promise);

            $interval(function () {
                if (rowEntity.Gender === 'male') {
                    promise.reject();
                } else {
                    promise.resolve();
                }
            }, 3000, 1);
        };

        var handleFileSelect = function (event) {
            var target = event.srcElement || event.target;

            if (target && target.files && target.files.length === 1) {
                var fileObject = target.files[0];
                $scope.gridApi.importer.importFile(fileObject);
                target.form.reset();
            }
        };

        var fileChooser = document.querySelectorAll('.file-chooser');

        if (fileChooser.length !== 1) {
            console.log('Found > 1 or < 1 file choosers within the menu item, error, cannot continue');
        } else {
            fileChooser[0].addEventListener('change', handleFileSelect, false);
        }
    }])

    .controller('masterCon', ['$timeout', '$scope', '$mdDialog', '$http', '$route', function ($timeout, $scope, $mdDialog, $http, $route)
    {
        var post = $http({
            method: "GET",
            url: "/api/MasType",
            dataType: 'json',
            headers: { "Content-Type": "application/json" }
        });
        post.success(function (data, status) {
            $scope.masters = data;
        });
        post.error(function (data, status) {
            $window.alert(data.Message);
        });

        $scope.Refresh = function () {
            $scope.$emit('reloadmasters');
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.addnew = function ($route)
        {
            if ($scope.mas_type == true) 
                $scope.items = { "id": 0, "typeid": 0, "title": $scope.mas_title, "desc": $scope.mas_desc, "isactive": $scope.mas_status };
            else 
                $scope.items = { "id": 0, "typeid": $scope.master ? $scope.master.id : 0, "title": $scope.mas_title, "desc": $scope.mas_desc, "isactive": $scope.mas_status };

            var config = {
                method: "POST",
                url: "/api/MasType",
                data: $scope.items
            };
            $http(config);
            $mdDialog.hide();

            $scope.$emit('reloadmasters');
        };


        $scope.AddNewMaster = function (ev) {
            $mdDialog.show({
                templateUrl: 'views/pages/AddEditMaster.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: false
            })
        };

        $scope.EditMaster = function (ev)
        {
            $mdDialog.show({
                controller: DialogCtrl,
                templateUrl: 'views/pages/EditMaster.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: false
            })
        };
       
    }]);
   

define(['jquery', 'angular', 'widget!tm/widgets/modalDialog'], function($, angular) {

	var data = {
		legend: 'angular-integration',
		html: '<div id="angular-integration" ng-controller="angularIntegrationCtrl">\n' +
			'	<div tm-modal-dialog="objectToEdit">\n' +
			'		<div class="modal-header">\n' +
			'			<h3>Angular Integration</h3>\n' +
			'		</div>\n' +
			'		<div class="modal-body">\n' +
			'			<p>Enter name</p>\n' +
			'			<input type="text" ng-model="objectToEdit.name" />\n' +
			'		</div>\n' +
			'		<div class="modal-footer">\n' +
			'			<button type="button" ng-click="cancel()" class="btn">Cancel</button>\n' +
			'			<button type="button" ng-click="save()" class="btn btn-primary">Save</button>\n' +
			'		</div>\n' +
			'	</div>\n' +
			'	<p><button type="button" class="btn btn-primary" ng-click="edit()">Click me</button></p>\n' +
			'</div>',
		setupString: "function() {\n \
			var app = angular.module('angular-integration', []);\n \
\n \
			app.controller('angularIntegrationCtrl', function($scope) {\n \
				var o = {\n \
					name: ''\n \
				};\n \
\n \
				$scope.edit = function() {\n \
					$scope.objectToEdit = {\n \
						name: o.name\n \
					};\n \
				};\n \
\n \
				$scope.save = function() {\n \
					o = $scope.objectToEdit;\n \
\n \
					$scope.objectToEdit = null;\n \
				};\n \
\n \
				$scope.cancel = function() {\n \
					$scope.objectToEdit = null;\n \
				};\n \
\n \
				$scope.objectToEdit = null;\n \
			});\n \
\n \
			app.directive('tmModalDialog', function() {\n \
				return {\n \
					scope: true,\n \
					link: function(scope, iElement, iAttrs) {\n \
						var dialog = iElement.tmModalDialog();\n \
\n \
						scope.$watch(iAttrs.tmModalDialog, function(newValue) {\n \
							dialog.tmModalDialog(newValue ? 'show' : 'hide');\n \
						});\n \
\n \
						scope.$on('$destroy', function() {\n \
							iElement.tmModalDialog('destroy');\n \
						});\n \
					}\n \
				};\n \
			});\n \
\n \
			angular.bootstrap('#angular-integration', ['angular-integration']);\n \
		}"
	};

	data.setup = new Function('$', 'angular', 'return ' + data.setupString).call(this, $, angular);

	return data;

});

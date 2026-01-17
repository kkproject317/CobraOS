/**
 * CropGuard - Cyber-Resilient Agriculture Monitoring Platform
 * Single AngularJS Application File with Mock Data
 */

(function() {
    'use strict';

    // ============================================
    // MOCK DATA
    // ============================================
    
    var MOCK_DATA = {
        user: {
            id: 1,
            name: 'Nidhi Patel',
            email: 'nidhipatel2005@gmail.com',
            role: 'Farmer',
            created_at: '2024-01-15T10:30:00Z'
        },
        farms: [
            { id: 1, name: 'Green Valley Farm', area: 150.5, latitude: 28.6139, longitude: 77.2090, is_active: true, created_at: '2024-01-10T08:00:00Z' },
            { id: 2, name: 'Sunrise Organic Farm', area: 200.0, latitude: 19.0760, longitude: 72.8777, is_active: true, created_at: '2024-01-12T09:30:00Z' },
            { id: 3, name: 'Krishna Agro Fields', area: 175.25, latitude: 13.0827, longitude: 80.2707, is_active: true, created_at: '2024-01-14T11:00:00Z' },
            { id: 4, name: 'Punjab Golden Harvest', area: 300.0, latitude: 31.1471, longitude: 75.3412, is_active: true, created_at: '2024-01-16T14:00:00Z' },
            { id: 5, name: 'Deccan Plateau Farm', area: 125.75, latitude: 17.3850, longitude: 78.4867, is_active: false, created_at: '2024-01-18T16:30:00Z' }
        ],
        devices: [
            { id: 1, name: 'Soil Sensor Alpha', type: 'Soil Sensor', farm_id: 1, farm_name: 'Green Valley Farm', os: 'SensorOS 2.1', is_active: true, baseline_lat: 28.6139, baseline_long: 77.2090, last_seen: '2024-01-20T10:00:00Z', created_at: '2024-01-10T08:30:00Z', owner_user_id: 1 },
            { id: 2, name: 'Weather Station Beta', type: 'Weather Station', farm_id: 1, farm_name: 'Green Valley Farm', os: 'WeatherOS 3.0', is_active: true, baseline_lat: 28.6145, baseline_long: 77.2095, last_seen: '2024-01-20T09:55:00Z', created_at: '2024-01-10T09:00:00Z', owner_user_id: 1 },
            { id: 3, name: 'Irrigation Controller 01', type: 'Controller', farm_id: 2, farm_name: 'Sunrise Organic Farm', os: 'IrrigateOS 1.5', is_active: true, baseline_lat: 19.0760, baseline_long: 72.8777, last_seen: '2024-01-20T09:45:00Z', created_at: '2024-01-12T10:00:00Z', owner_user_id: 1 },
            { id: 4, name: 'Gateway Hub Central', type: 'Gateway', farm_id: 2, farm_name: 'Sunrise Organic Farm', os: 'GatewayOS 4.2', is_active: true, baseline_lat: 19.0765, baseline_long: 72.8780, last_seen: '2024-01-20T09:50:00Z', created_at: '2024-01-12T10:30:00Z', owner_user_id: 1 },
            { id: 5, name: 'Soil Sensor Gamma', type: 'Soil Sensor', farm_id: 3, farm_name: 'Krishna Agro Fields', os: 'SensorOS 2.1', is_active: true, baseline_lat: 13.0827, baseline_long: 80.2707, last_seen: '2024-01-20T09:40:00Z', created_at: '2024-01-14T11:30:00Z', owner_user_id: 1 },
            { id: 6, name: 'Weather Station Delta', type: 'Weather Station', farm_id: 3, farm_name: 'Krishna Agro Fields', os: 'WeatherOS 3.0', is_active: false, baseline_lat: 13.0830, baseline_long: 80.2710, last_seen: '2024-01-19T18:00:00Z', created_at: '2024-01-14T12:00:00Z', owner_user_id: 1 },
            { id: 7, name: 'Irrigation Controller 02', type: 'Controller', farm_id: 4, farm_name: 'Punjab Golden Harvest', os: 'IrrigateOS 1.5', is_active: true, baseline_lat: 31.1471, baseline_long: 75.3412, last_seen: '2024-01-20T09:30:00Z', created_at: '2024-01-16T14:30:00Z', owner_user_id: 1 },
            { id: 8, name: 'Gateway Hub North', type: 'Gateway', farm_id: 4, farm_name: 'Punjab Golden Harvest', os: 'GatewayOS 4.2', is_active: true, baseline_lat: 31.1475, baseline_long: 75.3415, last_seen: '2024-01-20T09:35:00Z', created_at: '2024-01-16T15:00:00Z', owner_user_id: 1 },
            { id: 9, name: 'Soil Sensor Epsilon', type: 'Soil Sensor', farm_id: 5, farm_name: 'Deccan Plateau Farm', os: 'SensorOS 2.0', is_active: false, baseline_lat: 17.3850, baseline_long: 78.4867, last_seen: '2024-01-18T20:00:00Z', created_at: '2024-01-18T17:00:00Z', owner_user_id: 1 },
            { id: 10, name: 'Weather Station Zeta', type: 'Weather Station', farm_id: 5, farm_name: 'Deccan Plateau Farm', os: 'WeatherOS 2.5', is_active: false, baseline_lat: 17.3855, baseline_long: 78.4870, last_seen: '2024-01-18T19:30:00Z', created_at: '2024-01-18T17:30:00Z', owner_user_id: 1 }
        ],
        records: [
            { id: 1, event_id: 'EVT-001', device_id: 1, device_name: 'Soil Sensor Alpha', farm_id: 1, farm_name: 'Green Valley Farm', prediction: 'Normal', anomaly_score: 0.12, confidence: 0.95, response_action: 'None', latitude: 28.6139, longitude: 77.2090, reasons: 'All sensor readings within expected parameters. Soil moisture at 45%, temperature at 22°C.', processed_at: '2024-01-20T10:00:00Z', asset_type: 'Soil Sensor' },
            { id: 2, event_id: 'EVT-002', device_id: 2, device_name: 'Weather Station Beta', farm_id: 1, farm_name: 'Green Valley Farm', prediction: 'Normal', anomaly_score: 0.08, confidence: 0.97, response_action: 'None', latitude: 28.6145, longitude: 77.2095, reasons: 'Weather data consistent with regional forecasts. No anomalies detected.', processed_at: '2024-01-20T09:55:00Z', asset_type: 'Weather Station' },
            { id: 3, event_id: 'EVT-003', device_id: 3, device_name: 'Irrigation Controller 01', farm_id: 2, farm_name: 'Sunrise Organic Farm', prediction: 'Suspicious', anomaly_score: 0.45, confidence: 0.82, response_action: 'Alert Sent', latitude: 19.0760, longitude: 72.8777, reasons: 'Unusual command sequence detected. Water flow rate 20% higher than scheduled. Possible misconfiguration or unauthorized access attempt.', processed_at: '2024-01-20T09:45:00Z', asset_type: 'Controller' },
            { id: 4, event_id: 'EVT-004', device_id: 4, device_name: 'Gateway Hub Central', farm_id: 2, farm_name: 'Sunrise Organic Farm', prediction: 'Normal', anomaly_score: 0.15, confidence: 0.91, response_action: 'None', latitude: 19.0765, longitude: 72.8780, reasons: 'Network traffic patterns normal. All connected devices responding within expected latency.', processed_at: '2024-01-20T09:50:00Z', asset_type: 'Gateway' },
            { id: 5, event_id: 'EVT-005', device_id: 5, device_name: 'Soil Sensor Gamma', farm_id: 3, farm_name: 'Krishna Agro Fields', prediction: 'Anomaly', anomaly_score: 0.78, confidence: 0.88, response_action: 'Device Isolated', latitude: 13.0827, longitude: 80.2707, reasons: 'GPS location drift detected (>500m from baseline). Possible device tampering or relocation. Sensor readings inconsistent with neighboring devices.', processed_at: '2024-01-20T09:40:00Z', asset_type: 'Soil Sensor' },
            { id: 6, event_id: 'EVT-006', device_id: 6, device_name: 'Weather Station Delta', farm_id: 3, farm_name: 'Krishna Agro Fields', prediction: 'Anomaly', anomaly_score: 0.85, confidence: 0.92, response_action: 'Device Isolated', latitude: 13.0830, longitude: 80.2710, reasons: 'Device offline for extended period. Last known readings showed temperature spike inconsistent with regional data. Possible hardware failure or cyber attack.', processed_at: '2024-01-19T18:00:00Z', asset_type: 'Weather Station' },
            { id: 7, event_id: 'EVT-007', device_id: 7, device_name: 'Irrigation Controller 02', farm_id: 4, farm_name: 'Punjab Golden Harvest', prediction: 'Normal', anomaly_score: 0.10, confidence: 0.96, response_action: 'None', latitude: 31.1471, longitude: 75.3412, reasons: 'Irrigation schedule executed as planned. Water consumption within expected range.', processed_at: '2024-01-20T09:30:00Z', asset_type: 'Controller' },
            { id: 8, event_id: 'EVT-008', device_id: 8, device_name: 'Gateway Hub North', farm_id: 4, farm_name: 'Punjab Golden Harvest', prediction: 'Suspicious', anomaly_score: 0.52, confidence: 0.79, response_action: 'Alert Sent', latitude: 31.1475, longitude: 75.3415, reasons: 'Unusual login attempt from unrecognized IP address. Authentication successful but access pattern differs from historical baseline.', processed_at: '2024-01-20T09:35:00Z', asset_type: 'Gateway' },
            { id: 9, event_id: 'EVT-009', device_id: 9, device_name: 'Soil Sensor Epsilon', farm_id: 5, farm_name: 'Deccan Plateau Farm', prediction: 'Anomaly', anomaly_score: 0.91, confidence: 0.94, response_action: 'Device Isolated', latitude: 17.3850, longitude: 78.4867, reasons: 'Communication protocol violation detected. Device sending malformed packets. Possible firmware corruption or injection attack.', processed_at: '2024-01-18T20:00:00Z', asset_type: 'Soil Sensor' },
            { id: 10, event_id: 'EVT-010', device_id: 10, device_name: 'Weather Station Zeta', farm_id: 5, farm_name: 'Deccan Plateau Farm', prediction: 'Suspicious', anomaly_score: 0.48, confidence: 0.85, response_action: 'Alert Sent', latitude: 17.3855, longitude: 78.4870, reasons: 'Data transmission frequency increased by 300%. Possible data exfiltration attempt or sensor malfunction.', processed_at: '2024-01-18T19:30:00Z', asset_type: 'Weather Station' },
            { id: 11, event_id: 'EVT-011', device_id: 1, device_name: 'Soil Sensor Alpha', farm_id: 1, farm_name: 'Green Valley Farm', prediction: 'Normal', anomaly_score: 0.11, confidence: 0.94, response_action: 'None', latitude: 28.6139, longitude: 77.2090, reasons: 'Routine check passed. All parameters nominal.', processed_at: '2024-01-20T08:00:00Z', asset_type: 'Soil Sensor' },
            { id: 12, event_id: 'EVT-012', device_id: 3, device_name: 'Irrigation Controller 01', farm_id: 2, farm_name: 'Sunrise Organic Farm', prediction: 'Normal', anomaly_score: 0.18, confidence: 0.89, response_action: 'None', latitude: 19.0760, longitude: 72.8777, reasons: 'Morning irrigation cycle completed successfully.', processed_at: '2024-01-20T07:30:00Z', asset_type: 'Controller' },
            { id: 13, event_id: 'EVT-013', device_id: 5, device_name: 'Soil Sensor Gamma', farm_id: 3, farm_name: 'Krishna Agro Fields', prediction: 'Suspicious', anomaly_score: 0.55, confidence: 0.81, response_action: 'Alert Sent', latitude: 13.0827, longitude: 80.2707, reasons: 'Minor GPS drift detected. Monitoring for further anomalies.', processed_at: '2024-01-20T06:00:00Z', asset_type: 'Soil Sensor' },
            { id: 14, event_id: 'EVT-014', device_id: 7, device_name: 'Irrigation Controller 02', farm_id: 4, farm_name: 'Punjab Golden Harvest', prediction: 'Normal', anomaly_score: 0.09, confidence: 0.97, response_action: 'None', latitude: 31.1471, longitude: 75.3412, reasons: 'Evening irrigation cycle completed. Water usage optimal.', processed_at: '2024-01-19T18:30:00Z', asset_type: 'Controller' },
            { id: 15, event_id: 'EVT-015', device_id: 2, device_name: 'Weather Station Beta', farm_id: 1, farm_name: 'Green Valley Farm', prediction: 'Normal', anomaly_score: 0.07, confidence: 0.98, response_action: 'None', latitude: 28.6145, longitude: 77.2095, reasons: 'Daily weather summary generated. All readings consistent.', processed_at: '2024-01-19T23:59:00Z', asset_type: 'Weather Station' }
        ],
        devicesData: [
            { date: 'Jan 10', active: 2, inactive: 0 }, { date: 'Jan 11', active: 3, inactive: 0 }, { date: 'Jan 12', active: 4, inactive: 0 },
            { date: 'Jan 13', active: 5, inactive: 0 }, { date: 'Jan 14', active: 6, inactive: 1 }, { date: 'Jan 15', active: 6, inactive: 1 },
            { date: 'Jan 16', active: 7, inactive: 1 }, { date: 'Jan 17', active: 8, inactive: 1 }, { date: 'Jan 18', active: 7, inactive: 3 },
            { date: 'Jan 19', active: 7, inactive: 3 }, { date: 'Jan 20', active: 7, inactive: 3 }
        ],
        predictionDistribution: { normal: 8, suspicious: 4, anomaly: 3 }
    };

    // ============================================
    // MODULE DEFINITION & CONFIG
    // ============================================
    
    angular.module('cropGuardApp', ['ngRoute'])
        
        .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
            
            $routeProvider
                .when('/', {
                    templateUrl: 'landing.html',
                    controller: 'LandingController',
                    controllerAs: 'vm'
                })
                .when('/login', {
                    templateUrl: 'login.html',
                    controller: 'LoginController',
                    controllerAs: 'vm'
                })
                .when('/dashboard', {
                    redirectTo: '/dashboard/analytics'
                })
                .when('/dashboard/analytics', {
                    templateUrl: 'dashboard.html',
                    controller: 'DashboardController',
                    controllerAs: 'vm',
                    resolve: {
                        auth: ['AuthService', '$location', function(AuthService, $location) {
                            if (!AuthService.isAuthenticated()) {
                                $location.path('/login');
                            }
                        }]
                    }
                })
                .when('/dashboard/farms', {
                    templateUrl: 'dashboard.html',
                    controller: 'DashboardController',
                    controllerAs: 'vm',
                    resolve: {
                        auth: ['AuthService', '$location', function(AuthService, $location) {
                            if (!AuthService.isAuthenticated()) {
                                $location.path('/login');
                            }
                        }]
                    }
                })
                .when('/dashboard/farms/:id', {
                    templateUrl: 'dashboard.html',
                    controller: 'DashboardController',
                    controllerAs: 'vm',
                    resolve: {
                        auth: ['AuthService', '$location', function(AuthService, $location) {
                            if (!AuthService.isAuthenticated()) {
                                $location.path('/login');
                            }
                        }]
                    }
                })
                .when('/dashboard/devices', {
                    templateUrl: 'dashboard.html',
                    controller: 'DashboardController',
                    controllerAs: 'vm',
                    resolve: {
                        auth: ['AuthService', '$location', function(AuthService, $location) {
                            if (!AuthService.isAuthenticated()) {
                                $location.path('/login');
                            }
                        }]
                    }
                })
                .when('/dashboard/devices/:id', {
                    templateUrl: 'dashboard.html',
                    controller: 'DashboardController',
                    controllerAs: 'vm',
                    resolve: {
                        auth: ['AuthService', '$location', function(AuthService, $location) {
                            if (!AuthService.isAuthenticated()) {
                                $location.path('/login');
                            }
                        }]
                    }
                })
                .when('/dashboard/records', {
                    templateUrl: 'dashboard.html',
                    controller: 'DashboardController',
                    controllerAs: 'vm',
                    resolve: {
                        auth: ['AuthService', '$location', function(AuthService, $location) {
                            if (!AuthService.isAuthenticated()) {
                                $location.path('/login');
                            }
                        }]
                    }
                })
                .when('/dashboard/geographic', {
                    templateUrl: 'dashboard.html',
                    controller: 'DashboardController',
                    controllerAs: 'vm',
                    resolve: {
                        auth: ['AuthService', '$location', function(AuthService, $location) {
                            if (!AuthService.isAuthenticated()) {
                                $location.path('/login');
                            }
                        }]
                    }
                })
                .when('/dashboard/account', {
                    templateUrl: 'dashboard.html',
                    controller: 'DashboardController',
                    controllerAs: 'vm',
                    resolve: {
                        auth: ['AuthService', '$location', function(AuthService, $location) {
                            if (!AuthService.isAuthenticated()) {
                                $location.path('/login');
                            }
                        }]
                    }
                })
                .otherwise({
                    redirectTo: '/'
                });

            // Use hash-based URLs so it works without a server
            $locationProvider.hashPrefix('');
        }]);

    // ============================================
    // DATA SERVICE (Mock Data)
    // ============================================
    
    angular.module('cropGuardApp')
        .factory('DataService', ['$q', function($q) {
            return {
                getFarms: function() { return $q.resolve(MOCK_DATA.farms); },
                getFarm: function(id) {
                    var farm = MOCK_DATA.farms.find(function(f) { return f.id === id; });
                    return farm ? $q.resolve(farm) : $q.reject({ message: 'Farm not found' });
                },
                getDevices: function() { return $q.resolve(MOCK_DATA.devices); },
                getDevice: function(id) {
                    var device = MOCK_DATA.devices.find(function(d) { return d.id === id; });
                    return device ? $q.resolve(device) : $q.reject({ message: 'Device not found' });
                },
                getDevicesByFarm: function(farmId) {
                    var devices = MOCK_DATA.devices.filter(function(d) { return d.farm_id === farmId; });
                    return $q.resolve(devices);
                },
                getRecords: function() { return $q.resolve(MOCK_DATA.records); },
                getDevicesData: function() { return $q.resolve(MOCK_DATA.devicesData); },
                getPredictionDistribution: function() { return $q.resolve(MOCK_DATA.predictionDistribution); },
                getRecordsTimelineData: function() {
                    // Generate records timeline from actual records data by event
                    var records = MOCK_DATA.records.slice().sort(function(a, b) {
                        return new Date(a.processed_at) - new Date(b.processed_at);
                    });
                    var data = records.map(function(r) {
                        return { event: r.event_id, score: r.anomaly_score, prediction: r.prediction };
                    });
                    return $q.resolve(data);
                },
                getRecordsByDeviceType: function() {
                    var counts = {};
                    MOCK_DATA.records.forEach(function(r) {
                        counts[r.asset_type] = (counts[r.asset_type] || 0) + 1;
                    });
                    return $q.resolve(counts);
                },
                getResponseActionsData: function() {
                    var counts = { 'None': 0, 'Alert Sent': 0, 'Device Isolated': 0 };
                    MOCK_DATA.records.forEach(function(r) {
                        if (counts.hasOwnProperty(r.response_action)) {
                            counts[r.response_action]++;
                        }
                    });
                    return $q.resolve(counts);
                },
                getAnomalyScoreByFarm: function() {
                    var farmData = {};
                    MOCK_DATA.records.forEach(function(r) {
                        if (!farmData[r.farm_name]) {
                            farmData[r.farm_name] = { total: 0, count: 0 };
                        }
                        farmData[r.farm_name].total += r.anomaly_score;
                        farmData[r.farm_name].count++;
                    });
                    var result = [];
                    for (var farm in farmData) {
                        result.push({ farm: farm, avgScore: farmData[farm].total / farmData[farm].count });
                    }
                    return $q.resolve(result.sort(function(a, b) { return b.avgScore - a.avgScore; }));
                },
                getMapEvents: function() {
                    var events = MOCK_DATA.records.map(function(r) {
                        return {
                            id: r.event_id,
                            latitude: r.latitude,
                            longitude: r.longitude,
                            prediction: r.prediction,
                            anomaly_score: r.anomaly_score,
                            asset_type: r.asset_type,
                            farm_name: r.farm_name
                        };
                    });
                    return $q.resolve(events);
                }
            };
        }]);

    // ============================================
    // AUTH SERVICE
    // ============================================
    
    angular.module('cropGuardApp')
        .factory('AuthService', ['$window', '$q', function($window, $q) {
            var currentUser = null;
            var isLoggedIn = false;

            var storedUser = $window.localStorage.getItem('cropGuardUser');
            if (storedUser) {
                try {
                    currentUser = JSON.parse(storedUser);
                    isLoggedIn = true;
                } catch (e) {
                    $window.localStorage.removeItem('cropGuardUser');
                }
            }

            return {
                login: function(email, password) {
                    if (email === 'nidhipatel2005@gmail.com' && password === 'nidhi12345') {
                        currentUser = MOCK_DATA.user;
                        isLoggedIn = true;
                        $window.localStorage.setItem('cropGuardUser', JSON.stringify(currentUser));
                        return $q.resolve({ success: true, user: currentUser });
                    }
                    return $q.reject({ message: 'Invalid email or password' });
                },
                logout: function() {
                    currentUser = null;
                    isLoggedIn = false;
                    $window.localStorage.removeItem('cropGuardUser');
                },
                isAuthenticated: function() { return isLoggedIn; },
                getCurrentUser: function() { return currentUser; }
            };
        }]);

    // ============================================
    // MAIN CONTROLLER
    // ============================================
    
    angular.module('cropGuardApp')
        .controller('MainController', ['$scope', '$location', 'AuthService', function($scope, $location, AuthService) {
            $scope.showLogoutModal = false;
            $scope.selectedEvent = null;

            $scope.confirmLogout = function() {
                AuthService.logout();
                $scope.showLogoutModal = false;
                $location.path('/');
            };

            $scope.$on('requestLogout', function() { $scope.showLogoutModal = true; });
            $scope.$on('openEventModal', function(e, event) { $scope.selectedEvent = event; });
        }]);

    // ============================================
    // LANDING CONTROLLER
    // ============================================
    
    angular.module('cropGuardApp')
        .controller('LandingController', ['$location', 'AuthService', function($location, AuthService) {
            var vm = this;
            if (AuthService.isAuthenticated()) { $location.path('/dashboard/analytics'); return; }
            vm.goToLogin = function() { $location.path('/login'); };
        }]);

    // ============================================
    // LOGIN CONTROLLER
    // ============================================
    
    angular.module('cropGuardApp')
        .controller('LoginController', ['$location', 'AuthService', function($location, AuthService) {
            var vm = this;
            if (AuthService.isAuthenticated()) { $location.path('/dashboard/analytics'); return; }

            vm.email = '';
            vm.password = '';
            vm.error = '';
            vm.isLoading = false;

            vm.login = function() {
                vm.error = '';
                if (!vm.email || !vm.password) { vm.error = 'Please enter both email and password'; return; }
                vm.isLoading = true;

                AuthService.login(vm.email, vm.password)
                    .then(function() { $location.path('/dashboard/analytics'); })
                    .catch(function(error) { vm.error = error.message || 'Invalid credentials'; })
                    .finally(function() { vm.isLoading = false; });
            };

            vm.goBack = function() { $location.path('/'); };
        }]);

    // ============================================
    // DASHBOARD CONTROLLER
    // ============================================
    
    angular.module('cropGuardApp')
        .controller('DashboardController', ['$scope', '$location', '$routeParams', 'AuthService', 'DataService', function($scope, $location, $routeParams, AuthService, DataService) {
            var vm = this;

            vm.user = AuthService.getCurrentUser();
            vm.sidebarCollapsed = false;
            vm.rightSidebarOpen = false;
            vm.dropdownOpen = false;
            vm.currentPage = getCurrentPage();
            vm.pageTitle = getPageTitle();
            vm.routeParams = $routeParams;
            vm.mapEvents = [];

            vm.navItems = [
                { id: 'analytics', label: 'Analytics', icon: 'fa-chart-line', route: '/dashboard/analytics' },
                { id: 'geographic', label: 'Geographic', icon: 'fa-map-marked-alt', route: '/dashboard/geographic' },
                { id: 'farms', label: 'Farms', icon: 'fa-seedling', route: '/dashboard/farms' },
                { id: 'devices', label: 'Devices', icon: 'fa-microchip', route: '/dashboard/devices' },
                { id: 'records', label: 'Records', icon: 'fa-clipboard-list', route: '/dashboard/records' }
            ];

            vm.toggleSidebar = function() { vm.sidebarCollapsed = !vm.sidebarCollapsed; };
            vm.toggleDropdown = function(event) { if (event) event.stopPropagation(); vm.dropdownOpen = !vm.dropdownOpen; };
            vm.navigateTo = function(route) { $location.path(route); };
            vm.isActive = function(page) {
                if (page === 'farms') return vm.currentPage === 'farms' || vm.currentPage === 'farm-detail';
                if (page === 'devices') return vm.currentPage === 'devices' || vm.currentPage === 'device-detail';
                return vm.currentPage === page;
            };
            vm.requestLogout = function() { vm.dropdownOpen = false; $scope.$emit('requestLogout'); };
            vm.goToAccount = function() { vm.dropdownOpen = false; $location.path('/dashboard/account'); };
            vm.openRightSidebar = function() { vm.rightSidebarOpen = true; };
            vm.closeRightSidebar = function() { vm.rightSidebarOpen = false; };
            vm.openEventModal = function(event) { $scope.$emit('openEventModal', event); };

            DataService.getMapEvents().then(function(events) { vm.mapEvents = events; });
            $scope.$on('openMapSidebar', function() { vm.rightSidebarOpen = true; });

            angular.element(document).on('click', function(e) {
                var target = e.target;
                var isInsideDropdown = false;
                while (target && target !== document) {
                    if (target.classList && target.classList.contains('user-dropdown')) { isInsideDropdown = true; break; }
                    target = target.parentElement;
                }
                if (!isInsideDropdown && vm.dropdownOpen) { $scope.$apply(function() { vm.dropdownOpen = false; }); }
            });

            function getCurrentPage() {
                var path = $location.path();
                if (path.indexOf('/dashboard/farms') === 0) return $routeParams.id ? 'farm-detail' : 'farms';
                if (path.indexOf('/dashboard/devices') === 0) return $routeParams.id ? 'device-detail' : 'devices';
                if (path.indexOf('/dashboard/records') === 0) return 'records';
                if (path.indexOf('/dashboard/geographic') === 0) return 'geographic';
                if (path.indexOf('/dashboard/account') === 0) return 'account';
                return 'analytics';
            }

            function getPageTitle() {
                var titles = { 'farms': 'Farms', 'farm-detail': 'Farm Details', 'devices': 'Devices', 'device-detail': 'Device Details', 'records': 'ML Records', 'analytics': 'Analytics Dashboard', 'geographic': 'Geographic Threat Map', 'account': 'Account Details' };
                return titles[vm.currentPage] || 'Dashboard';
            }
        }]);

    // ============================================
    // ANALYTICS CONTROLLER
    // ============================================
    
    angular.module('cropGuardApp')
        .controller('AnalyticsController', ['$scope', '$timeout', '$location', 'DataService', function($scope, $timeout, $location, DataService) {
            var vm = this;

            vm.farms = [];
            vm.selectedFarmId = '';
            vm.isLoading = true;
            vm.mapEvents = [];
            vm.stats = { totalFarms: 0, totalDevices: 0, anomalyCount: 0, avgConfidence: 0 };
            vm.devicesChart = null;
            vm.predictionChart = null;
            vm.recordsChart = null;
            vm.deviceTypeChart = null;
            vm.responseActionsChart = null;
            vm.farmAnomalyChart = null;

            vm.onFarmChange = function() { loadData(); };
            vm.goToFarms = function() { $location.path('/dashboard/farms'); };
            vm.goToGeographic = function() { $location.path('/dashboard/geographic'); };
            vm.openMapSidebar = function() { $scope.$emit('openMapSidebar'); };
            vm.openEventModal = function(event) { $scope.$emit('openEventModal', event); };

            DataService.getFarms().then(function(data) { vm.farms = data; vm.stats.totalFarms = data.length; });
            loadData();

            function loadData() {
                vm.isLoading = true;
                
                Promise.all([
                    DataService.getDevicesData(),
                    DataService.getPredictionDistribution(),
                    DataService.getRecordsTimelineData(),
                    DataService.getMapEvents(),
                    DataService.getDevices(),
                    DataService.getRecords(),
                    DataService.getRecordsByDeviceType(),
                    DataService.getResponseActionsData(),
                    DataService.getAnomalyScoreByFarm()
                ])
                .then(function(results) {
                    var devicesData = results[0];
                    var predictionData = results[1];
                    var recordsTimelineData = results[2];
                    vm.mapEvents = results[3];
                    var devices = results[4];
                    var records = results[5];
                    var deviceTypeData = results[6];
                    var responseActionsData = results[7];
                    var farmAnomalyData = results[8];

                    vm.stats.totalDevices = devices.length;
                    vm.stats.anomalyCount = predictionData.anomaly || 0;
                    
                    var totalConfidence = 0;
                    records.forEach(function(r) { totalConfidence += r.confidence; });
                    vm.stats.avgConfidence = records.length > 0 ? Math.round((totalConfidence / records.length) * 100) : 0;

                    $timeout(function() {
                        renderDevicesChart(devicesData);
                        renderPredictionChart(predictionData);
                        renderRecordsChart(recordsTimelineData);
                        renderDeviceTypeChart(deviceTypeData);
                        renderResponseActionsChart(responseActionsData);
                        renderFarmAnomalyChart(farmAnomalyData);
                    }, 100);
                })
                .finally(function() { $scope.$apply(function() { vm.isLoading = false; }); });
            }

            function renderDevicesChart(data) {
                var ctx = document.getElementById('devicesChart');
                if (!ctx) return;
                if (vm.devicesChart) vm.devicesChart.destroy();

                var chartCtx = ctx.getContext('2d');
                
                // Create beautiful gradients
                var activeGradient = chartCtx.createLinearGradient(0, 0, 0, 250);
                activeGradient.addColorStop(0, 'rgba(52, 211, 153, 0.9)');
                activeGradient.addColorStop(1, 'rgba(16, 185, 129, 0.7)');
                
                var inactiveGradient = chartCtx.createLinearGradient(0, 0, 0, 250);
                inactiveGradient.addColorStop(0, 'rgba(248, 113, 113, 0.9)');
                inactiveGradient.addColorStop(1, 'rgba(239, 68, 68, 0.7)');

                vm.devicesChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: data.map(function(d) { return d.date; }),
                        datasets: [
                            { 
                                label: 'Active', 
                                data: data.map(function(d) { return d.active; }), 
                                backgroundColor: activeGradient, 
                                borderColor: '#059669', 
                                borderWidth: 2,
                                borderRadius: { topLeft: 6, topRight: 6, bottomLeft: 0, bottomRight: 0 }
                            },
                            { 
                                label: 'Inactive', 
                                data: data.map(function(d) { return d.inactive; }), 
                                backgroundColor: inactiveGradient, 
                                borderColor: '#dc2626', 
                                borderWidth: 2,
                                borderRadius: { topLeft: 0, topRight: 0, bottomLeft: 6, bottomRight: 6 }
                            }
                        ]
                    },
                    options: {
                        responsive: true, 
                        maintainAspectRatio: false,
                        animation: { duration: 800, easing: 'easeOutCubic' },
                        plugins: { 
                            legend: { 
                                position: 'bottom', 
                                labels: { 
                                    color: '#374151', 
                                    padding: 16, 
                                    usePointStyle: true, 
                                    pointStyle: 'rectRounded',
                                    font: { size: 11, weight: '600' }
                                } 
                            },
                            tooltip: {
                                backgroundColor: 'rgba(30, 61, 46, 0.95)',
                                titleFont: { size: 13, weight: 'bold' },
                                bodyFont: { size: 12 },
                                padding: 12,
                                cornerRadius: 8
                            }
                        },
                        scales: {
                            x: { 
                                stacked: true, 
                                grid: { display: false }, 
                                ticks: { color: '#6b7280', maxRotation: 45, font: { size: 10, weight: '500' } },
                                border: { display: false }
                            },
                            y: { 
                                stacked: true, 
                                beginAtZero: true, 
                                grid: { color: 'rgba(0, 0, 0, 0.05)', drawBorder: false }, 
                                ticks: { color: '#6b7280', stepSize: 2, font: { size: 11 } },
                                border: { display: false }
                            }
                        }
                    }
                });
            }

            function renderPredictionChart(data) {
                var ctx = document.getElementById('predictionChart');
                if (!ctx) return;
                if (vm.predictionChart) vm.predictionChart.destroy();

                var chartCtx = ctx.getContext('2d');
                
                // Create elegant gradients for each prediction type
                var normalGradient = chartCtx.createLinearGradient(0, 0, 0, 200);
                normalGradient.addColorStop(0, '#34d399');
                normalGradient.addColorStop(1, '#059669');
                
                var suspiciousGradient = chartCtx.createLinearGradient(0, 0, 0, 200);
                suspiciousGradient.addColorStop(0, '#fbbf24');
                suspiciousGradient.addColorStop(1, '#d97706');
                
                var anomalyGradient = chartCtx.createLinearGradient(0, 0, 0, 200);
                anomalyGradient.addColorStop(0, '#f87171');
                anomalyGradient.addColorStop(1, '#dc2626');

                vm.predictionChart = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: ['Normal', 'Suspicious', 'Anomaly'],
                        datasets: [{ 
                            data: [data.normal, data.suspicious, data.anomaly], 
                            backgroundColor: [normalGradient, suspiciousGradient, anomalyGradient],
                            borderColor: ['#047857', '#b45309', '#b91c1c'],
                            borderWidth: 3,
                            hoverOffset: 15,
                            hoverBorderWidth: 4,
                            spacing: 3
                        }]
                    },
                    options: {
                        responsive: true, 
                        maintainAspectRatio: false, 
                        cutout: '58%',
                        animation: { 
                            animateRotate: true, 
                            animateScale: true,
                            duration: 1000,
                            easing: 'easeOutQuart'
                        },
                        plugins: { 
                            legend: { 
                                position: 'bottom', 
                                labels: { 
                                    color: '#374151', 
                                    padding: 16, 
                                    usePointStyle: true, 
                                    pointStyle: 'rectRounded',
                                    font: { size: 11, weight: '600' }
                                } 
                            },
                            tooltip: {
                                backgroundColor: 'rgba(30, 61, 46, 0.95)',
                                titleFont: { size: 13, weight: 'bold' },
                                bodyFont: { size: 12 },
                                padding: 12,
                                cornerRadius: 8,
                                callbacks: {
                                    label: function(context) {
                                        var total = context.dataset.data.reduce(function(a, b) { return a + b; }, 0);
                                        var percentage = Math.round((context.raw / total) * 100);
                                        return context.label + ': ' + context.raw + ' (' + percentage + '%)';
                                    }
                                }
                            }
                        }
                    }
                });
            }

            function renderRecordsChart(data) {
                var ctx = document.getElementById('recordsChart');
                if (!ctx) return;
                if (vm.recordsChart) vm.recordsChart.destroy();

                // Create gradient colors for each prediction type
                var chartCtx = ctx.getContext('2d');
                
                var normalGradient = chartCtx.createLinearGradient(0, 0, 0, 250);
                normalGradient.addColorStop(0, 'rgba(76, 175, 80, 0.9)');
                normalGradient.addColorStop(1, 'rgba(46, 125, 50, 0.7)');
                
                var suspiciousGradient = chartCtx.createLinearGradient(0, 0, 0, 250);
                suspiciousGradient.addColorStop(0, 'rgba(255, 167, 38, 0.9)');
                suspiciousGradient.addColorStop(1, 'rgba(230, 126, 34, 0.7)');
                
                var anomalyGradient = chartCtx.createLinearGradient(0, 0, 0, 250);
                anomalyGradient.addColorStop(0, 'rgba(239, 83, 80, 0.9)');
                anomalyGradient.addColorStop(1, 'rgba(183, 28, 28, 0.7)');

                var barColors = data.map(function(d) {
                    switch (d.prediction) {
                        case 'Normal': return normalGradient;
                        case 'Suspicious': return suspiciousGradient;
                        case 'Anomaly': return anomalyGradient;
                        default: return normalGradient;
                    }
                });

                var borderColors = data.map(function(d) {
                    switch (d.prediction) {
                        case 'Normal': return '#2e7d32';
                        case 'Suspicious': return '#e67e22';
                        case 'Anomaly': return '#c0392b';
                        default: return '#2e7d32';
                    }
                });

                vm.recordsChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: data.map(function(d) { return d.event.replace('EVT-', ''); }),
                        datasets: [{ 
                            label: 'Anomaly Score', 
                            data: data.map(function(d) { return d.score; }), 
                            backgroundColor: barColors,
                            borderColor: borderColors,
                            borderWidth: 2,
                            borderRadius: 6,
                            borderSkipped: false,
                            hoverBorderWidth: 3
                        }]
                    },
                    options: {
                        responsive: true, 
                        maintainAspectRatio: false,
                        animation: { duration: 1000, easing: 'easeOutQuart' },
                        plugins: { 
                            legend: { display: false },
                            tooltip: {
                                backgroundColor: 'rgba(30, 61, 46, 0.95)',
                                titleFont: { size: 13, weight: 'bold' },
                                bodyFont: { size: 12 },
                                padding: 12,
                                cornerRadius: 8,
                                displayColors: true,
                                callbacks: {
                                    title: function(context) {
                                        var d = data[context[0].dataIndex];
                                        return 'Event ' + d.event;
                                    },
                                    label: function(context) {
                                        var d = data[context.dataIndex];
                                        return [d.prediction + ' • Score: ' + d.score.toFixed(2)];
                                    }
                                }
                            }
                        },
                        scales: {
                            x: { 
                                grid: { display: false }, 
                                ticks: { color: '#6b7280', maxRotation: 0, font: { size: 9, weight: '500' } },
                                border: { display: false }
                            },
                            y: { 
                                min: 0, 
                                max: 1, 
                                grid: { color: 'rgba(0, 0, 0, 0.06)', drawBorder: false }, 
                                ticks: { color: '#6b7280', font: { size: 11 }, stepSize: 0.2 },
                                border: { display: false }
                            }
                        }
                    }
                });
            }

            function renderDeviceTypeChart(data) {
                var ctx = document.getElementById('deviceTypeChart');
                if (!ctx) return;
                if (vm.deviceTypeChart) vm.deviceTypeChart.destroy();

                var chartCtx = ctx.getContext('2d');
                var labels = Object.keys(data);
                var values = Object.values(data);
                
                // Beautiful gradient colors for each device type
                var gradients = [];
                var colorSets = [
                    { start: 'rgba(59, 130, 246, 0.9)', end: 'rgba(37, 99, 235, 0.7)', border: '#2563eb' },  // Blue - Soil Sensor
                    { start: 'rgba(139, 92, 246, 0.9)', end: 'rgba(109, 40, 217, 0.7)', border: '#7c3aed' },  // Purple - Weather Station
                    { start: 'rgba(20, 184, 166, 0.9)', end: 'rgba(13, 148, 136, 0.7)', border: '#0d9488' },  // Teal - Controller
                    { start: 'rgba(251, 146, 60, 0.9)', end: 'rgba(234, 88, 12, 0.7)', border: '#ea580c' }    // Orange - Gateway
                ];
                
                for (var i = 0; i < labels.length; i++) {
                    var gradient = chartCtx.createLinearGradient(0, 0, 300, 0);
                    gradient.addColorStop(0, colorSets[i % colorSets.length].start);
                    gradient.addColorStop(1, colorSets[i % colorSets.length].end);
                    gradients.push(gradient);
                }

                vm.deviceTypeChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [{ 
                            label: 'Records Count', 
                            data: values, 
                            backgroundColor: gradients,
                            borderColor: colorSets.slice(0, labels.length).map(function(c) { return c.border; }),
                            borderWidth: 2,
                            borderRadius: 8,
                            borderSkipped: false,
                            barThickness: 28
                        }]
                    },
                    options: {
                        responsive: true, 
                        maintainAspectRatio: false,
                        indexAxis: 'y',
                        animation: { duration: 800, easing: 'easeOutCubic' },
                        plugins: { 
                            legend: { display: false },
                            tooltip: {
                                backgroundColor: 'rgba(30, 61, 46, 0.95)',
                                titleFont: { size: 13, weight: 'bold' },
                                bodyFont: { size: 12 },
                                padding: 12,
                                cornerRadius: 8,
                                callbacks: {
                                    label: function(context) {
                                        return context.raw + ' detection records';
                                    }
                                }
                            }
                        },
                        scales: {
                            x: { 
                                beginAtZero: true, 
                                grid: { color: 'rgba(0, 0, 0, 0.05)', drawBorder: false }, 
                                ticks: { color: '#6b7280', stepSize: 1, font: { size: 11, weight: '500' } },
                                border: { display: false }
                            },
                            y: { 
                                grid: { display: false }, 
                                ticks: { color: '#374151', font: { size: 12, weight: '600' }, padding: 8 },
                                border: { display: false }
                            }
                        }
                    }
                });
            }

            function renderResponseActionsChart(data) {
                var ctx = document.getElementById('responseActionsChart');
                if (!ctx) return;
                if (vm.responseActionsChart) vm.responseActionsChart.destroy();

                var chartCtx = ctx.getContext('2d');
                
                // Create elegant gradient colors
                var greenGradient = chartCtx.createLinearGradient(0, 0, 0, 200);
                greenGradient.addColorStop(0, '#10b981');
                greenGradient.addColorStop(1, '#059669');
                
                var amberGradient = chartCtx.createLinearGradient(0, 0, 0, 200);
                amberGradient.addColorStop(0, '#fbbf24');
                amberGradient.addColorStop(1, '#f59e0b');
                
                var redGradient = chartCtx.createLinearGradient(0, 0, 0, 200);
                redGradient.addColorStop(0, '#f87171');
                redGradient.addColorStop(1, '#dc2626');

                vm.responseActionsChart = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: ['No Action', 'Alert Sent', 'Isolated'],
                        datasets: [{ 
                            data: [data['None'], data['Alert Sent'], data['Device Isolated']], 
                            backgroundColor: [greenGradient, amberGradient, redGradient],
                            borderColor: ['#059669', '#d97706', '#b91c1c'],
                            borderWidth: 3,
                            hoverOffset: 15,
                            hoverBorderWidth: 4,
                            spacing: 3
                        }]
                    },
                    options: {
                        responsive: true, 
                        maintainAspectRatio: false, 
                        cutout: '55%',
                        animation: { 
                            animateRotate: true, 
                            animateScale: true,
                            duration: 1000,
                            easing: 'easeOutQuart'
                        },
                        plugins: { 
                            legend: { 
                                position: 'bottom', 
                                labels: { 
                                    color: '#374151', 
                                    padding: 16, 
                                    usePointStyle: true, 
                                    pointStyle: 'rectRounded',
                                    font: { size: 11, weight: '600' }
                                } 
                            },
                            tooltip: {
                                backgroundColor: 'rgba(30, 61, 46, 0.95)',
                                titleFont: { size: 13, weight: 'bold' },
                                bodyFont: { size: 12 },
                                padding: 12,
                                cornerRadius: 8,
                                callbacks: {
                                    label: function(context) {
                                        var total = context.dataset.data.reduce(function(a, b) { return a + b; }, 0);
                                        var percentage = Math.round((context.raw / total) * 100);
                                        return context.label + ': ' + context.raw + ' (' + percentage + '%)';
                                    }
                                }
                            }
                        }
                    }
                });
            }

            function renderFarmAnomalyChart(data) {
                var ctx = document.getElementById('farmAnomalyChart');
                if (!ctx) return;
                if (vm.farmAnomalyChart) vm.farmAnomalyChart.destroy();

                var chartCtx = ctx.getContext('2d');
                
                // Create gradient colors based on severity
                var barGradients = data.map(function(d) {
                    var gradient = chartCtx.createLinearGradient(0, 0, 300, 0);
                    if (d.avgScore >= 0.6) {
                        gradient.addColorStop(0, 'rgba(248, 113, 113, 0.9)');
                        gradient.addColorStop(1, 'rgba(185, 28, 28, 0.8)');
                    } else if (d.avgScore >= 0.3) {
                        gradient.addColorStop(0, 'rgba(251, 191, 36, 0.9)');
                        gradient.addColorStop(1, 'rgba(217, 119, 6, 0.8)');
                    } else {
                        gradient.addColorStop(0, 'rgba(52, 211, 153, 0.9)');
                        gradient.addColorStop(1, 'rgba(5, 150, 105, 0.8)');
                    }
                    return gradient;
                });

                var borderColors = data.map(function(d) {
                    if (d.avgScore >= 0.6) return '#b91c1c';
                    if (d.avgScore >= 0.3) return '#b45309';
                    return '#047857';
                });

                vm.farmAnomalyChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: data.map(function(d) { 
                            var words = d.farm.split(' ');
                            return words.length > 2 ? words.slice(0, 2).join(' ') + '...' : d.farm;
                        }),
                        datasets: [{ 
                            label: 'Avg Anomaly Score', 
                            data: data.map(function(d) { return d.avgScore; }), 
                            backgroundColor: barGradients,
                            borderColor: borderColors,
                            borderWidth: 2,
                            borderRadius: 8,
                            borderSkipped: false,
                            barThickness: 24
                        }]
                    },
                    options: {
                        responsive: true, 
                        maintainAspectRatio: false,
                        indexAxis: 'y',
                        animation: { duration: 900, easing: 'easeOutQuart' },
                        plugins: { 
                            legend: { display: false },
                            tooltip: {
                                backgroundColor: 'rgba(30, 61, 46, 0.95)',
                                titleFont: { size: 13, weight: 'bold' },
                                bodyFont: { size: 12 },
                                padding: 12,
                                cornerRadius: 8,
                                callbacks: {
                                    title: function(context) {
                                        return '🌱 ' + data[context[0].dataIndex].farm;
                                    },
                                    label: function(context) {
                                        var score = context.raw;
                                        var risk = score >= 0.6 ? '🔴 High Risk' : (score >= 0.3 ? '🟠 Medium Risk' : '🟢 Low Risk');
                                        return ['Score: ' + score.toFixed(3), risk];
                                    }
                                }
                            }
                        },
                        scales: {
                            x: { 
                                min: 0, 
                                max: 1, 
                                grid: { color: 'rgba(0, 0, 0, 0.05)', drawBorder: false }, 
                                ticks: { 
                                    color: '#6b7280', 
                                    font: { size: 10, weight: '500' },
                                    callback: function(value) { return value.toFixed(1); }
                                },
                                border: { display: false }
                            },
                            y: { 
                                grid: { display: false }, 
                                ticks: { color: '#374151', font: { size: 11, weight: '600' }, padding: 8 },
                                border: { display: false }
                            }
                        }
                    }
                });
            }

            $scope.$on('$destroy', function() {
                if (vm.devicesChart) vm.devicesChart.destroy();
                if (vm.predictionChart) vm.predictionChart.destroy();
                if (vm.recordsChart) vm.recordsChart.destroy();
                if (vm.deviceTypeChart) vm.deviceTypeChart.destroy();
                if (vm.responseActionsChart) vm.responseActionsChart.destroy();
                if (vm.farmAnomalyChart) vm.farmAnomalyChart.destroy();
            });
        }]);

    // ============================================
    // FARMS CONTROLLER
    // ============================================
    
    angular.module('cropGuardApp')
        .controller('FarmsController', ['$scope', '$location', '$routeParams', 'DataService', function($scope, $location, $routeParams, DataService) {
            var vm = this;

            vm.farms = [];
            vm.selectedFarm = null;
            vm.farmDevices = [];
            vm.isLoading = true;
            vm.viewMode = 'table';
            vm.sortField = 'name';
            vm.sortReverse = false;
            vm.isDetailView = !!$routeParams.id;
            vm.farmId = $routeParams.id;

            vm.setViewMode = function(mode) { vm.viewMode = mode; };
            vm.sortBy = function(field) { if (vm.sortField === field) { vm.sortReverse = !vm.sortReverse; } else { vm.sortField = field; vm.sortReverse = false; } };
            vm.viewFarm = function(farm) { $location.path('/dashboard/farms/' + farm.id); };
            vm.viewDevice = function(device) { $location.path('/dashboard/devices/' + device.id); };
            vm.goBack = function() { $location.path('/dashboard/farms'); };

            if (vm.isDetailView) {
                DataService.getFarm(parseInt(vm.farmId))
                    .then(function(farm) { vm.selectedFarm = farm; return DataService.getDevicesByFarm(parseInt(vm.farmId)); })
                    .then(function(devices) { vm.farmDevices = devices; })
                    .finally(function() { vm.isLoading = false; });
            } else {
                DataService.getFarms().then(function(data) { vm.farms = data; }).finally(function() { vm.isLoading = false; });
            }
        }]);

    // ============================================
    // DEVICES CONTROLLER
    // ============================================
    
    angular.module('cropGuardApp')
        .controller('DevicesController', ['$scope', '$location', '$routeParams', 'DataService', function($scope, $location, $routeParams, DataService) {
            var vm = this;

            vm.devices = [];
            vm.selectedDevice = null;
            vm.isLoading = true;
            vm.viewMode = 'table';
            vm.sortField = 'name';
            vm.sortReverse = false;
            vm.filterType = '';
            vm.filterStatus = '';
            vm.deviceTypes = ['Soil Sensor', 'Weather Station', 'Controller', 'Gateway'];
            vm.isDetailView = !!$routeParams.id;
            vm.deviceId = $routeParams.id;

            vm.setViewMode = function(mode) { vm.viewMode = mode; };
            vm.sortBy = function(field) { if (vm.sortField === field) { vm.sortReverse = !vm.sortReverse; } else { vm.sortField = field; vm.sortReverse = false; } };
            vm.viewDevice = function(device) { $location.path('/dashboard/devices/' + device.id); };
            vm.goBack = function() { $location.path('/dashboard/devices'); };
            vm.filteredDevices = function() {
                var result = vm.devices;
                if (vm.filterType) { result = result.filter(function(d) { return d.type === vm.filterType; }); }
                if (vm.filterStatus) { var isActive = vm.filterStatus === 'active'; result = result.filter(function(d) { return d.is_active === isActive; }); }
                return result;
            };

            if (vm.isDetailView) {
                DataService.getDevice(parseInt(vm.deviceId)).then(function(device) { vm.selectedDevice = device; }).finally(function() { vm.isLoading = false; });
            } else {
                DataService.getDevices().then(function(data) { vm.devices = data; }).finally(function() { vm.isLoading = false; });
            }
        }]);

    // ============================================
    // RECORDS CONTROLLER
    // ============================================
    
    angular.module('cropGuardApp')
        .controller('RecordsController', ['$scope', 'DataService', function($scope, DataService) {
            var vm = this;

            vm.records = [];
            vm.isLoading = true;
            vm.expandedRow = null;
            vm.filterPrediction = '';
            vm.filterMinScore = '';
            vm.filterMaxScore = '';
            vm.filterMinConfidence = '';
            vm.filterMaxConfidence = '';

            vm.toggleRow = function(recordId) { vm.expandedRow = vm.expandedRow === recordId ? null : recordId; };
            vm.clearFilters = function() { vm.filterPrediction = ''; vm.filterMinScore = ''; vm.filterMaxScore = ''; vm.filterMinConfidence = ''; vm.filterMaxConfidence = ''; };
            vm.getPredictionClass = function(prediction) {
                switch (prediction) { case 'Normal': return 'badge-normal'; case 'Suspicious': return 'badge-suspicious'; case 'Anomaly': return 'badge-anomaly'; default: return ''; }
            };
            vm.filteredRecords = function() {
                var result = vm.records;
                if (vm.filterPrediction) { result = result.filter(function(r) { return r.prediction === vm.filterPrediction; }); }
                if (vm.filterMinScore !== '' && vm.filterMinScore !== null) { var minScore = parseFloat(vm.filterMinScore); result = result.filter(function(r) { return r.anomaly_score >= minScore; }); }
                if (vm.filterMaxScore !== '' && vm.filterMaxScore !== null) { var maxScore = parseFloat(vm.filterMaxScore); result = result.filter(function(r) { return r.anomaly_score <= maxScore; }); }
                if (vm.filterMinConfidence !== '' && vm.filterMinConfidence !== null) { var minConf = parseFloat(vm.filterMinConfidence) / 100; result = result.filter(function(r) { return r.confidence >= minConf; }); }
                if (vm.filterMaxConfidence !== '' && vm.filterMaxConfidence !== null) { var maxConf = parseFloat(vm.filterMaxConfidence) / 100; result = result.filter(function(r) { return r.confidence <= maxConf; }); }
                return result;
            };

            DataService.getRecords().then(function(data) { vm.records = data; }).finally(function() { vm.isLoading = false; });
        }]);

    // ============================================
    // ACCOUNT CONTROLLER
    // ============================================
    
    angular.module('cropGuardApp')
        .controller('AccountController', ['$scope', 'AuthService', function($scope, AuthService) {
            var vm = this;
            vm.user = AuthService.getCurrentUser();
            vm.getInitials = function() {
                if (!vm.user || !vm.user.name) return '?';
                var names = vm.user.name.split(' ');
                return names.length >= 2 ? names[0].charAt(0) + names[1].charAt(0) : names[0].charAt(0);
            };
        }]);

    // ============================================
    // GEOGRAPHIC CONTROLLER
    // ============================================
    
    angular.module('cropGuardApp')
        .controller('GeographicController', ['$scope', 'DataService', function($scope, DataService) {
            var vm = this;

            vm.mapEvents = [];
            vm.isLoading = true;
            vm.stats = { normal: 0, suspicious: 0, anomaly: 0 };

            vm.openEventModal = function(event) { $scope.$emit('openEventModal', event); };

            // Load map events
            DataService.getMapEvents().then(function(events) {
                vm.mapEvents = events;
                
                // Calculate stats
                events.forEach(function(event) {
                    if (event.prediction === 'Normal') vm.stats.normal++;
                    else if (event.prediction === 'Suspicious') vm.stats.suspicious++;
                    else if (event.prediction === 'Anomaly') vm.stats.anomaly++;
                });
            }).finally(function() { vm.isLoading = false; });
        }]);

    // ============================================
    // INDIA MAP DIRECTIVE
    // ============================================
    
    angular.module('cropGuardApp')
        .directive('indiaMap', ['$timeout', function($timeout) {
            // Accurate India SVG based on actual geographic shape
            var indiaSvg = '<svg class="india-map-svg" viewBox="0 0 520 600" preserveAspectRatio="xMidYMid meet">' +
                '<defs>' +
                '<linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">' +
                '<stop offset="0%" style="stop-color:#4a7c59;stop-opacity:1" />' +
                '<stop offset="100%" style="stop-color:#2d5237;stop-opacity:1" />' +
                '</linearGradient>' +
                '<filter id="mapShadow" x="-10%" y="-10%" width="120%" height="120%">' +
                '<feDropShadow dx="2" dy="2" stdDeviation="4" flood-opacity="0.3"/>' +
                '</filter>' +
                '</defs>' +
                '<g class="india-country" filter="url(#mapShadow)">' +
                // Main India outline - traced from reference map
                '<path class="india-main" fill="url(#mapGradient)" stroke="#c9a227" stroke-width="2" d="' +
                // Starting from J&K (northwest) - the complex northern border
                'M95,55 L88,48 L82,52 L78,45 L85,38 L95,35 L108,32 L118,38 L125,32 L135,28 ' +
                'L148,25 L158,28 L168,22 L180,25 L192,20 L205,25 L215,22 L225,28 ' +
                // Himachal Pradesh region
                'L238,25 L248,30 L258,28 L268,32 L275,28 ' +
                // Uttarakhand - Nepal border
                'L285,32 L298,30 L312,35 L328,32 L342,38 L358,35 L372,40 L385,38 ' +
                // Sikkim and entering Northeast
                'L395,42 L402,38 L412,42 L420,40 ' +
                // Arunachal Pradesh - easternmost extension
                'L432,38 L445,42 L458,48 L468,55 L475,65 L480,78 L478,92 ' +
                // Nagaland
                'L482,105 L478,118 L475,130 ' +
                // Manipur
                'L480,142 L475,155 L470,168 ' +
                // Mizoram - southern NE
                'L465,180 L458,192 L448,202 L438,210 ' +
                // Tripura and Bangladesh border indent
                'L425,205 L412,200 L398,198 L385,205 L378,218 L382,232 ' +
                // West Bengal coast
                'L385,248 L380,265 L372,282 L362,298 ' +
                // Odisha coast - curving
                'L348,315 L332,330 L315,342 L298,352 ' +
                // Andhra Pradesh coast
                'L282,365 L268,380 L258,398 L252,418 ' +
                // Tamil Nadu - approaching southern tip
                'L250,438 L252,458 L255,475 L252,490 ' +
                // Kanyakumari - the southern tip
                'L245,502 L235,512 L222,518 L208,515 L198,508 L192,498 ' +
                // Kerala coast - going north along west
                'L185,482 L178,462 L172,442 L168,422 L165,402 ' +
                // Karnataka coast
                'L162,382 L158,362 L152,342 L145,322 ' +
                // Goa
                'L140,305 L138,288 ' +
                // Maharashtra coast
                'L135,272 L130,255 L122,238 L115,222 L108,205 ' +
                // Gujarat - Gulf of Khambhat
                'L100,188 L92,172 L85,158 ' +
                // Saurashtra Peninsula (Kathiawar) - the distinctive bulge
                'L75,152 L65,155 L55,162 L48,172 L45,185 L52,198 L65,205 L78,202 L88,192 L92,178 ' +
                // Gulf of Kutch
                'L85,168 L72,172 L58,178 L48,188 ' +
                // Kutch Peninsula - the distinctive northwestern extension
                'L35,182 L25,175 L18,162 L15,148 L18,135 L28,125 L42,118 L58,115 ' +
                // Rajasthan - Pakistan border going north
                'L72,112 L82,105 L88,95 L92,82 L95,68 L95,55 Z"/>' +
                // State boundaries (internal lines)
                '<g class="state-borders" stroke="#c9a227" stroke-width="0.8" fill="none" opacity="0.4">' +
                // J&K - HP - Punjab region
                '<path d="M168,22 C180,45 195,55 215,62 L235,72"/>' +
                // Haryana - Delhi
                '<path d="M215,62 L228,88 L242,108"/>' +
                // Rajasthan (large state)
                '<path d="M92,95 Q130,115 155,165 Q145,218 130,272"/>' +
                // Uttar Pradesh
                '<path d="M242,108 L295,115 L355,125 L395,140"/>' +
                // Madhya Pradesh - Chhattisgarh
                '<path d="M130,272 L185,255 L255,252 L325,268 L372,292"/>' +
                // Gujarat - Maharashtra
                '<path d="M108,205 L130,235 L135,268"/>' +
                // Maharashtra - Karnataka
                '<path d="M138,295 L185,308 L238,322 L282,340"/>' +
                // Andhra - Telangana
                '<path d="M282,340 L325,358 L358,375"/>' +
                // Karnataka - TN - Kerala
                '<path d="M178,395 L218,408 L258,428"/>' +
                '<path d="M192,472 L218,478 L245,492"/>' +
                // Bihar - Jharkhand
                '<path d="M372,142 L385,185 L390,228"/>' +
                // West Bengal - Odisha
                '<path d="M362,235 L372,275 L365,312"/>' +
                // Northeast states
                '<path d="M425,55 L448,88 L472,118"/>' +
                '<path d="M455,95 L475,108 L482,125"/>' +
                '<path d="M448,145 L465,158 L475,175"/>' +
                '</g>' +
                // Andaman Islands
                '<g class="andaman">' +
                '<ellipse cx="468" cy="362" rx="5" ry="15" fill="#3d6b47" stroke="#c9a227" stroke-width="0.8"/>' +
                '<ellipse cx="472" cy="395" rx="4" ry="12" fill="#3d6b47" stroke="#c9a227" stroke-width="0.8"/>' +
                '<ellipse cx="475" cy="425" rx="3.5" ry="10" fill="#3d6b47" stroke="#c9a227" stroke-width="0.8"/>' +
                '</g>' +
                // Nicobar Islands
                '<g class="nicobar">' +
                '<ellipse cx="480" cy="455" rx="3" ry="7" fill="#3d6b47" stroke="#c9a227" stroke-width="0.6"/>' +
                '<ellipse cx="485" cy="478" rx="2.5" ry="5" fill="#3d6b47" stroke="#c9a227" stroke-width="0.6"/>' +
                '</g>' +
                // Lakshadweep Islands
                '<g class="lakshadweep">' +
                '<circle cx="115" cy="408" r="2.5" fill="#3d6b47" stroke="#c9a227" stroke-width="0.5"/>' +
                '<circle cx="108" cy="428" r="2" fill="#3d6b47" stroke="#c9a227" stroke-width="0.5"/>' +
                '<circle cx="102" cy="448" r="1.8" fill="#3d6b47" stroke="#c9a227" stroke-width="0.5"/>' +
                '<circle cx="98" cy="465" r="1.5" fill="#3d6b47" stroke="#c9a227" stroke-width="0.5"/>' +
                '</g>' +
                // Sri Lanka
                '<path class="srilanka" fill="#2d5237" stroke="#c9a227" stroke-width="0.6" opacity="0.25" d="' +
                'M218,555 Q235,548 242,560 Q245,578 235,590 Q222,595 212,585 Q208,570 218,555 Z"/>' +
                '</g>' +
                '</svg>';

            return {
                restrict: 'E',
                scope: { events: '=', onEventClick: '&', fullView: '=' },
                template: '<div class="india-map-wrapper" ng-class="{\'full-view\': fullView}">' +
                    '<div class="india-map-container" id="india-map-container">' +
                        indiaSvg +
                        '<div class="map-markers" ng-if="events && events.length">' +
                            '<div ng-repeat="event in events" class="map-marker" ng-class="getMarkerClass(event)" ng-style="getMarkerPosition(event)" ng-click="handleEventClick(event)" ng-mouseenter="showTooltip(event, $event)" ng-mouseleave="hideTooltip()" title="{{event.farm_name}}"></div>' +
                        '</div>' +
                        '<div class="map-tooltip" ng-class="{\'visible\': tooltipVisible}" ng-style="tooltipPosition">' +
                            '<div class="tooltip-header"><span class="tooltip-id">{{tooltipEvent.id}}</span><span class="status-badge" ng-class="getMarkerClass(tooltipEvent)">{{tooltipEvent.prediction}}</span></div>' +
                            '<div class="tooltip-row"><span class="label">Asset Type</span><span class="value">{{tooltipEvent.asset_type}}</span></div>' +
                            '<div class="tooltip-row"><span class="label">Anomaly Score</span><span class="value">{{tooltipEvent.anomaly_score | number:2}}</span></div>' +
                            '<div class="tooltip-row"><span class="label">Farm</span><span class="value">{{tooltipEvent.farm_name}}</span></div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="map-legend">' +
                        '<div class="legend-item"><span class="legend-dot normal"></span><span class="legend-text">Normal</span></div>' +
                        '<div class="legend-item"><span class="legend-dot suspicious"></span><span class="legend-text">Suspicious</span></div>' +
                        '<div class="legend-item"><span class="legend-dot anomaly"></span><span class="legend-text">Anomaly</span></div>' +
                    '</div>' +
                '</div>',
                link: function(scope) {
                    // Map config - India coordinates (viewBox: 0 0 520 600)
                    // Real coords: Lat 6-38°N, Long 66-98°E
                    var mapConfig = { 
                        minLat: 5.0,
                        maxLat: 38.0,
                        minLong: 65.0,
                        maxLong: 99.0
                    };
                    scope.tooltipVisible = false;
                    scope.tooltipEvent = {};
                    scope.tooltipPosition = {};

                    scope.getMarkerPosition = function(event) {
                        // Convert lat/long to percentage position on map
                        var xPercent = (event.longitude - mapConfig.minLong) / (mapConfig.maxLong - mapConfig.minLong);
                        var x = 2 + (xPercent * 94);
                        
                        var yPercent = (mapConfig.maxLat - event.latitude) / (mapConfig.maxLat - mapConfig.minLat);
                        var y = 4 + (yPercent * 90);
                        
                        return { left: x + '%', top: y + '%' };
                    };

                    scope.getMarkerClass = function(event) {
                        if (!event) return '';
                        switch (event.prediction) { 
                            case 'Normal': return 'normal badge-normal'; 
                            case 'Suspicious': return 'suspicious badge-suspicious'; 
                            case 'Anomaly': return 'anomaly badge-anomaly'; 
                            default: return ''; 
                        }
                    };

                    scope.showTooltip = function(event, $event) {
                        scope.tooltipEvent = event;
                        scope.tooltipVisible = true;
                        var container = document.getElementById('india-map-container');
                        if (container) {
                            var rect = container.getBoundingClientRect();
                            var tooltipX = $event.clientX - rect.left + 15;
                            var tooltipY = $event.clientY - rect.top - 10;
                            // Keep tooltip within container bounds
                            if (tooltipX + 180 > rect.width) tooltipX = $event.clientX - rect.left - 190;
                            if (tooltipY < 0) tooltipY = 10;
                            scope.tooltipPosition = { left: tooltipX + 'px', top: tooltipY + 'px' };
                        }
                    };

                    scope.hideTooltip = function() { scope.tooltipVisible = false; };
                    scope.handleEventClick = function(event) { if (scope.onEventClick) scope.onEventClick({ event: event }); };
                }
            };
        }]);

})();

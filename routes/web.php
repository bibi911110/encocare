<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// common pages

Route::get('/', function () {
    return Inertia::render('common/Home/Home');
});

Route::get('/login', function () {
    return Inertia::render('common/Login/Login');
});

Route::get('/login-admin', function () {
    return Inertia::render('admin/Login/AdminLogin');
});

Route::get('/login-business', function () {
    return Inertia::render('business/Login/BusinessLogin');
});

Route::get('/login-individual', function () {
    return Inertia::render('individual/Login/IndividualLogin');
});

Route::get('/signup', function () {
    return Inertia::render('common/Signup/Signup');
});

Route::get('/signup-business', function () {
    return Inertia::render('business/Signup/BusinessSignup');
});

Route::get('/forgot-password', function () {
    return Inertia::render('common/ForgotPassword/ForgotPassword');
});

Route::get('/reset-password', function () {
    return Inertia::render('common/ResetPassword/ResetPassword');
});

Route::get('/support-us', function () {
    return Inertia::render('common/SupportUs/SupportUs');
});

Route::get('/donate', function () {
    return Inertia::render('common/Donate/Donate');
});

Route::get('/thanks', function () {
    return Inertia::render('common/Thanks/Thanks');
});

// profile pages

Route::get('/profile/dashboard', function () {
    return Inertia::render('profile/Dashboard/Dashboard');
});

Route::get('/profile/test-history', function () {
    return Inertia::render('profile/TestHistory/TestHistory');
});

Route::get('/profile/membership', function () {
    return Inertia::render('profile/Membership/Membership');
});

Route::get('/profile/membership/payment', function () {
    return Inertia::render('profile/Payment/Payment');
});

Route::get('/profile/membership/payment/success', function () {
    return Inertia::render('profile/PaymentSuccess/PaymentSuccess');
});

// test pages

Route::get('/test/agree', function () {
    return Inertia::render('test/TestAgree/TestAgree');
});

Route::get('/test/progress', function () {
    return Inertia::render('test/TestProgress/TestProgress');
});

// 404 page
Route::fallback(function () {
    return Inertia::render('common/NotFound/NotFound');
});

// admin pages

Route::get('/admin/dashboard', function () {
    return Inertia::render('admin/Dashboard/AdminDashboard');
});

Route::get('/admin/entity/add', function () {
    return Inertia::render('admin/AddEntity/AddEntity');
});

Route::get('/admin/entity', function () {
    return Inertia::render('admin/EntityList/EntityList');
});

Route::get('/admin/entity/{sortType}', function () {
    return Inertia::render('admin/EntityList/EntityList');
});

Route::get('/admin/entity/detail/{id}', function () {
    return Inertia::render('admin/EntityDetail/EntityDetail');
});

Route::get('/admin/entity/detail/{id}/test-result', function () {
    return Inertia::render('admin/EntityTestResult/EntityTestResult');
});

// business pages

Route::get('/business/dashboard', function () {
    return Inertia::render('business/Dashboard/BusinessDashboard');
});

Route::get('/business/hospital', function () {
    return Inertia::render('business/HospitalList/HospitalList');
});

Route::get('/business/hospital/add', function () {
    return Inertia::render('business/AddHospital/AddHospital');
});

Route::get('/business/hospital/detail/{id}', function () {
    return Inertia::render('business/HospitalDetail/HospitalDetail');
});

Route::get('/business/doctor', function () {
    return Inertia::render('business/DoctorList/DoctorList');
});

Route::get('/business/doctor/add', function () {
    return Inertia::render('business/AddDoctor/AddDoctor');
});

Route::get('/business/doctor/detail/{id}', function () {
    return Inertia::render('business/DoctorDetail/DoctorDetail');
});

Route::get('/business/member/add', function () {
    return Inertia::render('business/AddTeamMember/AddTeamMember');
});

Route::get('/business/security-setting', function () {
    return Inertia::render('business/SecuritySetting/BusinessSecuritySetting');
});

Route::get('/business/membership', function () {
    return Inertia::render('business/CurrentMembership/CurrentMembership');
});

Route::get('/business/membership/list', function () {
    return Inertia::render('business/MembershipList/MembershipList');
});

// individual pages

Route::get('/individual/dashboard', function () {
    return Inertia::render('individual/Dashboard/IndividualDashboard');
});

Route::get('/individual/patient', function () {
    return Inertia::render('individual/PatientList/PatientList');
});

Route::get('/individual/patient/detail/{id}', function () {
    return Inertia::render('individual/PatientDetail/PatientDetail');
});

Route::get('/individual/share-link', function () {
    return Inertia::render('individual/ShareLink/ShareLink');
});

Route::get('/individual/security-setting', function () {
    return Inertia::render('individual/SecuritySetting/IndividualSecuritySetting');
});

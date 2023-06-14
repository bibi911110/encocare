<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// common pages

Route::get('/', function () {
    return Inertia::render('common/Home/Home');
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

// auth pages

require __DIR__ . '/auth.php';

// profile pages

Route::prefix('profile')->middleware('auth')->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('profile/Dashboard/Dashboard');
    })->name('profile.dashboard');

    Route::get('test-history', function () {
        return Inertia::render('profile/TestHistory/TestHistory');
    });

    Route::get('membership', function () {
        return Inertia::render('profile/Membership/Membership');
    });

    Route::get('membership/payment', function () {
        return Inertia::render('profile/Payment/Payment');
    });

    Route::get('membership/payment/success', function () {
        return Inertia::render('profile/PaymentSuccess/PaymentSuccess');
    });
});

// test pages
Route::prefix('test')->middleware('auth')->group(function () {
    Route::get('/agree', function () {
        return Inertia::render('test/TestAgree/TestAgree');
    });

    Route::get('/progress', function () {
        return Inertia::render('test/TestProgress/TestProgress');
    });
});

// admin pages

Route::prefix('admin')->middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('admin/Dashboard/AdminDashboard');
    });

    Route::get('/entity/add', function () {
        return Inertia::render('admin/AddEntity/AddEntity');
    });

    Route::get('/entity', function () {
        return Inertia::render('admin/EntityList/EntityList');
    });

    Route::get('/entity/{sortType}', function () {
        return Inertia::render('admin/EntityList/EntityList');
    });

    Route::get('/entity/detail/{id}', function () {
        return Inertia::render('admin/EntityDetail/EntityDetail');
    });

    Route::get('/entity/detail/{id}/test-result', function () {
        return Inertia::render('admin/EntityTestResult/EntityTestResult');
    });
});

// business pages

Route::prefix('business')->middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('business/Dashboard/BusinessDashboard');
    });

    Route::get('/hospital', function () {
        return Inertia::render('business/HospitalList/HospitalList');
    });

    Route::get('/hospital/add', function () {
        return Inertia::render('business/AddHospital/AddHospital');
    });

    Route::get('/hospital/detail/{id}', function () {
        return Inertia::render('business/HospitalDetail/HospitalDetail');
    });

    Route::get('/doctor', function () {
        return Inertia::render('business/DoctorList/DoctorList');
    });

    Route::get('/doctor/add', function () {
        return Inertia::render('business/AddDoctor/AddDoctor');
    });

    Route::get('/doctor/detail/{id}', function () {
        return Inertia::render('business/DoctorDetail/DoctorDetail');
    });

    Route::get('/member/add', function () {
        return Inertia::render('business/AddTeamMember/AddTeamMember');
    });

    Route::get('/security-setting', function () {
        return Inertia::render('business/SecuritySetting/BusinessSecuritySetting');
    });

    Route::get('/membership', function () {
        return Inertia::render('business/CurrentMembership/CurrentMembership');
    });

    Route::get('/membership/list', function () {
        return Inertia::render('business/MembershipList/MembershipList');
    });
});

// individual pages

Route::prefix('individual')->middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('individual/Dashboard/IndividualDashboard');
    });

    Route::get('/patient', function () {
        return Inertia::render('individual/PatientList/PatientList');
    });

    Route::get('/patient/detail/{id}', function () {
        return Inertia::render('individual/PatientDetail/PatientDetail');
    });

    Route::get('/share-link', function () {
        return Inertia::render('individual/ShareLink/ShareLink');
    });

    Route::get('/security-setting', function () {
        return Inertia::render('individual/SecuritySetting/IndividualSecuritySetting');
    });
});

// 404 page
Route::fallback(function () {
    return Inertia::render('common/NotFound/NotFound');
});

<?php

use App\Http\Controllers\Auth\LoginUserController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisterUserController;
use App\Http\Controllers\Auth\SocialUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('guest')->group(function () {
    Route::get('signup', [RegisterUserController::class, 'create'])
        ->name('signup');

    Route::post('signup', [RegisterUserController::class, 'store']);

    Route::get('login', [LoginUserController::class, 'create'])
        ->name('login');

    Route::post('login', [LoginUserController::class, 'store']);

    Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
        ->name('password.request');

    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
        ->name('password.email');

    Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
        ->name('password.reset');

    Route::post('reset-password', [NewPasswordController::class, 'store'])
        ->name('password.store');

    Route::get('/login/{provider}', [SocialUserController::class, 'redirect'])
        ->where('provider', '(google|facebook|twitter)')
        ->name('login.social');

    Route::get('/login/{provider}/callback', [LoginUserController::class, 'handleSocialProviderCallback'])
        ->where('provider', '(google|facebook|twitter)')
        ->name('login.social.callback');

    Route::get('/login-admin', function () {
        return Inertia::render('auth/AdminLogin/AdminLogin');
    });

    Route::get('/login-business', function () {
        return Inertia::render('auth/BusinessLogin/BusinessLogin');
    });

    Route::get('/login-individual', function () {
        return Inertia::render('auth/IndividualLogin/IndividualLogin');
    });

    Route::get('/signup-business', function () {
        return Inertia::render('auth/BusinessSignup/BusinessSignup');
    });
});

Route::middleware('auth')->group(function () {
    Route::get('verify-email', EmailVerificationPromptController::class)
        ->name('verification.notice');

    Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)
        ->middleware(['signed', 'throttle:6,1'])
        ->name('verification.verify');

    Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
        ->middleware('throttle:6,1')
        ->name('verification.send');

    Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
        ->name('password.confirm');

    Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

    Route::put('password', [PasswordController::class, 'update'])->name('password.update');

    Route::get('logout', [LoginUserController::class, 'destroy'])
        ->name('logout');
});

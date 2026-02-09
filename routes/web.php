<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ItemController;
use Illuminate\Support\Facades\Route;

Route::prefix('auth')->group(function () {
    Route::inertia('login', 'Auth/Login')->name('login');
    Route::inertia('register', 'Auth/Register')->name('register');

    Route::get('logout', [AuthController::class, 'logout'])->name('logout');
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
});

Route::inertia('/', 'Welcome')->name('welcome');

Route::middleware('auth')->group(function () {
    Route::get('dashboard', DashboardController::class)->name('dashboard');

    Route::prefix('items')->name('items.')->group(function () {
        Route::get('create', [ItemController::class, 'create'])->name('create');
        Route::post('create', [ItemController::class, 'store'])->name('store');

        Route::get('{item}', [ItemController::class, 'view'])->name('view');
    });
});

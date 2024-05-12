<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\LevelController;
use App\Http\Controllers\ScoreController;
use App\Http\Controllers\RoleController;

// No Auth Routes
Route::get('/', [DashboardController::class, 'index']);

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {

// Auth Routes
    Route::get('/dashboard',[DashboardController::class, 'dashboard'])->name('dashboard');
    Route::resource('/levels', LevelController::class);
    Route::resource('/scores', ScoreController::class);
    Route::resource('/roles', RoleController::class);

});

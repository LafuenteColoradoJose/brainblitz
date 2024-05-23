<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\PostController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/user/register', [RegisterController::class, 'registerUser']);
Route::post('/user/login', [LoginController::class, 'loginUser']);


// Route::middleware('auth:sanctum')->group(function () {
//     Route::get('/auth/logout', [LogoutController::class, 'logoutUser']);
//     Route::get('/users', [UserController::class, 'index']);
// });






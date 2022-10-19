<?php

use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\UserEditController;

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

Route::get('/', function () {
    return view('welcome');
});
Route::get('profile', function () {
    return view('profile');
});
Route::get('logout', function () {
    session()->forget('user');
    return redirect()->to('/login');
})->name('logout');

//get
Route::get('login', [LoginController::class, 'Index']);
Route::get('/registration', [RegistrationController::class, 'Index']);
Route::get('/edit', [UserEditController::class, 'Index'])->name('edit');

//post route
Route::post('registration', [RegistrationController::class, 'RegtisterUser'])->name('registration');
Route::post('login', [LoginController::class, 'authenticate'])->name('login');
Route::post('edit', [UserEditController::class, 'EditUser'])->name('edit');

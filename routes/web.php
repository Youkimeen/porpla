<?php

use Illuminate\Foundation\Application;
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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



Route::get('/app', function(){
    return Inertia::render('App');
});

Route::get('/dashboard', function (\App\Models\User $user) {
    return Inertia::render('Dashboard')->with(['posts' => Auth::user()->posts()->get()]);
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';

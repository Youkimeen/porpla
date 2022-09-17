<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\RegisterStep2Controller;

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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware('auth')->name('dashboard');

Route::get('/test', function() {
    return Inertia::render('Welcome');
})->name("test");


Route::middleware(['auth', 'verified'])->group(function () {

    Route::middleware('registration_completed')->group( function () {

    });

    Route::post('/register-step2', [RegisterStep2Controller::class, 'store'])->name('register-step2.store');
});
Route::get('/register-step2', [RegisterStep2Controller::class, 'create'])->name('register-step2.create');
Route::get('/home/index', function () {
    return inertia('Home/Index');
})->name("home.index");
Route::get('/home/person', function () {
    return inertia('Home/Person');
})->name("home.person");
Route::get('/home/timeline', function () {
    return inertia('Home/Timeline');
})->name("home.timeline");

require __DIR__.'/auth.php';

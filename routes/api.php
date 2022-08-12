<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(\App\Http\Controllers\ApiUserController::class)->group(function(){
    Route::get('all-users', 'get_all_users');
    Route::get('search-users/{query}', 'search');
});
Route::controller(\App\Http\Controllers\FormatController::class)->group(function(){
    Route::post('markdown', 'markdown')->middleware('throttle: 150');
    Route::post('markdown/store', 'store');
});

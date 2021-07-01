<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\HomeController::class, 'index']);

Route::post('put-url', [\App\Http\Controllers\HomeController::class, 'put']);

Route::get('another-url', [\App\Http\Controllers\HomeController::class, 'another']);

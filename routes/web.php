<?php

use App\Http\Controllers\AddressController;
use App\Http\Controllers\BudgetController;
use App\Http\Controllers\CityController;
use App\Http\Controllers\EntityController;
use App\Http\Controllers\NeighborhoodController;
use App\Http\Controllers\PriceListController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductTypeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StateController;
use App\Http\Controllers\StoreController;
use App\Http\Controllers\ZipCodeController;
use App\Models\Address;
use App\Models\Budget;
use App\Models\Entity;
use App\Models\Neighborhood;
use App\Models\PriceList;
use App\Models\Product;
use App\Models\ProductType;
use App\Models\Store;
use App\Models\ZipCode;
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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::resource('states', StateController::class)
    ->middleware(['auth', 'verified']);

Route::resource('cities', CityController::class)
    ->middleware(['auth', 'verified']);

Route::resource('neighborhoods', NeighborhoodController::class)
    ->middleware(['auth', 'verified']);

Route::resource('zip-codes', ZipCodeController::class)
    ->middleware(['auth', 'verified']);

    Route::get('/zip-codes/search', [ZipCodeController::class, 'search'])->middleware(['auth', 'verified'])->name('zip-codes.search');

Route::resource('entities', EntityController::class)
    ->middleware(['auth', 'verified']);

Route::resource('addresses', AddressController::class)
    ->middleware(['auth', 'verified']);


Route::resource('stores', StoreController::class)
    ->middleware(['auth', 'verified']);

Route::resource('product-types', ProductTypeController::class)
    ->middleware(['auth', 'verified']);

Route::resource('products', ProductController::class)
    ->middleware(['auth', 'verified']);

Route::resource('price-lists', PriceListController::class)
    ->middleware(['auth', 'verified']);

Route::resource('budgets', BudgetController::class)
    ->middleware(['auth', 'verified']);

require __DIR__ . '/auth.php';

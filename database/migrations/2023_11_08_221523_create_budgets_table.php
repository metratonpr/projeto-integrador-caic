<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('budgets', function (Blueprint $table) {
            $table->id();
            $table->string('number')->unique();
            $table->date('budget_date');
            $table->date('expiration_date');
            $table->date('delivery_date')->nullable();
            $table->decimal('shipping_value', 10, 2)->nullable();
            $table->foreignId('address_id')->constrained('addresses');
            $table->foreignId('budget_type_id')->constrained('budget_types');
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('budgets');
    }
};
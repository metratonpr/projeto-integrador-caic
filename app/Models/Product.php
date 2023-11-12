<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    use HasFactory;

    use HasFactory;

    protected $fillable = [
        'name', 'description', 'warranty',
        'warranty_time', 'product_type_id'
    ];

    public function productType()
    {
        return $this->belongsTo(ProductType::class, 'product_type_id');
    }

    public function priceList()
    {
        return $this->hasMany(PriceList::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
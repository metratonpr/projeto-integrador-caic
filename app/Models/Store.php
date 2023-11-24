<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Store extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'contact', 'email', 'phone', 'cnpj',
        'number', 'complement', 'zip_code_id'
    ];

    public function zip_code()
    {
        return $this->belongsTo(ZipCode::class, 'zip_code_id');
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

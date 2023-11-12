<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Address extends Model
{
    use HasFactory;

    protected $fillable = ['number', 'complement', 'zipcode_id', 'entity_id'];

    public function zipcode()
    {
        return $this->belongsTo(ZipCode::class, 'zipcode_id');
    }

    public function entity()
    {
        return $this->belongsTo(Entity::class, 'entity_id');
    }

    public function budgets()
    {
        return $this->hasMany(Budget::class);
    }

    public function stores()
    {
        return $this->hasMany(Store::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ZipCode extends Model
{
    use HasFactory;

    protected $fillable = ['zipcode', 'place', 'city_id', 'neighborhood_id'];

    public function city()
    {
        return   $this->belongsTo(City::class, 'city_id');
    }

    public function neighborhood()
    {
        return $this->belongsTo(Neighborhood::class, 'neighborhood_id');
    }

    public function addresses()
    {
        return $this->hasMany(Address::class);
    }


    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
